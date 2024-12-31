import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../../react-query";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const createCreateStableswapPool = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateStableswapPool>({
  clientResolver,
  typeUrl: MsgCreateStableswapPool.typeUrl,
  encoders: toEncoders(MsgCreateStableswapPool),
  converters: toConverters(MsgCreateStableswapPool)
});
export const useCreateStableswapPool = buildUseMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createCreateStableswapPool
});
export const createStableSwapAdjustScalingFactors = (clientResolver?: SigningClientResolver) => buildTx<MsgStableSwapAdjustScalingFactors>({
  clientResolver,
  typeUrl: MsgStableSwapAdjustScalingFactors.typeUrl,
  encoders: toEncoders(MsgStableSwapAdjustScalingFactors),
  converters: toConverters(MsgStableSwapAdjustScalingFactors)
});
export const useStableSwapAdjustScalingFactors = buildUseMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: createStableSwapAdjustScalingFactors
});