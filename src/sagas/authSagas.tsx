import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actionTypes from '../store/actionTypes/actionTypes';
import * as actions from '../store/actions/authActions';
import * as API from '../api/signUpAPI';
import { AuthDataInterface } from '@components/App/Auth/Signup/SignupInterface';

function* signupUser(action: any) {
  try{
    const user = yield call(API.authSignup, {
      email: action.payload.email,
      password: action.payload.password,
      name: action.payload.name,
      group: action.payload.group,
    });
    if (!user) { return; }
    const userToken = yield user.getIdToken()
    .then((token: string) => {
      return token;
    });
    const userId = user.uid;

    yield call(API.authSignupFullData, {
      id: userId,
      email: action.payload.email,
      name: action.payload.name,
      group: action.payload.group,
    });
    
    const storageUserData: AuthDataInterface = {
      token: userToken,
      id: userId,
      isAuth: true,
      error: null
    }
    yield put(actions.saveUserAuthData(
      storageUserData
    ));
    document.cookie = `token=${storageUserData.token}`;
    localStorage.setItem('authData', JSON.stringify(storageUserData));
  }catch(e){
    // error handle in future
  }
}

function* watchSignupUser() {
  yield takeLatest(actionTypes.AUTH_SIGNUP, signupUser);
}

function* signoutUser() {
  try {
    const storageUserData: AuthDataInterface = {
      token: null,
      id: null,
      isAuth: false,
      error: null
    };
    yield put(actions.saveUserAuthData(
      storageUserData
    ));
    document.cookie = `token=${storageUserData.token}`;
    localStorage.setItem('authData', JSON.stringify(storageUserData));
  } catch(e) {
    // error handle in future
  }
}

function* watchSignoutUser() {
  yield takeLatest(actionTypes.AUTH_SIGNOUT, signoutUser);
}

const authSagas = [
  fork(watchSignupUser),
  fork(watchSignoutUser),
];

export default authSagas;