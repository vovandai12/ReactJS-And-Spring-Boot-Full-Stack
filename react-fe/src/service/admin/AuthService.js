import http from '../../common/HttpCommon'

const AuthService = {
    async register(data) {
        return await http.post('/auth/register', data);
    }
}

export default AuthService;