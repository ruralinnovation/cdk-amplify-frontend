import { Logger } from 'aws-amplify';
import { Auth } from 'aws-amplify';

const logger = new Logger('ApiClientBase');
interface MfRequestInit extends RequestInit {
  timeout?: number;
}
async function fetchWithTimeout(resource: any, options: MfRequestInit = {}) {
  if (options.timeout) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), options.timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } else {
    return await fetch(resource, options);
  }
}
/**
 * Common abstractions used by the concrete classes
 */
export class ApiClientBase {
  constructor(protected apiUrl: string, protected logger: Logger, private useAuth: boolean) {}

  protected async get(endpoint: string, timeout?: number): Promise<Response> {
    return await this.request(endpoint, 'GET', null, timeout);
  }

  protected async post(endpoint: string, body?: any, timeout?: number): Promise<Response> {
    return await this.request(endpoint, 'POST', body, timeout);
  }

  protected async put(endpoint: string, body?: any, timeout?: number): Promise<Response> {
    return await this.request(endpoint, 'PUT', body, timeout);
  }

  protected async delete(endpoint: string, timeout?: number): Promise<Response> {
    return await this.request(endpoint, 'DELETE', timeout);
  }

  private async request(endpoint: string, method: string, body?: any, timeout?: number): Promise<Response> {
    const params: MfRequestInit = {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Accept-Encoding': 'gzip, deflate',
        //'accept': 'application/json;charset=utf-8,*/*',
        'Authorization': this.useAuth
          ? `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
          : undefined,
      } as any,
    };

    if (timeout) {
      params.timeout = timeout;
    }
    let url = this.apiUrl + endpoint;
    url = encodeURI(url);
    const result = await fetchWithTimeout(url, params);
    if (result.status < 200 || result.status > 299) {
      const response = { status: result.status, body: await result.text() };
      this.logger.error(`${method} ${endpoint} request failed`, response);

      if (response.status === 400) {
        const errors = JSON.parse(response.body);
        const message =
          errors.message ||
          Object.keys(errors)
            .map(key => `${errors[key].join(', ')}`)
            .join('; ');
        throw new Error(message);
      } else {
        console.log(`${response.status}: ${JSON.stringify(response.body)}`);
        throw JSON.parse(response.body).message;
      }
    }
    return result;
  }
}
