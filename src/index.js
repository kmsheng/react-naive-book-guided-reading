import React, {Component, createElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends Component {
  render() {
    return (
      createElement(
        'div',
        null,
        createElement(
          'h1',
          {className: 'title'},
          'React 小書'
        )
      )
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
