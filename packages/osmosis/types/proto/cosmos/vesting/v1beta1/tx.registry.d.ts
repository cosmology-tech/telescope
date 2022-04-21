import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreateVestingAccount;
        fromJSON(object: any): MsgCreateVestingAccount;
        toJSON(message: MsgCreateVestingAccount): unknown;
        fromPartial<I extends unknown>(object: I): MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        encode(message: MsgCreatePermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreatePermanentLockedAccount;
        fromJSON(object: any): MsgCreatePermanentLockedAccount;
        toJSON(message: MsgCreatePermanentLockedAccount): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgCreatePermanentLockedAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        encode(message: MsgCreatePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgCreatePeriodicVestingAccount;
        fromJSON(object: any): MsgCreatePeriodicVestingAccount;
        toJSON(message: MsgCreatePeriodicVestingAccount): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgCreatePeriodicVestingAccount;
    };
};
export declare const load: (protoRegistry: Registry) => void;
