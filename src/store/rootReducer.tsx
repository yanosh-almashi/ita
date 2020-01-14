import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer"
import { profileReducer } from './profile/ProfileReducer';

const rootReducer = combineReducers({
  authReducer,
  profileReducer
});

export default rootReducer;

