import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as fm from "../../grpc-gateway";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export class Msg {
  static CreateGauge(request: MsgCreateGauge, initRequest?: fm.InitReq): Promise<MsgCreateGaugeResponse> {
    return fm.fetchReq(`/osmosis.incentives/CreateGauge`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static AddToGauge(request: MsgAddToGauge, initRequest?: fm.InitReq): Promise<MsgAddToGaugeResponse> {
    return fm.fetchReq(`/osmosis.incentives/AddToGauge`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}