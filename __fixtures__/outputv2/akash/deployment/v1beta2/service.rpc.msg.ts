import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import * as fm from "../../../grpc-gateway";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
export class Msg {
  static CreateDeployment(request: MsgCreateDeployment, initRequest?: fm.InitReq): Promise<MsgCreateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/CreateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DepositDeployment(request: MsgDepositDeployment, initRequest?: fm.InitReq): Promise<MsgDepositDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/DepositDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateDeployment(request: MsgUpdateDeployment, initRequest?: fm.InitReq): Promise<MsgUpdateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/UpdateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseDeployment(request: MsgCloseDeployment, initRequest?: fm.InitReq): Promise<MsgCloseDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/CloseDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseGroup(request: MsgCloseGroup, initRequest?: fm.InitReq): Promise<MsgCloseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/CloseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static PauseGroup(request: MsgPauseGroup, initRequest?: fm.InitReq): Promise<MsgPauseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/PauseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static StartGroup(request: MsgStartGroup, initRequest?: fm.InitReq): Promise<MsgStartGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/StartGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}