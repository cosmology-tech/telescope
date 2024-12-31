import { buildTx, SigningClientResolver } from "../../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../../../react-query";
import { MsgCreateBalancerPool } from "./tx";
export const createCreateBalancerPool = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBalancerPool>({
  clientResolver,
  typeUrl: MsgCreateBalancerPool.typeUrl,
  encoders: toEncoders(MsgCreateBalancerPool),
  converters: toConverters(MsgCreateBalancerPool)
});
export const useCreateBalancerPool = buildUseMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createCreateBalancerPool
});