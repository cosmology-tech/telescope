import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  moduleAccountBalance(request?: DeepPartial<QueryModuleAccountBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountBalanceResponse>;
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  claimRecord(request: DeepPartial<QueryClaimRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: DeepPartial<QueryClaimableForActionRequest>, metadata?: grpc.Metadata): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: DeepPartial<QueryTotalClaimableRequest>, metadata?: grpc.Metadata): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }

  moduleAccountBalance(request: DeepPartial<QueryModuleAccountBalanceRequest> = {}, metadata?: grpc.Metadata): Promise<QueryModuleAccountBalanceResponse> {
    return this.rpc.unary(QueryModuleAccountBalanceDesc, QueryModuleAccountBalanceRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  claimRecord(request: DeepPartial<QueryClaimRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimRecordResponse> {
    return this.rpc.unary(QueryClaimRecordDesc, QueryClaimRecordRequest.fromPartial(request), metadata);
  }

  claimableForAction(request: DeepPartial<QueryClaimableForActionRequest>, metadata?: grpc.Metadata): Promise<QueryClaimableForActionResponse> {
    return this.rpc.unary(QueryClaimableForActionDesc, QueryClaimableForActionRequest.fromPartial(request), metadata);
  }

  totalClaimable(request: DeepPartial<QueryTotalClaimableRequest>, metadata?: grpc.Metadata): Promise<QueryTotalClaimableResponse> {
    return this.rpc.unary(QueryTotalClaimableDesc, QueryTotalClaimableRequest.fromPartial(request), metadata);
  }

}