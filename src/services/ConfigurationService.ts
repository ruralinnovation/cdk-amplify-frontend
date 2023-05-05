import { Auth, Logger } from 'aws-amplify';

interface ICognitoConfig {
  domain: string;
  clientId: string;
  identityPoolId: string;
  userPoolId: string;
  hostedAuthenticationUrl: string;
  logoutUrl: string;
}

export default class ConfigurationService {
  private logger: Logger;
  loaded = false;

  // These properties are assigned from config.json
  environment: string = '';
  region: string = '';
  apiUrl: string = '';
  cognito: ICognitoConfig = {
    userPoolId: '',
    clientId: '',
    identityPoolId: '',
    domain: '',
    hostedAuthenticationUrl: '',
    logoutUrl: '',
  };
  version: string = '';

  constructor() {
    this.logger = new Logger('ConfigurationService');
  }

  public async load() {
    const response = await fetch('/config.json');
    const cfg = await response.json();
    Object.assign(this, cfg);
    console.log('Config Loaded');
    this.configureAmplify();
    this.loaded = true;
  }

  get loginUrl(): string {
    return window.location.origin;
  }

  isLocal(): boolean {
    return this.environment === 'local';
  }
  isDev(): boolean {
    return this.environment === 'dev';
  }

  private configureAmplify(): void {
    Logger.LOG_LEVEL = this.isLocal() || this.isDev() ? 'DEBUG' : 'INFO';
    const options = {
      Analytics: {
        disabled: true,
      },
      Auth: {
        region: this.region,
        identityPoolId: this.cognito.identityPoolId,
        userPoolId: this.cognito.userPoolId,
        userPoolWebClientId: this.cognito.clientId,
        oauth: {
          domain: this.cognito.domain,
          mandatorySignIn: true,
          redirectSignIn: this.loginUrl,
          redirectSignOut: this.cognito.logoutUrl ? this.cognito.logoutUrl : this.loginUrl + '/logout/',
          responseType: 'code',
          // scope: ['email']
          // scope: ['openid']
          scope: ['email', 'openid']
          // scope: ['email', 'openid', 'profile']
        },
      },
    };

    Auth.configure(options);
  }
}
