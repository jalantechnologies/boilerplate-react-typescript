
import {APIServiceImpl} from '../api';

import {AuthService} from './auth.service';

export default class AuthServiceImpl extends APIServiceImpl implements AuthService {
  static readonly RESOURCE = '/users';

  login(): void {
    localStorage.setItem('login', 'true');
  }

  logout(): void {
    localStorage.removeItem('login');
  }

  isLoggedIn(): boolean {
    // will return true if login key has value 'true'
    return localStorage.getItem('login') === 'true';
  }
}
