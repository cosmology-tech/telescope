import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: BroadcastTxReq<MsgSend>): Promise<DeliverTxResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: BroadcastTxReq<MsgMultiSend>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method for sending coins from one account to another account. */
  send = async (request: BroadcastTxReq<MsgSend>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSend.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend = async (request: BroadcastTxReq<MsgMultiSend>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMultiSend.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};