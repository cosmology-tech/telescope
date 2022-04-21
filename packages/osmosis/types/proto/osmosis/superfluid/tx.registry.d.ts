import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSuperfluidDelegate;
        fromJSON(object: any): MsgSuperfluidDelegate;
        toJSON(message: MsgSuperfluidDelegate): unknown;
        fromPartial<I extends unknown>(object: I): MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSuperfluidUndelegate;
        fromJSON(object: any): MsgSuperfluidUndelegate;
        toJSON(message: MsgSuperfluidUndelegate): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSuperfluidUnbondLock;
        fromJSON(object: any): MsgSuperfluidUnbondLock;
        toJSON(message: MsgSuperfluidUnbondLock): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgLockAndSuperfluidDelegate;
        fromJSON(object: any): MsgLockAndSuperfluidDelegate;
        toJSON(message: MsgLockAndSuperfluidDelegate): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgLockAndSuperfluidDelegate;
    };
};
export declare const load: (protoRegistry: Registry) => void;
