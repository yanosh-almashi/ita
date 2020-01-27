import { watchSignupUser } from './auth/auth.sagas';
import { watchGetProfileData } from './profile/profile.sagas';
import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(watchSignupUser), call(watchGetProfileData)]);
}
