import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  /* ModuleAccountBalance */


  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return await this.req.get<QueryModuleAccountBalanceResponse>(endpoint);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* ClaimRecord */


  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.req.get<QueryClaimRecordResponse>(endpoint);
  }
  /* ClaimableForAction */


  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.req.get<QueryClaimableForActionResponse>(endpoint);
  }
  /* TotalClaimable */


  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponse>(endpoint);
  }

}