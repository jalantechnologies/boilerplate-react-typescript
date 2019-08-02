
import * as React from 'react';

import {AppProps, DependencyInjector} from '@helpers';

import {HomeProps} from './home.props';
import {HomeState} from './home.state';

import './home.styles.css';
type HomeComponentProps = HomeProps & AppProps;

const Hello = (props: HomeProps): JSX.Element => {
  return (
    <h3>
      {props.text}
    </h3>
  )
}

class HomeComponent extends React.Component<HomeComponentProps, HomeState> {
  constructor(props: HomeComponentProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    switch (e.target.id) {
      case 'username':
        this.setState({username: e.target.value});
        break;
      case 'password':
        this.setState({password: e.target.value});
        break;
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({submitted: true});

    const {username, password} = this.state;
    if (username && password) {
      this.props.authService.login();
      // redirect to users page
      this.props.history.push('/users');
    }
  }

  render(): React.ReactNode {
    const {username, password, submitted} = this.state;
    const {translation} = this.props;
    return (
      <div>
        <Hello text={translation.t('HELLO_WORD')} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input type="text" onChange={this.handleChange} placeholder="username (any)" id="username" />
            {submitted && !username &&
              <div className="text-error">{translation.t('USERNAME_INVALID')}</div>
            }
          </div>
          <br />
          <div>
            <label htmlFor="password"></label>
            <input type="password" onChange={this.handleChange} placeholder="password (any)" id="password" />
            {submitted && !password &&
              <div className="text-error">{translation.t('PASSWORD_INVALID')}</div>
            }
          </div>
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default DependencyInjector(HomeComponent);
