import {User} from './user.model';
import * as _ from 'lodash';

export class Users {
  readonly users: User[] = [];
  constructor(data: User[]) {
    this.users = [];
    _.forEach(data, (item): void => {
      this.users.push(new User(item));
    });
  }
}
