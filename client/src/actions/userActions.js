//Actions to fetch  user data from the server to redux
import axios from 'axios';
import {GET_AUTH_ERROR, GET_TOKEN, SET_AUTH_ERROR, SIGNIN, SIGNOUT, SIGNUP} from './types';

export const signup = (user) => dispatch => {
    axios.post(`/user/signup`, user)
        .then(res =>
            dispatch({
                type: SIGNUP,
            })
        )
};

export const signin = (user) => dispatch => {
    axios.post(`/user/login`, user)
        .then(res =>

            dispatch({
                type: SIGNIN,
                payload: res.data.token
            })
        ).catch(error => {
        const cookies = new Cookies();
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })


};
export const getToken = () => {
    return {
        type: GET_TOKEN
    };
};
export const getAuthError = () => {
    return {
        type: GET_AUTH_ERROR
    };
};
export const signOut = () => {
    return {
        type: SIGNOUT
    };
};

