import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration: Date;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: string;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset: Date;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance: Any;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance: Any;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    fromPartial<I extends {
        spendLimit?: {
            denom?: string;
            amount?: string;
        }[];
        expiration?: Date;
    } & {
        spendLimit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["spendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["spendLimit"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        expiration?: Date;
    } & Record<Exclude<keyof I, keyof BasicAllowance>, never>>(object: I): BasicAllowance;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    fromPartial<I extends {
        basic?: {
            spendLimit?: {
                denom?: string;
                amount?: string;
            }[];
            expiration?: Date;
        };
        period?: string;
        periodSpendLimit?: {
            denom?: string;
            amount?: string;
        }[];
        periodCanSpend?: {
            denom?: string;
            amount?: string;
        }[];
        periodReset?: Date;
    } & {
        basic?: {
            spendLimit?: {
                denom?: string;
                amount?: string;
            }[];
            expiration?: Date;
        } & {
            spendLimit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["basic"]["spendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["basic"]["spendLimit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            expiration?: Date;
        } & Record<Exclude<keyof I["basic"], keyof BasicAllowance>, never>;
        period?: string;
        periodSpendLimit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["periodSpendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["periodSpendLimit"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        periodCanSpend?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["periodCanSpend"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["periodCanSpend"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        periodReset?: Date;
    } & Record<Exclude<keyof I, keyof PeriodicAllowance>, never>>(object: I): PeriodicAllowance;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    fromPartial<I extends {
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        allowedMessages?: string[];
    } & {
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>;
        allowedMessages?: string[] & string[] & Record<Exclude<keyof I["allowedMessages"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof AllowedMsgAllowance>, never>>(object: I): AllowedMsgAllowance;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial<I extends {
        granter?: string;
        grantee?: string;
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        granter?: string;
        grantee?: string;
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof Grant>, never>>(object: I): Grant;
};
