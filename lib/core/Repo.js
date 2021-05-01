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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
// import NodeGit from 'nodegit'
var recursive_readdir_1 = __importDefault(require("recursive-readdir"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var shortid_1 = __importDefault(require("shortid"));
/**
 *
 */
var Repo = /** @class */ (function () {
    /**
     *
     * @param code
     */
    function Repo(code) {
        this._code = code;
    }
    Object.defineProperty(Repo.prototype, "code", {
        /**
         *
         */
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "remote", {
        // /**
        //  *
        //  */
        // get local() {
        //   return this._local
        // }
        /**
         *
         */
        get: function () {
            return this._remote;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "owner", {
        /**
         *
         */
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "nodeDir", {
        /**
         *
         */
        get: function () {
            return this._nodeDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "hasRemote", {
        // /**
        //  *
        //  */
        // get isOpen() {
        //   return this._local !== undefined
        // }
        /**
         *
         */
        get: function () {
            return this._remote !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "isRemoteForeign", {
        /**
         *
         */
        get: function () {
            var _a;
            return this.owner !== ((_a = this.code.user) === null || _a === void 0 ? void 0 : _a.login);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Repo.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.loadRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.commit = function (paths, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Repo.prototype.runNamecheapCommand = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Repo.prototype.getNamespaceHosts = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Repo.prototype.updateNamespaceHosts = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Repo.prototype.pinDeployment = function (deployment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.setupDeployment = function (id) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_2) {
                (_c = (_b = (_a = this.code) === null || _a === void 0 ? void 0 : _a.dir) === null || _b === void 0 ? void 0 : _b.dir(".web")) === null || _c === void 0 ? void 0 : _c.copy((_f = (_e = (_d = this.dir) === null || _d === void 0 ? void 0 : _d.dir(id)) === null || _e === void 0 ? void 0 : _e.make()) === null || _f === void 0 ? void 0 : _f.dir("web"));
                (_j = (_h = (_g = this.code) === null || _g === void 0 ? void 0 : _g.dir) === null || _h === void 0 ? void 0 : _h.dir('content')) === null || _j === void 0 ? void 0 : _j.copy((_m = (_l = (_k = this.dir) === null || _k === void 0 ? void 0 : _k.dir(id)) === null || _l === void 0 ? void 0 : _l.make()) === null || _m === void 0 ? void 0 : _m.dir('content'));
                (_q = (_p = (_o = this.code) === null || _o === void 0 ? void 0 : _o.dir) === null || _p === void 0 ? void 0 : _p.dir('carmel')) === null || _q === void 0 ? void 0 : _q.copy((_u = (_t = (_s = (_r = this.dir) === null || _r === void 0 ? void 0 : _r.dir(id)) === null || _s === void 0 ? void 0 : _s.dir("code")) === null || _t === void 0 ? void 0 : _t.make()) === null || _u === void 0 ? void 0 : _u.dir('carmel'));
                (_x = (_w = (_v = this.code) === null || _v === void 0 ? void 0 : _v.dir) === null || _w === void 0 ? void 0 : _w.file('.carmel.json')) === null || _x === void 0 ? void 0 : _x.copy((_1 = (_0 = (_z = (_y = this.dir) === null || _y === void 0 ? void 0 : _y.dir(id)) === null || _z === void 0 ? void 0 : _z.dir("code")) === null || _0 === void 0 ? void 0 : _0.make()) === null || _1 === void 0 ? void 0 : _1.file('carmel.json'));
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.push = function () {
        var e_1, _a;
        var _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var deploymentId, rootDir, ipfsConfig, deploymentRoot, ignores, files, deployment, ipfsClient, node, localGatewayUrl, publicGatewayUrl, deployed, _g, _h, result, e_1_1, deploymentData;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!((_b = this.dir) === null || _b === void 0 ? void 0 : _b.exists) || !((_c = this.nodeDir) === null || _c === void 0 ? void 0 : _c.exists))
                            return [2 /*return*/];
                        deploymentId = shortid_1.default.generate();
                        return [4 /*yield*/, this.setupDeployment(deploymentId)];
                    case 1:
                        _j.sent();
                        rootDir = this.dir.dir(deploymentId);
                        process.env.IPFS_PATH = (_f = (_e = (_d = this.nodeDir) === null || _d === void 0 ? void 0 : _d.dir('ipfs')) === null || _e === void 0 ? void 0 : _e.make()) === null || _f === void 0 ? void 0 : _f.path;
                        ipfsConfig = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(process.env.IPFS_PATH, 'config'), 'utf-8'));
                        deploymentRoot = "/deployments/" + deploymentId;
                        ignores = ['.DS_Store'];
                        return [4 /*yield*/, recursive_readdir_1.default(rootDir.path)];
                    case 2:
                        files = _j.sent();
                        files = files.filter(function (file) { return !ignores.includes(path_1.default.basename(file)); }).map(function (file) {
                            var info = fs_1.default.statSync(file);
                            return {
                                path: deploymentRoot + "/" + path_1.default.relative(rootDir.path, file),
                                content: fs_1.default.readFileSync(file),
                                mtime: info.mtime
                            };
                        });
                        deployment = {
                            timestamp: Date.now(),
                            id: deploymentId,
                            files: files.length
                        };
                        if (!files || files.length === 0)
                            return [2 /*return*/, deployment];
                        ipfsClient = require('ipfs-http-client');
                        node = ipfsClient(ipfsConfig.Addresses.API);
                        localGatewayUrl = "http://" + node.gatewayHost + ":" + node.gatewayPort;
                        publicGatewayUrl = "https://ipfs.io";
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return node.files.write(file.path, file.content, {
                                parents: true, create: true, mtime: file.mtime
                            }); }))];
                    case 3:
                        _j.sent();
                        deployed = [];
                        _j.label = 4;
                    case 4:
                        _j.trys.push([4, 9, 10, 15]);
                        _g = __asyncValues(node.files.ls(deploymentRoot));
                        _j.label = 5;
                    case 5: return [4 /*yield*/, _g.next()];
                    case 6:
                        if (!(_h = _j.sent(), !_h.done)) return [3 /*break*/, 8];
                        result = _h.value;
                        deployed.push(result);
                        _j.label = 7;
                    case 7: return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _j.trys.push([10, , 13, 14]);
                        if (!(_h && !_h.done && (_a = _g.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _a.call(_g)];
                    case 11:
                        _j.sent();
                        _j.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15:
                        deploymentData = {
                            code: deployed.find(function (d) { return d.name === 'code'; }),
                            content: deployed.find(function (d) { return d.name === 'content'; }),
                            web: deployed.find(function (d) { return d.name === 'web'; })
                        };
                        deployment.deployed = {
                            code: { cid: deploymentData.code.cid.toString() },
                            web: { cid: deploymentData.web.cid.toString() },
                            content: { cid: deploymentData.content.cid.toString() }
                        };
                        // const deployedWebNamed = await node.name.publish(deployedWeb.cid)
                        // deployment.urls = {
                        //   publicRaw: `${publicGatewayUrl}/ipfs/${deployedWeb.cid}`,
                        //   publicNamed: `${publicGatewayUrl}/ipns/${deployedWebNamed.name}`
                        // }
                        // const dns = await this.updateNamespaceHosts({ 
                        //   cid: deployedWeb.cid
                        // })
                        // const pin = await this.pinDeployment(deployment)
                        // console.log(dns)
                        // console.log(pin)
                        // response.elements.map((e: any) => {
                        //   console.log("<<<<<<>llllll>>>>", e)
                        //   if (e.name === 'ApiResponse') {
                        //     console.log(">>EL?:", e.attributes.Status)
                        //     console.log(">>ELel:", e.elements)        
                        //   }
                        // })
                        // const shorten = await axios.post(`https://rel.ink/api/links/`,  {
                        //   url: deployment.urls.publicRaw
                        // }, { 
                        //   headers: { 'Content-Type': 'application/json' }
                        // })
                        // if (!shorten || !shorten.data || !shorten.data.hashid) {
                        //   return deployment
                        // }
                        // deployment.urls.short = `https://rel.ink/${shorten.data.hashid}`
                        // console.log('done. waiting to go live ...')
                        // console.log(deployment.urls)
                        // const check = async () => {
                        //   try {
                        //     console.log('checking ...')
                        //     return await axios.get(deployment.urls.publicRaw)
                        //   } catch {}
                        // }
                        // await new Promise((done) => {
                        //   (async () => {
                        //     let checked: any
                        //     while(!checked || checked.status !== 200) {
                        //       checked = await check()
                        //     }
                        //     done()
                        //   })()
                        // })
                        return [2 /*return*/, deployment
                            // if (!this.isOpen) return
                            // let remote = await this.local?.getRemote('origin')
                            // if (!remote) {
                            //   remote = await NodeGit.Remote.create(
                            //     this.local!,
                            //     'origin',
                            //     `git@github.com:${this.owner}/${this.name}.git`
                            //   )
                            // }
                            // await remote?.push(['refs/heads/master:refs/heads/master'], {
                            //   callbacks: {
                            //     credentials: this.code.credentials,
                            //   },
                            // })
                        ];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.setupHosting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.initialize = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                // Always start with a fresh location
                this._dir = (_c = (_b = (_a = this.code) === null || _a === void 0 ? void 0 : _a.dir) === null || _b === void 0 ? void 0 : _b.dir('.deployed')) === null || _c === void 0 ? void 0 : _c.make();
                this._nodeDir = (_d = this.code.product.session.dir.dir('node')) === null || _d === void 0 ? void 0 : _d.make();
                return [2 /*return*/];
            });
        });
    };
    return Repo;
}());
exports.Repo = Repo;
//# sourceMappingURL=Repo.js.map