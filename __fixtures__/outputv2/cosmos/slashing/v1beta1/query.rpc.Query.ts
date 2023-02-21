import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** SigningInfo queries the signing info of given cons address */
  signingInfo(request: DeepPartial<QuerySigningInfoRequest>, metadata?: grpc.Metadata): Promise<QuerySigningInfoResponse>;

  /** SigningInfos queries signing info of all validators */
  signingInfos(request?: DeepPartial<QuerySigningInfosRequest>, metadata?: grpc.Metadata): Promise<QuerySigningInfosResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  signingInfo(request: DeepPartial<QuerySigningInfoRequest>, metadata?: grpc.Metadata): Promise<QuerySigningInfoResponse> {
    return this.rpc.unary(QuerySigningInfoDesc, QuerySigningInfoRequest.fromPartial(request), metadata);
  }

  signingInfos(request: DeepPartial<QuerySigningInfosRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QuerySigningInfosResponse> {
    return this.rpc.unary(QuerySigningInfosDesc, QuerySigningInfosRequest.fromPartial(request), metadata);
  }

}