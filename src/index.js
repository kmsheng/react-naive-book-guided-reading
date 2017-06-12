import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import resolve from './resolve';

class Index extends Component {

  render () {
    return (
      <div>
        <h1>Page Index</h1>
      </div>
    );
  }
}

const ResolvedIndex = resolve(() => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
})(Index);

ReactDOM.render(<ResolvedIndex />, document.getElementById('root'));
