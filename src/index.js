import {createStore} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import {ADD} from './redux/modules/counter';

const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  pad.innerHTML = state.counter;
});

const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', () => {
  store.dispatch({type: ADD});
});
