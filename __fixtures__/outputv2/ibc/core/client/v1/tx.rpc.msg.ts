import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export class Msg {
  static CreateClient(request: MsgCreateClient, initRequest?: fm.initReq): Promise<MsgCreateClientResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateClient(request: MsgUpdateClient, initRequest?: fm.initReq): Promise<MsgUpdateClientResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpgradeClient(request: MsgUpgradeClient, initRequest?: fm.initReq): Promise<MsgUpgradeClientResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static SubmitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.initReq): Promise<MsgSubmitMisbehaviourResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}