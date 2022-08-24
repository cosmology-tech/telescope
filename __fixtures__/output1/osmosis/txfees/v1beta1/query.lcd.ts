import { FeeToken } from "./feetoken";
import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* FeeTokens returns a list of all the whitelisted fee tokens and their
  corresponding pools It does not include the BaseDenom, which has its own
  query endpoint */
  async feeTokens(_params: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> {
    const endpoint = `osmosis/txfees/v1beta1/fee_tokens`;
    return await this.request<QueryFeeTokensResponse>(endpoint);
  }

  /* DenomSpotPrice */
  async denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/txfees/v1beta1/spot_price_by_denom`;
    return await this.request<QueryDenomSpotPriceResponse>(endpoint, options);
  }

  /* DenomPoolId */
  async denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
    return await this.request<QueryDenomPoolIdResponse>(endpoint);
  }

  /* BaseDenom */
  async baseDenom(_params: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> {
    const endpoint = `osmosis/txfees/v1beta1/base_denom`;
    return await this.request<QueryBaseDenomResponse>(endpoint);
  }

}