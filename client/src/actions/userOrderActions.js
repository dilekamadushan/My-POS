//Actions to fetch  userOrder data from the server to redux
import axios from 'axios';
import {
    ADD_USERORDER,
    DELETE_USERORDER,
    GET_USERORDER,
    GET_USERORDER_ID,
    GET_USERORDER_INFO,
    GET_USERORDER_NAME,
    GET_USERORDERS,
    SET_AUTH_ERROR,
    SET_USERORDER_ID,
    SET_USERORDER_INFO,
    USERORDERS_LOADING
} from './types';

const cookies = new Cookies();

export const getUserOrders = () => dispatch => {
    dispatch(setUserOrdersLoading());
    axios.get('/userOrders')
        .then(res =>
            dispatch({
                type: GET_USERORDERS,
                payload: res.data.userOrders
            })).catch(error => {

        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const deleteUserOrder = (id) => dispatch => {
    axios.delete(`/userOrders/${id}`).then(res =>
        dispatch({
            type: DELETE_USERORDER,
            payload: id

        })
    ).catch(error => {

        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const addUserOrder = (userOrder) => dispatch => {
    axios
        .post('/userOrders', userOrder)
        .then(res =>
            dispatch({
                type: ADD_USERORDER,
                payload: res.data.createdUserOrder
            })
        ).catch(error => {

        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const getUserOrder = (id) => dispatch => {
    axios
        .get(`/userOrders/${id}`)
        .then(res =>
            dispatch({
                type: GET_USERORDER,
                payload: res.data.userOrder
            })
        ).catch(error => {

        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const setUserOrdersLoading = () => {
    return {
        type: USERORDERS_LOADING
    };
};
export const setUserOrderID = (userOrderID) => {
    return {
        type: SET_USERORDER_ID,
        payload: userOrderID
    };
};

export const getUserOrderID = () => {
    return {
        type: GET_USERORDER_ID
    };
};

export const getUserOrderName = () => {
    return {
        type: GET_USERORDER_NAME
    };
};
export const getUserOrderInfo = () => {
    return {
        type: GET_USERORDER_INFO
    };
};

export const setUserOrderInfo = (userOrderInfo) => {
    return {
        type: SET_USERORDER_INFO,
        payload: userOrderInfo
    };
};