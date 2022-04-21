import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/osmosis.lockup.MsgLockTokens": {
        encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgLockTokens;
        fromJSON(object: any): MsgLockTokens;
        toJSON(message: MsgLockTokens): unknown;
        fromPartial<I extends unknown>(object: I): MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgBeginUnlockingAll;
        fromJSON(object: any): MsgBeginUnlockingAll;
        toJSON(message: MsgBeginUnlockingAll): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgBeginUnlocking;
        fromJSON(object: any): MsgBeginUnlocking;
        toJSON(message: MsgBeginUnlocking): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgBeginUnlocking;
    };
};
export declare const load: (protoRegistry: Registry) => void;
