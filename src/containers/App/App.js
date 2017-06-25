import React, {Component} from 'react';
import Counter from './../../components/Counter/Counter';

export default class App extends Component {

  add = () => {};

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Counter add={this.add} value={0} />
      </div>
    );
  }
}
