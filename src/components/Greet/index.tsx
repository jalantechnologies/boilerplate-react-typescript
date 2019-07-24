
import * as React from 'react';

interface Props {
  name: string;
}

class Greet extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <h3>
        Hello {this.props.name}
      </h3>
    );
  }
}

export default Greet;
