import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthDataInterface } from '@components/App/Auth/Signup/SignupInterface';
import authReducer from './auth.reducer';
import * as actionTypes from './auth.types';

afterEach(cleanup);

const initialState: AuthDataInterface = {
  token: null,
  id: null,
  error: null,
  isAuth: false
};

describe('Signup reducer', () => {

  it('success', () => {
    const action = { type: actionTypes.AUTH_SUCCESSFUL,  payload: { token: 'token', id: 'id', isAuth: true } }
    expect(authReducer(initialState, action)).toEqual({
      token: 'token',
      id: 'id',
      error: null,
      isAuth: true
    });
  });
  it('signout', () => {
    const action = { type: actionTypes.AUTH_SIGNOUT }
    expect(authReducer(initialState, action)).toEqual({
      token: null,
      id: null,
      error: null,
      isAuth: false
    });
  });

});