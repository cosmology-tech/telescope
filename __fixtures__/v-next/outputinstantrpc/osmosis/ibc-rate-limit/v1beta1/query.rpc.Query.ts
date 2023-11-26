import { Params, ParamsSDKType } from "./params";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the ibc-rate-limit module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Params defines a gRPC query method that returns the ibc-rate-limit module's
   parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.ibcratelimit.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};