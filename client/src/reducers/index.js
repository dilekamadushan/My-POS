//combined reducers file
import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userOrderReducer from './userOrderReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';

export default combineReducers({
    product: productReducer,
    userOrder: userOrderReducer,
    order: orderReducer,
    user: userReducer
});