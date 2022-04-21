import { MsgTransfer } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgTransfer;
        fromJSON(object: any): MsgTransfer;
        toJSON(message: MsgTransfer): unknown;
        fromPartial<I extends unknown>(object: I): MsgTransfer;
    };
};
