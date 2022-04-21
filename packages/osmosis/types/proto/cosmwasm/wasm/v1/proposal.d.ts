import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission: AccessConfig;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM codesudo */
    codeId: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    codeIds: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    codeIds: Long[];
}
export declare const StoreCodeProposal: {
    encode(message: StoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal;
    fromJSON(object: any): StoreCodeProposal;
    toJSON(message: StoreCodeProposal): unknown;
    fromPartial<I extends unknown>(object: I): StoreCodeProposal;
};
export declare const InstantiateContractProposal: {
    encode(message: InstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal;
    fromJSON(object: any): InstantiateContractProposal;
    toJSON(message: InstantiateContractProposal): unknown;
    fromPartial<I extends unknown>(object: I): InstantiateContractProposal;
};
export declare const MigrateContractProposal: {
    encode(message: MigrateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal;
    fromJSON(object: any): MigrateContractProposal;
    toJSON(message: MigrateContractProposal): unknown;
    fromPartial<I extends unknown>(object: I): MigrateContractProposal;
};
export declare const SudoContractProposal: {
    encode(message: SudoContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal;
    fromJSON(object: any): SudoContractProposal;
    toJSON(message: SudoContractProposal): unknown;
    fromPartial<I extends unknown>(object: I): SudoContractProposal;
};
export declare const ExecuteContractProposal: {
    encode(message: ExecuteContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal;
    fromJSON(object: any): ExecuteContractProposal;
    toJSON(message: ExecuteContractProposal): unknown;
    fromPartial<I extends unknown>(object: I): ExecuteContractProposal;
};
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial<I extends unknown>(object: I): UpdateAdminProposal;
};
export declare const ClearAdminProposal: {
    encode(message: ClearAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal;
    fromJSON(object: any): ClearAdminProposal;
    toJSON(message: ClearAdminProposal): unknown;
    fromPartial<I extends unknown>(object: I): ClearAdminProposal;
};
export declare const PinCodesProposal: {
    encode(message: PinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal;
    fromJSON(object: any): PinCodesProposal;
    toJSON(message: PinCodesProposal): unknown;
    fromPartial<I extends unknown>(object: I): PinCodesProposal;
};
export declare const UnpinCodesProposal: {
    encode(message: UnpinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal;
    fromJSON(object: any): UnpinCodesProposal;
    toJSON(message: UnpinCodesProposal): unknown;
    fromPartial<I extends unknown>(object: I): UnpinCodesProposal;
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
