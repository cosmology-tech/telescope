"use strict";
exports.__esModule = true;
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
var _m0 = require("protobufjs/minimal");
var helpers_1 = require("@osmonauts/helpers");
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
exports.Http = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.rules; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map(function (e) { return exports.HttpRule.fromJSON(e); }) : [],
            fullyDecodeReservedExpansion: (0, helpers_1.isSet)(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(function (e) { return e ? exports.HttpRule.toJSON(e) : undefined; });
        }
        else {
            obj.rules = [];
        }
        message.fullyDecodeReservedExpansion !== undefined && (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        message.fullyDecodeReservedExpansion = (_b = object.fullyDecodeReservedExpansion) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        "delete": undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
exports.HttpRule = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message["delete"] !== undefined) {
            writer.uint32(42).string(message["delete"]);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (var _i = 0, _a = message.additionalBindings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttpRule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message["delete"] = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            selector: (0, helpers_1.isSet)(object.selector) ? String(object.selector) : "",
            get: (0, helpers_1.isSet)(object.get) ? String(object.get) : undefined,
            put: (0, helpers_1.isSet)(object.put) ? String(object.put) : undefined,
            post: (0, helpers_1.isSet)(object.post) ? String(object.post) : undefined,
            "delete": (0, helpers_1.isSet)(object["delete"]) ? String(object["delete"]) : undefined,
            patch: (0, helpers_1.isSet)(object.patch) ? String(object.patch) : undefined,
            custom: (0, helpers_1.isSet)(object.custom) ? exports.CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: (0, helpers_1.isSet)(object.body) ? String(object.body) : "",
            responseBody: (0, helpers_1.isSet)(object.responseBody) ? String(object.responseBody) : "",
            additionalBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings) ? object.additionalBindings.map(function (e) { return exports.HttpRule.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message["delete"] !== undefined && (obj["delete"] = message["delete"]);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined && (obj.custom = message.custom ? exports.CustomHttpPattern.toJSON(message.custom) : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.responseBody !== undefined && (obj.responseBody = message.responseBody);
        if (message.additionalBindings) {
            obj.additionalBindings = message.additionalBindings.map(function (e) { return e ? exports.HttpRule.toJSON(e) : undefined; });
        }
        else {
            obj.additionalBindings = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : "";
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message["delete"] = (_e = object["delete"]) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? exports.CustomHttpPattern.fromPartial(object.custom) : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : "";
        message.responseBody = (_h = object.responseBody) !== null && _h !== void 0 ? _h : "";
        message.additionalBindings = ((_j = object.additionalBindings) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
exports.CustomHttpPattern = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            kind: (0, helpers_1.isSet)(object.kind) ? String(object.kind) : "",
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
