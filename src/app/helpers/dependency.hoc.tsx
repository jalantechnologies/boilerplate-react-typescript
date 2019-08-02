import * as React from 'react';
import i18next from 'i18next';

import {UserServiceImpl, UserService, AuthService, AuthServiceImpl} from '@services';
import {AppDependenciesProps, AppProps, i18n} from '@helpers';

// init dependencies
const userService: UserService = new UserServiceImpl();
const authService: AuthService = new AuthServiceImpl();
const translation: i18next.i18n = i18n;

const DependencyInjector = <P extends AppProps>(
  Component: React.ComponentType<P>
): typeof React.Component =>
  class Injector extends React.Component<P, AppProps> {
    constructor(props: any) {
      super(props);
    }

    getDependencies(): AppDependenciesProps {
      return {
        userService,
        translation,
        authService,
      };
    }
    render(): React.ReactNode {
      // injecting dependencies in components from here
      const dependencies = this.getDependencies();
      return (
        <Component {...this.props} {...dependencies} />
      );
    }
  };

export default DependencyInjector;
