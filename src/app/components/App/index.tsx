
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import i18next from 'i18next';

import {UsersComponent, HomeComponent} from '@components';
import {UserService, UserServiceType} from '@services';
import {AppNavigationScreenProps, i18n} from '@helpers';

class App extends React.Component {
  userService: UserServiceType;
  translation: i18next.i18n;

  constructor(props: any) {
    super(props);
    this.translation = i18n;
    this.userService = new UserService();
  }

  getDependencies(): AppNavigationScreenProps {
    const {userService, translation} = this;
    return {
      userService,
      translation,
    };
  }

  render(): React.ReactNode {
    const dependencies = this.getDependencies();
    return (
      <div className="center-wrap">
        <Router>
          <div>
            <nav>
              <img className="logo" src={require('@assets/images/logo.png')} alt="" />
              <ul id="menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" render={(props): React.ReactNode => <HomeComponent {...props} {...dependencies} />} />
              <Route exact path="/users" render={(props): React.ReactNode => <UsersComponent {...props} {...dependencies} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
