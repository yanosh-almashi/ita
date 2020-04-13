import {
  SIGNIN_SUCCESSFUL,
  SIGNOUT,
  AUTH_SUCCESSFUL,
  SIGNIN_ERROR
} from './auth.types';
import { UserInterface } from '../store-interfaces/initial-state.Interface';
import Cookies from 'js-cookie';

let token = Cookies.get('token') || Cookies.get('refreshToken');
const id = Cookies.get('uid');

export const initialState: UserInterface = {
  uid: id || null,
  token: token || null,
  error: null
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token || state.token,
        uid: action.payload.uid || state.uid
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SIGNIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token || state.token,
        uid: action.payload.uid || state.uid,
        error: null
      };

    case SIGNOUT:
      return {
        ...(state = initialState),
        token: null,
        uid: null
      };
    default:
      return state;
  }
};

export default authReducer;
