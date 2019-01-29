//Actions to fetch  order data from the server to redux
import axios from 'axios';
import {DELETE_ORDER, GET_ORDERS, ORDERS_LOADING, SET_AUTH_ERROR, ORDER_QUANTITY_ERROR} from './types';
import Cookies from "universal-cookie/cjs";

const cookies = new Cookies();

export const getOrders = (userOrderID) => dispatch => {
    dispatch(setOrdersLoading());
    axios.get(`/orders/userOrders/${userOrderID}`)
        .then(res =>
            dispatch({
                type: GET_ORDERS,
                payload: res.data.orders
            })).catch(error => {
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const deleteOrder = (id) => dispatch => {
    axios.delete(`/orders/${id}`).then(res =>
        dispatch({
            type: DELETE_ORDER,
            payload: id

        })
    ).catch(error => {
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const addOrder = (order) => dispatch => {
    axios
        .post('/orders', order)
        .then(res => {
                axios.get(`/orders/userOrders/${res.data.createdOrder.userOrderId}`)
                    .then(res =>
                        dispatch({
                            type: GET_ORDERS,
                            payload: res.data.orders
                        }))
            }
        ).catch(error => {
        if (error.response.data.error.includes('Invalid Quantity')) {
            dispatch({
                type: ORDER_QUANTITY_ERROR
            })
        } else {
            cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
            dispatch({
                type: SET_AUTH_ERROR
            })
        }

    })
};

export const setOrdersLoading = () => {
    return {
        type: ORDERS_LOADING
    };
};