import Long from "long";
import * as _m0 from "protobufjs/minimal";
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
    /** AccessConfig instantiate_config = 5 [(gogoproto.nullable) = false]; */
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
    fromPartial<I extends unknown>(object: I): AccessTypeParam;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial<I extends unknown>(object: I): CodeInfo;
};
export declare const ContractCustomInfo: {
    encode(message: ContractCustomInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCustomInfo;
    fromJSON(object: any): ContractCustomInfo;
    toJSON(message: ContractCustomInfo): unknown;
    fromPartial<I extends unknown>(object: I): ContractCustomInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial<I extends unknown>(object: I): ContractInfo;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial<I extends unknown>(object: I): AbsoluteTxPosition;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial<I extends unknown>(object: I): Model;
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
