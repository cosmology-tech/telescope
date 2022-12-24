import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsAminoType, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressAminoType, ClaimsRecordAddressSDKType, Claim, ClaimAmino, ClaimAminoType, ClaimSDKType } from "./claims";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestAmino, QueryTotalUnclaimedRequestAminoType, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseAmino, QueryTotalUnclaimedResponseAminoType, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestAminoType, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseAminoType, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestAmino, QueryClaimsRecordsRequestAminoType, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseAmino, QueryClaimsRecordsResponseAminoType, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestAmino, QueryClaimsRecordRequestAminoType, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseAmino, QueryClaimsRecordResponseAminoType, QueryClaimsRecordResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.totalUnclaimed = this.totalUnclaimed.bind(this);
    this.params = this.params.bind(this);
    this.claimsRecords = this.claimsRecords.bind(this);
    this.claimsRecord = this.claimsRecord.bind(this);
  }

  /* TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  async totalUnclaimed(_params: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponseSDKType> {
    const endpoint = `evmos/claims/v1/total_unclaimed`;
    return await this.req.get<QueryTotalUnclaimedResponseSDKType>(endpoint);
  }

  /* Params returns the claims module parameters */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/claims/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* ClaimsRecords returns all claims records */
  async claimsRecords(params: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/claims/v1/claims_records`;
    return await this.req.get<QueryClaimsRecordsResponseSDKType>(endpoint, options);
  }

  /* ClaimsRecord returns the claims record for a given address */
  async claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType> {
    const endpoint = `evmos/claims/v1/claims_records/${params.address}`;
    return await this.req.get<QueryClaimsRecordResponseSDKType>(endpoint);
  }

}