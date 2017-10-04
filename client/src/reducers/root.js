import { combineReducers } from 'redux';
import blog from './blog';
import auth from './auth';

const reducers = combineReducers({
  blog,
  auth
});

export default reducers;