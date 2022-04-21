import { MsgVerifyInvariant } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgVerifyInvariant;
        fromJSON(object: any): MsgVerifyInvariant;
        toJSON(message: MsgVerifyInvariant): unknown;
        fromPartial<I extends unknown>(object: I): MsgVerifyInvariant;
    };
};
export declare const load: (protoRegistry: Registry) => void;
