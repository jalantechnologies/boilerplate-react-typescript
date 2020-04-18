
import * as React from 'react';

import {DependencyInjector, AppProps} from '@hoc';

import {HomeProps} from './home.props';

import './home.styles.css';
type HomeComponentProps = HomeProps & AppProps;

const Hello = (props: HomeProps): JSX.Element => {
  return (
    <h3>
      {props.text}
    </h3>
  )
}

const HomeComponent = (props: HomeComponentProps): JSX.Element => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const {translation} = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);

    if (username && password) {
      props.authService.login();
      // redirect to users page
      props.history.push('/users');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void  => {
    switch (e.target.id) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  }

  return (
    <div>
      <Hello text={translation.t('HELLO_WORD')} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input type="text" onChange={handleChange} placeholder="username (any)" id="username" />
          {submitted && !username &&
            <div className="text-error">{translation.t('USERNAME_INVALID')}</div>
          }
        </div>
        <br />
        <div>
          <label htmlFor="password"></label>
          <input type="password" onChange={handleChange} placeholder="password (any)" id="password" />
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

export default DependencyInjector(HomeComponent);
