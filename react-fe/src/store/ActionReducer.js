import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './TypeReducer';
import { AUTH_TOKEN } from '../common/AuthToken';

export const authenticateAction = () => {
    return {
        type: AUTH_REQUEST
    };
}

export const authSuccessAction = (payload) => {
    localStorage.setItem(AUTH_TOKEN, payload.token);
    return {
        type: AUTH_SUCCESS,
        payload
    }
};

export const authFailureAction = (error) => {
    localStorage.removeItem(AUTH_TOKEN);
    return {
        type: AUTH_FAILURE,
        error
    }
};
