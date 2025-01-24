import { buildUseVueMutation } from "../../../../vue-query";
import { MsgTransfer } from "./tx";
import { createTransfer } from "./tx.rpc.func.ts";
export const useTransfer = buildUseVueMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
});