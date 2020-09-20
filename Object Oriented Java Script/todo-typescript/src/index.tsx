import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string; // ? because if we donot want to pass color pops in <App>, it make it optional
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncreament = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecreament = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      // <div>Hi there {this.props.color}</div>
      <div>
        <button onClick={this.onIncreament}>Increament</button>
        <button onClick={this.onDecreament}>Decreament</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
