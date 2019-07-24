
import * as React from 'react';

import Greet from '@components/Greet';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="center-wrap">
        <img className="logo" src={require('@assets/images/logo.png')} alt=""/>
        <Greet name={'World'}/>
      </div>
    );
  }
}

export default App;
