import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(request: BroadcastTxReq<MsgTransfer>): Promise<BroadcastTxRes<MsgTransferResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Transfer defines a rpc handler method for MsgTransfer. */
  transfer = async (request: BroadcastTxReq<MsgTransfer>): Promise<BroadcastTxRes<MsgTransferResponse>> => {
    const data = [{
      typeUrl: MsgTransfer.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgTransferResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};