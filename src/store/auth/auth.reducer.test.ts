import { authReducer as reducer } from './auth.reducer';
import * as types from './auth.types';
import { UserInterface } from '../store-interfaces/initial-state.Interface';

const initialState: UserInterface = {
  uid: null,
  token: null,
  error: null
};

describe('user auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({ ...initialState }, {})).toEqual({ ...initialState });
  });

  it('success', () => {
    const action = {
      type: types.AUTH_SUCCESSFUL,
      payload: { token: 'token', uid: 'id' }
    };
    expect(reducer(initialState, action)).toEqual({
      token: 'token',
      uid: 'id',
      error: null
    });
  });

  it('sign in successfully', () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.SIGNIN_SUCCESSFUL,
          payload: { uid: '123', token: 'qwerty' }
        }
      )
    ).toEqual({
      uid: '123',
      token: 'qwerty',
      error: null
    });
  });
  it('sign in error', () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.SIGNIN_ERROR,
          payload: 'Invalid email or password'
        }
      )
    ).toEqual({
      uid: null,
      token: null,
      error: 'Invalid email or password'
    });
  });

  it('sign out', () => {
    expect(
      reducer(
        { uid: '123', token: 'qwerty', error: null },
        {
          type: types.SIGNOUT
        }
      )
    ).toEqual({ ...initialState });
  });
});
