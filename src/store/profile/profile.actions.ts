import { profileTypes } from "./profile.types";

export const getProfileData = () => {
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
});
