import { GroupSpec, GroupSpecSDKType, GroupID, GroupIDSDKType, MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deployment";
export class Msg {
  //CreateDeployment defines a method to create new deployment given proper inputs.
  static CreateDeployment(request: MsgCreateDeployment, initRequest?: fm.InitReq): Promise<MsgCreateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CreateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //DepositDeployment deposits more funds into the deployment account
  static DepositDeployment(request: MsgDepositDeployment, initRequest?: fm.InitReq): Promise<MsgDepositDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/DepositDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //UpdateDeployment defines a method to update a deployment given proper inputs.
  static UpdateDeployment(request: MsgUpdateDeployment, initRequest?: fm.InitReq): Promise<MsgUpdateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/UpdateDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //CloseDeployment defines a method to close a deployment given proper inputs.
  static CloseDeployment(request: MsgCloseDeployment, initRequest?: fm.InitReq): Promise<MsgCloseDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CloseDeployment`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //CloseGroup defines a method to close a group of a deployment given proper inputs.
  static CloseGroup(request: MsgCloseGroup, initRequest?: fm.InitReq): Promise<MsgCloseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/CloseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //PauseGroup defines a method to close a group of a deployment given proper inputs.
  static PauseGroup(request: MsgPauseGroup, initRequest?: fm.InitReq): Promise<MsgPauseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/PauseGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //StartGroup defines a method to close a group of a deployment given proper inputs.
  static StartGroup(request: MsgStartGroup, initRequest?: fm.InitReq): Promise<MsgStartGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta1/StartGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}