import http from '../../common/HttpCommon'

const AuthService = {
    async register(data) {
        return await http.post('/auth/register', data);
    },

    async login(data) {
        return await http.post('/auth/login', data);
    },

    async changeInformation(data) {
        return await http.post('/auth/change-information', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }
}

export default AuthService;