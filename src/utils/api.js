import axios from 'axios';

var register = (data, callback) => {
    axios.post('/api/v1/register', data)
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error, null);
        });
};
var login = (data, callback) => {
    axios.post('/api/v1/login', data)
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error, null);
        });
};
var refreshUserData = (beforeRouterCallback = () => {}) => {
    axios.get('/api/v1/user_data')
        .then((response) => {
            if (response.status == 200) {
                user = response.data;
                beforeRouterCallback();
                router.replace('/dashboard');
            } else {
                beforeRouterCallback();
                router.replace('/authorization');
            }
        })
        .catch((error) => {
            beforeRouterCallback();
            router.replace('/authorization');
        });
};
var logout = (callback) => {
    axios.post('/api/v1/logout')
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error, null);
        });
};

export default {
    register,
    login,
    refreshUserData,
    logout
};