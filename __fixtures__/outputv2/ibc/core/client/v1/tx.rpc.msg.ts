import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export class Msg {
  static CreateClient(request: MsgCreateClient, initRequest?: fm.initReq): Promise<MsgCreateClientResponse> {
    return fm.fetchReq(`/CreateClient/CreateClient`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateClient(request: MsgUpdateClient, initRequest?: fm.initReq): Promise<MsgUpdateClientResponse> {
    return fm.fetchReq(`/UpdateClient/UpdateClient`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpgradeClient(request: MsgUpgradeClient, initRequest?: fm.initReq): Promise<MsgUpgradeClientResponse> {
    return fm.fetchReq(`/UpgradeClient/UpgradeClient`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SubmitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.initReq): Promise<MsgSubmitMisbehaviourResponse> {
    return fm.fetchReq(`/SubmitMisbehaviour/SubmitMisbehaviour`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}