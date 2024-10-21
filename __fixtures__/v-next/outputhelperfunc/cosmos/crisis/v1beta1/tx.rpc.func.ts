import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export const createVerifyInvariant = (getSigningClient: SigningClientResolver) => buildTx<VerifyInvariant>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgVerifyInvariant.typeUrl,
  encoders: toEncoders(VerifyInvariant),
  converters: toConverters(VerifyInvariant)
});
export const useVerifyInvariant = buildUseMutation<VerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});