import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export interface Msg {
  createGauge(request: BroadcastTxReq<MsgCreateGauge>): Promise<BroadcastTxRes<MsgCreateGaugeResponse>>;
  addToGauge(request: BroadcastTxReq<MsgAddToGauge>): Promise<BroadcastTxRes<MsgAddToGaugeResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGauge */
  createGauge = async (request: BroadcastTxReq<MsgCreateGauge>): Promise<BroadcastTxRes<MsgCreateGaugeResponse>> => {
    const data = [{
      typeUrl: MsgCreateGauge.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateGaugeResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* AddToGauge */
  addToGauge = async (request: BroadcastTxReq<MsgAddToGauge>): Promise<BroadcastTxRes<MsgAddToGaugeResponse>> => {
    const data = [{
      typeUrl: MsgAddToGauge.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgAddToGaugeResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};