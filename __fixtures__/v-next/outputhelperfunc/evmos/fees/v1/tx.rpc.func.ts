import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export const createRegisterDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<MsgRegisterDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRegisterDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgRegisterDevFeeInfo),
  converters: toConverters(MsgRegisterDevFeeInfo)
});
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: createRegisterDevFeeInfo
});
export const createCancelDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<MsgCancelDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCancelDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgCancelDevFeeInfo),
  converters: toConverters(MsgCancelDevFeeInfo)
});
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: createCancelDevFeeInfo
});
export const createUpdateDevFeeInfo = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateDevFeeInfo>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgUpdateDevFeeInfo),
  converters: toConverters(MsgUpdateDevFeeInfo)
});
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: createUpdateDevFeeInfo
});