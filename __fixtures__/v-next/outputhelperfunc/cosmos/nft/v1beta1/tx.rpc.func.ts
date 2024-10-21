import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<Send>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSend.typeUrl,
  encoders: toEncoders(Send),
  converters: toConverters(Send)
});
export const useSend = buildUseMutation<Send, Error>({
  builderMutationFn: createSend
});