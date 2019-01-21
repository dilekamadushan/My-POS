//Actions to fetch  product data from the server to redux
import axios from 'axios';
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT_ID,
    GET_PRODUCTS,
    PRODUCTS_LOADING,
    SET_AUTH_ERROR,
    SET_PRODUCT_ID,
    SET_PRODUCT_MODAL_FOR_ORDER
} from './types';

const cookies = new Cookies();

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
            })).catch(error => {
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/products/${id}`).then(res =>
        dispatch({
            type: DELETE_PRODUCT,
            payload: id

        })
    ).catch(error => {
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
};

export const addProduct = (product) => dispatch => {
    axios
        .post('/products', product)
        .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data.createdProduct
            })
        ).catch(error => {
        cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: SET_AUTH_ERROR
        })

    })
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