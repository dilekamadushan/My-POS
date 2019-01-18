import {AUTH_ERROR, GET_TOKEN, SIGNIN, SIGNUP} from '../actions/types';


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
            if (action.payload == "Auth failed") {
                return {
                    ...state,
                    authError: true
                };
            } else {
                return {
                    ...state,
                    token: action.payload,
                    loggedIn: true
                };

            }

        case GET_TOKEN:
            return {
                ...state
            };
        case AUTH_ERROR:
            return {
                ...state,
                auth_error: true,
            };
        default:
            return state;
    }
}

