import { buildUseVueMutation } from "../../../vue-query";
import { MsgVerifyInvariant } from "./tx";
import { createVerifyInvariant } from "./tx.rpc.func.ts";
export const useVerifyInvariant = buildUseVueMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});