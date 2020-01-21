import { takeLatest, call, put } from 'redux-saga/effects';
import { profileTypes } from '../../store/profile/ProfileType';
import { db } from '../../firebase/firebase.config';
import { saveProfileData } from '../../store/profile/ProfileActions';
import Cookies from "js-cookie";
import { getFile, getFileTypes } from '../../api/profile/ProfileApi';

function getData(data: any) {
  return data.data();
}

function* getProfileDataAsync() {
  try {
    const dataRef = db.collection('users').doc(Cookies.get("uid"));
    const data = yield dataRef.get();
    const userData = yield call(getData, data);
    const userAvatarUrl = yield getFile(getFileTypes.avatar.path, getFileTypes.avatar.name, Cookies.get("uid") || '');
    
    console.log(userAvatarUrl);
  yield put(saveProfileData({ ...userData, userAvatarUrl }));
  } catch(err) {

  }
}

export function* watchGetProfileData() {
  yield takeLatest(profileTypes.GET_PROFILE_DATA, getProfileDataAsync);
}