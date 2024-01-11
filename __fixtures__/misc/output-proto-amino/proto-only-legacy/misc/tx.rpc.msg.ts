import { AminoEncodingTestForDontOmit, AminoEncodingTestForDontOmitSDKType, AminoEncodingTestForOmit, AminoEncodingTestForOmitSDKType } from "./amino_fields";
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { InputMsg, InputMsgSDKType, MsgResponse, MsgResponseSDKType } from "./tx";
export interface Msg {
  /** test tx */
  sendMsg(request: InputMsg): Promise<MsgResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sendMsg = this.sendMsg.bind(this);
  }
  sendMsg(request: InputMsg): Promise<MsgResponse> {
    const data = InputMsg.encode(request).finish();
    const promise = this.rpc.request("misc.Msg", "SendMsg", data);
    return promise.then(data => MsgResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};