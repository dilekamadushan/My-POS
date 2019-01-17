import axios from 'axios';
import {GET_TOKEN, SIGNIN, SIGNUP} from './types';

export const signup = (user) => dispatch => {
    axios.post(`/user/signup`, user)
        .then(res =>
            dispatch({
                type: SIGNUP,
            }))
};

export const signin = (user) => dispatch => {
    axios.post(`/user/login`, user).then(res =>
        dispatch({
            type: SIGNIN,
            payload: res.data.token

        })
    )
};
export const getToken = () => {
    return {
        type: GET_TOKEN
    };
};