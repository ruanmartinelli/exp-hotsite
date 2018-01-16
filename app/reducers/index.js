import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import kit from './kitReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  kit
});

export default rootReducer;
