import { buildTx, SigningClientResolver } from "../../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateBalancerPool } from "./tx";
export const createCreateBalancerPool = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBalancerPool>({
  clientResolver,
  typeUrl: MsgCreateBalancerPool.typeUrl,
  encoders: toEncoders(MsgCreateBalancerPool),
  converters: toConverters(MsgCreateBalancerPool)
});