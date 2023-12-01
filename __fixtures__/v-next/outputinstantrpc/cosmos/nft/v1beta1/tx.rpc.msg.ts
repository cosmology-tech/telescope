import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
/** Msg defines the nft Msg service. */
export interface Msg {
  /** Send defines a method to send a nft from one account to another account. */
  send(request: BroadcastTxReq<MsgSend>): Promise<BroadcastTxRes<MsgSendResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method to send a nft from one account to another account. */
  send = async (request: BroadcastTxReq<MsgSend>): Promise<BroadcastTxRes<MsgSendResponse>> => {
    const data = [{
      typeUrl: MsgSend.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSendResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};