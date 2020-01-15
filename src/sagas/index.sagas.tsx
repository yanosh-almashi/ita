import sagas from './auth/auth.sagas';
import profileSagas from './profile/profile.sagas';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...sagas,
    ...profileSagas
  ]);
};

