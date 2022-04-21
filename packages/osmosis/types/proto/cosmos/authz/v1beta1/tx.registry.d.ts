import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.authz.v1beta1.MsgGrant": {
        encode(message: MsgGrant, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgGrant;
        fromJSON(object: any): MsgGrant;
        toJSON(message: MsgGrant): unknown;
        fromPartial<I extends unknown>(object: I): MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExec;
        fromJSON(object: any): MsgExec;
        toJSON(message: MsgExec): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        encode(message: MsgRevoke, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgRevoke;
        fromJSON(object: any): MsgRevoke;
        toJSON(message: MsgRevoke): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgRevoke;
    };
};
