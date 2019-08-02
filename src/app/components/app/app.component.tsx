
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {UsersComponent, HomeComponent} from '@components';
import {PrivateRoute} from '@helpers';

import './app.styles.css';

class App extends React.Component {
  render(): React.ReactNode {
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
              <Route exact path="/" component={HomeComponent} />
              <PrivateRoute exact path="/users" component={UsersComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
