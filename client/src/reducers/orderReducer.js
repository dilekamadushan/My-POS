//reducer file to manage  redux order data
import {ADD_ORDER, DELETE_ORDER, GET_ORDERS, ORDER_QUANTITY_ERROR, ORDERS_LOADING} from '../actions/types';


const initialState = {
    orders: [],
    loading: false,
    userOrderId: '',
    orderQuantityError: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                orderQuantityError: false
            };
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order._id !== action.payload)
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [action.payload, ...state.orders],
            };
        case ORDER_QUANTITY_ERROR:
            return {
                ...state,
                orderQuantityError: true
            };

        case ORDERS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
