import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export const createGrant = (clientResolver?: SigningClientResolver) => buildTx<MsgGrant>({
  clientResolver,
  typeUrl: MsgGrant.typeUrl,
  encoders: toEncoders(MsgGrant),
  converters: toConverters(MsgGrant)
});
export const useGrant = buildUseMutation<MsgGrant, Error>({
  builderMutationFn: createGrant
});
export const createExec = (clientResolver?: SigningClientResolver) => buildTx<MsgExec>({
  clientResolver,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec)
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const createRevoke = (clientResolver?: SigningClientResolver) => buildTx<MsgRevoke>({
  clientResolver,
  typeUrl: MsgRevoke.typeUrl,
  encoders: toEncoders(MsgRevoke),
  converters: toConverters(MsgRevoke)
});
export const useRevoke = buildUseMutation<MsgRevoke, Error>({
  builderMutationFn: createRevoke
});