
import {UserService} from '@services';
import i18next from 'i18next';

export default interface AppDependenciesProps {
  userService: UserService;
  translation: i18next.i18n;
}
