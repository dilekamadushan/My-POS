import axios from 'axios';
import {GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDERS_LOADING} from './types';

export const getOrders = (userOrderID) =>  dispatch =>{
    dispatch(setOrdersLoading());
  // axios.get(`/orders`)
     axios.get(`/orders/userOrders/${userOrderID}`)
    .then(res =>
         dispatch({
             type:GET_ORDERS,
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

export const addOrder = (order) =>  dispatch =>{
    axios
    .post('/orders',order)
    .then(res => 
        dispatch({
            type: ADD_ORDER,
            payload: res.data.createdOrder
        })
    )
};
  
export const setOrdersLoading = () => {
    return {
        type:ORDERS_LOADING
    };
};