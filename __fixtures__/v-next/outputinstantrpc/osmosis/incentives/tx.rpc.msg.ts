import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export interface Msg {
  createGauge(request: BroadcastTxReq<MsgCreateGauge>): Promise<DeliverTxResponse>;
  addToGauge(request: BroadcastTxReq<MsgAddToGauge>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGauge */
  createGauge = async (request: BroadcastTxReq<MsgCreateGauge>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGauge.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* AddToGauge */
  addToGauge = async (request: BroadcastTxReq<MsgAddToGauge>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAddToGauge.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};