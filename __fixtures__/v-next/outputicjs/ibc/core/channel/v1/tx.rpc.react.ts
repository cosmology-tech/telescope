import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
import { createChannelOpenInit, createChannelOpenTry, createChannelOpenAck, createChannelOpenConfirm, createChannelCloseInit, createChannelCloseConfirm, createRecvPacket, createTimeout, createTimeoutOnClose, createAcknowledgement } from "./tx.rpc.func.ts";
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});