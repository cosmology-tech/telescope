import { Action, ClaimRecord } from "./claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* ModuleAccountBalance */
  async moduleAccountBalance(params: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance/`;
    return await this.request(endpoint);
  }

  /* Params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/claim/v1beta1/params/`;
    return await this.request(endpoint);
  }

  /* ClaimRecord */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.request(endpoint);
  }

  /* ClaimableForAction */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.request(endpoint);
  }

  /* TotalClaimable */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.request(endpoint);
  }

}