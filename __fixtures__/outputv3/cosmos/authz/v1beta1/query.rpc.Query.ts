import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import * as fm from "../../../grpc-gateway";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
export class Query {
  //Returns list of `Authorization`, granted to the grantee by the granter.
  static Grants(request: QueryGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GranterGrants returns list of `GrantAuthorization`, granted by granter.

 Since: cosmos-sdk 0.46
  static GranterGrants(request: QueryGranterGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranterGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${request["granter"]}?${fm.renderURLSearchParams({ ...request
    }, ["granter"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GranteeGrants returns a list of `GrantAuthorization` by grantee.

 Since: cosmos-sdk 0.46
  static GranteeGrants(request: QueryGranteeGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranteeGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${request["grantee"]}?${fm.renderURLSearchParams({ ...request
    }, ["grantee"])}`, { ...initRequest,
      method: "GET"
    });
  }

}