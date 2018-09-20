import axios from 'axios';
const config = {
    apiUrl: '/api/v1/',
    apiMethodUrl(method) {
        return this.apiUrl + method;
    }
};

const handlePromise = (promise, callback) => {
    promise
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error, null);
        });
};

const register = (data, callback) => {
    handlePromise(axios.post(config.apiMethodUrl('register'), data), callback);
};
const login = (data, callback) => {
    handlePromise(axios.post(config.apiMethodUrl('login'), data), callback);
};
const getUserData = function(callback) {
    handlePromise(axios.get(config.apiMethodUrl('user_data')), callback);
};
const logout = (callback) => {
    handlePromise(axios.post(config.apiMethodUrl('logout')), callback);
};

export default {
    register,
    login,
    getUserData,
    logout
};