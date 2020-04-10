import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { profileReducer } from './profile/profile.reducer';

const rootReducer = combineReducers({
  authReducer,
  profileReducer
});

export default rootReducer;
