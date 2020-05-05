import { combineReducers } from "redux";

import { todoReducer } from "./todo/todoReducer";
import { authReducer } from "./auth/auth.reducer";
import { profileReducer } from "./profile/profile.reducer";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  todoReducer
});

export default rootReducer;
