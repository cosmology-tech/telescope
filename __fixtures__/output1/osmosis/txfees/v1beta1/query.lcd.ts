import { FeeToken } from "./feetoken";
import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* FeeTokens returns a list of all the whitelisted fee tokens and their
  corresponding pools It does not include the BaseDenom, which has its own
  query endpoint */
  async feeTokens(params: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse> {
    const endpoint = `osmosis/txfees/v1beta1/fee_tokens/`;
    return await this.request(endpoint);
  }

  /* DenomPoolId */
  async denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
    return await this.request(endpoint);
  }

  /* BaseDenom */
  async baseDenom(params: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
    const endpoint = `osmosis/txfees/v1beta1/base_denom/`;
    return await this.request(endpoint);
  }

}