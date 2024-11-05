import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend } from "./tx";
export const createSend = (clientResolver?: SigningClientResolver) => buildTx<MsgSend>({
  clientResolver,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});