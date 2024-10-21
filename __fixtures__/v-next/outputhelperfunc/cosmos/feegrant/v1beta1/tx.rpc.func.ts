import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
export const createGrantAllowance = (getSigningClient: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance)
});
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const createRevokeAllowance = (getSigningClient: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance)
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});