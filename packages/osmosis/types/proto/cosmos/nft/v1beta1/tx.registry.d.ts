import { MsgSend } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/cosmos.nft.v1beta1.MsgSend": {
        encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSend;
        fromJSON(object: any): MsgSend;
        toJSON(message: MsgSend): unknown;
        fromPartial<I extends unknown>(object: I): MsgSend;
    };
};
export declare const load: (protoRegistry: Registry) => void;
