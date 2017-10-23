import { combineReducers } from 'redux';
import blog from './blog';
import auth from './auth';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const reducers = combineReducers({
  blog,
  auth
});

export default reducers;