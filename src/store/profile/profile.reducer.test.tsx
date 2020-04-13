import { profileReducer as reducer } from './profile.reducer';
import { profileTypes } from './profile.types';

export const initialState = {
  profileData: null,
  windowStatus: true
};

describe('user auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({ ...initialState }, {})).toEqual({ ...initialState });
  });

  it('CHANGE_PROFILE_SUMMARY_WINDOW', () => {
    const action = {
      type: profileTypes.CHANGE_PROFILE_SUMMARY_WINDOW
    };
    expect(reducer(initialState, action)).toEqual({
      profileData: null,
      windowStatus: false
    });
  });

  it('SAVE_PROFILE_DATA', () => {
    const action = {
      type: profileTypes.SAVE_PROFILE_DATA,
      payload: 'data'
    };
    expect(reducer(initialState, action)).toEqual({
      profileData: 'data',
      windowStatus: true
    });
  });
});
