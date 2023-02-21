import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export interface Query {
  params(request?: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
  arithmeticTwap(request: DeepPartial<ArithmeticTwapRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapResponse>;
  arithmeticTwapToNow(request: DeepPartial<ArithmeticTwapToNowRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }

  params(request: DeepPartial<ParamsRequest> = {}, metadata?: grpc.Metadata): Promise<ParamsResponse> {
    return this.rpc.unary(ParamsDesc, ParamsRequest.fromPartial(request), metadata);
  }

  arithmeticTwap(request: DeepPartial<ArithmeticTwapRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapResponse> {
    return this.rpc.unary(ArithmeticTwapDesc, ArithmeticTwapRequest.fromPartial(request), metadata);
  }

  arithmeticTwapToNow(request: DeepPartial<ArithmeticTwapToNowRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapToNowResponse> {
    return this.rpc.unary(ArithmeticTwapToNowDesc, ArithmeticTwapToNowRequest.fromPartial(request), metadata);
  }

}