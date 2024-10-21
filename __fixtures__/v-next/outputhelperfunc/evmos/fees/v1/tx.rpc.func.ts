import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export const createRegisterDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<RegisterDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgRegisterDevFeeInfo.typeUrl,
  encoders: toEncoders(RegisterDevFeeInfo),
  converters: toConverters(RegisterDevFeeInfo)
});
export const useRegisterDevFeeInfo = buildUseMutation<RegisterDevFeeInfo, Error>({
  builderMutationFn: createRegisterDevFeeInfo
});
export const createCancelDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<CancelDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCancelDevFeeInfo.typeUrl,
  encoders: toEncoders(CancelDevFeeInfo),
  converters: toConverters(CancelDevFeeInfo)
});
export const useCancelDevFeeInfo = buildUseMutation<CancelDevFeeInfo, Error>({
  builderMutationFn: createCancelDevFeeInfo
});
export const createUpdateDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<UpdateDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateDevFeeInfo.typeUrl,
  encoders: toEncoders(UpdateDevFeeInfo),
  converters: toConverters(UpdateDevFeeInfo)
});
export const useUpdateDevFeeInfo = buildUseMutation<UpdateDevFeeInfo, Error>({
  builderMutationFn: createUpdateDevFeeInfo
});