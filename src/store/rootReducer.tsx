import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { profileReducer } from './profile/ProfileReducer';
import { todoReducer } from './todo/todoReducer';

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  todoReducer
});

export default rootReducer;
