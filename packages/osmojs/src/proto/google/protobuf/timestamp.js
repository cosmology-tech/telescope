"use strict";
exports.__esModule = true;
exports.Timestamp = void 0;
var _m0 = require("protobufjs/minimal");
var helpers_1 = require("@osmonauts/helpers");
function createBaseTimestamp() {
    return {
        seconds: helpers_1.Long.ZERO,
        nanos: 0
    };
}
exports.Timestamp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
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
            seconds: (0, helpers_1.isSet)(object.seconds) ? helpers_1.Long.fromString(object.seconds) : helpers_1.Long.ZERO,
            nanos: (0, helpers_1.isSet)(object.nanos) ? Number(object.nanos) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.seconds !== undefined && (obj.seconds = (message.seconds || helpers_1.Long.ZERO).toString());
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTimestamp();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? helpers_1.Long.fromValue(object.seconds) : helpers_1.Long.ZERO;
        message.nanos = (_a = object.nanos) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
