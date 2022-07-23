import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { ClaimsRecordAddress, Claim } from "./claims";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  async totalUnclaimed(params: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse> {
    const endpoint = `evmos/claims/v1/total_unclaimed/`;
    return await this.request(endpoint);
  }

  /* Params returns the claims module parameters */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `evmos/claims/v1/params/`;
    return await this.request(endpoint);
  }

  /* ClaimsRecords returns all claims records */
  async claimsRecords(params: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/claims/v1/claims_records/`;
    return await this.request(endpoint, options);
  }

  /* ClaimsRecord returns the claims record for a given address */
  async claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const endpoint = `evmos/claims/v1/claims_records/${params.address}`;
    return await this.request(endpoint);
  }

}