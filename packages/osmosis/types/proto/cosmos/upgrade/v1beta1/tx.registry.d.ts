import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        encode(message: MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSoftwareUpgrade;
        fromJSON(object: any): MsgSoftwareUpgrade;
        toJSON(message: MsgSoftwareUpgrade): unknown;
        fromPartial<I extends unknown>(object: I): MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCancelUpgrade;
        fromJSON(object: any): MsgCancelUpgrade;
        toJSON(message: MsgCancelUpgrade): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgCancelUpgrade;
    };
};
