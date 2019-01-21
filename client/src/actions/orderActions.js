//Actions to fetch  order data from the server to redux
import axios from 'axios';
import {DELETE_ORDER, GET_ORDERS, ORDERS_LOADING} from './types';

export const getOrders = (userOrderID) => dispatch => {
    dispatch(setOrdersLoading());
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