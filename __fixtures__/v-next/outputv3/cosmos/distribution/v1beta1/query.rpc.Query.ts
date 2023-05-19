import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
export class Query {
  /** Params queries params of the distribution module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  static ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorOutstandingRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorCommission queries accumulated commission for a validator. */
  static ValidatorCommission(request: QueryValidatorCommissionRequest, initRequest?: fm.InitReq): Promise<QueryValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/commission?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorSlashes queries slash events of a validator. */
  static ValidatorSlashes(request: QueryValidatorSlashesRequest, initRequest?: fm.InitReq): Promise<QueryValidatorSlashesResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/slashes?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  static DelegationRewards(request: QueryDelegationRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards/{validator_address}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  static DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationTotalRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorValidators queries the validators of a delegator. */
  static DelegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/validators?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  static DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** CommunityPool queries the community pool coins. */
  static CommunityPool(request: QueryCommunityPoolRequest, initRequest?: fm.InitReq): Promise<QueryCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Params queries params of the distribution module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  async ValidatorOutstandingRewards(req: QueryValidatorOutstandingRewardsRequest, headers?: HeadersInit): Promise<QueryValidatorOutstandingRewardsResponse> {
    return Query.ValidatorOutstandingRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorCommission queries accumulated commission for a validator. */
  async ValidatorCommission(req: QueryValidatorCommissionRequest, headers?: HeadersInit): Promise<QueryValidatorCommissionResponse> {
    return Query.ValidatorCommission(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorSlashes queries slash events of a validator. */
  async ValidatorSlashes(req: QueryValidatorSlashesRequest, headers?: HeadersInit): Promise<QueryValidatorSlashesResponse> {
    return Query.ValidatorSlashes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  async DelegationRewards(req: QueryDelegationRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationRewardsResponse> {
    return Query.DelegationRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  async DelegationTotalRewards(req: QueryDelegationTotalRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationTotalRewardsResponse> {
    return Query.DelegationTotalRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorValidators queries the validators of a delegator. */
  async DelegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse> {
    return Query.DelegatorValidators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async DelegatorWithdrawAddress(req: QueryDelegatorWithdrawAddressRequest, headers?: HeadersInit): Promise<QueryDelegatorWithdrawAddressResponse> {
    return Query.DelegatorWithdrawAddress(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** CommunityPool queries the community pool coins. */
  async CommunityPool(req: QueryCommunityPoolRequest, headers?: HeadersInit): Promise<QueryCommunityPoolResponse> {
    return Query.CommunityPool(req, {
      headers,
      pathPrefix: this.url
    });
  }
}