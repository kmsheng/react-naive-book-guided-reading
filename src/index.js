import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import {add} from './redux/modules/counter';

const logger = (store) => (next) => (action) => {
  console.log('logger called');
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const actions = {};

const actionRecorder = (store) => (next) => (action) => {
  console.log('actionRecorder called');
  actions[action.type] = true;
  console.log('actions', actions);
  return next(action);
};

const store = createStore(rootReducer, {counter: 10}, applyMiddleware(logger, actionRecorder));

function render() {
  const state = store.getState();
  pad.innerHTML = state.counter;
}

store.subscribe(render);

const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', () => {
  store.dispatch(add());
});

render();
