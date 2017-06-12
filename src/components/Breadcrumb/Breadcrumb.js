import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Breadcrumb extends Component {

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

