import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  totalUnclaimed(request?: DeepPartial<QueryTotalUnclaimedRequest>, metadata?: grpc.Metadata): Promise<QueryTotalUnclaimedResponse>;

  /** Params returns the claims module parameters */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** ClaimsRecords returns all claims records */
  claimsRecords(request?: DeepPartial<QueryClaimsRecordsRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordsResponse>;

  /** ClaimsRecord returns the claims record for a given address */
  claimsRecord(request: DeepPartial<QueryClaimsRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordResponse>;
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

  totalUnclaimed(request: DeepPartial<QueryTotalUnclaimedRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalUnclaimedResponse> {
    return this.rpc.unary(QueryTotalUnclaimedDesc, QueryTotalUnclaimedRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  claimsRecords(request: DeepPartial<QueryClaimsRecordsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryClaimsRecordsResponse> {
    return this.rpc.unary(QueryClaimsRecordsDesc, QueryClaimsRecordsRequest.fromPartial(request), metadata);
  }

  claimsRecord(request: DeepPartial<QueryClaimsRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordResponse> {
    return this.rpc.unary(QueryClaimsRecordDesc, QueryClaimsRecordRequest.fromPartial(request), metadata);
  }

}