import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  moduleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType>;
  /*null*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*null*/

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
  /*null*/

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
  /*null*/

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
  /*null*/

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

  moduleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
  }

}