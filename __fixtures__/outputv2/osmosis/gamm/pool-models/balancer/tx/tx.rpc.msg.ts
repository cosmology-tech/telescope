import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export interface Msg {
  createBalancerPool(request: DeepPartial<MsgCreateBalancerPool>, metadata?: grpc.Metadata): Promise<MsgCreateBalancerPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBalancerPool = this.createBalancerPool.bind(this);
  }

  createBalancerPool(request: DeepPartial<MsgCreateBalancerPool>, metadata?: grpc.Metadata): Promise<MsgCreateBalancerPoolResponse> {
    return this.rpc.unary(MsgCreateBalancerPoolDesc, MsgCreateBalancerPool.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "osmosis.gamm.poolmodels.balancer.v1beta1.Msg"
};
export const MsgCreateBalancerPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreateBalancerPool",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateBalancerPool.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateBalancerPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined);
}