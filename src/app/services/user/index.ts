
import {APIService, ServiceResponse} from '../api';

import {Users} from '@models';
import {UserServiceType} from './types';

export default class UserService extends APIService implements UserServiceType {
  static readonly RESOURCE = '/users';

  async getUsers(): Promise<ServiceResponse<Users>> {
    try {
      const response = await this.get(UserService.RESOURCE);
      const users = new Users(response.data)
      return new ServiceResponse<Users>(users);
    } catch (e) {
      return new ServiceResponse<Users>(undefined, APIService.parseError(e));
    }
  }
}
