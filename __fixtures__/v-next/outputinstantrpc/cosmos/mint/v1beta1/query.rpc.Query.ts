import { Params, ParamsSDKType } from "./mint";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Params returns the total set of minting parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Inflation returns the current minting inflation value. */
  inflation = async (request: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new BinaryReader(data)));
  };
  /* AnnualProvisions current minting annual provisions value. */
  annualProvisions = async (request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> => {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};