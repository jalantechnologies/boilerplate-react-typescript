import * as React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import {DIContext} from '@helpers';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const dependencies = React.useContext(DIContext);
  const {component: Component, ...rest} = props;
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

export default PrivateRoute;
