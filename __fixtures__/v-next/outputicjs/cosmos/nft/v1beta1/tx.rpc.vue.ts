import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend } from "./tx";
import { createSend } from "./tx.rpc.func.ts";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: createSend
});