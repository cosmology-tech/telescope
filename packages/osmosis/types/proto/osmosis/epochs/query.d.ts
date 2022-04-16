import * as _m0 from "protobufjs/minimal";
import { EpochInfo } from "../../osmosis/epochs/genesis";
export interface QueryEpochsInfoRequest {
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: string;
}
export declare const QueryEpochsInfoRequest: {
    encode(_: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(_: any): QueryEpochsInfoRequest;
    toJSON(_: QueryEpochsInfoRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
    fromPartial<I extends {
        epochs?: {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[];
    } & {
        epochs?: {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[] & ({
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        } & {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        } & Record<Exclude<keyof I["epochs"][number], keyof EpochInfo>, never>)[] & Record<Exclude<keyof I["epochs"], keyof {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "epochs">, never>>(object: I): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial<I extends {
        identifier?: string;
    } & {
        identifier?: string;
    } & Record<Exclude<keyof I, "identifier">, never>>(object: I): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial<I extends {
        currentEpoch?: string;
    } & {
        currentEpoch?: string;
    } & Record<Exclude<keyof I, "currentEpoch">, never>>(object: I): QueryCurrentEpochResponse;
};
/** Query defines the gRPC querier service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
