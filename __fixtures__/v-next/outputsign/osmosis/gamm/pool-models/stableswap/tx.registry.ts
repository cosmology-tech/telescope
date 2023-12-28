import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { TelescopeGeneratedType } from "../../../../types";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool", MsgCreateStableswapPool], ["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors", MsgStableSwapAdjustScalingFactors]];