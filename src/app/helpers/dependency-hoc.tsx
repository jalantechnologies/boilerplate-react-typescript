import * as React from 'react';
import i18next from 'i18next';

import {UserService, UserServiceType} from '@services';
import {AppDependenciesProps, i18n} from '@helpers';

const DependencyInjector = <P extends AppDependenciesProps>(
  Component: React.ComponentType<P>
): typeof React.Component =>
  class MakeCounter extends React.Component<P, AppDependenciesProps> {
    userService: UserServiceType;
    translation: i18next.i18n;

    constructor(props: any) {
      super(props);
      this.translation = i18n;
      this.userService = new UserService();
    }

    getDependencies(): AppDependenciesProps {
      const {userService, translation} = this;
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
