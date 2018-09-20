const handleApiCallResponse = function(componentReference, callback, error, response) {
    if (!error) {
        if (response.status === 200) {
            componentReference.$snotify.success(response.data.message);
            callback(componentReference);
        } else {
            componentReference.$snotify.error(response.data.errorMessage);
        }
    } else {
        if (typeof error.response !== 'undefined' && typeof error.response.data === 'object') {
            componentReference.$snotify.error(error.response.data.errorMessage);
        } else {
            componentReference.$snotify.error('Problem connecting to the server');
        }
    }
};

export default {
    handleApiCallResponse
};