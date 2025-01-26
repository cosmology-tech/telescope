import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgCreateBalancerPool } from "./tx";
import { createCreateBalancerPool } from "./tx.rpc.func.ts";
export const useCreateBalancerPool = buildUseVueMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createCreateBalancerPool
});