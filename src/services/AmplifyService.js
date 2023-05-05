"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var aws_amplify_1 = require("aws-amplify");
var amplifyConfig_1 = require("../amplifyConfig");
var logger = new aws_amplify_1.Logger('AmplifyService');
/**
 * Provides helpers for working with Amplify
 */
var AmplifyService = /** @class */ (function () {
    function AmplifyService() {
    }
    AmplifyService.sdkCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, aws_amplify_1.Auth.currentUserCredentials()];
                    case 1:
                        credentials = _a.sent();
                        return [2 /*return*/, aws_amplify_1.Auth.essentialCredentials(credentials)];
                    case 2:
                        error_1 = _a.sent();
                        logger.error('unable to get sdk creds', error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AmplifyService.configure = function () {
        aws_amplify_1.Amplify.configure(amplifyConfig_1["default"]);
        return (amplifyConfig_1["default"]);
    };
    AmplifyService.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, aws_amplify_1.Auth.currentAuthenticatedUser()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        logger.error('isAuthenticated()', error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AmplifyService.getUserId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, email;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aws_amplify_1.Auth.currentSession()];
                    case 1:
                        user = (_a.sent()).getIdToken().decodePayload();
                        email = null;
                        if (user.identities && user.identities.length > 0) {
                            // Federated Auth
                            email = user.identities[0].userId;
                        }
                        else {
                            // User Pool Auth
                            email = user.email;
                        }
                        return [2 /*return*/, email];
                }
            });
        });
    };
    /**
     * Initiates federated sign-in. When custom provider is passed in, will redirect to IDP without showing hosted ui.
     * @param customProvider Cognito Identity Provider Id
     */
    AmplifyService.federatedLogin = function (customProvider) {
        if (customProvider) {
            aws_amplify_1.Auth.federatedSignIn({
                customProvider: customProvider
            });
        }
        else {
            aws_amplify_1.Auth.federatedSignIn();
        }
    };
    AmplifyService.getAccessJwtToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, accessToken, jwtToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = aws_amplify_1.Auth.currentSession();
                        return [4 /*yield*/, session];
                    case 1:
                        accessToken = (_a.sent()).getAccessToken();
                        jwtToken = accessToken.getJwtToken();
                        return [2 /*return*/, jwtToken];
                }
            });
        });
    };
    AmplifyService.getIdToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, idToken, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, aws_amplify_1.Auth.currentSession()];
                    case 1:
                        session = _a.sent();
                        idToken = session.getIdToken();
                        return [2 /*return*/, idToken];
                    case 2:
                        error_3 = _a.sent();
                        logger.error('unable to get id token', error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AmplifyService.getClaims = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, idToken, payload, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, aws_amplify_1.Auth.currentSession()];
                    case 1:
                        session = _a.sent();
                        idToken = session.getIdToken();
                        payload = idToken.decodePayload();
                        return [2 /*return*/, {
                                username: payload['cognito:username'],
                                email: payload.email,
                                groups: payload['cognito:groups'] ? payload['cognito:groups'] : []
                            }];
                    case 2:
                        error_4 = _a.sent();
                        console.log('claims error');
                        console.log(error_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AmplifyService.setHubListener = function (updateAuthUser) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("Set Hub listener called with current updateAuthUser:", JSON.stringify(updateAuthUser));
                try {
                    aws_amplify_1.Hub.listen('auth', function (_a) {
                        var _b = _a.payload, event = _b.event, data = _b.data;
                        console.log("Call Hub listener called with event:", event);
                        switch (event) {
                            case 'signIn':
                                _this.getClaims()
                                    .then(function (claims) {
                                    if (!claims) {
                                        console.log('not auth');
                                        // AmplifyService.federatedLogin();
                                    }
                                    else {
                                        updateAuthUser({
                                            username: claims.username,
                                            userType: 'user',
                                            groups: claims.groups,
                                            email: claims.email
                                        });
                                    }
                                })["catch"](function (err) {
                                    console.log(err);
                                    //window.location.replace(`${window.location.origin}/error-pages/error-500`);
                                });
                                break;
                            case 'signOut':
                                console.log('sign out');
                                break;
                        }
                    });
                }
                catch (err) {
                    logger.error(err.toString());
                }
                return [2 /*return*/];
            });
        });
    };
    return AmplifyService;
}());
exports["default"] = AmplifyService;
