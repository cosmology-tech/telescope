import { buildUseMutation } from "../../../react-query";
import { MsgUnjail } from "./tx";
import { createUnjail } from "./tx.rpc.func.ts";
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});