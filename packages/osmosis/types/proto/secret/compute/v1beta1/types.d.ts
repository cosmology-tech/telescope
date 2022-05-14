import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export declare enum AccessType {
    UNDEFINED = 0,
    NOBODY = 1,
    ONLY_ADDRESS = 2,
    EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
export interface AccessTypeParam {
    value: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    codeHash: Uint8Array;
    creator: Uint8Array;
    source: string;
    builder: string;
}
export interface ContractCustomInfo {
    enclaveKey: Uint8Array;
    label: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    codeId: Long;
    creator: Uint8Array;
    /** bytes admin = 3 [(gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"]; */
    label: string;
    /**
     * never show this in query results, just use for sorting
     * (Note: when using json tag "-" amino refused to serialize it...)
     */
    created: AbsoluteTxPosition;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
    txIndex: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    Key: Uint8Array;
    /** base64-encode raw value */
    Value: Uint8Array;
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
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial<I extends {
        codeHash?: Uint8Array;
        creator?: Uint8Array;
        source?: string;
        builder?: string;
    } & {
        codeHash?: Uint8Array;
        creator?: Uint8Array;
        source?: string;
        builder?: string;
    } & Record<Exclude<keyof I, keyof CodeInfo>, never>>(object: I): CodeInfo;
};
export declare const ContractCustomInfo: {
    encode(message: ContractCustomInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCustomInfo;
    fromJSON(object: any): ContractCustomInfo;
    toJSON(message: ContractCustomInfo): unknown;
    fromPartial<I extends {
        enclaveKey?: Uint8Array;
        label?: string;
    } & {
        enclaveKey?: Uint8Array;
        label?: string;
    } & Record<Exclude<keyof I, keyof ContractCustomInfo>, never>>(object: I): ContractCustomInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial<I extends {
        codeId?: any;
        creator?: Uint8Array;
        label?: string;
        created?: {
            blockHeight?: any;
            txIndex?: any;
        };
    } & {
        codeId?: any;
        creator?: Uint8Array;
        label?: string;
        created?: {
            blockHeight?: any;
            txIndex?: any;
        } & {
            blockHeight?: any;
            txIndex?: any;
        } & Record<Exclude<keyof I["created"], keyof AbsoluteTxPosition>, never>;
    } & Record<Exclude<keyof I, keyof ContractInfo>, never>>(object: I): ContractInfo;
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
        Key?: Uint8Array;
        Value?: Uint8Array;
    } & {
        Key?: Uint8Array;
        Value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Model>, never>>(object: I): Model;
};
