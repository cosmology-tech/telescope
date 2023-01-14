import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export class Msg {
  static CreateClient(): Promise<MsgCreateClientResponse> {}

  static UpdateClient(): Promise<MsgUpdateClientResponse> {}

  static UpgradeClient(): Promise<MsgUpgradeClientResponse> {}

  static SubmitMisbehaviour(): Promise<MsgSubmitMisbehaviourResponse> {}

}