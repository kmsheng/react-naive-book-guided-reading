import {createStore, combineReducers} from 'redux';

const initialState = 0;
const ADD = 'react-naive-book-guided-reading/counter/ADD';

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer
});

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
