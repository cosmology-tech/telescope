import { Params } from "./mint";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns the total set of minting parameters.*/

  epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
  /*EpochProvisions current minting epoch provisions value.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse> {
    const data = QueryEpochProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "EpochProvisions", data);
    return promise.then(data => QueryEpochProvisionsResponse.decode(new _m0.Reader(data)));
  }

}