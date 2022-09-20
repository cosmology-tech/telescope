import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
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
  async totalUnclaimed(_params: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponseSDKType> {
    const endpoint = `evmos/claims/v1/total_unclaimed`;
    return await this.get<QueryTotalUnclaimedResponseSDKType>(endpoint);
  }

  /* Params returns the claims module parameters */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/claims/v1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
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
    return await this.get<QueryClaimsRecordsResponseSDKType>(endpoint, options);
  }

  /* ClaimsRecord returns the claims record for a given address */
  async claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType> {
    const endpoint = `evmos/claims/v1/claims_records/${params.address}`;
    return await this.get<QueryClaimsRecordResponseSDKType>(endpoint);
  }

}