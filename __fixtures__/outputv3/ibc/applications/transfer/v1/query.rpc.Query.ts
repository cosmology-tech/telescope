import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import * as fm from "../../../../grpc-gateway";
import { QueryDenomTraceRequest, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** DenomTrace queries a denomination trace information. */
  static DenomTrace(request: QueryDenomTraceRequest, initRequest?: fm.InitReq): Promise<QueryDenomTraceResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces/${request["hash"]}?${fm.renderURLSearchParams({ ...request
    }, ["hash"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** DenomTraces queries all denomination traces. */
  static DenomTraces(request: QueryDenomTracesRequest, initRequest?: fm.InitReq): Promise<QueryDenomTracesResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Params queries all parameters of the ibc-transfer module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}