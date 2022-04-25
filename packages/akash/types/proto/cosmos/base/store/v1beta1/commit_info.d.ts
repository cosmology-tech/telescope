import Long from "long";
import * as _m0 from "protobufjs/minimal";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
    version: Long;
    storeInfos: StoreInfo[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
    name: string;
    commitId: CommitID;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
    version: Long;
    hash: Uint8Array;
}
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    fromPartial<I extends unknown>(object: I): CommitInfo;
};
export declare const StoreInfo: {
    encode(message: StoreInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial<I extends unknown>(object: I): StoreInfo;
};
export declare const CommitID: {
    encode(message: CommitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial<I extends unknown>(object: I): CommitID;
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
