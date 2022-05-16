import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description: Description;
    commission: CommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: Any;
    value: Coin;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description: Description;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    minSelfDelegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: Coin;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completionTime: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime: Date;
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        };
        commission?: {
            rate?: string;
            maxRate?: string;
            maxChangeRate?: string;
        };
        minSelfDelegation?: string;
        delegatorAddress?: string;
        validatorAddress?: string;
        pubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        value?: {
            denom?: string;
            amount?: string;
        };
    } & {
        description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        } & {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        } & Record<Exclude<keyof I["description"], keyof Description>, never>;
        commission?: {
            rate?: string;
            maxRate?: string;
            maxChangeRate?: string;
        } & {
            rate?: string;
            maxRate?: string;
            maxChangeRate?: string;
        } & Record<Exclude<keyof I["commission"], keyof CommissionRates>, never>;
        minSelfDelegation?: string;
        delegatorAddress?: string;
        validatorAddress?: string;
        pubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pubkey"], keyof Any>, never>;
        value?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["value"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof MsgCreateValidator>, never>>(object: I): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateValidatorResponse;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        };
        validatorAddress?: string;
        commissionRate?: string;
        minSelfDelegation?: string;
    } & {
        description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        } & {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
        } & Record<Exclude<keyof I["description"], keyof Description>, never>;
        validatorAddress?: string;
        commissionRate?: string;
        minSelfDelegation?: string;
    } & Record<Exclude<keyof I, keyof MsgEditValidator>, never>>(object: I): MsgEditValidator;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromJSON(_: any): MsgEditValidatorResponse;
    toJSON(_: MsgEditValidatorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgEditValidatorResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        };
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof MsgDelegate>, never>>(object: I): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDelegateResponse;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromJSON(object: any): MsgBeginRedelegate;
    toJSON(message: MsgBeginRedelegate): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorSrcAddress?: string;
        validatorDstAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        };
    } & {
        delegatorAddress?: string;
        validatorSrcAddress?: string;
        validatorDstAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof MsgBeginRedelegate>, never>>(object: I): MsgBeginRedelegate;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromJSON(object: any): MsgBeginRedelegateResponse;
    toJSON(message: MsgBeginRedelegateResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date;
    } & {
        completionTime?: Date;
    } & Record<Exclude<keyof I, "completionTime">, never>>(object: I): MsgBeginRedelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        };
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof MsgUndelegate>, never>>(object: I): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date;
    } & {
        completionTime?: Date;
    } & Record<Exclude<keyof I, "completionTime">, never>>(object: I): MsgUndelegateResponse;
};
