import { buildUseMutation } from "../../../react-query";
import { MsgSend } from "./tx";
import { createSend } from "./tx.rpc.func.ts";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});