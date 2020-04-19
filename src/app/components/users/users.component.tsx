import * as React from 'react';
import {useAsyncEffect} from 'use-async-effect';

import {User} from '@models';

import {ComponentViewState, AppProps, DIContext} from '@helpers';
import {UserState} from './users.state';
import {UserProps} from './users.props';

import './users.styles.css';

type UserComponentProps = UserProps & AppProps;

const Users = (props: UserProps): JSX.Element => {
  const {users} = props.users;
  const usersList = users.map((el: User): JSX.Element => {
    return (
      <div key={el.id}>
        <p>{el.name}</p>
      </div>
    )
  })
  return (
    <div className="user-list">
      {usersList}
    </div>
  )
}

const UsersComponent = (props: UserComponentProps): JSX.Element => {
  const dependencies = React.useContext(DIContext);

  const {translation, authService, userService} = dependencies;
  const [state, setComponentState] = React.useState<UserState>({
    componentState: ComponentViewState.DEFAULT
  });

  const {componentState, users, error} = state;
  const isLoaded = componentState === ComponentViewState.LOADED;
  const isLoading = componentState === ComponentViewState.LOADING;
  const isError = componentState === ComponentViewState.ERROR;

  const logout = (): void => {
    authService.logout();
    // redirect to login page
    props.history.push('/');
  }

  const fetchUsers = async(): Promise<void> => {
    setComponentState({componentState: ComponentViewState.LOADING});
    const response = await userService.getUsers();
    if (response.hasData()
      && response.data) {
      setComponentState({
        componentState: ComponentViewState.LOADED,
        users: response.data,
      });
    } else {
      const msg = response.error || translation.t('no_internet');
      setComponentState({
        componentState: ComponentViewState.ERROR,
        error: msg,
      });
    }
  }

  useAsyncEffect(async (): Promise<void> => {
    await fetchUsers();
  }, []);

  return (
    <div>
      <h3>
        {translation.t('LABLE_USERS')}
      </h3>
      <button onClick={logout}>Logout</button>
      <br/><br/>
      {
        isLoading && <span>{translation.t('LABEL_LOADING_USERS')}</span>
      }
      {
        isLoaded && users &&
        <Users users={users}/>
      }
      {
        isError &&
        <div> {error} </div>
      }
    </div>
  );
}

export default UsersComponent;
