import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
    /** unique identifier for this escrow account */
    id: AccountID;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance: DecCoin;
    /** total coins spent by this account */
    transferred: DecCoin;
    /** block height at which this account was last settled */
    settledAt: Long;
    /**
     * bech32 encoded account address of the depositor.
     * If depositor is same as the owner, then any incoming coins are added to the Balance.
     * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
     */
    depositor: string;
    /**
     * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
     * If there are any funds, they should be spent before spending the Balance.
     */
    funds: DecCoin;
}
/** State stores state for an escrow account */
export declare enum Account_State {
    /** invalid - AccountStateInvalid is an invalid state */
    invalid = 0,
    /** open - AccountOpen is the state when an account is open */
    open = 1,
    /** closed - AccountClosed is the state when an account is closed */
    closed = 2,
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function account_StateFromJSON(object: any): Account_State;
export declare function account_StateToJSON(object: Account_State): string;
/** Payment stores state for a payment */
export interface FractionalPayment {
    accountId: AccountID;
    paymentId: string;
    owner: string;
    state: FractionalPayment_State;
    rate: DecCoin;
    balance: DecCoin;
    withdrawn: Coin;
}
/** Payment State */
export declare enum FractionalPayment_State {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    invalid = 0,
    /** open - PaymentStateOpen is the state when the payment is open */
    open = 1,
    /** closed - PaymentStateClosed is the state when the payment is closed */
    closed = 2,
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State;
export declare function fractionalPayment_StateToJSON(object: FractionalPayment_State): string;
export declare const AccountID: {
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountID;
    fromJSON(object: any): AccountID;
    toJSON(message: AccountID): unknown;
    fromPartial<I extends unknown>(object: I): AccountID;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial<I extends unknown>(object: I): Account;
};
export declare const FractionalPayment: {
    encode(message: FractionalPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FractionalPayment;
    fromJSON(object: any): FractionalPayment;
    toJSON(message: FractionalPayment): unknown;
    fromPartial<I extends unknown>(object: I): FractionalPayment;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
