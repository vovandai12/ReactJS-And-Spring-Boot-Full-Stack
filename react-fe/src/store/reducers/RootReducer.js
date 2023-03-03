import { AUTH_REQ, AUTH_SUCCESS, AUTH_FAILURE } from '../TypesAuth';

const initialState = {
    user: {},
    error: '',
    isAuthenticated: false
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQ:
            return { ...state, error: '', isAuthenticated: true };

        case AUTH_SUCCESS:
            return { ...state, error: '', isAuthenticated: false, user: action.payload };

        case AUTH_FAILURE:
            const error = action.payload;
            return { ...state, isAuthenticated: false, error: error };

        default:
            return state;
    }
}

export default RootReducer;