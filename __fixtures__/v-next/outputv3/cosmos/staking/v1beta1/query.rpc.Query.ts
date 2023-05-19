import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import * as fm from "../../../grpc-gateway";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** Validators queries all validators that match the given status. */
  static Validators(request: QueryValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Validator queries validator info for given validator address. */
  static Validator(request: QueryValidatorRequest, initRequest?: fm.InitReq): Promise<QueryValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorDelegations queries delegate info for given validator. */
  static ValidatorDelegations(request: QueryValidatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  static ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Delegation queries delegate info for given validator delegator pair. */
  static Delegation(request: QueryDelegationRequest, initRequest?: fm.InitReq): Promise<QueryDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  static UnbondingDelegation(request: QueryUnbondingDelegationRequest, initRequest?: fm.InitReq): Promise<QueryUnbondingDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}/unbonding_delegation?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  static DelegatorDelegations(request: QueryDelegatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  static DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Redelegations queries redelegations of given address. */
  static Redelegations(request: QueryRedelegationsRequest, initRequest?: fm.InitReq): Promise<QueryRedelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/redelegations?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  static DelegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  static DelegatorValidator(request: QueryDelegatorValidatorRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators/{validator_addr}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** HistoricalInfo queries the historical info for given height. */
  static HistoricalInfo(request: QueryHistoricalInfoRequest, initRequest?: fm.InitReq): Promise<QueryHistoricalInfoResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Pool queries the pool info. */
  static Pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Parameters queries the staking parameters. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams({
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
  /** Validators queries all validators that match the given status. */
  async Validators(req: QueryValidatorsRequest, headers?: HeadersInit): Promise<QueryValidatorsResponse> {
    return Query.Validators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Validator queries validator info for given validator address. */
  async Validator(req: QueryValidatorRequest, headers?: HeadersInit): Promise<QueryValidatorResponse> {
    return Query.Validator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorDelegations queries delegate info for given validator. */
  async ValidatorDelegations(req: QueryValidatorDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorDelegationsResponse> {
    return Query.ValidatorDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async ValidatorUnbondingDelegations(req: QueryValidatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return Query.ValidatorUnbondingDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Delegation queries delegate info for given validator delegator pair. */
  async Delegation(req: QueryDelegationRequest, headers?: HeadersInit): Promise<QueryDelegationResponse> {
    return Query.Delegation(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  async UnbondingDelegation(req: QueryUnbondingDelegationRequest, headers?: HeadersInit): Promise<QueryUnbondingDelegationResponse> {
    return Query.UnbondingDelegation(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  async DelegatorDelegations(req: QueryDelegatorDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorDelegationsResponse> {
    return Query.DelegatorDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  async DelegatorUnbondingDelegations(req: QueryDelegatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return Query.DelegatorUnbondingDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Redelegations queries redelegations of given address. */
  async Redelegations(req: QueryRedelegationsRequest, headers?: HeadersInit): Promise<QueryRedelegationsResponse> {
    return Query.Redelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  async DelegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse> {
    return Query.DelegatorValidators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  async DelegatorValidator(req: QueryDelegatorValidatorRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorResponse> {
    return Query.DelegatorValidator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** HistoricalInfo queries the historical info for given height. */
  async HistoricalInfo(req: QueryHistoricalInfoRequest, headers?: HeadersInit): Promise<QueryHistoricalInfoResponse> {
    return Query.HistoricalInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Pool queries the pool info. */
  async Pool(req: QueryPoolRequest, headers?: HeadersInit): Promise<QueryPoolResponse> {
    return Query.Pool(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Parameters queries the staking parameters. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}