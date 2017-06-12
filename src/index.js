import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Index extends Component {

  constructor(props) {
    // https://facebook.github.io/react/docs/react-component.html#constructor
    // react/src/isomorphic/modern/class/ReactBaseClasses.js
    super(props);
    this.state = {
      message: ''
    };
  }

  handleButtonClick = () => this.setState({message: 'you clicked me !'});

  render() {
    const {message} = this.state;
    return (
      <div>
        <span>{message}</span>
        <button onClick={this.handleButtonClick}>click me</button>
      </div>
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
