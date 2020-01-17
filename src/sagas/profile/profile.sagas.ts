import { takeLatest, call, put } from 'redux-saga/effects';
import { profileTypes } from '../../store/profile/ProfileType';
import { db } from '../../components/App/Auth/firebase.config';
import { saveProfileData } from '../../store/profile/ProfileActions';
import Cookies from "js-cookie";

function getData(data: any) {
  return data.data();
}

function* getProfileDataAsync() {
  try {
    const dataRef = db.collection('users').doc(Cookies.get("uid"));
    const data = yield dataRef.get();
    const userData = yield call(getData, data);
  yield put(saveProfileData(userData));
  } catch(err) {

  }
}

export function* watchGetProfileData() {
  yield takeLatest(profileTypes.GET_PROFILE_DATA, getProfileDataAsync);
}