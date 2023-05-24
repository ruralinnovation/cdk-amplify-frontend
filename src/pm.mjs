import fetch from 'node-fetch';

export default class PM {

    constructor (clientId, username, password) {
        this.environment = {
            cognitoClientId: clientId,
            cognitoUserName: username,
            cognitoUserPassword: password,
            get: function (key) {
                console.log(key);
                return this[key];
            },
            set: function (key, value) {
                console.log(key, value);
                this[key] = value;
            }
        }
    }

    async sendRequest (request, callback) {

        const response = await fetch(request.url, {
            method: request.method,
            body: request.body.raw,
            headers: request.header
        });

        response.json().then(data => callback(null, data));

    }
}
