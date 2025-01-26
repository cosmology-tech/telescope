import { buildUseVueMutation } from "../../../vue-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
import { createSetWithdrawAddress, createWithdrawDelegatorReward, createWithdrawValidatorCommission, createFundCommunityPool } from "./tx.rpc.func.ts";
export const useSetWithdrawAddress = buildUseVueMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const useWithdrawDelegatorReward = buildUseVueMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const useWithdrawValidatorCommission = buildUseVueMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const useFundCommunityPool = buildUseVueMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});