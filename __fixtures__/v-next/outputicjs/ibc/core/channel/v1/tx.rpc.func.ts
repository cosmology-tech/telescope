import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export const createChannelOpenInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  clientResolver,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit)
});
export const createChannelOpenTry = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  clientResolver,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry)
});
export const createChannelOpenAck = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  clientResolver,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck)
});
export const createChannelOpenConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  clientResolver,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm)
});
export const createChannelCloseInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  clientResolver,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit)
});
export const createChannelCloseConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  clientResolver,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm)
});
export const createRecvPacket = (clientResolver?: SigningClientResolver) => buildTx<MsgRecvPacket>({
  clientResolver,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket)
});
export const createTimeout = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeout>({
  clientResolver,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout)
});
export const createTimeoutOnClose = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  clientResolver,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose)
});
export const createAcknowledgement = (clientResolver?: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  clientResolver,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement)
});