"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandType = exports.Target = exports.EngineState = exports.SessionState = exports.ServerState = exports.ProductState = exports.ArtifactsKind = void 0;
var ArtifactsKind;
(function (ArtifactsKind) {
    ArtifactsKind["UNKNOWN"] = "unknown";
    ArtifactsKind["TEMPLATES"] = "templates";
    ArtifactsKind["ASSETS"] = "assets";
    ArtifactsKind["CHUNKS"] = "chunks";
})(ArtifactsKind = exports.ArtifactsKind || (exports.ArtifactsKind = {}));
var ProductState;
(function (ProductState) {
    ProductState[ProductState["UNKNOWN"] = 0] = "UNKNOWN";
    ProductState[ProductState["UNLOADED"] = 10] = "UNLOADED";
    ProductState[ProductState["LOADING"] = 20] = "LOADING";
    ProductState[ProductState["LOADED"] = 30] = "LOADED";
    ProductState[ProductState["READY"] = 40] = "READY";
})(ProductState = exports.ProductState || (exports.ProductState = {}));
var ServerState;
(function (ServerState) {
    ServerState[ServerState["UNKNOWN"] = 0] = "UNKNOWN";
    ServerState[ServerState["UNINITIALIZED"] = 10] = "UNINITIALIZED";
    ServerState[ServerState["INITIALIZING"] = 20] = "INITIALIZING";
    ServerState[ServerState["INITIALIZED"] = 30] = "INITIALIZED";
    ServerState[ServerState["STOPPED"] = 40] = "STOPPED";
    ServerState[ServerState["STARTING"] = 50] = "STARTING";
    ServerState[ServerState["STARTED"] = 60] = "STARTED";
    ServerState[ServerState["READY"] = 70] = "READY";
    ServerState[ServerState["RUNNING"] = 80] = "RUNNING";
})(ServerState = exports.ServerState || (exports.ServerState = {}));
var SessionState;
(function (SessionState) {
    SessionState[SessionState["UNKNOWN"] = 0] = "UNKNOWN";
    SessionState[SessionState["UNINITIALIZED"] = 10] = "UNINITIALIZED";
    SessionState[SessionState["INITIALIZING"] = 20] = "INITIALIZING";
    SessionState[SessionState["INITIALIZED"] = 30] = "INITIALIZED";
    SessionState[SessionState["READY"] = 40] = "READY";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var EngineState;
(function (EngineState) {
    EngineState[EngineState["UNKNOWN"] = 0] = "UNKNOWN";
    EngineState[EngineState["STOPPED"] = 10] = "STOPPED";
    EngineState[EngineState["STARTING"] = 20] = "STARTING";
    EngineState[EngineState["STARTED"] = 30] = "STARTED";
    EngineState[EngineState["READY"] = 40] = "READY";
    EngineState[EngineState["RUNNING"] = 50] = "RUNNING";
})(EngineState = exports.EngineState || (exports.EngineState = {}));
var Target;
(function (Target) {
    Target["UNKNOWN"] = "unknown";
    Target["NONE"] = "none";
    Target["LOCAL"] = "local";
    Target["WEB"] = "web";
    Target["CLOUD"] = "cloud";
    Target["BLOCKCHAIN"] = "blockchain";
    Target["MOBILE"] = "mobile";
})(Target = exports.Target || (exports.Target = {}));
var CommandType;
(function (CommandType) {
    CommandType["UNKNOWN"] = "unknown";
    CommandType["ENVIRONMENT"] = "environment";
    CommandType["WORKSPACE"] = "workspace";
    CommandType["PRODUCT"] = "product";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
//# sourceMappingURL=base.js.map