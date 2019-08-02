import * as React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {AppProps, DependencyInjector} from '@helpers';

interface PrivateRouteProps extends AppProps {
  component: typeof React.Component;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {component: Component, dependencies, ...rest} = props;
  const isLoggedIn = dependencies.authService.isLoggedIn();
  return (
    <Route
      {...rest}
      render={
        (routeProps): JSX.Element => {
          return isLoggedIn ? <Component {...routeProps} /> : <Redirect to="/" />
        }
      }
    />
  );
};

export default DependencyInjector(PrivateRoute);
