import("./pm.mjs").then(PM => {

    const pm = new PM.default("70o6i77h1orcnvonb9ua3fh58e", process.env.INTEGRATION_TESTING_USERNAME, process.env.INTEGRATION_TESTING_PASSWORD);

    console.log(typeof pm);
    console.log(pm);

    console.log(pm.environment);

    /* BELOW THIS LINE --- Copy to Postman as Pre-request Script */

    var clientId = pm.environment.get("cognitoClientId");
    var username = pm.environment.get("cognitoUserName");
    var password = pm.environment.get("cognitoUserPassword");

    console.log(username);
    console.log(password);
    console.log(clientId);

    pm.sendRequest({
        url: "https://cognito-idp.us-east-1.amazonaws.com/",
        method: 'POST',
        header: {
            'X-Amz-Target':   'AWSCognitoIdentityProviderService.InitiateAuth',
            'Content-Type': 'application/x-amz-json-1.1'
        },
        body: {
            mode: 'raw',
            raw: JSON.stringify({
                "AuthParameters": {
                    "USERNAME": username,
                    "PASSWORD": password
                },
                "AuthFlow": "USER_PASSWORD_AUTH",
                "ClientId": clientId
            }),
            options: {
                raw: {
                    language: 'json'
                }
            }
        }
    }, function (error, response) {
        var data = (typeof response.json === 'function')? response.json(): response;
        console.log(data);
        pm.environment.set("cognitoAccessToken", data.AuthenticationResult.AccessToken);
        pm.environment.set("cognitoIdToken", data.AuthenticationResult.IdToken);
    });
});
