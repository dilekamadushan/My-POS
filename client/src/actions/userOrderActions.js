import axios from 'axios';
import {GET_USERORDERS, ADD_USERORDER, DELETE_USERORDER ,GET_USERORDER, USERORDERS_LOADING, SET_USERORDER_ID, GET_USERORDER_ID} from './types';

export const getUserOrders = () =>  dispatch =>{
    dispatch(setUserOrdersLoading());
    axios.get('/userOrders')
    .then(res =>
         dispatch({
             type:GET_USERORDERS,
             payload: res.data.userOrders
        }))
};

export const deleteUserOrder = (id) => dispatch => {
    axios.delete(`/userOrders/${id}`).then(res =>
        dispatch({
            type: DELETE_USERORDER,
            payload: id

        })
        )
};

export const addUserOrder = (userOrder) =>  dispatch =>{
    axios
    .post('/userOrders',userOrder)
    .then(res => 
        dispatch({
            type: ADD_USERORDER,
            payload: res.data.createdUserOrder
        })
    )
};
  
export const getUserOrder = (id) =>  dispatch =>{
    axios
    .get(`/userOrders/${id}`)
    .then(res => 
        dispatch({
            type: GET_USERORDER,
            payload: res.data.userOrder
        })
    )
};
  
export const setUserOrdersLoading = () => {
    return {
        type:USERORDERS_LOADING
    };
};
export const setUserOrderID = (userOrderID) => {
    return {
        type:SET_USERORDER_ID,
        payload:userOrderID
    };
};

export const getUserOrderID = () => {
    return {
        type:GET_USERORDER_ID
    };
};