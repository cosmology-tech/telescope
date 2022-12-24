import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsAminoType, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsRequestAmino, ParamsRequestAminoType, ParamsRequestSDKType, ParamsResponse, ParamsResponseAmino, ParamsResponseAminoType, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestAmino, ArithmeticTwapRequestAminoType, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseAmino, ArithmeticTwapResponseAminoType, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestAmino, ArithmeticTwapToNowRequestAminoType, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseAmino, ArithmeticTwapToNowResponseAminoType, ArithmeticTwapToNowResponseSDKType } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
  arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }

  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new _m0.Reader(data)));
  }

  arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> {
    const data = ArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
    return promise.then(data => ArithmeticTwapResponse.decode(new _m0.Reader(data)));
  }

  arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> {
    const data = ArithmeticTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
    return promise.then(data => ArithmeticTwapToNowResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },

    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> {
      return queryService.arithmeticTwap(request);
    },

    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> {
      return queryService.arithmeticTwapToNow(request);
    }

  };
};