import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export interface Msg {
  CreateStableswapPool(request: DeepPartial<MsgCreateStableswapPool>, metadata?: grpc.Metadata): Promise<MsgCreateStableswapPoolResponse>;
  StableSwapAdjustScalingFactors(request: DeepPartial<MsgStableSwapAdjustScalingFactors>, metadata?: grpc.Metadata): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStableswapPool = this.createStableswapPool.bind(this);
    this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
  }

  createStableswapPool(request: DeepPartial<MsgCreateStableswapPool>, metadata?: grpc.Metadata): Promise<MsgCreateStableswapPoolResponse> {
    return this.rpc.unary(MsgCreateStableswapPool, MsgCreateStableswapPool.fromPartial(request), metadata);
  }

  stableSwapAdjustScalingFactors(request: DeepPartial<MsgStableSwapAdjustScalingFactors>, metadata?: grpc.Metadata): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    return this.rpc.unary(MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactors.fromPartial(request), metadata);
  }

}