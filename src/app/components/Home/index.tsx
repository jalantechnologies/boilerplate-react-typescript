
import * as React from 'react';

import {AppNavigationScreenProps} from '@helpers';
const Hello = (props: {text: string}): JSX.Element => {
  return (
    <h3>
      {props.text}
    </h3>
  )
}

class HomeComponent extends React.Component<AppNavigationScreenProps> {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Hello text={this.props.translation.t('HELLO_WORD')}/>
    );
  }
}

export default HomeComponent;
