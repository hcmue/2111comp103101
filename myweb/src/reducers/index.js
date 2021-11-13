import { combineReducers } from 'redux';
import { authenReducer } from './AuthenReducer';
import { cartReducer } from './CartReducer';

export const appReducer = combineReducers({
    Cart: cartReducer,
    User: authenReducer
});