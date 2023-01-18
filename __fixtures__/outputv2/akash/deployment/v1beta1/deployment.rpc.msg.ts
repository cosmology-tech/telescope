import { GroupSpec, GroupSpecSDKType, GroupID, GroupIDSDKType, MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deployment";
export class Msg {
  static CreateDeployment(request: MsgCreateDeployment, initRequest?: fm.InitReq): Promise<MsgCreateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CreateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DepositDeployment(request: MsgDepositDeployment, initRequest?: fm.InitReq): Promise<MsgDepositDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/DepositDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateDeployment(request: MsgUpdateDeployment, initRequest?: fm.InitReq): Promise<MsgUpdateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/UpdateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseDeployment(request: MsgCloseDeployment, initRequest?: fm.InitReq): Promise<MsgCloseDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CloseDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseGroup(request: MsgCloseGroup, initRequest?: fm.InitReq): Promise<MsgCloseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CloseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static PauseGroup(request: MsgPauseGroup, initRequest?: fm.InitReq): Promise<MsgPauseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/PauseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static StartGroup(request: MsgStartGroup, initRequest?: fm.InitReq): Promise<MsgStartGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/StartGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}