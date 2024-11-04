import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUnjail } from "./tx";
export const createUnjail = (clientResolver: SigningClientResolver) => buildTx<MsgUnjail>({
  clientResolver,
  typeUrl: MsgUnjail.typeUrl,
  encoders: toEncoders(MsgUnjail),
  converters: toConverters(MsgUnjail)
});
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});