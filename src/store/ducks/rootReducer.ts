import { combineReducers } from 'redux';

import { userReducer, createReducer } from './users';
import { loginReducer } from './auth';

const users = userReducer;
const login = loginReducer;
const create = createReducer;

export default combineReducers({
  users,
  login,
  create,
});
