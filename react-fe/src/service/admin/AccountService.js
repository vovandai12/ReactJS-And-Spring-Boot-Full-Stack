import http from '../../common/HttpCommon';
import { TOKEN } from '../../common/AuthToken';

const AccountService = {

    async changeInformation(data) {
        return await http.post('/auth/accounts/change-information', data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + TOKEN
            }
        });
    }
}

export default AccountService;