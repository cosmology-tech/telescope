import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<Send>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSend.typeUrl,
  encoders: toEncoders(Send),
  converters: toConverters(Send)
});
export const useSend = buildUseMutation<Send, Error>({
  builderMutationFn: createSend
});
export const createMultiSend = (getSigningClient: SigningClientResolver) => buildTx<MultiSend>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgMultiSend.typeUrl,
  encoders: toEncoders(MultiSend),
  converters: toConverters(MultiSend)
});
export const useMultiSend = buildUseMutation<MultiSend, Error>({
  builderMutationFn: createMultiSend
});