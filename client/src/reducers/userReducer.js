//reducer file to manage  user data
import {
    AUTH_ERROR,
    GET_AUTH_ERROR,
    GET_TOKEN,
    SET_AUTH_ERROR,
    SET_SIGN_UP_ERROR,
    SIGNIN,
    SIGNOUT,
    SIGNUP
} from '../actions/types';
import Cookies from "universal-cookie/cjs";

export const initialState = {
    user: '',
    isLogged: false,
    token: '',
    authError: false,
    signUpError: false
};

export default function (state = initialState, action) {
    const cookies = new Cookies();
    switch (action.type) {
        case SIGNUP:
            return {
                ...state
            };
        case SIGNIN:

            cookies.set('SyscoPOSCookie', action.payload, {path: '/'});
            return {
                ...state,
                token: action.payload,
                isLogged: true,
                auth_error: false,
                signUpError: false
            };

        case GET_TOKEN:
            return {
                ...state
            };
        case SET_AUTH_ERROR:
            cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
            return {
                ...state,
                auth_error: true,
                isLogged: false,
                signUpError: false
            };
        case SET_SIGN_UP_ERROR:
            return {
                ...state,
                auth_error: false,
                isLogged: false,
                signUpError: true
            };
        case GET_AUTH_ERROR:
            return {
                ...state
            };

        case SIGNOUT:
            cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
            return {
                ...state,
                isLogged: false,
                auth_error: false,
                token: ''
            };
        default:
            return state;
    }
}

