import { MsgUnjail } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgUnjail;
        fromJSON(object: any): MsgUnjail;
        toJSON(message: MsgUnjail): unknown;
        fromPartial<I extends unknown>(object: I): MsgUnjail;
    };
};
