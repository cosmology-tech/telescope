import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
export const createGrantAllowance = (getSigningClient: SigningClientResolver) => buildTx<GrantAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgGrantAllowance.typeUrl,
  encoders: toEncoders(GrantAllowance),
  converters: toConverters(GrantAllowance)
});
export const useGrantAllowance = buildUseMutation<GrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const createRevokeAllowance = (getSigningClient: SigningClientResolver) => buildTx<RevokeAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(RevokeAllowance),
  converters: toConverters(RevokeAllowance)
});
export const useRevokeAllowance = buildUseMutation<RevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});