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
var AmplifyService_1 = require("../services/AmplifyService");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.loaded = false;
        // These properties are assigned from config.json
        this.Auth = {};
        this.environment = '';
        this.region = '';
        this.apiUrl = '';
        this.cognito = {
            userPoolId: '',
            clientId: '',
            identityPoolId: '',
            domain: '',
            hostedAuthenticationUrl: '',
            logoutUrl: ''
        };
        this.version = '';
        this.logger = new aws_amplify_1.Logger('ConfigurationService');
    }
    ConfigurationService.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, cfg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.configureAmplify();
                        return [4 /*yield*/, fetch('/config.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        cfg = _a.sent();
                        console.log('Config fetched:', cfg);
                        Object.assign(this, cfg);
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ConfigurationService.prototype, "loginUrl", {
        get: function () {
            return window.location.origin;
        },
        enumerable: false,
        configurable: true
    });
    ConfigurationService.prototype.isLocal = function () {
        return this.environment === 'local';
    };
    ConfigurationService.prototype.isDev = function () {
        return this.environment === 'dev';
    };
    ConfigurationService.prototype.configureAmplify = function () {
        aws_amplify_1.Logger.LOG_LEVEL = this.isLocal() || this.isDev() ? 'DEBUG' : 'INFO';
        var cfg = AmplifyService_1["default"].configure();
        console.log('Config init:', cfg);
        for (var c in this.cognito) {
            if (cfg.Auth.hasOwnProperty(c)) {
                this.cognito[c] = cfg.Auth[c];
            }
        }
        this.region = cfg.aws_project_region;
        var options = {
            Analytics: {
                disabled: true
            },
            Auth: {
                region: this.region,
                identityPoolId: this.cognito.identityPoolId,
                userPoolId: this.cognito.userPoolId,
                userPoolWebClientId: this.cognito.clientId,
                oauth: {
                    domain: this.cognito.domain,
                    mandatorySignIn: true,
                    redirectSignIn: this.loginUrl,
                    redirectSignOut: this.cognito.logoutUrl ? this.cognito.logoutUrl : this.loginUrl + '/logout/',
                    responseType: 'code',
                    // scope: ['email']
                    // scope: ['openid']
                    scope: ['email', 'openid']
                    // scope: ['email', 'openid', 'profile']
                }
            }
        };
        aws_amplify_1.Auth.configure(options);
    };
    return ConfigurationService;
}());
exports["default"] = ConfigurationService;
