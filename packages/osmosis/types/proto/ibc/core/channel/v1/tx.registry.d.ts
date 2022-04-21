import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelOpenInit;
        fromJSON(object: any): MsgChannelOpenInit;
        toJSON(message: MsgChannelOpenInit): unknown;
        fromPartial<I extends unknown>(object: I): MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelOpenTry;
        fromJSON(object: any): MsgChannelOpenTry;
        toJSON(message: MsgChannelOpenTry): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelOpenAck;
        fromJSON(object: any): MsgChannelOpenAck;
        toJSON(message: MsgChannelOpenAck): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelOpenConfirm;
        fromJSON(object: any): MsgChannelOpenConfirm;
        toJSON(message: MsgChannelOpenConfirm): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelCloseInit;
        fromJSON(object: any): MsgChannelCloseInit;
        toJSON(message: MsgChannelCloseInit): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgChannelCloseConfirm;
        fromJSON(object: any): MsgChannelCloseConfirm;
        toJSON(message: MsgChannelCloseConfirm): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgRecvPacket;
        fromJSON(object: any): MsgRecvPacket;
        toJSON(message: MsgRecvPacket): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgTimeout;
        fromJSON(object: any): MsgTimeout;
        toJSON(message: MsgTimeout): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgTimeoutOnClose;
        fromJSON(object: any): MsgTimeoutOnClose;
        toJSON(message: MsgTimeoutOnClose): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgAcknowledgement;
        fromJSON(object: any): MsgAcknowledgement;
        toJSON(message: MsgAcknowledgement): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): MsgAcknowledgement;
    };
};
