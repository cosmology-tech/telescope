import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export const createGrantAllowance = (clientResolver: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  clientResolver,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance)
});
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const createRevokeAllowance = (clientResolver: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  clientResolver,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance)
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});