import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  VERIFY_SUCCESS
} from "./actionConstants";
import { Firebase } from "../../components/App/Auth/firebase.config";
import Cookies from "js-cookie";
import {SigninInterface} from "@components/App/Auth/Signin/SignInInterface";
import {UserInterface} from "./initialStateInterface";


const requestLogin = () => {
  return {
    type: LOGIN
  };
};

export const receiveLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: user
  };
};

const errorLogin = (err: Error) => {
  return {
    type: LOGIN_ERROR,
    payload: err
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const login = (email: string, password: string) => {
  console.dir(email, password);

  return async (dispatch: any) => {
    try {
      dispatch(requestLogin());
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
      console.dir(response.user);
      if (response.user) {
        let token = await response.user
          .getIdToken(true)
          .then(idToken => idToken);
        Cookies.set('token', token);
        dispatch(receiveLogin({...response.user, token}));
      }
    } catch (err) {
      dispatch(errorLogin(err.message));
    }
  };
};

export const signOutUser = () => {
  return (dispatch: any) => {
    Firebase.auth()
      .signOut()
      .then(() => {
       Cookies.remove('token');
        dispatch({
          type: LOGOUT
        });
      });
  };
};
export const verifyAuth = () => {
  return async (dispatch: any) => {
    try {
      await Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(receiveLogin(user));
        } else {
          dispatch(verifySuccess());
        }
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  };
};
