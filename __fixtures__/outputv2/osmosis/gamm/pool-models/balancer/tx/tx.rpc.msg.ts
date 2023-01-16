import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { fetchReq } from "../../../../../grpc-gateway";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export class Msg {
  static CreateBalancerPool(request: MsgCreateBalancerPool, initRequest?: fm.initReq): Promise<MsgCreateBalancerPoolResponse> {
    return fm.fetchReq(`/CreateBalancerPool/CreateBalancerPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}