import { Auth, Logger } from 'aws-amplify';
import AmplifyService from '../services/AmplifyService';

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
  Auth: any = {};
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
    this.configureAmplify();
    const response = await fetch('/config.json');
    const cfg = await response.json();
    console.log('Config fetched:', cfg);
    Object.assign(this, cfg);
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

    const cfg = AmplifyService.configure();

    console.log('Config init:', cfg);

    for (const c in this.cognito) {
      if (cfg.Auth.hasOwnProperty(c)) {
        (<any> this.cognito)[c] = (<any> cfg).Auth[c];
      }
    }

    this.region = (<any> cfg).aws_project_region;

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
