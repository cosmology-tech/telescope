import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  //TokenPairs retrieves registered token pairs
  static TokenPairs(request: QueryTokenPairsRequest, initRequest?: fm.InitReq): Promise<QueryTokenPairsResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/token_pairs?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //TokenPair retrieves a registered token pair
  static TokenPair(request: QueryTokenPairRequest, initRequest?: fm.InitReq): Promise<QueryTokenPairResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/token_pairs/${request["token"]}?${fm.renderURLSearchParams({ ...request
    }, ["token"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //Params retrieves the erc20 module params
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}