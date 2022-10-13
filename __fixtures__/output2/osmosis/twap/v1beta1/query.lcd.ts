import { LCDClient } from "@osmonauts/lcd";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }
  /* Params */


  async params(_params: ParamsRequest = {}): Promise<ParamsResponse> {
    const endpoint = `osmosis/twap/v1beta1/Params`;
    return await this.req.get<ParamsResponse>(endpoint);
  }
  /* ArithmeticTwap */


  async arithmeticTwap(params: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }

    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }

    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }

    if (typeof params?.endTime !== "undefined") {
      options.params.end_time = params.endTime;
    }

    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwap`;
    return await this.req.get<ArithmeticTwapResponse>(endpoint, options);
  }
  /* ArithmeticTwapToNow */


  async arithmeticTwapToNow(params: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }

    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }

    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }

    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwapToNow`;
    return await this.req.get<ArithmeticTwapToNowResponse>(endpoint, options);
  }

}