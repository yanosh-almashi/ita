import { profileTypes } from "./ProfileType";

export const initialState = {
  profileData: []
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case profileTypes.SAVE_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;
