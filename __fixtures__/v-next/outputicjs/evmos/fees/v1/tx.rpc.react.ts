import { buildUseMutation } from "../../../react-query";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
import { createRegisterDevFeeInfo, createCancelDevFeeInfo, createUpdateDevFeeInfo } from "./tx.rpc.func.ts";
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: createRegisterDevFeeInfo
});
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: createCancelDevFeeInfo
});
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: createUpdateDevFeeInfo
});