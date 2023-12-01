import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  unjail(request: BroadcastTxReq<MsgUnjail>): Promise<BroadcastTxRes<MsgUnjailResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Unjail defines a method for unjailing a jailed validator, thus returning
   them into the bonded validator set, so they can begin receiving provisions
   and rewards again. */
  unjail = async (request: BroadcastTxReq<MsgUnjail>): Promise<BroadcastTxRes<MsgUnjailResponse>> => {
    const data = [{
      typeUrl: MsgUnjail.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUnjailResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};