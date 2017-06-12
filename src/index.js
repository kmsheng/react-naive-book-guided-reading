import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BOOK_LIS = [
  <li key="book-row-1">Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers</li>,
  [
    <li key="book-row-2">I am inside</li>,
    <li key="book-row-3">I am inside2</li>,
    [
      <li key="book-row-4">I am inside3</li>
    ]
  ]
];

class App extends Component {

  render() {

    return (
      <div>
        <h1 className="title">React 小書</h1>
        <ul>{BOOK_LIS}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
