import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: BroadcastTxRequest<MsgSend>): Promise<BroadcastTxResponse<MsgSendResponse>>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: BroadcastTxRequest<MsgMultiSend>): Promise<BroadcastTxResponse<MsgMultiSendResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method for sending coins from one account to another account. */
  send = async (request: BroadcastTxRequest<MsgSend>): Promise<BroadcastTxResponse<MsgSendResponse>> => {
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
  /* MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend = async (request: BroadcastTxRequest<MsgMultiSend>): Promise<BroadcastTxResponse<MsgMultiSendResponse>> => {
    const data = [{
      typeUrl: MsgMultiSend.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgMultiSendResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}