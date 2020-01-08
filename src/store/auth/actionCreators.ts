import { SIGNIN_ERROR, SIGNIN_SUCCESSFUL, SIGNOUT } from "./actionConstants";
import { Firebase } from "../../components/App/Auth/firebase.config";
import Cookies from "js-cookie";

export const successSignin = (user: any) => {
  return {
    type: SIGNIN_SUCCESSFUL,
    payload: user
  };
};

const errorSignin = (err: Error) => {
  return {
    type: SIGNIN_ERROR,
    payload: err
  };
};

export const signInUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );

      if (response.user) {
        console.dir(response.user.getIdTokenResult());
        const token = await response.user
          .getIdTokenResult(true)
          .then(idToken => idToken.token);
        const refreshToken = response.user.refreshToken;
        Cookies.set("token", token, { expires: 1 / 24});
        Cookies.set("refreshToken", refreshToken);
        Cookies.set("uid", response.user.uid);
        dispatch(successSignin({ ...response.user, token }));
      }
    } catch (err) {
      dispatch(errorSignin(err.message));
    }
  };
};
export const signOutUser = () => {
  return (dispatch: any) => {
    Firebase.auth()
      .signOut()
      .then(() => {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("uid");
        dispatch({
          type: SIGNOUT
        });
      });
  };
};
