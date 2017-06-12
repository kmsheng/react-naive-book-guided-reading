import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Index extends Component {

  componentDidMount() {
    this.refs.myInput.focus();
  }

  render() {
    return (
      <input ref="myInput" type="text" />
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
