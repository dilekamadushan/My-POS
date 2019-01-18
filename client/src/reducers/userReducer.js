import {AUTH_ERROR, GET_AUTH_ERROR, GET_TOKEN, SET_AUTH_ERROR, SIGNIN, SIGNUP} from '../actions/types';


export const initialState = {
    user: '',
    loggedIn: false,
    token: '',
    authError: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state
            };
        case SIGNIN:

            return {
                ...state,
                token: action.payload,
                loggedIn: true


            };

        case GET_TOKEN:
            return {
                ...state
            };
        case SET_AUTH_ERROR:
            return {
                ...state,
                auth_error: true,
            };
        case GET_AUTH_ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
}

