import http from '../../common/HttpCommon'

const UserService = {
    async findAll() {
        return await http.get('/users');
    }
}

export default UserService;