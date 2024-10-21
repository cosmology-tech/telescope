import { Grant, GrantSDKType } from "./authz";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
export const createGrant = (getSigningClient: SigningClientResolver) => buildTx<MsgGrant>({
  getSigningClient: getSigningClient,
  typeUrl: MsgGrant.typeUrl,
  encoders: toEncoders(MsgGrant),
  converters: toConverters(MsgGrant)
});
export const useGrant = buildUseMutation<MsgGrant, Error>({
  builderMutationFn: createGrant
});
export const createExec = (getSigningClient: SigningClientResolver) => buildTx<MsgExec>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec)
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const createRevoke = (getSigningClient: SigningClientResolver) => buildTx<MsgRevoke>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRevoke.typeUrl,
  encoders: toEncoders(MsgRevoke),
  converters: toConverters(MsgRevoke)
});
export const useRevoke = buildUseMutation<MsgRevoke, Error>({
  builderMutationFn: createRevoke
});