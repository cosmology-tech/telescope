import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    address: string;
    pubKey: Any;
    accountNumber: string;
    sequence: string;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    baseAccount: BaseAccount;
    name: string;
    permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: string;
    txSigLimit: string;
    txSizeCostPerByte: string;
    sigVerifyCostEd25519: string;
    sigVerifyCostSecp256k1: string;
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
        accountNumber?: string;
        sequence?: string;
    } & {
        address?: string;
        pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof Any>, never>;
        accountNumber?: string;
        sequence?: string;
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
            accountNumber?: string;
            sequence?: string;
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
            accountNumber?: string;
            sequence?: string;
        } & {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["baseAccount"]["pubKey"], keyof Any>, never>;
            accountNumber?: string;
            sequence?: string;
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
        maxMemoCharacters?: string;
        txSigLimit?: string;
        txSizeCostPerByte?: string;
        sigVerifyCostEd25519?: string;
        sigVerifyCostSecp256k1?: string;
    } & {
        maxMemoCharacters?: string;
        txSigLimit?: string;
        txSizeCostPerByte?: string;
        sigVerifyCostEd25519?: string;
        sigVerifyCostSecp256k1?: string;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
