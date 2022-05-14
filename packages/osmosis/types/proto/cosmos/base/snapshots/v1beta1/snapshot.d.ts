import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Metadata;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
    /** SHA-256 chunk hashes */
    chunkHashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
    store?: SnapshotStoreItem;
    iavl?: SnapshotIAVLItem;
    extension?: SnapshotExtensionMeta;
    extensionPayload?: SnapshotExtensionPayload;
    kv?: SnapshotKVItem;
    schema?: SnapshotSchema;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
    name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: Long;
    /** height is depth of the tree. */
    height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
    payload: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItem {
    key: Uint8Array;
    value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchema {
    keys: Uint8Array[];
}
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial<I extends {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: {
            chunkHashes?: Uint8Array[];
        };
    } & {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: {
            chunkHashes?: Uint8Array[];
        } & {
            chunkHashes?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["metadata"]["chunkHashes"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["metadata"], "chunkHashes">, never>;
    } & Record<Exclude<keyof I, keyof Snapshot>, never>>(object: I): Snapshot;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        chunkHashes?: Uint8Array[];
    } & {
        chunkHashes?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chunkHashes"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, "chunkHashes">, never>>(object: I): Metadata;
};
export declare const SnapshotItem: {
    encode(message: SnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem;
    fromJSON(object: any): SnapshotItem;
    toJSON(message: SnapshotItem): unknown;
    fromPartial<I extends {
        store?: {
            name?: string;
        };
        iavl?: {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: any;
            height?: number;
        };
        extension?: {
            name?: string;
            format?: number;
        };
        extensionPayload?: {
            payload?: Uint8Array;
        };
        kv?: {
            key?: Uint8Array;
            value?: Uint8Array;
        };
        schema?: {
            keys?: Uint8Array[];
        };
    } & {
        store?: {
            name?: string;
        } & {
            name?: string;
        } & Record<Exclude<keyof I["store"], "name">, never>;
        iavl?: {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: any;
            height?: number;
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: any;
            height?: number;
        } & Record<Exclude<keyof I["iavl"], keyof SnapshotIAVLItem>, never>;
        extension?: {
            name?: string;
            format?: number;
        } & {
            name?: string;
            format?: number;
        } & Record<Exclude<keyof I["extension"], keyof SnapshotExtensionMeta>, never>;
        extensionPayload?: {
            payload?: Uint8Array;
        } & {
            payload?: Uint8Array;
        } & Record<Exclude<keyof I["extensionPayload"], "payload">, never>;
        kv?: {
            key?: Uint8Array;
            value?: Uint8Array;
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["kv"], keyof SnapshotKVItem>, never>;
        schema?: {
            keys?: Uint8Array[];
        } & {
            keys?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["schema"]["keys"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["schema"], "keys">, never>;
    } & Record<Exclude<keyof I, keyof SnapshotItem>, never>>(object: I): SnapshotItem;
};
export declare const SnapshotStoreItem: {
    encode(message: SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem;
    fromJSON(object: any): SnapshotStoreItem;
    toJSON(message: SnapshotStoreItem): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): SnapshotStoreItem;
};
export declare const SnapshotIAVLItem: {
    encode(message: SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem;
    fromJSON(object: any): SnapshotIAVLItem;
    toJSON(message: SnapshotIAVLItem): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
        version?: any;
        height?: number;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
        version?: any;
        height?: number;
    } & Record<Exclude<keyof I, keyof SnapshotIAVLItem>, never>>(object: I): SnapshotIAVLItem;
};
export declare const SnapshotExtensionMeta: {
    encode(message: SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionMeta;
    fromJSON(object: any): SnapshotExtensionMeta;
    toJSON(message: SnapshotExtensionMeta): unknown;
    fromPartial<I extends {
        name?: string;
        format?: number;
    } & {
        name?: string;
        format?: number;
    } & Record<Exclude<keyof I, keyof SnapshotExtensionMeta>, never>>(object: I): SnapshotExtensionMeta;
};
export declare const SnapshotExtensionPayload: {
    encode(message: SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionPayload;
    fromJSON(object: any): SnapshotExtensionPayload;
    toJSON(message: SnapshotExtensionPayload): unknown;
    fromPartial<I extends {
        payload?: Uint8Array;
    } & {
        payload?: Uint8Array;
    } & Record<Exclude<keyof I, "payload">, never>>(object: I): SnapshotExtensionPayload;
};
export declare const SnapshotKVItem: {
    encode(message: SnapshotKVItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotKVItem;
    fromJSON(object: any): SnapshotKVItem;
    toJSON(message: SnapshotKVItem): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof SnapshotKVItem>, never>>(object: I): SnapshotKVItem;
};
export declare const SnapshotSchema: {
    encode(message: SnapshotSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchema;
    fromJSON(object: any): SnapshotSchema;
    toJSON(message: SnapshotSchema): unknown;
    fromPartial<I extends {
        keys?: Uint8Array[];
    } & {
        keys?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["keys"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): SnapshotSchema;
};
