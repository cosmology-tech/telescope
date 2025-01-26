import { buildUseMutation } from "../../../../react-query";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
import { createCreateStableswapPool, createStableSwapAdjustScalingFactors } from "./tx.rpc.func.ts";
export const useCreateStableswapPool = buildUseMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createCreateStableswapPool
});
export const useStableSwapAdjustScalingFactors = buildUseMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: createStableSwapAdjustScalingFactors
});