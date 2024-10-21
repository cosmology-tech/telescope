import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export const createChannelOpenInit = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit)
});
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const createChannelOpenTry = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry)
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const createChannelOpenAck = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck)
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const createChannelOpenConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm)
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const createChannelCloseInit = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit)
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const createChannelCloseConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm)
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const createRecvPacket = (getSigningClient: SigningClientResolver) => buildTx<MsgRecvPacket>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket)
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const createTimeout = (getSigningClient: SigningClientResolver) => buildTx<MsgTimeout>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout)
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const createTimeoutOnClose = (getSigningClient: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose)
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const createAcknowledgement = (getSigningClient: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  getSigningClient: getSigningClient,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement)
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});