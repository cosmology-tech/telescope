import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../../helper-func-types";
import { buildUseMutation } from "../../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export const createCreateBalancerPool = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateBalancerPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateBalancerPool.typeUrl,
  encoders: toEncoders(MsgCreateBalancerPool),
  converters: toConverters(MsgCreateBalancerPool)
});
export const useCreateBalancerPool = buildUseMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createCreateBalancerPool
});