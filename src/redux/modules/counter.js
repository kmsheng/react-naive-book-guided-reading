
export const ADD = 'react-naive-book-guided-reading/counter/ADD';

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}
