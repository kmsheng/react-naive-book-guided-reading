import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CommentApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  handleSubmit = (event) => {

    event.preventDefault();
    const newComment = this.refs.textarea.value.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>');

    if (newComment) {
      const {comments} = this.state;
      this.setState({comments: [...comments, newComment]});
      this.refs.textarea.value = '';
    }
  };

  renderComments() {
    return this.state.comments.map((comment, index) => {
      return (
        <div key={`comment-row-${index}`} dangerouslySetInnerHTML={{__html: comment}} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea ref="textarea" placeholder="leave your comment..." />
          <button type="submit">submit</button>
        </form>
        {this.renderComments()}
      </div>
    )
  };
}

ReactDOM.render(<CommentApp />, document.getElementById('root'));
