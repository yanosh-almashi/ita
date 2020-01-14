import { takeLatest, call, fork, put } from 'redux-saga/effects';
import { profileTypes } from '../../store/profile/ProfileType';
import { db } from '../../components/App/Auth/firebase.config';
import { saveProfileData } from '../../store/profile/ProfileActions';

function get(id: string) {
  return db
  .collection('users')
  .doc(id)
  .get()
  .then((data: any) => {
    return data.data();
  });
}

function* getProfileDataAsync() {
  const profileData = yield call(get, 'LNUOgkZiRTOAIjG3f2Z3oGrCqck1');
  put(saveProfileData(profileData));
  console.log(profileData);
}

export function* watchGetProfileData() {
  console.log('1');
  yield takeLatest(profileTypes.GET_PROFILE_DATA, getProfileDataAsync);
}

const profileSagas = [
  fork(watchGetProfileData)
];

export default profileSagas;