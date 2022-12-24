import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputAminoType, InputSDKType, Output, OutputAmino, OutputAminoType, OutputSDKType } from "./bank";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSend, MsgSendAmino, MsgSendAminoType, MsgSendSDKType, MsgSendResponse, MsgSendResponseAmino, MsgSendResponseAminoType, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendAmino, MsgMultiSendAminoType, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseAmino, MsgMultiSendResponseAminoType, MsgMultiSendResponseSDKType } from "./tx";

/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: MsgSend): Promise<MsgSendResponse>;

  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
  }

  send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse> {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
    return promise.then(data => MsgMultiSendResponse.decode(new _m0.Reader(data)));
  }

}