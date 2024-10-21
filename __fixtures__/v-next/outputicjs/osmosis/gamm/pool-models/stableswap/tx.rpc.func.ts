import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const createCreateStableswapPool = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateStableswapPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateStableswapPool.typeUrl,
  encoders: toEncoders(MsgCreateStableswapPool),
  converters: toConverters(MsgCreateStableswapPool)
});
export const useCreateStableswapPool = buildUseMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createCreateStableswapPool
});
export const createStableSwapAdjustScalingFactors = (getSigningClient: SigningClientResolver) => buildTx<MsgStableSwapAdjustScalingFactors>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStableSwapAdjustScalingFactors.typeUrl,
  encoders: toEncoders(MsgStableSwapAdjustScalingFactors),
  converters: toConverters(MsgStableSwapAdjustScalingFactors)
});
export const useStableSwapAdjustScalingFactors = buildUseMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: createStableSwapAdjustScalingFactors
});