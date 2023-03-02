import http from '../../common/HttpCommon'

class AuthService {
    async register(data) {
        return await http.post('/auth/register', data);
    }
}

export default AuthService;