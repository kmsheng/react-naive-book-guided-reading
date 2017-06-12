import React, {Component, PropTypes} from 'react';

export default function resolve(func) {

  return (Target) => class extends Component {

    constructor(props) {
      super(props);
      this.state = {isResolved: null};
    }

    componentWillMount() {

      func()
        .then(() => {
          this.setState({isResolved: true});
        })
        .catch((err) => {
          console.error('error rejected:', err);
          this.setState({isResolved: false});
        });
    }

    render() {
      const {isResolved} = this.state;

      if (isResolved) {
        return <Target {...this.props} />;
      }
      if (false === isResolved) {
        return <div>Sorry, the page could not be loaded.</div>;
      }
      return <div>Is loading....</div>;
    }
  }
}
