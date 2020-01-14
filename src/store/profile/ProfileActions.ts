import { profileTypes } from "./ProfileType";

export const getProfileData = () => {
  return { type: profileTypes.GET_PROFILE_DATA };
};

export const saveProfileData = (data: any) => {
  return { 
    type: profileTypes.GET_PROFILE_DATA,
    payload: data
  };
};