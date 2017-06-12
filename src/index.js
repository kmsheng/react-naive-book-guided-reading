import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

class Index extends Component {

  render() {
    return (
      <div>
        <Breadcrumb>
          <a href="">資料夾列表</a>
          <span>神秘的資料夾</span>
        </Breadcrumb>
      </div>
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
