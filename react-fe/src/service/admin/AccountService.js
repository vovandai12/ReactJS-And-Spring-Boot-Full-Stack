import http from '../../common/HttpCommon';
import { TOKEN } from '../../common/AuthToken';

const AccountService = {

    async changeInformation(data) {
        return await http.post('/accounts/change-information', data, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        });
    },

    async getUserByUsername(username) {
        return await http.get(`/accounts/by-username?username=${username}`, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        });
    }
}

export default AccountService;