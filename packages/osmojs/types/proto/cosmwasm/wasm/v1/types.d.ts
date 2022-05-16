import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** AccessType permission types */
export declare enum AccessType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
    permission: AccessType;
    address: string;
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess: AccessConfig;
    instantiateDefaultPermission: AccessType;
    maxWasmCodeSize: Long;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiateConfig: AccessConfig;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     */
    created: AbsoluteTxPosition;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension: Any;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Updated Tx position when the operation was executed. */
    updated: AbsoluteTxPosition;
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam;
    fromJSON(object: any): AccessTypeParam;
    toJSON(message: AccessTypeParam): unknown;
    fromPartial<I extends {
        value?: AccessType;
    } & {
        value?: AccessType;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): AccessTypeParam;
};
export declare const AccessConfig: {
    encode(message: AccessConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfig;
    fromJSON(object: any): AccessConfig;
    toJSON(message: AccessConfig): unknown;
    fromPartial<I extends {
        permission?: AccessType;
        address?: string;
    } & {
        permission?: AccessType;
        address?: string;
    } & Record<Exclude<keyof I, keyof AccessConfig>, never>>(object: I): AccessConfig;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        codeUploadAccess?: {
            permission?: AccessType;
            address?: string;
        };
        instantiateDefaultPermission?: AccessType;
        maxWasmCodeSize?: any;
    } & {
        codeUploadAccess?: {
            permission?: AccessType;
            address?: string;
        } & {
            permission?: AccessType;
            address?: string;
        } & Record<Exclude<keyof I["codeUploadAccess"], keyof AccessConfig>, never>;
        instantiateDefaultPermission?: AccessType;
        maxWasmCodeSize?: any;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial<I extends {
        codeHash?: Uint8Array;
        creator?: string;
        instantiateConfig?: {
            permission?: AccessType;
            address?: string;
        };
    } & {
        codeHash?: Uint8Array;
        creator?: string;
        instantiateConfig?: {
            permission?: AccessType;
            address?: string;
        } & {
            permission?: AccessType;
            address?: string;
        } & Record<Exclude<keyof I["instantiateConfig"], keyof AccessConfig>, never>;
    } & Record<Exclude<keyof I, keyof CodeInfo>, never>>(object: I): CodeInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial<I extends {
        codeId?: any;
        creator?: string;
        admin?: string;
        label?: string;
        created?: {
            blockHeight?: any;
            txIndex?: any;
        };
        ibcPortId?: string;
        extension?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        codeId?: any;
        creator?: string;
        admin?: string;
        label?: string;
        created?: {
            blockHeight?: any;
            txIndex?: any;
        } & {
            blockHeight?: any;
            txIndex?: any;
        } & Record<Exclude<keyof I["created"], keyof AbsoluteTxPosition>, never>;
        ibcPortId?: string;
        extension?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["extension"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof ContractInfo>, never>>(object: I): ContractInfo;
};
export declare const ContractCodeHistoryEntry: {
    encode(message: ContractCodeHistoryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCodeHistoryEntry;
    fromJSON(object: any): ContractCodeHistoryEntry;
    toJSON(message: ContractCodeHistoryEntry): unknown;
    fromPartial<I extends {
        operation?: ContractCodeHistoryOperationType;
        codeId?: any;
        updated?: {
            blockHeight?: any;
            txIndex?: any;
        };
        msg?: Uint8Array;
    } & {
        operation?: ContractCodeHistoryOperationType;
        codeId?: any;
        updated?: {
            blockHeight?: any;
            txIndex?: any;
        } & {
            blockHeight?: any;
            txIndex?: any;
        } & Record<Exclude<keyof I["updated"], keyof AbsoluteTxPosition>, never>;
        msg?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ContractCodeHistoryEntry>, never>>(object: I): ContractCodeHistoryEntry;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial<I extends {
        blockHeight?: any;
        txIndex?: any;
    } & {
        blockHeight?: any;
        txIndex?: any;
    } & Record<Exclude<keyof I, keyof AbsoluteTxPosition>, never>>(object: I): AbsoluteTxPosition;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Model>, never>>(object: I): Model;
};
