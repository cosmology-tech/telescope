import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgTransfer } from "./tx";
export const createTransfer = (clientResolver?: SigningClientResolver) => buildTx<MsgTransfer>({
  clientResolver,
  typeUrl: MsgTransfer.typeUrl,
  encoders: toEncoders(MsgTransfer),
  converters: toConverters(MsgTransfer)
});
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
});