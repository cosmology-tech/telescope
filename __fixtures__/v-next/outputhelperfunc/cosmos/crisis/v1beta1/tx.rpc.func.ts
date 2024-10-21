import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export const createVerifyInvariant = (getSigningClient: SigningClientResolver) => buildTx<MsgVerifyInvariant>({
  getSigningClient: getSigningClient,
  typeUrl: MsgVerifyInvariant.typeUrl,
  encoders: toEncoders(MsgVerifyInvariant),
  converters: toConverters(MsgVerifyInvariant)
});
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});