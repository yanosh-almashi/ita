import * as actionConstants from './auth.types';
import { AuthDataInterface } from '@components/App/Auth/Signup/SignupInterface';

const authData = localStorage.getItem('authData') || JSON.stringify({
  token: null,
  id: null,
  isAuth: false,
  error: null
});
// eslint-disable-next-line no-useless-escape
const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const parsedAuthData = JSON.parse(authData);
const initialState: AuthDataInterface = {
  token: token,
  id: parsedAuthData.id || null,
  error: parsedAuthData.error || null,
  isAuth: parsedAuthData.isAuth || false
};

const auth = (state: AuthDataInterface): AuthDataInterface => {
  return {
    ...state,
    error: null
  }
}

const authSuccessful = (state: AuthDataInterface, token: string, id: string, isAuth: boolean): AuthDataInterface => {
  return {
    ...state,
    token: token,
    id: id,
    isAuth: isAuth
  }
}

const authError = (state: AuthDataInterface, error: any): AuthDataInterface => {
  return {
    ...state,
    error: error
  }
}

const authSignout = (): AuthDataInterface => {
  return {
    token: null,
    id: null,
    error: null,
    isAuth: false
  }
}

const authReducer = (state = initialState, action: any): AuthDataInterface => {
  switch (action.type) {

    case actionConstants.AUTH: 
      return auth(state);

    case actionConstants.AUTH_SUCCESSFUL:
      return authSuccessful(state, action.payload.token, action.payload.id, action.payload.isAuth);

    case actionConstants.AUTH_ERROR:
      return authError(state, action.payload);

    case actionConstants.AUTH_SIGNOUT:
        return authSignout();

    default: 
      return state;

  }
}

export default authReducer;