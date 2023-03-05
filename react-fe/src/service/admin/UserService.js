import http from '../../common/HttpCommon';
import { TOKEN } from '../../common/AuthToken';

const UserService = {
    async findAll() {
        return await http.get('/users', {
            headers: {
                "Authorization": "Bearer " + TOKEN,
            }
        });
    }
}

export default UserService;