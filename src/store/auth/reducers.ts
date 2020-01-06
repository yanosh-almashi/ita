import { combineReducers } from 'redux'
import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESSFUL, LOGOUT, VERIFY_SUCCESS} from './actionConstants'
import {appReducer} from "../reduces";
import { UserInterface } from "./initialStateInterface";
import Cookies from "js-cookie";

console.dir(Cookies.get('token'));


const token = Cookies.get('token');
const initialState: UserInterface = {
  uid: null,
  token: token || null,
  email: null,
  error: null,
  isAuth: false,
  loading: true
};

console.dir(initialState);
const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return  {
                ...state
            };
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                token: action.payload.token || state.token,
                email: action.payload.email,
                uid: action.payload.uid,
                loading: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case LOGOUT:
            return {
                ...state = initialState,
                token: null,
                loading: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
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