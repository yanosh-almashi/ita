import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actionTypes from '../../store/auth/auth.types';
import * as actions from '../../store/auth/auth.actions';
import * as API from '../../api/auth/signup.api';
import { AuthDataInterface, SignupFullDataInterface } from '@components/App/Auth/Signup/SignupInterface';

function* getAuth(authData: any) {
  const userToken: string = yield authData.getIdToken()
    .then((token: string) => token );
  const userId: string = authData.uid;
  const auth: AuthDataInterface = {
    token: userToken,
    id: userId
  }
  return auth;
}

function* signupWithFullUserData(data: SignupFullDataInterface) {
  const isSuccess: boolean = yield call(API.authSignupFullData, {
    id: data.id,
    email: data.email,
    name: data.name,
    group: data.group,
  });
  return isSuccess;
}

function* saveDataInState(userAuthData: AuthDataInterface) {
  const storageUserData: AuthDataInterface = {
    token: userAuthData.token,
    id: userAuthData.id,
    isAuth: userAuthData.isAuth,
    error: userAuthData.error
  }
  yield put(actions.saveUserAuthData(
    storageUserData
  ));
  document.cookie = `token=${storageUserData.token}`;
  localStorage.setItem('authData', JSON.stringify(storageUserData));
}

function* signupUser(action: any) {
  try{
    const user = yield call(API.authSignup, {
      email: action.payload.email,
      password: action.payload.password,
      name: action.payload.name,
      group: action.payload.group,
    });

    if (!user) { return; }

    const userAuthData: AuthDataInterface = yield call(getAuth, user);
    const isSuccess = yield call(signupWithFullUserData, { id: userAuthData.id, ...action.payload });

    if(!isSuccess) { return; }

    yield call(saveDataInState, {...userAuthData, error: null, isAuth: true });
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
    yield call(saveDataInState, { ...storageUserData });
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