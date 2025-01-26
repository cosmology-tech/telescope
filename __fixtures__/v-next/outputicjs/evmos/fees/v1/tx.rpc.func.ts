import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
export const createRegisterDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterDevFeeInfo>({
  clientResolver,
  typeUrl: MsgRegisterDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgRegisterDevFeeInfo),
  converters: toConverters(MsgRegisterDevFeeInfo)
});
export const createCancelDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelDevFeeInfo>({
  clientResolver,
  typeUrl: MsgCancelDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgCancelDevFeeInfo),
  converters: toConverters(MsgCancelDevFeeInfo)
});
export const createUpdateDevFeeInfo = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateDevFeeInfo>({
  clientResolver,
  typeUrl: MsgUpdateDevFeeInfo.typeUrl,
  encoders: toEncoders(MsgUpdateDevFeeInfo),
  converters: toConverters(MsgUpdateDevFeeInfo)
});