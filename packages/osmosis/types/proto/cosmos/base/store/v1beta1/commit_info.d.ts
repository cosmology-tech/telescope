import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
    fromPartial<I extends {
        version?: any;
        storeInfos?: {
            name?: string;
            commitId?: {
                version?: any;
                hash?: Uint8Array;
            };
        }[];
    } & {
        version?: any;
        storeInfos?: {
            name?: string;
            commitId?: {
                version?: any;
                hash?: Uint8Array;
            };
        }[] & ({
            name?: string;
            commitId?: {
                version?: any;
                hash?: Uint8Array;
            };
        } & {
            name?: string;
            commitId?: {
                version?: any;
                hash?: Uint8Array;
            } & {
                version?: any;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I["storeInfos"][number]["commitId"], keyof CommitID>, never>;
        } & Record<Exclude<keyof I["storeInfos"][number], keyof StoreInfo>, never>)[] & Record<Exclude<keyof I["storeInfos"], keyof {
            name?: string;
            commitId?: {
                version?: any;
                hash?: Uint8Array;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof CommitInfo>, never>>(object: I): CommitInfo;
};
export declare const StoreInfo: {
    encode(message: StoreInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial<I extends {
        name?: string;
        commitId?: {
            version?: any;
            hash?: Uint8Array;
        };
    } & {
        name?: string;
        commitId?: {
            version?: any;
            hash?: Uint8Array;
        } & {
            version?: any;
            hash?: Uint8Array;
        } & Record<Exclude<keyof I["commitId"], keyof CommitID>, never>;
    } & Record<Exclude<keyof I, keyof StoreInfo>, never>>(object: I): StoreInfo;
};
export declare const CommitID: {
    encode(message: CommitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial<I extends {
        version?: any;
        hash?: Uint8Array;
    } & {
        version?: any;
        hash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof CommitID>, never>>(object: I): CommitID;
};
