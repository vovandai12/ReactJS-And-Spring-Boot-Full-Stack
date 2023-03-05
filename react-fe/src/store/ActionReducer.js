import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './TypeReducer';
import { AUTH_TOKEN } from '../common/AuthToken';

export const authRequest = () => {
    return dispatch => {
        dispatch({
            type: AUTH_REQUEST
        });
    }
}
export const authSuccess = (token, username, role, message) => {
    localStorage.setItem(AUTH_TOKEN, token);
    return {
        type: AUTH_SUCCESS,
        token: token,
        username: username,
        role: role,
        message: message
    }
};

export const loginFailure = (error) => {
    localStorage.removeItem(AUTH_TOKEN);
    return {
        type: AUTH_FAILURE,
        error: error
    }
};
