import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epochProvisions: string;
}
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted minted_denom that is
     * to be allocated as pool incentives.
     */
    poolIncentives: string;
    /**
     * developer_rewards defines the proportion of the minted minted_denom that is
     * to be allocated to developer rewards address.
     */
    developerRewards: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** epoch provisions from the first epoch */
    genesisEpochProvisions: string;
    /** mint epoch identifier */
    epochIdentifier: string;
    /** number of epochs take to reduce rewards */
    reductionPeriodInEpochs: Long;
    /** reduction multiplier to execute on each period */
    reductionFactor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /** start epoch to distribute minting rewards */
    mintingRewardsDistributionStartEpoch: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial<I extends unknown>(object: I): Minter;
};
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial<I extends unknown>(object: I): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial<I extends unknown>(object: I): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends unknown>(object: I): Params;
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
