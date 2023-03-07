import http from '../../common/HttpCommon';

const AuthService = {
    async register(data) {
        return await http.post('/auth/register', data);
    },

    async login(data) {
        return await http.post('/auth/login', data);
    },

    async getUsername(token) {
        return await http.get(`/auth/get-username-token?token=${token}`);
    }
}

export default AuthService;