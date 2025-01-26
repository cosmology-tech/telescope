import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant } from "./tx";
import { createVerifyInvariant } from "./tx.rpc.func.ts";
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});