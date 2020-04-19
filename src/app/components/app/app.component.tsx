
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {UsersComponent, HomeComponent} from '@components';
import {PrivateRoute} from '@hoc';
import {DIContext, getDependencies} from '@helpers';

import './app.styles.css';

const App = (): JSX.Element => {
  return (
    <DIContext.Provider value={getDependencies()}>
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
    </DIContext.Provider>
  );
}

export default App;
