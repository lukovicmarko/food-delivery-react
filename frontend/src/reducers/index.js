import { combineReducers } from 'redux';
import { products, productDetails } from './products';
import { cart } from './cart';
import { userLogin, userRegister, userDetails } from './users';

export default combineReducers({
    products,
    productDetails,
    cart,
    userLogin,
    userRegister,
    userDetails
});