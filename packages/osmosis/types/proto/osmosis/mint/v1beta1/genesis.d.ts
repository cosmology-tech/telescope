import { Minter, Params } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current rewards information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
    /** current halven period start epoch */
    halvenStartedEpoch: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            epochProvisions?: string;
        };
        params?: {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: any;
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
            mintingRewardsDistributionStartEpoch?: any;
        };
        halvenStartedEpoch?: any;
    } & {
        minter?: {
            epochProvisions?: string;
        } & {
            epochProvisions?: string;
        } & Record<Exclude<keyof I["minter"], "epochProvisions">, never>;
        params?: {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: any;
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
            mintingRewardsDistributionStartEpoch?: any;
        } & {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: any;
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
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("./mint").DistributionProportions>, never>;
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[] & ({
                address?: string;
                weight?: string;
            } & {
                address?: string;
                weight?: string;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("./mint").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string;
                weight?: string;
            }[]>, never>;
            mintingRewardsDistributionStartEpoch?: any;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        halvenStartedEpoch?: any;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
