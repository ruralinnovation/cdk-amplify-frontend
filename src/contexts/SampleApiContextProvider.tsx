// import {
//   ApolloClient,
//   ApolloLink,
//   ApolloProvider,
//   concat,
//   HttpLink,
//   InMemoryCache,
//   NormalizedCacheObject,
// } from '@apollo/client';
// import { Auth, Logger } from 'aws-amplify';
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import AmplifyService from '../services/AmplifyService';
// import ConfigurationService from '../services/ConfigurationService';
// import AppContext, { AppContextPropsType } from './AppContext';

// export interface IApiContext {
//   bcatApi: any;
// }

// export const ApiContext = createContext<IApiContext>(null as any);

// function ApiContextProvider(props: { children: any }) {
//   const config: ConfigurationService = new ConfigurationService();

//   const initializeConfig = useCallback(async () => {
//     if (config.loaded) return;
//     await config.load();
//     setConfig(config);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     initializeConfig();
//   }, [initializeConfig]);

//   const [state, dispatch] = useReducer(contextReducer, buildContextState());

//   const setConfig = (config: ConfigurationService) => {
//     dispatch({
//       type: ACTIONS.SET_DEFAULT_GLOBAL_CONFIG,
//       payload: config,
//     });
//   };
//   const updateAuthUser = useCallback((user: AuthUser) => {
//     dispatch({ type: ACTIONS.UPDATE_AUTH_USER, payload: user });
//   }, []);
//   const { config, user, updateAuthUser } = useContext<AppContextPropsType>(AppContext);
//   const [ready, setReady] = useState<boolean>(false);
//   const [apolloClient, setApolloClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

//   useEffect(() => {
//     if (user) {
//       createApolloClient();
//     }
//   }, [user]);
//   const [state, setState] = useState<IApiContext>(null as any);

//   useEffect(() => {
//     if (config) {
//       const useAuth = config.environment !== 'local';
//       setState({
//         bcatApi: () => null,
//       });
//       if (!config.cognito || !config.loaded) return;

//       AmplifyService.setHubListener(updateAuthUser);

//       AmplifyService.isAuthenticated()
//         .then(bool => {
//           console.log('Authenticationed ', bool);
//           if (bool) {
//             AmplifyService.getClaims()
//               .then(claims => {
//                 if (!claims) {
//                   console.log('not auth');
//                   AmplifyService.federatedLogin();
//                 } else {
//                   updateAuthUser({
//                     username: claims.username,
//                     userType: 'admin',
//                     groups: claims.groups,
//                     email: claims.email,
//                   });
//                 }
//               })
//               .catch(err => {
//                 console.log(err);
//                 updateAuthUser(null);
//               });
//           } else {
//             AmplifyService.federatedLogin('');
//           }
//         })
//         .catch(err => {
//           console.log('ERROR', err);
//         });
//     }
//   }, [config, updateAuthUser]);

//   const createApolloClient = async () => {
//     const token = (await Auth.currentSession()).getIdToken().getJwtToken();
//     const link = new HttpLink({
//       uri: `${config.apiUrl}/graphql`,
//     });
//     const authMiddleware = new ApolloLink((operation, forward) => {
//       operation.setContext({
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       });
//       return forward(operation);
//     });
//     const client = new ApolloClient({
//       link: concat(authMiddleware, link),
//       cache: new InMemoryCache({
//         dataIdFromObject: o => (o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`),
//       }),
//       credentials: 'include',
//     });

//     setApolloClient(client);
//     setReady(true);
//   };

//   return (
//     <ApiContext.Provider value={state}>
//       {user && state && ready && apolloClient ? (
//         <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
//       ) : (
//         <div>LOADING</div>
//       )}
//     </ApiContext.Provider>
//   );
// }

// export default ApiContextProvider;
// function useCallback(arg0: () => Promise<void>, arg1: never[]) {
//   throw new Error('Function not implemented.');
// }

export default {};
