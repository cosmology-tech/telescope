import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: Long;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponse {
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
    fromAddress: string;
    toAddress: string;
    startTime: Long;
    vestingPeriods: Period[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
export declare const MsgCreateVestingAccount: {
    encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
    fromPartial<I extends {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
        endTime?: any;
        delayed?: boolean;
    } & {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        endTime?: any;
        delayed?: boolean;
    } & Record<Exclude<keyof I, keyof MsgCreateVestingAccount>, never>>(object: I): MsgCreateVestingAccount;
};
export declare const MsgCreateVestingAccountResponse: {
    encode(_: MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    toJSON(_: MsgCreateVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateVestingAccountResponse;
};
export declare const MsgCreatePermanentLockedAccount: {
    encode(message: MsgCreatePermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount;
    fromJSON(object: any): MsgCreatePermanentLockedAccount;
    toJSON(message: MsgCreatePermanentLockedAccount): unknown;
    fromPartial<I extends {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgCreatePermanentLockedAccount>, never>>(object: I): MsgCreatePermanentLockedAccount;
};
export declare const MsgCreatePermanentLockedAccountResponse: {
    encode(_: MsgCreatePermanentLockedAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse;
    fromJSON(_: any): MsgCreatePermanentLockedAccountResponse;
    toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreatePermanentLockedAccountResponse;
};
export declare const MsgCreatePeriodicVestingAccount: {
    encode(message: MsgCreatePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount;
    fromJSON(object: any): MsgCreatePeriodicVestingAccount;
    toJSON(message: MsgCreatePeriodicVestingAccount): unknown;
    fromPartial<I extends {
        fromAddress?: string;
        toAddress?: string;
        startTime?: any;
        vestingPeriods?: {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        startTime?: any;
        vestingPeriods?: {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vestingPeriods"][number]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["vestingPeriods"][number]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["vestingPeriods"][number], keyof Period>, never>)[] & Record<Exclude<keyof I["vestingPeriods"], keyof {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgCreatePeriodicVestingAccount>, never>>(object: I): MsgCreatePeriodicVestingAccount;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse;
    fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse;
    toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreatePeriodicVestingAccountResponse;
};
