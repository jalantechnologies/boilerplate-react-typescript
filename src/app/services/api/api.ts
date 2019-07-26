import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import * as _ from 'lodash';

import Config from '@config';
import {APIServiceType} from './types';

export class APIService implements APIServiceType {
  service: AxiosInstance
  constructor() {
    this.service = axios.create({
      baseURL: Config.apiEndpoint,
    });

    this.service.interceptors.request.use((request): AxiosRequestConfig => {
      // can modify request here ex- send auth token
      return request;
    });

    this.service.interceptors.response.use(
      (response): AxiosResponse => {
        // handle response
        return response;
      },
      (error): Promise<AxiosError> => {
        // ex- logout user if statusCode is 401
        return Promise.reject(error);
      },
    );
  }

  protected static parseError(response: AxiosResponse): string {
    return _.get(response, 'response.data.error', '');
  }

  async get(path: string): Promise<AxiosResponse> {
    return await this.service.get(path);
  }

  async patch(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.patch(path, payload);
  }

  async put(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.put(path, payload);
  }

  async post(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.post(path, payload);
  }

  async delete(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.delete(path, payload);
  }
}
