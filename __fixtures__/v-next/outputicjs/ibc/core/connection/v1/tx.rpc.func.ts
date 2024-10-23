import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export const createConnectionOpenInit = (getSigningClient: SigningClientResolver) => buildTx<MsgConnectionOpenInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConnectionOpenInit.typeUrl,
  encoders: toEncoders(MsgConnectionOpenInit),
  converters: toConverters(MsgConnectionOpenInit)
});
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const createConnectionOpenTry = (getSigningClient: SigningClientResolver) => buildTx<MsgConnectionOpenTry>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConnectionOpenTry.typeUrl,
  encoders: toEncoders(MsgConnectionOpenTry),
  converters: toConverters(MsgConnectionOpenTry)
});
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const createConnectionOpenAck = (getSigningClient: SigningClientResolver) => buildTx<MsgConnectionOpenAck>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConnectionOpenAck.typeUrl,
  encoders: toEncoders(MsgConnectionOpenAck),
  converters: toConverters(MsgConnectionOpenAck)
});
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const createConnectionOpenConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgConnectionOpenConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConnectionOpenConfirm.typeUrl,
  encoders: toEncoders(MsgConnectionOpenConfirm),
  converters: toConverters(MsgConnectionOpenConfirm)
});
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});