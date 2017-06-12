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

  handleButtonClick = () => this.setState((prevState) => ({isLiked: ! prevState.isLiked}));

  render() {
    const {thumbUpCount} = this.props;
    const {isLiked} = this.state;
    return (
      <button class="like-btn" onClick={this.handleButtonClick}>
        <span class="like-text">{isLiked ? '取消' : '點讚'}</span>
        <span>{'👍'.repeat(thumbUpCount)}</span>
      </button>
    );
  }
}

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {thumbUpCount: 1};
  }

  handleIncreaseThumbUpButtonClick = () => this.setState((prevState) => ({thumbUpCount: prevState.thumbUpCount + 1}));

  render() {
    const {thumbUpCount} = this.state;
    return (
      <div>
        <button onClick={this.handleIncreaseThumbUpButtonClick}>Incease Thumb Up Count</button>
        <LikeButton thumbUpCount={thumbUpCount} />
      </div>
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
