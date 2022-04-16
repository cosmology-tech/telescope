import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../osmosis/mint/v1beta1/mint";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequest {
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponse {
    /** epoch_provisions is the current minting per epoch provisions value. */
    epochProvisions: Uint8Array;
}
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
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            };
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[];
            mintingRewardsDistributionStartEpoch?: string;
        };
    } & {
        params?: {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            };
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[];
            mintingRewardsDistributionStartEpoch?: string;
        } & {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            } & {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("../../../osmosis/mint/v1beta1/mint").DistributionProportions>, never>;
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[] & ({
                address?: string;
                weight?: string;
            } & {
                address?: string;
                weight?: string;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("../../../osmosis/mint/v1beta1/mint").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string;
                weight?: string;
            }[]>, never>;
            mintingRewardsDistributionStartEpoch?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryEpochProvisionsRequest: {
    encode(_: QueryEpochProvisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochProvisionsRequest;
    fromJSON(_: any): QueryEpochProvisionsRequest;
    toJSON(_: QueryEpochProvisionsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryEpochProvisionsRequest;
};
export declare const QueryEpochProvisionsResponse: {
    encode(message: QueryEpochProvisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochProvisionsResponse;
    fromJSON(object: any): QueryEpochProvisionsResponse;
    toJSON(message: QueryEpochProvisionsResponse): unknown;
    fromPartial<I extends {
        epochProvisions?: Uint8Array;
    } & {
        epochProvisions?: Uint8Array;
    } & Record<Exclude<keyof I, "epochProvisions">, never>>(object: I): QueryEpochProvisionsResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
