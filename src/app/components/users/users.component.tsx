import * as React from 'react';

import {User} from '@models';
import {AppProps, DependencyInjector} from '@helpers';

import {ComponentViewState} from '@helpers';
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

class UsersComponent extends React.Component<UserComponentProps, UserState>{
  constructor(props: UserComponentProps) {
    super(props);
    this.state = {
      componentState: ComponentViewState.DEFAULT,
    }
    this.fetchUsers = this.fetchUsers.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(): void {
    this.props.authService.logout();
    // redirect to login page
    this.props.history.push('/');
  }

  async fetchUsers(): Promise<void> {
    this.setState({
      componentState: ComponentViewState.LOADING,
    });
    const response = await this.props.userService.getUsers();
    if (response.hasData()
      && response.data) {
      this.setState({
        componentState: ComponentViewState.LOADED,
        users: response.data,
      });
    } else {
      //const msg = response.error || this.translate('no_internet');
      this.setState({
        componentState: ComponentViewState.ERROR,
        error: response.error,
      });
    }
  }
  async componentDidMount(): Promise<void> {
    this.fetchUsers();
  }

  render(): React.ReactNode {
    const {componentState, users, error} = this.state;
    const {translation} = this.props;

    const isLoaded = componentState === ComponentViewState.LOADED;
    const isLoading = componentState === ComponentViewState.LOADING;
    const isError = componentState === ComponentViewState.ERROR;

    return (
      <div>
        <h3>
          {translation.t('LABLE_USERS')}
        </h3>
        <button onClick={this.logout}>Logout</button>
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
}

export default DependencyInjector(UsersComponent);
