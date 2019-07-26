import * as React from 'react';
import {shallow} from 'enzyme';
import i18next from 'i18next';

import HomeComponent from './index';
import {AppNavigationScreenProps, i18n} from '../../helpers';
import {UserServiceType, UserService} from '../../services';

describe('HomeComponent', (): void => {
  let userService: UserServiceType;
  let translation: i18next.i18n;

  userService = new UserService();
  translation = i18n;

  const dependecies: AppNavigationScreenProps = {
    userService,
    translation,
  };

  it('should display HELLO_WORD', (): void => {
    const component = shallow(<HomeComponent {...dependecies} />).dive();
    console.log(component.props())
    // verify it has HELLO WORLD
    // HELLO_WORLD is not translated as we have mocked the i18n library
    expect(component.find('h3').text()).toEqual('HELLO_WORD');
    expect(shallow).toMatchSnapshot();
  });
});
