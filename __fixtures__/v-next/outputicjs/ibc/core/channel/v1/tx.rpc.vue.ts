import { buildUseVueMutation } from "../../../../vue-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
import { createChannelOpenInit, createChannelOpenTry, createChannelOpenAck, createChannelOpenConfirm, createChannelCloseInit, createChannelCloseConfirm, createRecvPacket, createTimeout, createTimeoutOnClose, createAcknowledgement } from "./tx.rpc.func.ts";
export const useChannelOpenInit = buildUseVueMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const useChannelOpenTry = buildUseVueMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const useChannelOpenAck = buildUseVueMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const useChannelOpenConfirm = buildUseVueMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const useChannelCloseInit = buildUseVueMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const useChannelCloseConfirm = buildUseVueMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const useRecvPacket = buildUseVueMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const useTimeout = buildUseVueMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const useTimeoutOnClose = buildUseVueMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const useAcknowledgement = buildUseVueMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});