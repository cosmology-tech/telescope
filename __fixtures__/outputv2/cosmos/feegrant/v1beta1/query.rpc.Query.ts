import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse>;

  /** Allowances returns all the grants for address. */
  allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse>;

  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  allowancesByGranter(request: DeepPartial<QueryAllowancesByGranterRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesByGranterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }

  allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse> {
    return this.rpc.unary(QueryAllowanceDesc, QueryAllowanceRequest.fromPartial(request), metadata);
  }

  allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse> {
    return this.rpc.unary(QueryAllowancesDesc, QueryAllowancesRequest.fromPartial(request), metadata);
  }

  allowancesByGranter(request: DeepPartial<QueryAllowancesByGranterRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesByGranterResponse> {
    return this.rpc.unary(QueryAllowancesByGranterDesc, QueryAllowancesByGranterRequest.fromPartial(request), metadata);
  }

}