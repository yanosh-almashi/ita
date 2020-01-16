import { profileTypes } from "./ProfileType";

export const initialState = {
  profileData: null
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case profileTypes.SAVE_PROFILE_DATA:
      console.log('SAVE_from_reducer');
      console.log(action.payload);
      return {
        ...state,
        profileData: action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;
