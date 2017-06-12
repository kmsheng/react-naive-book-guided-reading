import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class Title extends Component {

  static contextTypes = {
    color: PropTypes.string
  };

  render () {
    const {color} = this.context;
    return (
      <h1 style={{border: `1px solid ${color}`}}>React 小书</h1>
    );
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    );
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    );
  }
}

class Footer extends Component {
  render () {
    return (
      <div>
        <h2>This is footer</h2>
      </div>
    );
  }
}

class Index extends Component {

  static childContextTypes = {
    color: PropTypes.string
  };

  getChildContext() {
    return {color: 'pink'};
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
