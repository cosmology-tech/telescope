import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
/** Msg defines the nft Msg service. */
export interface Msg {
  /** Send defines a method to send a nft from one account to another account. */
  send(request: BroadcastTxReq<MsgSend>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method to send a nft from one account to another account. */
  send = async (request: BroadcastTxReq<MsgSend>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSend.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};