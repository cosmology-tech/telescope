import { Grant, GrantSDKType } from "./authz";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
export const createGrant = (getSigningClient: SigningClientResolver) => buildTx<Grant>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgGrant.typeUrl,
  encoders: toEncoders(Grant),
  converters: toConverters(Grant)
});
export const useGrant = buildUseMutation<Grant, Error>({
  builderMutationFn: createGrant
});
export const createExec = (getSigningClient: SigningClientResolver) => buildTx<Exec>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExec.typeUrl,
  encoders: toEncoders(Exec),
  converters: toConverters(Exec)
});
export const useExec = buildUseMutation<Exec, Error>({
  builderMutationFn: createExec
});
export const createRevoke = (getSigningClient: SigningClientResolver) => buildTx<Revoke>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgRevoke.typeUrl,
  encoders: toEncoders(Revoke),
  converters: toConverters(Revoke)
});
export const useRevoke = buildUseMutation<Revoke, Error>({
  builderMutationFn: createRevoke
});