import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export class Query {
  static Params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/Params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static ArithmeticTwap(request: ArithmeticTwapRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwap?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapToNowResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwapToNow?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  async Params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async ArithmeticTwap(req: ArithmeticTwapRequest, headers?: HeadersInit): Promise<ArithmeticTwapResponse> {
    return Query.ArithmeticTwap(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async ArithmeticTwapToNow(req: ArithmeticTwapToNowRequest, headers?: HeadersInit): Promise<ArithmeticTwapToNowResponse> {
    return Query.ArithmeticTwapToNow(req, {
      headers,
      pathPrefix: this.url
    });
  }
}