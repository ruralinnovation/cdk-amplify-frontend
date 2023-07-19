const vite_env_test = {
  ...import.meta.env
}

console.log("VITE ENV TEST: ", vite_env_test);

export const aws_config = {
  "aws_project_region": "us-east-1",
  "Auth": {
    "domain": "https://authcori.auth.us-east-1.amazoncognito.com",
    "clientId": `${import.meta.env.VITE_USER_POOL_CLIENT_ID}`,
    "identityPoolId": `${import.meta.env.VITE_IDENTITY_POOL_ID}`,
    "identityPoolRegion": `${import.meta.env.VITE_REGION}`,
    "region": `${import.meta.env.VITE_REGION}`,
    "userPoolId": `${import.meta.env.VITE_USER_POOL_ID}`,
    "userPoolWebClientId": `${import.meta.env.VITE_USER_POOL_CLIENT_ID}`,
    "oauth": {
      "domain": "https://authcori.auth.us-east-1.amazoncognito.com",
      "scope": [ "phone", "email", "profile", "openid", "aws.cognito.signin.user.admin" ],
      "redirectSignIn": "http://localhost:3000/",
      "redirectSignOut": "http://localhost:3000/",
      "responseType": "code", // or "token", note that REFRESH token will only be generated when the responseType is code
    }
  }
};

export default aws_config;
