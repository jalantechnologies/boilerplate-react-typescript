
import {UserServiceType} from '@services';
import i18next from 'i18next';

export default interface AppNavigationScreenProps {
  userService: UserServiceType;
  translation: i18next.i18n;
}
