import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
export const createSubmitEvidence = (getSigningClient: SigningClientResolver) => buildTx<MsgSubmitEvidence>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSubmitEvidence.typeUrl,
  encoders: toEncoders(MsgSubmitEvidence),
  converters: toConverters(MsgSubmitEvidence)
});
export const useSubmitEvidence = buildUseMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: createSubmitEvidence
});