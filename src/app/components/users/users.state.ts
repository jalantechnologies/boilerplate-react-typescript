import {Users} from '@models';
import {ComponentState} from '@helpers';

export interface UserState extends ComponentState {
  users?: Users;
}
