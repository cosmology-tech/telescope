import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* TokenPairs retrieves registered token pairs */
  async tokenPairs(params: QueryTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryTokenPairsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/erc20/v1/token_pairs`;
    return await this.request<QueryTokenPairsResponse>(endpoint, options);
  }

  /* TokenPair retrieves a registered token pair */
  async tokenPair(params: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const endpoint = `evmos/erc20/v1/token_pairs/${params.token}`;
    return await this.request<QueryTokenPairResponse>(endpoint);
  }

  /* Params retrieves the erc20 module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/erc20/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

}