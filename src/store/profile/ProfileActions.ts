import { profileTypes } from "./ProfileType";

export const getProfileData = () => {
  console.log('GET_PROF_DATA')
  return { type: profileTypes.GET_PROFILE_DATA };
};

export const saveProfileData = (data: any) => {
  return { 
    type: profileTypes.SAVE_PROFILE_DATA,
    payload: data
  };
};

export const changeProfileSummaryWindow = () => ({
  type: profileTypes.CHANGE_PROFILE_SUMMARY_WINDOW
})