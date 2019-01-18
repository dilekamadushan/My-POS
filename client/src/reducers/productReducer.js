import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT_ID,
    GET_PRODUCTS,
    PRODUCTS_LOADING,
    SET_PRODUCT_ID,
    SET_PRODUCT_MODAL_FOR_ORDER
} from '../actions/types';


const initialState = {
    products: [],
    loading: false,
    productId: '',
    productModalForOrder: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            };

        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_PRODUCT_ID:
            return {
                ...state,
                productId: action.payload,
                productModalForOrder: true
            };
        case SET_PRODUCT_MODAL_FOR_ORDER:
            return {
                ...state,
                productModalForOrder: action.payload
            };
        case GET_PRODUCT_ID:
            return {
                ...state
            };
        default:
            return state;
    }
}
