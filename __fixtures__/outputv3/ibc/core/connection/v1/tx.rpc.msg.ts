import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as fm from "../../../../grpc-gateway";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
export class Msg {
  //ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
  static ConnectionOpenInit(request: MsgConnectionOpenInit, initRequest?: fm.InitReq): Promise<MsgConnectionOpenInitResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
  static ConnectionOpenTry(request: MsgConnectionOpenTry, initRequest?: fm.InitReq): Promise<MsgConnectionOpenTryResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenTry`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
  static ConnectionOpenAck(request: MsgConnectionOpenAck, initRequest?: fm.InitReq): Promise<MsgConnectionOpenAckResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenAck`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm.
  static ConnectionOpenConfirm(request: MsgConnectionOpenConfirm, initRequest?: fm.InitReq): Promise<MsgConnectionOpenConfirmResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}