import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponseSDKType>;
  /*TotalUnclaimed queries the total unclaimed tokens from the airdrop*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params returns the claims module parameters*/

  claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponseSDKType>;
  /*ClaimsRecords returns all claims records*/

  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType>;
  /*ClaimsRecord returns the claims record for a given address*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.totalUnclaimed = this.totalUnclaimed.bind(this);
    this.params = this.params.bind(this);
    this.claimsRecords = this.claimsRecords.bind(this);
    this.claimsRecord = this.claimsRecord.bind(this);
  }

  totalUnclaimed(request: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponseSDKType> {
    const data = QueryTotalUnclaimedRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "TotalUnclaimed", data);
    return promise.then(data => QueryTotalUnclaimedResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimsRecords(request: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponseSDKType> {
    const data = QueryClaimsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecords", data);
    return promise.then(data => QueryClaimsRecordsResponse.decode(new _m0.Reader(data)));
  }

  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType> {
    const data = QueryClaimsRecordRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecord", data);
    return promise.then(data => QueryClaimsRecordResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponseSDKType> {
      return queryService.totalUnclaimed(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponseSDKType> {
      return queryService.claimsRecords(request);
    },

    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType> {
      return queryService.claimsRecord(request);
    }

  };
};