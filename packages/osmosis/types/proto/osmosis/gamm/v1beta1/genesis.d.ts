import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
    pools: Any[];
    nextPoolNumber: Long;
    params: Params;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        poolCreationFee?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        poolCreationFee?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["poolCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["poolCreationFee"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "poolCreationFee">, never>>(object: I): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
        nextPoolNumber?: any;
        params?: {
            poolCreationFee?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        pools?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
        nextPoolNumber?: any;
        params?: {
            poolCreationFee?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            poolCreationFee?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["params"]["poolCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["params"]["poolCreationFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["params"], "poolCreationFee">, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
