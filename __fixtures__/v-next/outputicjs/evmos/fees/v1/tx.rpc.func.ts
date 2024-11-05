import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
export const createRegisterDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterDevFeeInfo>({
  clientResolver,
  typeUrl: MsgRegisterDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgRegisterDevFeeInfo),
  converters: toConverters(MsgRegisterDevFeeInfo)
});
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: createRegisterDevFeeInfo
});
export const createCancelDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelDevFeeInfo>({
  clientResolver,
  typeUrl: MsgCancelDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgCancelDevFeeInfo),
  converters: toConverters(MsgCancelDevFeeInfo)
});
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: createCancelDevFeeInfo
});
export const createUpdateDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateDevFeeInfo>({
  clientResolver,
  typeUrl: MsgUpdateDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgUpdateDevFeeInfo),
  converters: toConverters(MsgUpdateDevFeeInfo)
});
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: createUpdateDevFeeInfo
});