import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
export const createSubmitEvidence = (getSigningClient: SigningClientResolver) => buildTx<SubmitEvidence>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSubmitEvidence.typeUrl,
  encoders: toEncoders(SubmitEvidence),
  converters: toConverters(SubmitEvidence)
});
export const useSubmitEvidence = buildUseMutation<SubmitEvidence, Error>({
  builderMutationFn: createSubmitEvidence
});