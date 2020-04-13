import { profileTypes } from './profile.types';

export const initialState = {
  profileData: null,
  windowStatus: true
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case profileTypes.SAVE_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload
      };
    case profileTypes.CHANGE_PROFILE_SUMMARY_WINDOW:
      return {
        ...state,
        windowStatus: !state.windowStatus
      };
    default:
      return state;
  }
};

export default profileReducer;
