import {GET_TOKEN, SIGNIN, SIGNUP} from '../actions/types';


export const initialState = {
    user: '',
    loggedIn: false,
    token: ''
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
        default:
            return state;
    }
}

