import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
export class Msg {
  static ConnectionOpenInit(request: MsgConnectionOpenInit, initRequest?: fm.initReq): Promise<MsgConnectionOpenInitResponse> {
    return fm.fetchReq(`/ConnectionOpenInit/ConnectionOpenInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ConnectionOpenTry(request: MsgConnectionOpenTry, initRequest?: fm.initReq): Promise<MsgConnectionOpenTryResponse> {
    return fm.fetchReq(`/ConnectionOpenTry/ConnectionOpenTry`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ConnectionOpenAck(request: MsgConnectionOpenAck, initRequest?: fm.initReq): Promise<MsgConnectionOpenAckResponse> {
    return fm.fetchReq(`/ConnectionOpenAck/ConnectionOpenAck`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ConnectionOpenConfirm(request: MsgConnectionOpenConfirm, initRequest?: fm.initReq): Promise<MsgConnectionOpenConfirmResponse> {
    return fm.fetchReq(`/ConnectionOpenConfirm/ConnectionOpenConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}