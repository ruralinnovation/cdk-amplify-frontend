import { CognitoIdToken } from 'amazon-cognito-identity-js';
import { Auth, Hub } from 'aws-amplify';
import { Logger } from 'aws-amplify';
const logger = new Logger('AmplifyService');

export interface IClaims {
  username: string;
  email: string;
  groups: string[];
}
/**
 * Provides helpers for working with Amplify
 */
export default abstract class AmplifyService {
  public static async sdkCredentials(): Promise<any> {
    try {
      const credentials = await Auth.currentUserCredentials();
      return Auth.essentialCredentials(credentials);
    } catch (error) {
      logger.error('unable to get sdk creds', error);
      throw error;
    }
  }

  public static async isAuthenticated(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
    } catch (error) {
      logger.error('isAuthenticated()', error);
      return false;
    }
  }

  public static async getUserId(): Promise<string> {
    const user = (await Auth.currentSession()).getIdToken().decodePayload();

    let email = null;
    if (user.identities && user.identities.length > 0) {
      // Federated Auth
      email = user.identities[0].userId;
    } else {
      // User Pool Auth
      email = user.email;
    }

    return email;
  }

  /**
   * Initiates federated sign-in. When custom provider is passed in, will redirect to IDP without showing hosted ui.
   * @param customProvider Cognito Identity Provider Id
   */
  public static federatedLogin(customProvider?: string) {
    if (customProvider) {
      Auth.federatedSignIn({
        customProvider,
      });
    } else {
      Auth.federatedSignIn();
    }
  }

  public static async getAccessJwtToken(): Promise<string> {
    const session = Auth.currentSession();
    const accessToken = (await session).getAccessToken();
    const jwtToken = accessToken.getJwtToken();
    return jwtToken;
  }

  public static async getIdToken(): Promise<CognitoIdToken> {
    try {
      const session = await Auth.currentSession();
      const idToken = session.getIdToken();
      return idToken;
    } catch (error) {
      logger.error('unable to get id token', error);
      throw error;
    }
  }

  public static async getClaims(): Promise<IClaims | null> {
    try {
      const session = await Auth.currentSession();
      const idToken = session.getIdToken();
      const payload = idToken.decodePayload();
      return {
        username: payload['cognito:username'],
        email: payload.email,
        groups: payload['cognito:groups'] ? payload['cognito:groups'] : [],
      };
    } catch (error) {
      console.log('claims error');
      console.log(error);
      return null;
    }
  }

  public static async setHubListener(updateAuthUser?: any): Promise<void> {
    console.log("Set Hub listener called with current updateAuthUser:", JSON.stringify(updateAuthUser));

    try {
      Hub.listen('auth', ({ payload: { event, data } }) => {

        console.log("Call Hub listener called with event:", event);

        switch (event) {
          case 'signIn':
            this.getClaims()
              .then(claims => {
                if (!claims) {
                  console.log('not auth');
                  // AmplifyService.federatedLogin();
                } else {
                  updateAuthUser({
                    username: claims.username,
                    userType: 'user',
                    groups: claims.groups,
                    email: claims.email,
                  });
                }
              })
              .catch(err => {
                console.log(err);
                //window.location.replace(`${window.location.origin}/error-pages/error-500`);
              });
            break;
          case 'signOut':
            console.log('sign out');

            break;
        }
      });
    } catch (err: any) {
      logger.error(err.toString());
    }
  }
}
