import {
    ADD_USERORDER,
    DELETE_USERORDER,
    GET_USERORDER_ID,
    GET_USERORDER_NAME,
    GET_USERORDERS,
    SET_USERORDER_ID,
    SET_USERORDER_NAME,
    USERORDERS_LOADING
} from '../actions/types';


const initialState = {
    userOrders: [],
    loading: false,
    userOrderId: 'test1',
    userOrderName: 'test2'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERORDERS:
            return {
                ...state,
                userOrders: action.payload,
                loading: false
            };
        case DELETE_USERORDER:
            return {
                ...state,
                userOrders: state.userOrders.filter(userOrder => userOrder._id !== action.payload)
            };
        case ADD_USERORDER:
            return {
                ...state,
                userOrders: [action.payload, ...state.userOrders]
            };

        case USERORDERS_LOADING:
            return {
                ...state,
                loading: true
            };

        case SET_USERORDER_ID:
            return {
                ...state,
                userOrderId: action.payload
            };

        case GET_USERORDER_ID:
            return {
                ...state
            };
        case SET_USERORDER_NAME:
            return {
                ...state,
                userOrderName: action.payload
            };

        case GET_USERORDER_NAME:
            return {
                ...state
            };
        default:
            return state;
    }
}
