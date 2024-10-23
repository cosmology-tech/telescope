import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<MsgSend>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const createMultiSend = (getSigningClient: SigningClientResolver) => buildTx<MsgMultiSend>({
  getSigningClient: getSigningClient,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend)
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});