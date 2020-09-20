import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color?: string; // ? because if we donot want to pass color pops in <App>, it make it optional
// }

// // interface AppState {
// //   counter: number;
// // }
// class App extends React.Component<AppProps> {
//   //class App extends React.Component<AppProps, AppState> {
//   state = { counter: 0 };

//   // constructor(props: AppProps) {
//   //   super(props);
//   //   this.state = { counter: 0 };
//   // }
//   onIncreament = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecreament = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       // <div>Hi there {this.props.color}</div>
//       <div>
//         <button onClick={this.onIncreament}>Increament</button>
//         <button onClick={this.onDecreament}>Decreament</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// const App = (props: AppProps): JSX.Element => {
//   return <div>hello</div>;
// };

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
);
