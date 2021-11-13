import { Types } from './Types';

export const actLoginSuccess = (user, token) => {
    return {
        type: Types.AuthenService.LOGIN_SUCCESS,
        user: user,
        token: token
    };
};

export const actLogout = () => {
    return {
        type: Types.AuthenService.LOGOUT
    };
};

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.CartService.ADD_TO_CART,
        product,
        quantity
    };
};
