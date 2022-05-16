import { EpochInfo } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QueryEpochsInfoRequest {
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: Long;
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
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: any;
        }[];
    } & {
        epochs?: {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: any;
        }[] & ({
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: any;
        } & {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: any;
        } & Record<Exclude<keyof I["epochs"][number], keyof EpochInfo>, never>)[] & Record<Exclude<keyof I["epochs"], keyof {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: any;
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
        currentEpoch?: any;
    } & {
        currentEpoch?: any;
    } & Record<Exclude<keyof I, "currentEpoch">, never>>(object: I): QueryCurrentEpochResponse;
};
