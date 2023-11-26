import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SigningInfo queries the signing info of given cons address */
  signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
  /** SigningInfos queries signing info of all validators */
  signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Params queries the parameters of slashing module */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* SigningInfo queries the signing info of given cons address */
  signingInfo = async (request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> => {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
    return promise.then(data => QuerySigningInfoResponse.decode(new BinaryReader(data)));
  };
  /* SigningInfos queries signing info of all validators */
  signingInfos = async (request: QuerySigningInfosRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QuerySigningInfosResponse> => {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
    return promise.then(data => QuerySigningInfosResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};