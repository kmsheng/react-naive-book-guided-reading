import {combineReducers} from 'redux';
import main from './main';
import counter from './counter';

const rootReducer = combineReducers({
  main,
  counter
});

export default rootReducer;
