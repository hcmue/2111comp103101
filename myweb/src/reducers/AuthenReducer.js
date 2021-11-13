import { Types } from '../actions/Types';

const initValue = {
    isLogged: false,
    username: '',
    token: ''
};

export const authenReducer = (state = initValue, action) => {
    switch (action.type) {
        case Types.AuthenService.LOGIN_SUCCESS:
            state.isLogged = true;
            state.username = action.user;
            state.token = action.token;
            return state;

        case Types.AuthenService.LOGOUT:
            state.isLogged = false;
            state.username = '';
            state.token = '';
            return state;

        default: return state;
    }
}