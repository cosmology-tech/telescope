import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
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


  async totalUnclaimed(_params: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponse> {
    const endpoint = `evmos/claims/v1/total_unclaimed`;
    return await this.req.get<QueryTotalUnclaimedResponse>(endpoint);
  }
  /* Params returns the claims module parameters */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/claims/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* ClaimsRecords returns all claims records */


  async claimsRecords(params: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/claims/v1/claims_records`;
    return await this.req.get<QueryClaimsRecordsResponse>(endpoint, options);
  }
  /* ClaimsRecord returns the claims record for a given address */


  async claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const endpoint = `evmos/claims/v1/claims_records/${params.address}`;
    return await this.req.get<QueryClaimsRecordResponse>(endpoint);
  }

}