import sagas from './authSagas';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...sagas
  ]);
};