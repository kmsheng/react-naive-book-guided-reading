import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class LikeButton extends Component {

  static propTypes = {
    thumbUpCount: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentDidMount', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleButtonClick = () => this.setState((prevState) => ({isLiked: ! prevState.isLiked}));

  render() {
    const {thumbUpCount} = this.props;
    const {isLiked} = this.state;
    return (
      <button className="like-btn" onClick={this.handleButtonClick}>
        <span className="like-text">{isLiked ? '取消' : '點讚'}</span>
        <span>{'👍'.repeat(thumbUpCount)}</span>
      </button>
    );
  }
}

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thumbUpCount: 1,
      showContent: true
    };
  }

  handleIncreaseThumbUpButtonClick = () => this.setState(({thumbUpCount}) => ({thumbUpCount: thumbUpCount + 1}));

  toggleContent = () => this.setState(({showContent}) => ({showContent: ! showContent}));

  render() {
    const {thumbUpCount, showContent} = this.state;
    return (
      <div>
        <button onClick={this.toggleContent}>toggle content</button>
        {showContent && <div>
          <button onClick={this.handleIncreaseThumbUpButtonClick}>Incease Thumb Up Count</button>
          <LikeButton thumbUpCount={thumbUpCount} />
        </div>}
      </div>
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
