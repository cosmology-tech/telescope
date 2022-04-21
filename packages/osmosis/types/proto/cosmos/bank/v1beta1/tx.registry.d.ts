import { MsgSend, MsgMultiSend } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.bank.v1beta1.MsgSend": {
        encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSend;
        fromJSON(object: any): MsgSend;
        toJSON(message: MsgSend): unknown;
        fromPartial<I extends unknown>(object: I): MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgMultiSend;
        fromJSON(object: any): MsgMultiSend;
        toJSON(message: MsgMultiSend): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgMultiSend;
    };
};
