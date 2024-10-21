import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { buildTx, ISigningClient } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { SigningClientResolver } from "../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export const createChannelOpenInit = (getSigningClient: SigningClientResolver) => buildTx<ChannelOpenInit>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(ChannelOpenInit),
  converters: toConverters(ChannelOpenInit)
});
export const useChannelOpenInit = buildUseMutation<ChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const createChannelOpenTry = (getSigningClient: SigningClientResolver) => buildTx<ChannelOpenTry>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(ChannelOpenTry),
  converters: toConverters(ChannelOpenTry)
});
export const useChannelOpenTry = buildUseMutation<ChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const createChannelOpenAck = (getSigningClient: SigningClientResolver) => buildTx<ChannelOpenAck>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(ChannelOpenAck),
  converters: toConverters(ChannelOpenAck)
});
export const useChannelOpenAck = buildUseMutation<ChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const createChannelOpenConfirm = (getSigningClient: SigningClientResolver) => buildTx<ChannelOpenConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(ChannelOpenConfirm),
  converters: toConverters(ChannelOpenConfirm)
});
export const useChannelOpenConfirm = buildUseMutation<ChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const createChannelCloseInit = (getSigningClient: SigningClientResolver) => buildTx<ChannelCloseInit>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(ChannelCloseInit),
  converters: toConverters(ChannelCloseInit)
});
export const useChannelCloseInit = buildUseMutation<ChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const createChannelCloseConfirm = (getSigningClient: SigningClientResolver) => buildTx<ChannelCloseConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(ChannelCloseConfirm),
  converters: toConverters(ChannelCloseConfirm)
});
export const useChannelCloseConfirm = buildUseMutation<ChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const createRecvPacket = (getSigningClient: SigningClientResolver) => buildTx<RecvPacket>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgRecvPacket.typeUrl,
  encoders: toEncoders(RecvPacket),
  converters: toConverters(RecvPacket)
});
export const useRecvPacket = buildUseMutation<RecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const createTimeout = (getSigningClient: SigningClientResolver) => buildTx<Timeout>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgTimeout.typeUrl,
  encoders: toEncoders(Timeout),
  converters: toConverters(Timeout)
});
export const useTimeout = buildUseMutation<Timeout, Error>({
  builderMutationFn: createTimeout
});
export const createTimeoutOnClose = (getSigningClient: SigningClientResolver) => buildTx<TimeoutOnClose>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(TimeoutOnClose),
  converters: toConverters(TimeoutOnClose)
});
export const useTimeoutOnClose = buildUseMutation<TimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const createAcknowledgement = (getSigningClient: SigningClientResolver) => buildTx<Acknowledgement>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgAcknowledgement.typeUrl,
  encoders: toEncoders(Acknowledgement),
  converters: toConverters(Acknowledgement)
});
export const useAcknowledgement = buildUseMutation<Acknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});