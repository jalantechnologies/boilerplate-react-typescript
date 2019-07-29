import * as React from 'react';
import i18next from 'i18next';

import {UserServiceImpl, UserService} from '@services';
import {AppDependenciesProps, i18n} from '@helpers';

// init dependencies
const userService: UserService = new UserServiceImpl();
const translation: i18next.i18n = i18n;

const DependencyInjector = <P extends AppDependenciesProps>(
  Component: React.ComponentType<P>
): typeof React.Component =>
  class Injector extends React.Component<P, AppDependenciesProps> {
    constructor(props: any) {
      super(props);
    }

    getDependencies(): AppDependenciesProps {
      return {
        userService,
        translation,
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
