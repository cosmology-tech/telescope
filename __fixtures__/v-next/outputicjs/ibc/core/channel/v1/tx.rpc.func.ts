import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export const createChannelOpenInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  clientResolver,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit)
});
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const createChannelOpenTry = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  clientResolver,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry)
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const createChannelOpenAck = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  clientResolver,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck)
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const createChannelOpenConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  clientResolver,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm)
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const createChannelCloseInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  clientResolver,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit)
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const createChannelCloseConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  clientResolver,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm)
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const createRecvPacket = (clientResolver?: SigningClientResolver) => buildTx<MsgRecvPacket>({
  clientResolver,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket)
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const createTimeout = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeout>({
  clientResolver,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout)
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const createTimeoutOnClose = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  clientResolver,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose)
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const createAcknowledgement = (clientResolver?: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  clientResolver,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement)
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});