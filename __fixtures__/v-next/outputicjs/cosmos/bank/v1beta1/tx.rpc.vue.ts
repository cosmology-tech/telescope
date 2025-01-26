import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend, MsgMultiSend } from "./tx";
import { createSend, createMultiSend } from "./tx.rpc.func.ts";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});