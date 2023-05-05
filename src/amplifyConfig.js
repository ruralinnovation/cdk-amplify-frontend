"use strict";
exports.__esModule = true;
exports.aws_config = void 0;
exports.aws_config = {
    "aws_project_region": "us-east-1",
    "Auth": {
        "domain": "https://authcori.auth.us-east-1.amazoncognito.com",
        "clientId": "".concat(process.env.REACT_APP_USER_POOL_CLIENT_ID),
        "identityPoolId": "".concat(process.env.REACT_APP_IDENTITY_POOL_ID),
        "identityPoolRegion": "".concat(process.env.REACT_APP_REGION),
        "region": "".concat(process.env.REACT_APP_REGION),
        "userPoolId": "".concat(process.env.REACT_APP_USER_POOL_ID),
        "userPoolWebClientId": "".concat(process.env.REACT_APP_USER_POOL_CLIENT_ID),
        "oauth": {
            "domain": "https://authcori.auth.us-east-1.amazoncognito.com",
            "scope": ["phone", "email", "profile", "openid", "aws.cognito.signin.user.admin"],
            "redirectSignIn": "http://localhost:3000/",
            "redirectSignOut": "http://localhost:3000/",
            "responseType": "code"
        }
    }
};
exports["default"] = exports.aws_config;
