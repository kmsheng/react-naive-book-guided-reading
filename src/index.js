import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import {add} from './redux/modules/counter';
import logger from './redux/middlewares/logger';
import actionRecorder from './redux/middlewares/actionRecorder';

const store = createStore(rootReducer, {counter: 10}, applyMiddleware(logger, actionRecorder));

const heading = document.getElementById('heading');
const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

function render() {
  const state = store.getState();
  pad.innerHTML = state.counter;
  heading.innerHTML = state.main.projectName;
}

store.subscribe(render);

btnAdd.addEventListener('click', () => {
  store.dispatch(add());
});

render();
