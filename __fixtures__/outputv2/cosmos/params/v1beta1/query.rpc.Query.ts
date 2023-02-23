import { ParamChange, ParamChangeSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** Subspaces queries for all registered subspaces and all keys for a subspace. */
  Subspaces(request?: DeepPartial<QuerySubspacesRequest>, metadata?: grpc.Metadata): Promise<QuerySubspacesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.subspaces = this.subspaces.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  subspaces(request: DeepPartial<QuerySubspacesRequest> = {}, metadata?: grpc.Metadata): Promise<QuerySubspacesResponse> {
    return this.rpc.unary(QuerySubspacesDesc, QuerySubspacesRequest.fromPartial(request), metadata);
  }

}