import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    address: string;
    pubKey: Any;
    accountNumber: Long;
    sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    baseAccount: BaseAccount;
    name: string;
    permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: Long;
    txSigLimit: Long;
    txSizeCostPerByte: Long;
    sigVerifyCostEd25519: Long;
    sigVerifyCostSecp256k1: Long;
}
export declare const BaseAccount: {
    encode(message: BaseAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount;
    fromJSON(object: any): BaseAccount;
    toJSON(message: BaseAccount): unknown;
    fromPartial<I extends {
        address?: string;
        pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        accountNumber?: any;
        sequence?: any;
    } & {
        address?: string;
        pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof Any>, never>;
        accountNumber?: any;
        sequence?: any;
    } & Record<Exclude<keyof I, keyof BaseAccount>, never>>(object: I): BaseAccount;
};
export declare const ModuleAccount: {
    encode(message: ModuleAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount;
    fromJSON(object: any): ModuleAccount;
    toJSON(message: ModuleAccount): unknown;
    fromPartial<I extends {
        baseAccount?: {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            accountNumber?: any;
            sequence?: any;
        };
        name?: string;
        permissions?: string[];
    } & {
        baseAccount?: {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            accountNumber?: any;
            sequence?: any;
        } & {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["baseAccount"]["pubKey"], keyof Any>, never>;
            accountNumber?: any;
            sequence?: any;
        } & Record<Exclude<keyof I["baseAccount"], keyof BaseAccount>, never>;
        name?: string;
        permissions?: string[] & string[] & Record<Exclude<keyof I["permissions"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof ModuleAccount>, never>>(object: I): ModuleAccount;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        maxMemoCharacters?: any;
        txSigLimit?: any;
        txSizeCostPerByte?: any;
        sigVerifyCostEd25519?: any;
        sigVerifyCostSecp256k1?: any;
    } & {
        maxMemoCharacters?: any;
        txSigLimit?: any;
        txSizeCostPerByte?: any;
        sigVerifyCostEd25519?: any;
        sigVerifyCostSecp256k1?: any;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
