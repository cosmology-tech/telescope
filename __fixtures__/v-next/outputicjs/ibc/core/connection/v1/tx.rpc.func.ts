import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export const createConnectionOpenInit = (clientResolver?: SigningClientResolver) => buildTx<MsgConnectionOpenInit>({
  clientResolver,
  typeUrl: MsgConnectionOpenInit.typeUrl,
  encoders: toEncoders(MsgConnectionOpenInit),
  converters: toConverters(MsgConnectionOpenInit)
});
export const createConnectionOpenTry = (clientResolver?: SigningClientResolver) => buildTx<MsgConnectionOpenTry>({
  clientResolver,
  typeUrl: MsgConnectionOpenTry.typeUrl,
  encoders: toEncoders(MsgConnectionOpenTry),
  converters: toConverters(MsgConnectionOpenTry)
});
export const createConnectionOpenAck = (clientResolver?: SigningClientResolver) => buildTx<MsgConnectionOpenAck>({
  clientResolver,
  typeUrl: MsgConnectionOpenAck.typeUrl,
  encoders: toEncoders(MsgConnectionOpenAck),
  converters: toConverters(MsgConnectionOpenAck)
});
export const createConnectionOpenConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgConnectionOpenConfirm>({
  clientResolver,
  typeUrl: MsgConnectionOpenConfirm.typeUrl,
  encoders: toEncoders(MsgConnectionOpenConfirm),
  converters: toConverters(MsgConnectionOpenConfirm)
});