import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
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
  }): Promise<QueryTokenPairsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/erc20/v1/token_pairs`;
    return await this.get<QueryTokenPairsResponseSDKType>(endpoint, options);
  }

  /* TokenPair retrieves a registered token pair */
  async tokenPair(params: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType> {
    const endpoint = `evmos/erc20/v1/token_pairs/${params.token}`;
    return await this.get<QueryTokenPairResponseSDKType>(endpoint);
  }

  /* Params retrieves the erc20 module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/erc20/v1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }

}