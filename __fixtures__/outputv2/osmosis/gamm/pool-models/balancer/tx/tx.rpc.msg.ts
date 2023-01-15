import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { fetchReq } from "../../../../../grpc-gateway";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export class Msg {
  static CreateBalancerPool(request: MsgCreateBalancerPool, initRequest?: fm.initReq): Promise<MsgCreateBalancerPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.balancer.v1beta1.Msg/CreateBalancerPool`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}