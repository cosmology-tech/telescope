import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
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
    return await this.get<QueryTokenPairsResponse>(endpoint, options);
  }

  /* TokenPair retrieves a registered token pair */
  async tokenPair(params: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const endpoint = `evmos/erc20/v1/token_pairs/${params.token}`;
    return await this.get<QueryTokenPairResponse>(endpoint);
  }

  /* Params retrieves the erc20 module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/erc20/v1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

}