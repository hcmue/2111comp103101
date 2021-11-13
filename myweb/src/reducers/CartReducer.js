import { Types } from '../actions/Types';

const initValue = {
    items: []
};

export const cartReducer = (state = initValue, action) => {
    switch (action.type) {
        case Types.CartService.ADD_TO_CART:
            state = [...state, action.product];
            return state;


        default: return state;
    }
}