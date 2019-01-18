import axios from 'axios';
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT_ID,
    GET_PRODUCTS,
    PRODUCTS_LOADING,
    SET_PRODUCT_ID,
    SET_PRODUCT_MODAL_FOR_ORDER
} from './types';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.get('/products',
        {
            //headers: { 'Authorization': `${getToken()}` }
        })
        .then(res =>
            dispatch({
                type: GET_PRODUCTS,
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

export const addProduct = (product) => dispatch => {
    axios
        .post('/products', product)
        .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data.createdProduct
            })
        )
};

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    };
};

export const setProductId = (productID) => {
    return {
        type: SET_PRODUCT_ID,
        payload: productID
    };
};

export const setProductModalForOrder = (logic) => {
    return {
        type: SET_PRODUCT_MODAL_FOR_ORDER,
        payload: logic
    };
};

export const getProductId = () => {
    return {
        type: GET_PRODUCT_ID
    };
};