import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse>;

  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  granterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse>;

  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  granteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }

  grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse> {
    return this.rpc.unary(QueryGrantsDesc, QueryGrantsRequest.fromPartial(request), metadata);
  }

  granterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse> {
    return this.rpc.unary(QueryGranterGrantsDesc, QueryGranterGrantsRequest.fromPartial(request), metadata);
  }

  granteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse> {
    return this.rpc.unary(QueryGranteeGrantsDesc, QueryGranteeGrantsRequest.fromPartial(request), metadata);
  }

}