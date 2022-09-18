import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
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

  /* ModuleAccountBalance */
  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return await this.get<QueryModuleAccountBalanceResponse>(endpoint);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* ClaimRecord */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.get<QueryClaimRecordResponse>(endpoint);
  }

  /* ClaimableForAction */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.get<QueryClaimableForActionResponse>(endpoint);
  }

  /* TotalClaimable */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.get<QueryTotalClaimableResponse>(endpoint);
  }

}