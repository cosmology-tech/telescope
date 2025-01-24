import { buildUseVueMutation } from "../../../vue-query";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
import { createRegisterDevFeeInfo, createCancelDevFeeInfo, createUpdateDevFeeInfo } from "./tx.rpc.func.ts";
export const useRegisterDevFeeInfo = buildUseVueMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: createRegisterDevFeeInfo
});
export const useCancelDevFeeInfo = buildUseVueMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: createCancelDevFeeInfo
});
export const useUpdateDevFeeInfo = buildUseVueMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: createUpdateDevFeeInfo
});