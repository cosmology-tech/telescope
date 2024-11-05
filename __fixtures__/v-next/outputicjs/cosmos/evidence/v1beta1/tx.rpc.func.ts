import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitEvidence } from "./tx";
export const createSubmitEvidence = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitEvidence>({
  clientResolver,
  typeUrl: MsgSubmitEvidence.typeUrl,
  encoders: toEncoders(MsgSubmitEvidence),
  converters: toConverters(MsgSubmitEvidence)
});
export const useSubmitEvidence = buildUseMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: createSubmitEvidence
});