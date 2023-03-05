const initialState = {
    auth: {
        token: '',
        username: '',
        role: ''
    },
    message: '',
    error: '',
    isAuthenticated: false
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_REQUEST':
            return {
                ...state,
                auth: {},
                message: '',
                error: '',
                isAuthenticated: true
            };

        case 'AUTH_SUCCESS':
            return {
                ...state,
                auth: {
                    token: action.payload.token,
                    username: action.payload.username,
                    role: action.payload.role,
                },
                message: action.payload.message,
                error: '',
                isAuthenticated: false
            };

        case 'AUTH_FAILURE':
            return {
                ...state,
                auth: {},
                message: '',
                error: action.payload,
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export default RootReducer;