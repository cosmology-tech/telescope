import { buildUseMutation } from "../../../react-query";
import { MsgSend, MsgMultiSend } from "./tx";
import { createSend, createMultiSend } from "./tx.rpc.func.ts";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});