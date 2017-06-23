import {createStore} from 'redux';

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

const store = createStore(counterReducer);

store.subscribe(() => {
  const value = store.getState();
  pad.innerHTML = value;
});

const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', () => {
  store.dispatch({type: ADD});
});
