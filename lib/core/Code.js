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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var __1 = require("..");
/**
 *
 */
var Code = /** @class */ (function () {
    /**
     *
     * @param product
     */
    function Code(product) {
        this._product = product;
        this._deployRepo = new __1.Repo(this);
    }
    Object.defineProperty(Code.prototype, "user", {
        /**
         *
         */
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "deployRepo", {
        /**
         *
         */
        get: function () {
            return this._deployRepo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "keys", {
        /**
         *
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "key", {
        /**
         *
         */
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "keystore", {
        /**
         *
         */
        get: function () {
            return this._keystore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "credentials", {
        /**
         *
         */
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "service", {
        /**
         *
         */
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "product", {
        /**
         *
         */
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Code.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this._keystore = this.product.session?.keystore
                        // this._user = this.product.session?.user!
                        // this._keys = this.product.session?.keys(AccessTokenType.GITHUB) || []
                        // this._key = this.keys![0]
                        this._dir = this.product.dir;
                        // try {
                        //   this._credentials = (url: string, username: string) =>
                        //     NodeGit.Cred.sshKeyNew(
                        //       username,
                        //       this.key?.files.get('public.ssh')?.path!,
                        //       this.key?.files.get('private.ssh')?.path!,
                        //       ''
                        //     )
                        // } catch {}
                        // try {
                        //   this._service = new Octokit({
                        //     auth: this.product?.session?.token(AccessTokenType.GITHUB),
                        //   })
                        // } catch {}
                        return [4 /*yield*/, this.deployRepo.initialize()];
                    case 1:
                        // try {
                        //   this._credentials = (url: string, username: string) =>
                        //     NodeGit.Cred.sshKeyNew(
                        //       username,
                        //       this.key?.files.get('public.ssh')?.path!,
                        //       this.key?.files.get('private.ssh')?.path!,
                        //       ''
                        //     )
                        // } catch {}
                        // try {
                        //   this._service = new Octokit({
                        //     auth: this.product?.session?.token(AccessTokenType.GITHUB),
                        //   })
                        // } catch {}
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Code.prototype.setupDeployment = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.deployRepo) === null || _a === void 0 ? void 0 : _a.setupHosting())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Code.prototype.deploy = function (target) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.setupDeployment()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, (_a = this.deployRepo) === null || _a === void 0 ? void 0 : _a.push()];
                }
            });
        });
    };
    return Code;
}());
exports.Code = Code;
//# sourceMappingURL=Code.js.map