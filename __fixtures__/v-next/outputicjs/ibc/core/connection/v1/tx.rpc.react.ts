import { buildUseMutation } from "../../../../react-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
import { createConnectionOpenInit, createConnectionOpenTry, createConnectionOpenAck, createConnectionOpenConfirm } from "./tx.rpc.func.ts";
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});