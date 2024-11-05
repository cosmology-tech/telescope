import { Rpc } from "../../../helpers.js";
import { BinaryReader } from "../../../binary.js";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx.js";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
  }
  verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then(data => MsgVerifyInvariantResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};