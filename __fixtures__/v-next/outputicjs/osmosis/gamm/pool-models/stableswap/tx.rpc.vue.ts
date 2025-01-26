import { buildUseVueMutation } from "../../../../vue-query";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
import { createCreateStableswapPool, createStableSwapAdjustScalingFactors } from "./tx.rpc.func.ts";
export const useCreateStableswapPool = buildUseVueMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createCreateStableswapPool
});
export const useStableSwapAdjustScalingFactors = buildUseVueMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: createStableSwapAdjustScalingFactors
});