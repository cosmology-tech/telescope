import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as fm from "../../../grpc-gateway";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export class Query {
  static ModuleAccountBalance(request: QueryModuleAccountBalanceRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountBalanceResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/module_account_balance?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ClaimRecord(request: QueryClaimRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claim_record/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ClaimableForAction(request: QueryClaimableForActionRequest, initRequest?: fm.InitReq): Promise<QueryClaimableForActionResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claimable_for_action/${request["address"]}/{action}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static TotalClaimable(request: QueryTotalClaimableRequest, initRequest?: fm.InitReq): Promise<QueryTotalClaimableResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/total_claimable/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

}