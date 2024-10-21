import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { SigningClientResolver } from "../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export const createCreateStableswapPool = (getSigningClient: SigningClientResolver) => buildTx<CreateStableswapPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateStableswapPool.typeUrl,
  encoders: toEncoders(CreateStableswapPool),
  converters: toConverters(CreateStableswapPool)
});
export const useCreateStableswapPool = buildUseMutation<CreateStableswapPool, Error>({
  builderMutationFn: createCreateStableswapPool
});
export const createStableSwapAdjustScalingFactors = (getSigningClient: SigningClientResolver) => buildTx<StableSwapAdjustScalingFactors>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgStableSwapAdjustScalingFactors.typeUrl,
  encoders: toEncoders(StableSwapAdjustScalingFactors),
  converters: toConverters(StableSwapAdjustScalingFactors)
});
export const useStableSwapAdjustScalingFactors = buildUseMutation<StableSwapAdjustScalingFactors, Error>({
  builderMutationFn: createStableSwapAdjustScalingFactors
});