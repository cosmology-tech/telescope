import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */


  async feeTokens(_params: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> {
    const endpoint = `osmosis/txfees/v1beta1/fee_tokens`;
    return await this.req.get<QueryFeeTokensResponse>(endpoint);
  }
  /* DenomSpotPrice returns all spot prices by each registered token denom. */


  async denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/txfees/v1beta1/spot_price_by_denom`;
    return await this.req.get<QueryDenomSpotPriceResponse>(endpoint, options);
  }
  /* Returns the poolID for a specified denom input. */


  async denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
    return await this.req.get<QueryDenomPoolIdResponse>(endpoint);
  }
  /* Returns a list of all base denom tokens and their corresponding pools. */


  async baseDenom(_params: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> {
    const endpoint = `osmosis/txfees/v1beta1/base_denom`;
    return await this.req.get<QueryBaseDenomResponse>(endpoint);
  }

}