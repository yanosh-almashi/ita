import { combineReducers } from 'redux'
import { SIGNIN_ERROR, SIGNIN_SUCCESSFUL, SIGNOUT} from './actionConstants'
import {appReducer} from "../reduces";
import { UserInterface } from "./initialStateInterface";
import Cookies from "js-cookie";


let token = Cookies.get('token') || Cookies.get('refreshToken');
const id = Cookies.get('uid');

export const initialState: UserInterface = {
  uid: id || null,
  token: token || null,
  error: null
};

export const userReducer = (state = initialState, action: any) => {
    console.log(action.type);
    switch (action.type) {
        case SIGNIN_SUCCESSFUL:
            return {
                ...state,
                token: action.payload.token || state.token,
                uid: action.payload.uid || state.uid,
                error: null
            };
        case SIGNIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SIGNOUT:
            return {
                ...state = initialState,
                token: null,
                uid: null
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    userReducer,
    appReducer
});

export default rootReducer;