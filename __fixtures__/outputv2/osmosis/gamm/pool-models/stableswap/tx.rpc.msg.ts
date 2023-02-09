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
export const MsgDesc = {
  serviceName: "osmosis.gamm.poolmodels.stableswap.v1beta1.Msg"
};
export const MsgCreateStableswapPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreateStableswapPool",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateStableswapPool.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateStableswapPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgStableSwapAdjustScalingFactorsDesc: UnaryMethodDefinitionish = {
  methodName: "StableSwapAdjustScalingFactors",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStableSwapAdjustScalingFactors.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgStableSwapAdjustScalingFactorsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};