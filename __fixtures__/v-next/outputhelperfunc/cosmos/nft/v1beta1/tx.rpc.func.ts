import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<MsgSend>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});