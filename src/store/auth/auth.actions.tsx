import * as actionTypes from './auth.types';
import { SignupInterface, AuthDataInterface } from '@components/App/Auth/Signup/SignupInterface';

export const saveUserAuthData = (userData: AuthDataInterface) => {
    return {
        type: actionTypes.AUTH_SUCCESSFUL,
        payload: userData
    }
};

export const authSignup = (userData: SignupInterface ) => ({
    type: actionTypes.AUTH_SIGNUP,
    payload: userData
});

export const authSignout = () => ({
    type: actionTypes.AUTH_SIGNOUT
});