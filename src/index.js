import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BOOKS = [
  {id: 1, name: 'Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers'},
  {id: 2, name: 'You Don\'t Know JS: Up & Going'},
  {id: 3, name: 'You Don\'t Know JS: Scope & Closures (Paperback)'},
  {id: 4, name: 'You Don\'t Know JS: this & Object Prototypes (Paperback)'},
  {id: 5, name: 'You Don\'t Know JS: Types & Grammar (Paperback)'},
  {id: 6, name: 'You Don\'t Know JS: Async & Performance (Paperback) '},
  {id: 7, name: 'You Don\'t Know JS: ES6 & Beyond (Paperback) '}
];

class App extends Component {

  render() {

    const lis = BOOKS.map((book) => (<li key={`book-row-${book.id}`}>{book.name}</li>));

    return (
      <div>
        <h1 className="title">React 小書</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
