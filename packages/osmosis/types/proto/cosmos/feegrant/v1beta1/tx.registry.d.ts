import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        encode(message: MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgGrantAllowance;
        fromJSON(object: any): MsgGrantAllowance;
        toJSON(message: MsgGrantAllowance): unknown;
        fromPartial<I extends unknown>(object: I): MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        encode(message: MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgRevokeAllowance;
        fromJSON(object: any): MsgRevokeAllowance;
        toJSON(message: MsgRevokeAllowance): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgRevokeAllowance;
    };
};
export declare const load: (protoRegistry: Registry) => void;
