import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QueryGaugeIdsRequest {
    poolId: Long;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: Long;
    duration: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoResponse {
    distrInfo: DistrInfo;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: string[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface IncentivizedPool {
    poolId: Long;
    lockableDuration: string;
    gaugeId: Long;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export declare const QueryGaugeIdsRequest: {
    encode(message: QueryGaugeIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromJSON(object: any): QueryGaugeIdsRequest;
    toJSON(message: QueryGaugeIdsRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryGaugeIdsRequest;
};
export declare const QueryGaugeIdsResponse: {
    encode(message: QueryGaugeIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromJSON(object: any): QueryGaugeIdsResponse;
    toJSON(message: QueryGaugeIdsResponse): unknown;
    fromPartial<I extends {
        gaugeIdsWithDuration?: {
            gaugeId?: any;
            duration?: string;
        }[];
    } & {
        gaugeIdsWithDuration?: {
            gaugeId?: any;
            duration?: string;
        }[] & ({
            gaugeId?: any;
            duration?: string;
        } & {
            gaugeId?: any;
            duration?: string;
        } & Record<Exclude<keyof I["gaugeIdsWithDuration"][number], keyof QueryGaugeIdsResponse_GaugeIdWithDuration>, never>)[] & Record<Exclude<keyof I["gaugeIdsWithDuration"], keyof {
            gaugeId?: any;
            duration?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "gaugeIdsWithDuration">, never>>(object: I): QueryGaugeIdsResponse;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
    fromPartial<I extends {
        gaugeId?: any;
        duration?: string;
    } & {
        gaugeId?: any;
        duration?: string;
    } & Record<Exclude<keyof I, keyof QueryGaugeIdsResponse_GaugeIdWithDuration>, never>>(object: I): QueryGaugeIdsResponse_GaugeIdWithDuration;
};
export declare const QueryDistrInfoRequest: {
    encode(_: QueryDistrInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromJSON(_: any): QueryDistrInfoRequest;
    toJSON(_: QueryDistrInfoRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryDistrInfoRequest;
};
export declare const QueryDistrInfoResponse: {
    encode(message: QueryDistrInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromJSON(object: any): QueryDistrInfoResponse;
    toJSON(message: QueryDistrInfoResponse): unknown;
    fromPartial<I extends {
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[];
        };
    } & {
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[];
        } & {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[] & ({
                gaugeId?: any;
                weight?: string;
            } & {
                gaugeId?: any;
                weight?: string;
            } & Record<Exclude<keyof I["distrInfo"]["records"][number], keyof import("./incentives").DistrRecord>, never>)[] & Record<Exclude<keyof I["distrInfo"]["records"], keyof {
                gaugeId?: any;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["distrInfo"], keyof DistrInfo>, never>;
    } & Record<Exclude<keyof I, "distrInfo">, never>>(object: I): QueryDistrInfoResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            mintedDenom?: string;
        };
    } & {
        params?: {
            mintedDenom?: string;
        } & {
            mintedDenom?: string;
        } & Record<Exclude<keyof I["params"], "mintedDenom">, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial<I extends {
        lockableDurations?: string[];
    } & {
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): QueryLockableDurationsResponse;
};
export declare const QueryIncentivizedPoolsRequest: {
    encode(_: QueryIncentivizedPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    toJSON(_: QueryIncentivizedPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryIncentivizedPoolsRequest;
};
export declare const IncentivizedPool: {
    encode(message: IncentivizedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool;
    fromJSON(object: any): IncentivizedPool;
    toJSON(message: IncentivizedPool): unknown;
    fromPartial<I extends {
        poolId?: any;
        lockableDuration?: string;
        gaugeId?: any;
    } & {
        poolId?: any;
        lockableDuration?: string;
        gaugeId?: any;
    } & Record<Exclude<keyof I, keyof IncentivizedPool>, never>>(object: I): IncentivizedPool;
};
export declare const QueryIncentivizedPoolsResponse: {
    encode(message: QueryIncentivizedPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    toJSON(message: QueryIncentivizedPoolsResponse): unknown;
    fromPartial<I extends {
        incentivizedPools?: {
            poolId?: any;
            lockableDuration?: string;
            gaugeId?: any;
        }[];
    } & {
        incentivizedPools?: {
            poolId?: any;
            lockableDuration?: string;
            gaugeId?: any;
        }[] & ({
            poolId?: any;
            lockableDuration?: string;
            gaugeId?: any;
        } & {
            poolId?: any;
            lockableDuration?: string;
            gaugeId?: any;
        } & Record<Exclude<keyof I["incentivizedPools"][number], keyof IncentivizedPool>, never>)[] & Record<Exclude<keyof I["incentivizedPools"], keyof {
            poolId?: any;
            lockableDuration?: string;
            gaugeId?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, "incentivizedPools">, never>>(object: I): QueryIncentivizedPoolsResponse;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromJSON(_: any): QueryExternalIncentiveGaugesRequest;
    toJSON(_: QueryExternalIncentiveGaugesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryExternalIncentiveGaugesRequest;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromJSON(object: any): QueryExternalIncentiveGaugesResponse;
    toJSON(message: QueryExternalIncentiveGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QueryExternalIncentiveGaugesResponse;
};
