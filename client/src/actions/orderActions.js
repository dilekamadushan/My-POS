import axios from 'axios';
import {DELETE_ORDER, GET_ORDERS, ORDERS_LOADING} from './types';

export const getOrders = (userOrderID) => dispatch => {
    console.log('inside get orders' + userOrderID);
    dispatch(setOrdersLoading());
    // axios.get(`/orders`)
    axios.get(`/orders/userOrders/${userOrderID}`)
        .then(res =>
            dispatch({
                type: GET_ORDERS,
                payload: res.data.orders
            }))
};

export const deleteOrder = (id) => dispatch => {
    axios.delete(`/orders/${id}`).then(res =>
        dispatch({
            type: DELETE_ORDER,
            payload: id

        })
    )
};

export const addOrder = (order) => dispatch => {
    axios
        .post('/orders', order)
        .then(res => {
                console.log('before sending the request' + res.data.createdOrder.userOrderId);
                axios.get(`/orders/userOrders/${res.data.createdOrder.userOrderId}`)
                    .then(res =>
                        dispatch({
                            type: GET_ORDERS,
                            payload: res.data.orders
                        }))
            }
        )
};

export const setOrdersLoading = () => {
    return {
        type: ORDERS_LOADING
    };
};

/*
export const addOrder = (order) => dispatch => {
    axios
        .post('/orders', order)
        .then(res =>
            dispatch({
                type: ADD_ORDER,
                payload: res.data.createdOrder
            })
        )
};*/
