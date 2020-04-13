import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from './auth.types';
import * as actions from './auth.actions';
import * as API from '../../api/auth/signup.api';
import {
  AuthDataInterface,
  SignupFullDataInterface
} from '@components/Auth/Signup/SignupInterface';
import { createUserInformation } from '../../utils/auth.utils';
import { putFile, getFileTypes } from '../../api/profile/ProfileApi';

function* getAuth(authData: any) {
  const userToken: string = yield authData
    .getIdToken()
    .then((token: string) => token);
  const userId: string = authData.uid;
  const refreshToken: string = authData.refreshToken;
  const auth: AuthDataInterface = {
    token: userToken,
    refreshToken: refreshToken,
    uid: userId
  };
  return auth;
}

function* signupWithFullUserData(data: SignupFullDataInterface) {
  const isSuccess: boolean = yield call(API.authSignupFullData, {
    uid: data.uid,
    email: data.email,
    name: data.name,
    group: data.group
  });
  return isSuccess;
}

function* saveDataInState(userAuthData: any) {
  const storageUserData: AuthDataInterface = {
    token: userAuthData.token,
    uid: userAuthData.uid,
    refreshToken: userAuthData.refreshToken
  };
  yield put(actions.saveUserAuthData(storageUserData));

  if (
    !storageUserData.token ||
    !storageUserData.uid ||
    !storageUserData.refreshToken
  ) {
    return;
  }
  createUserInformation(
    storageUserData.token,
    storageUserData.refreshToken,
    storageUserData.uid
  );
}

function* signupUser(action: any) {
  try {
    const user = yield call(API.authSignup, {
      email: action.payload.email,
      password: action.payload.password,
      name: action.payload.name,
      group: action.payload.group
    });

    if (!user) {
      return;
    }

    const userAuthData: AuthDataInterface = yield call(getAuth, user);
    const isSuccess = yield call(signupWithFullUserData, {
      uid: userAuthData.uid,
      ...action.payload
    });

    if (!isSuccess) {
      return;
    }
    yield call(saveDataInState, { ...userAuthData, error: null, isAuth: true });
    if (!action.payload.file) {
      return;
    }
    yield putFile(
      action.payload.file,
      getFileTypes.avatar.path,
      getFileTypes.avatar.name,
      userAuthData.uid || ''
    );
  } catch (e) {
    // error handle in future
  }
}

export function* watchSignupUser() {
  yield takeLatest(actionTypes.AUTH_SIGNUP, signupUser);
}
