import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export const createConnectionOpenInit = (clientResolver: SigningClientResolver) => buildTx<MsgConnectionOpenInit>({
  clientResolver,
  typeUrl: MsgConnectionOpenInit.typeUrl,
  encoders: toEncoders(MsgConnectionOpenInit),
  converters: toConverters(MsgConnectionOpenInit)
});
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const createConnectionOpenTry = (clientResolver: SigningClientResolver) => buildTx<MsgConnectionOpenTry>({
  clientResolver,
  typeUrl: MsgConnectionOpenTry.typeUrl,
  encoders: toEncoders(MsgConnectionOpenTry),
  converters: toConverters(MsgConnectionOpenTry)
});
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const createConnectionOpenAck = (clientResolver: SigningClientResolver) => buildTx<MsgConnectionOpenAck>({
  clientResolver,
  typeUrl: MsgConnectionOpenAck.typeUrl,
  encoders: toEncoders(MsgConnectionOpenAck),
  converters: toConverters(MsgConnectionOpenAck)
});
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const createConnectionOpenConfirm = (clientResolver: SigningClientResolver) => buildTx<MsgConnectionOpenConfirm>({
  clientResolver,
  typeUrl: MsgConnectionOpenConfirm.typeUrl,
  encoders: toEncoders(MsgConnectionOpenConfirm),
  converters: toConverters(MsgConnectionOpenConfirm)
});
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});