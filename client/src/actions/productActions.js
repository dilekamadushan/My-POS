import axios from 'axios';
import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';
import combineReducers from '../reducers/index';
export const getProducts = () =>  dispatch =>{
    dispatch(setProductsLoading());

    console.log('lllll'+combineReducers.user);
    axios.get('/products',
        {
            //headers: { 'Authorization': `${getToken()}` }
        })
    .then(res =>
         dispatch({
             type:GET_PRODUCTS,
             payload: res.data.products
        }))
};

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/products/${id}`).then(res =>
        dispatch({
            type: DELETE_PRODUCT,
            payload: id

        })
        )
};

export const addProduct = (product) =>  dispatch =>{
    axios
    .post('/products',product)
    .then(res => 
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data.createdProduct
        })
    )
};
  
export const setProductsLoading = () => {
    return {
        type:PRODUCTS_LOADING
    };
};