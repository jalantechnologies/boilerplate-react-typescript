import {AxiosInstance, AxiosResponse} from 'axios';

export interface APIServiceType {
  service: AxiosInstance;
  get(path: string): Promise<AxiosResponse>;
  patch(path: string, payload: any): Promise<AxiosResponse>;
  put(path: string, payload: any): Promise<AxiosResponse>;
  post(path: string, payload: any): Promise<AxiosResponse>;
  delete(path: string, payload: any): Promise<AxiosResponse>;
}
