import { buildUseVueMutation } from "../../../../vue-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
import { createConnectionOpenInit, createConnectionOpenTry, createConnectionOpenAck, createConnectionOpenConfirm } from "./tx.rpc.func.ts";
export const useConnectionOpenInit = buildUseVueMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const useConnectionOpenTry = buildUseVueMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const useConnectionOpenAck = buildUseVueMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const useConnectionOpenConfirm = buildUseVueMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});