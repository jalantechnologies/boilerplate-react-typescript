
import * as React from 'react';

import {AppDependenciesProps, DependencyInjector} from '@helpers';

import {HomeProps} from './home.props';

type HomeComponentProps = HomeProps & AppDependenciesProps;

const Hello = (props: HomeProps): JSX.Element => {
  return (
    <h3>
      {props.text}
    </h3>
  )
}

class HomeComponent extends React.Component<HomeComponentProps> {
  constructor(props: HomeComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Hello text={this.props.translation.t('HELLO_WORD')}/>
    );
  }
}

export default DependencyInjector(HomeComponent);
