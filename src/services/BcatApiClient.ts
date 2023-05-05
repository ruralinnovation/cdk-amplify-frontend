import { ApiClientBase } from './ApiClientBase';
import { Logger } from 'aws-amplify';

export interface IBcatApi {}
export class BcatApiClient extends ApiClientBase implements IBcatApi {
  constructor(apiUrl: string, useAuth: boolean) {
    super(apiUrl, new Logger('BcatApiClient'), useAuth);
  }
}
