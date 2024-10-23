import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgMultiSend } from "./tx";
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