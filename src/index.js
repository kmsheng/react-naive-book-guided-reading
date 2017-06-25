import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/modules/rootReducer';
import logger from './redux/middlewares/logger';
import actionRecorder from './redux/middlewares/actionRecorder';
import App from './containers/App/App';

const store = createStore(rootReducer, {counter: 10}, applyMiddleware(logger, actionRecorder));

const RootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(RootComponent, document.getElementById('root'));
