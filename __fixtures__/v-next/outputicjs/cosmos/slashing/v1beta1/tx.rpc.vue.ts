import { buildUseVueMutation } from "../../../vue-query";
import { MsgUnjail } from "./tx";
import { createUnjail } from "./tx.rpc.func.ts";
export const useUnjail = buildUseVueMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});