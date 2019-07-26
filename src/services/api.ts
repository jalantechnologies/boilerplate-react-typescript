import axios, {AxiosInstance, AxiosResponse} from 'axios';

import Config from '@config';

class APIService {
  service: AxiosInstance
  constructor() {
    this.service = axios.create({
      baseURL: Config.apiEndpoint,
    });
  }
  

  async get(path: string): Promise<AxiosResponse> {
    return await this.service.get(path);
    //return api;
  }

  async patch(path: string, payload: object): Promise<AxiosResponse> {
    const api = await this.service.patch(path, payload);
    return api;
  }

  async put(path: string, payload: object): Promise<AxiosResponse> {
    const api = await this.service.put(path, payload);
    return api;
  }

  async post(path: string, payload: object): Promise<AxiosResponse> {
    const api = await this.service.post(path, payload);
    return api;
  }

  async delete(path: string, payload: object): Promise<AxiosResponse> {
    const api = await this.service.delete(path, payload);
    return api;
  }
}

export default new APIService;
