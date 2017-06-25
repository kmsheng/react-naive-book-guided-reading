import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import logger from './redux/middlewares/logger';
import actionRecorder from './redux/middlewares/actionRecorder';
import App from './containers/App/App';

const store = createStore(rootReducer, {counter: 10}, applyMiddleware(logger, actionRecorder));

ReactDOM.render(<App />, document.getElementById('root'));
