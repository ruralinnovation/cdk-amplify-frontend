"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ApiClientBase = void 0;
var aws_amplify_1 = require("aws-amplify");
var aws_amplify_2 = require("aws-amplify");
var logger = new aws_amplify_1.Logger('ApiClientBase');
function fetchWithTimeout(resource, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var controller_1, id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options.timeout) return [3 /*break*/, 2];
                    controller_1 = new AbortController();
                    id = setTimeout(function () { return controller_1.abort(); }, options.timeout);
                    return [4 /*yield*/, fetch(resource, __assign(__assign({}, options), { signal: controller_1.signal }))];
                case 1:
                    response = _a.sent();
                    clearTimeout(id);
                    return [2 /*return*/, response];
                case 2: return [4 /*yield*/, fetch(resource, options)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * Common abstractions used by the concrete classes
 */
var ApiClientBase = /** @class */ (function () {
    function ApiClientBase(apiUrl, logger, useAuth) {
        this.apiUrl = apiUrl;
        this.logger = logger;
        this.useAuth = useAuth;
    }
    ApiClientBase.prototype.get = function (endpoint, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(endpoint, 'GET', null, timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiClientBase.prototype.post = function (endpoint, body, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(endpoint, 'POST', body, timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiClientBase.prototype.put = function (endpoint, body, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(endpoint, 'PUT', body, timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiClientBase.prototype["delete"] = function (endpoint, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request(endpoint, 'DELETE', timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiClientBase.prototype.request = function (endpoint, method, body, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var params, _a, _b, _c, url, result, response, errors_1, message;
            var _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _d = {
                            method: method,
                            body: body ? JSON.stringify(body) : undefined
                        };
                        _e = {
                            'Accept-Encoding': 'gzip, deflate'
                        };
                        //'accept': 'application/json;charset=utf-8,*/*',
                        _a = 'Authorization';
                        if (!this.useAuth) return [3 /*break*/, 2];
                        _c = "Bearer ".concat;
                        return [4 /*yield*/, aws_amplify_2.Auth.currentSession()];
                    case 1:
                        _b = _c.apply("Bearer ", [(_g.sent()).getIdToken().getJwtToken()]);
                        return [3 /*break*/, 3];
                    case 2:
                        _b = undefined;
                        _g.label = 3;
                    case 3:
                        params = (_d.headers = (
                        //'accept': 'application/json;charset=utf-8,*/*',
                        _e[_a] = _b,
                            _e),
                            _d);
                        if (timeout) {
                            params.timeout = timeout;
                        }
                        url = this.apiUrl + endpoint;
                        url = encodeURI(url);
                        return [4 /*yield*/, fetchWithTimeout(url, params)];
                    case 4:
                        result = _g.sent();
                        if (!(result.status < 200 || result.status > 299)) return [3 /*break*/, 6];
                        _f = { status: result.status };
                        return [4 /*yield*/, result.text()];
                    case 5:
                        response = (_f.body = _g.sent(), _f);
                        this.logger.error("".concat(method, " ").concat(endpoint, " request failed"), response);
                        if (response.status === 400) {
                            errors_1 = JSON.parse(response.body);
                            message = errors_1.message ||
                                Object.keys(errors_1)
                                    .map(function (key) { return "".concat(errors_1[key].join(', ')); })
                                    .join('; ');
                            throw new Error(message);
                        }
                        else {
                            console.log("".concat(response.status, ": ").concat(JSON.stringify(response.body)));
                            throw JSON.parse(response.body).message;
                        }
                        _g.label = 6;
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    return ApiClientBase;
}());
exports.ApiClientBase = ApiClientBase;
