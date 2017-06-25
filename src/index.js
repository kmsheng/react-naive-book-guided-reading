import {createStore} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import {ADD} from './redux/modules/counter';

const store = createStore(rootReducer);

function render() {
  const state = store.getState();
  pad.innerHTML = state.counter;
}

store.subscribe(render);

const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', () => {
  store.dispatch({type: ADD});
});

render();
