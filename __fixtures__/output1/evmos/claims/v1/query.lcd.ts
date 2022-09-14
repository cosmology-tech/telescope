import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { ClaimsRecordAddress, Claim } from "./claims";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  async totalUnclaimed(_params: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponse> {
    const endpoint = `evmos/claims/v1/total_unclaimed`;
    return await this.get<QueryTotalUnclaimedResponse>(endpoint);
  }

  /* Params returns the claims module parameters */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/claims/v1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
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
    return await this.get<QueryClaimsRecordsResponse>(endpoint, options);
  }

  /* ClaimsRecord returns the claims record for a given address */
  async claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const endpoint = `evmos/claims/v1/claims_records/${params.address}`;
    return await this.get<QueryClaimsRecordResponse>(endpoint);
  }

}