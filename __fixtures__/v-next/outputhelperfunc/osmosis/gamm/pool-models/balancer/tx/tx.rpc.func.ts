import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { buildTx, ISigningClient } from "../../../../../helper-func-types";
import { buildUseMutation } from "../../../../../react-query";
import { SigningClientResolver } from "../../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export const createCreateBalancerPool = (getSigningClient: SigningClientResolver) => buildTx<CreateBalancerPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateBalancerPool.typeUrl,
  encoders: toEncoders(CreateBalancerPool),
  converters: toConverters(CreateBalancerPool)
});
export const useCreateBalancerPool = buildUseMutation<CreateBalancerPool, Error>({
  builderMutationFn: createCreateBalancerPool
});