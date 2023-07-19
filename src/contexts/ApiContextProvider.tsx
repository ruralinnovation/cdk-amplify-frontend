import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { Auth } from 'aws-amplify';
import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react';
import AppContext, { AppContextPropsType } from './AppContext';
import AmplifyService from '../services/AmplifyService';
import ControlPanel from '../components/ControlPanel';

export interface IApiContext { bcatApi: any; }
export const ApiContext = createContext<IApiContext>(null as any);

function ApiContextProvider(props: { children: any }) {
  const { config, user, updateAuthUser } = useContext<AppContextPropsType>(AppContext);
  const [ ready, setReady ] = useState<boolean>(false);
  const [ state, setState ] = useState<IApiContext>(null as any);
  const [ apolloClient, setApolloClient ] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

  const createApolloClient = async (authenticated: boolean) => {
    Auth.currentSession()
      .then(authSession => {
        const token = authSession.getIdToken().getJwtToken();

        const link = new HttpLink({
          uri: `${config.apiUrl}/graphql`,
        });
        const authMiddleware = new ApolloLink((operation, forward) => {
          operation.setContext({
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          return forward(operation);
        });
        const client = new ApolloClient({
          link: concat(authMiddleware, link),
          cache: new InMemoryCache({
            dataIdFromObject: o => (o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`),
          }),
          credentials: 'include',
        });

        setApolloClient(client);
        setReady(true);
      })
      .catch(err => {
        console.log("Error creating ApolloClient: ", err);
      });
  };

  useEffect(() => {
    if (user) {
      createApolloClient(true)
        .then(c => console.log('Apollo Client created'));
    }
  }, [user]);

  useEffect(() => {
    if (config) {
      const useAuth = config.environment !== 'local';
      setState({
        bcatApi: () => null,
      });
      if (!config.cognito || !config.loaded) return;

      AmplifyService.setHubListener(updateAuthUser);

      AmplifyService.isAuthenticated()
        .then(bool => {
          console.log('Authenticationed ', bool);

          createApolloClient(bool)
            .then(c => console.log('Apollo Client created'));

          if (bool) {
            AmplifyService.getClaims()
              .then(claims => {
                if (!claims) {
                  console.log('not auth');
                  AmplifyService.federatedLogin();
                } else {
                  updateAuthUser({
                    username: claims.username,
                    userType: 'admin',
                    groups: claims.groups,
                    email: claims.email,
                  });
                }
              })
              .catch(err => {
                console.log(err);
                updateAuthUser(null);
              });
          } else {
            // AmplifyService.federatedLogin('');
            updateAuthUser({
              username: "",
              userType: "",
              groups: [],
              email: "",
            });
          }
        })
        .catch(err => {
          console.log('ERROR', err);
        });
    }
  }, [config, updateAuthUser]);

  const getAuthStatus = (state: any) => {
    const serialized_state = JSON.stringify(state);
    setTimeout(() => console.log("getAuthStatus:", serialized_state));
    return serialized_state;
  };

  const getUserName = (user: any) => {
    const serialized_user = JSON.stringify(user);
    setTimeout(() => console.log("getUserName:", serialized_user));
    return serialized_user;
  };

  return (
    <AmplifyProvider>
      <ApiContext.Provider value={state}>
        {/*<Authenticator hide={[ SignIn ]} amplifyConfig={aws_config}>*/}
        <Authenticator>
          {({ signOut, user }) => (
            (user && state && ready && apolloClient) ? (
              <main>
                <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>

                <ControlPanel signOut={signOut} user={user} />
              </main>

            ) : (
              <main>LOADING</main>
            )
          )}
        </Authenticator>
      </ApiContext.Provider>
    </AmplifyProvider>
  );
}

export default ApiContextProvider;
