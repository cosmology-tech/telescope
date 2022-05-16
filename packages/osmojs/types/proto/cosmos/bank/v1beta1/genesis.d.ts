import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the differents coins. */
    denomMetadata: Metadata[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        };
        balances?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        supply?: {
            denom?: string;
            amount?: string;
        }[];
        denomMetadata?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[];
    } & {
        params?: {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        } & {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[] & ({
                denom?: string;
                enabled?: boolean;
            } & {
                denom?: string;
                enabled?: boolean;
            } & Record<Exclude<keyof I["params"]["sendEnabled"][number], keyof import("./bank").SendEnabled>, never>)[] & Record<Exclude<keyof I["params"]["sendEnabled"], keyof {
                denom?: string;
                enabled?: boolean;
            }[]>, never>;
            defaultSendEnabled?: boolean;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        balances?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["balances"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["balances"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["balances"][number], keyof Balance>, never>)[] & Record<Exclude<keyof I["balances"], keyof {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        supply?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["supply"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["supply"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        denomMetadata?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[] & ({
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[] & ({
                denom?: string;
                exponent?: number;
                aliases?: string[];
            } & {
                denom?: string;
                exponent?: number;
                aliases?: string[] & string[] & Record<Exclude<keyof I["denomMetadata"][number]["denomUnits"][number]["aliases"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["denomMetadata"][number]["denomUnits"][number], keyof import("./bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["denomMetadata"][number]["denomUnits"], keyof {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[]>, never>;
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & Record<Exclude<keyof I["denomMetadata"][number], keyof Metadata>, never>)[] & Record<Exclude<keyof I["denomMetadata"], keyof {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial<I extends {
        address?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Balance>, never>>(object: I): Balance;
};
