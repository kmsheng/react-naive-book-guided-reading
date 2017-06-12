import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

export class Breadcrumb extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  };

  renderListContent() {

    const {children} = this.props;

    console.log('typeof children', typeof children);

    if ('function' === typeof children.map) {
      return children.map((child, index) => {
        return <li key={`breadcrumb-item-${index}`}>{child}</li>;
      });
    }
    return <li key="breadcrumb-item">{children}</li>;
  }

  render() {
    return <ul className="breadcrumb">{this.renderListContent()}</ul>;
  }
}

class Index extends Component {

  render() {
    return (
      <div>
        <Breadcrumb>
          <a href="https://www.google.com">google</a>
          <a href="https://www.facebook.com">facebook</a>
        </Breadcrumb>
      </div>
    )
  };
}

ReactDOM.render(<Index />, document.getElementById('root'));
