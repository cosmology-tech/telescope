import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        encode(message: MsgConnectionOpenInit, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgConnectionOpenInit;
        fromJSON(object: any): MsgConnectionOpenInit;
        toJSON(message: MsgConnectionOpenInit): unknown;
        fromPartial<I extends unknown>(object: I): MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        encode(message: MsgConnectionOpenTry, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgConnectionOpenTry;
        fromJSON(object: any): MsgConnectionOpenTry;
        toJSON(message: MsgConnectionOpenTry): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        encode(message: MsgConnectionOpenAck, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgConnectionOpenAck;
        fromJSON(object: any): MsgConnectionOpenAck;
        toJSON(message: MsgConnectionOpenAck): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        encode(message: MsgConnectionOpenConfirm, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgConnectionOpenConfirm;
        fromJSON(object: any): MsgConnectionOpenConfirm;
        toJSON(message: MsgConnectionOpenConfirm): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgConnectionOpenConfirm;
    };
};
export declare const load: (protoRegistry: Registry) => void;
