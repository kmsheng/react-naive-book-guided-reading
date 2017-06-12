import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Index extends Component {

  constructor(props) {
    super(props);
    this.input = null;
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <input ref={(input) => this.input = input} type="text" />
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
