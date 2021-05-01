"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __1 = require("../..");
var props = {
    id: "node",
    longRunning: true,
    type: __1.CommandType.WORKSPACE,
    title: "Manage your Carmel Node"
};
/**
 *
 * @category Commands
 */
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    /** @internal */
    function Node() {
        return _super.call(this, props) || this;
    }
    /** @internal */
    Node.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /** @internal */
    Node.prototype.start = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var createController, node;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        createController = require('ipfsd-ctl').createController;
                        process.env.IPFS_PATH = (_d = (_c = (_b = (_a = this.session.dir.dir('node')) === null || _a === void 0 ? void 0 : _a.make()) === null || _b === void 0 ? void 0 : _b.dir('ipfs')) === null || _c === void 0 ? void 0 : _c.make()) === null || _d === void 0 ? void 0 : _d.path;
                        console.log(process.env.IPFS_PATH);
                        return [4 /*yield*/, createController({
                                type: 'js',
                                ipfsModule: require('ipfs'),
                                ipfsHttpModule: require('ipfs-http-client'),
                                ipfsBin: require.resolve('ipfs/src/cli.js'),
                                init: true,
                                start: true,
                                ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
                            })];
                    case 1:
                        node = _e.sent();
                        return [2 /*return*/, node];
                }
            });
        });
    };
    /** @internal */
    Node.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Look up the command
                        // const start = this.arg("start")
                        // const stop = this.arg("stop")
                        console.log("s....");
                        // const config: any = this.session?.manifest?.load()
                        // const isRunning = config.ipfsRunning
                        // if (start && !isRunning) {
                        return [4 /*yield*/, this.start()];
                    case 1:
                        // const config: any = this.session?.manifest?.load()
                        // const isRunning = config.ipfsRunning
                        // if (start && !isRunning) {
                        _a.sent();
                        console.log("s2....");
                        return [2 /*return*/];
                }
            });
        });
    };
    return Node;
}(__1.Command));
exports.default = Node;
//# sourceMappingURL=index.js.map