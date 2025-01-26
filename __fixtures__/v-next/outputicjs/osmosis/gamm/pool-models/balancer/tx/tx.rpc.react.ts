import { buildUseMutation } from "../../../../../react-query";
import { MsgCreateBalancerPool } from "./tx";
import { createCreateBalancerPool } from "./tx.rpc.func.ts";
export const useCreateBalancerPool = buildUseMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createCreateBalancerPool
});