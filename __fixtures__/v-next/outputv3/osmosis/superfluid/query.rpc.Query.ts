import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
export class Query {
  /** Params returns the total set of superfluid parameters. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  static AssetType(request: AssetTypeRequest, initRequest?: fm.InitReq): Promise<AssetTypeResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/asset_type?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns all registered superfluid assets. */
  static AllAssets(request: AllAssetsRequest, initRequest?: fm.InitReq): Promise<AllAssetsResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_assets?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  static AssetMultiplier(request: AssetMultiplierRequest, initRequest?: fm.InitReq): Promise<AssetMultiplierResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/asset_multiplier?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns all superfluid intermediary accounts. */
  static AllIntermediaryAccounts(request: AllIntermediaryAccountsRequest, initRequest?: fm.InitReq): Promise<AllIntermediaryAccountsResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_intermediary_accounts?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns intermediary account connected to a superfluid staked lock by id */
  static ConnectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest, initRequest?: fm.InitReq): Promise<ConnectedIntermediaryAccountResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/connected_intermediary_account/${request["lock_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["lock_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns the amount of delegations of specific denom for all validators */
  static TotalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest, initRequest?: fm.InitReq): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    return fm.fetchReq(`osmosis.superfluid.TotalDelegationByValidatorForDenom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  static TotalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest, initRequest?: fm.InitReq): Promise<TotalSuperfluidDelegationsResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_superfluid_delegations?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  static SuperfluidDelegationAmount(request: SuperfluidDelegationAmountRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationAmountResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegation_amount?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns all the delegated superfluid poistions for a specific delegator. */
  static SuperfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationsByDelegatorResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegations/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  static SuperfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest, initRequest?: fm.InitReq): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  static SuperfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  static EstimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, initRequest?: fm.InitReq): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns the specified delegations for a specific delegator */
  static TotalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest, initRequest?: fm.InitReq): Promise<QueryTotalDelegationByDelegatorResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/total_delegation_by_delegator/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns a list of whitelisted pool ids to unpool. */
  static UnpoolWhitelist(request: QueryUnpoolWhitelistRequest, initRequest?: fm.InitReq): Promise<QueryUnpoolWhitelistResponse> {
    return fm.fetchReq(`/osmosis/superfluid/v1beta1/unpool_whitelist?${fm.renderURLSearchParams({
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
  /** Params returns the total set of superfluid parameters. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  async AssetType(req: AssetTypeRequest, headers?: HeadersInit): Promise<AssetTypeResponse> {
    return Query.AssetType(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns all registered superfluid assets. */
  async AllAssets(req: AllAssetsRequest, headers?: HeadersInit): Promise<AllAssetsResponse> {
    return Query.AllAssets(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  async AssetMultiplier(req: AssetMultiplierRequest, headers?: HeadersInit): Promise<AssetMultiplierResponse> {
    return Query.AssetMultiplier(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns all superfluid intermediary accounts. */
  async AllIntermediaryAccounts(req: AllIntermediaryAccountsRequest, headers?: HeadersInit): Promise<AllIntermediaryAccountsResponse> {
    return Query.AllIntermediaryAccounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns intermediary account connected to a superfluid staked lock by id */
  async ConnectedIntermediaryAccount(req: ConnectedIntermediaryAccountRequest, headers?: HeadersInit): Promise<ConnectedIntermediaryAccountResponse> {
    return Query.ConnectedIntermediaryAccount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns the amount of delegations of specific denom for all validators */
  async TotalDelegationByValidatorForDenom(req: QueryTotalDelegationByValidatorForDenomRequest, headers?: HeadersInit): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    return Query.TotalDelegationByValidatorForDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  async TotalSuperfluidDelegations(req: TotalSuperfluidDelegationsRequest, headers?: HeadersInit): Promise<TotalSuperfluidDelegationsResponse> {
    return Query.TotalSuperfluidDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  async SuperfluidDelegationAmount(req: SuperfluidDelegationAmountRequest, headers?: HeadersInit): Promise<SuperfluidDelegationAmountResponse> {
    return Query.SuperfluidDelegationAmount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns all the delegated superfluid poistions for a specific delegator. */
  async SuperfluidDelegationsByDelegator(req: SuperfluidDelegationsByDelegatorRequest, headers?: HeadersInit): Promise<SuperfluidDelegationsByDelegatorResponse> {
    return Query.SuperfluidDelegationsByDelegator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  async SuperfluidUndelegationsByDelegator(req: SuperfluidUndelegationsByDelegatorRequest, headers?: HeadersInit): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    return Query.SuperfluidUndelegationsByDelegator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  async SuperfluidDelegationsByValidatorDenom(req: SuperfluidDelegationsByValidatorDenomRequest, headers?: HeadersInit): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    return Query.SuperfluidDelegationsByValidatorDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  async EstimateSuperfluidDelegatedAmountByValidatorDenom(req: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, headers?: HeadersInit): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    return Query.EstimateSuperfluidDelegatedAmountByValidatorDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns the specified delegations for a specific delegator */
  async TotalDelegationByDelegator(req: QueryTotalDelegationByDelegatorRequest, headers?: HeadersInit): Promise<QueryTotalDelegationByDelegatorResponse> {
    return Query.TotalDelegationByDelegator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns a list of whitelisted pool ids to unpool. */
  async UnpoolWhitelist(req: QueryUnpoolWhitelistRequest, headers?: HeadersInit): Promise<QueryUnpoolWhitelistResponse> {
    return Query.UnpoolWhitelist(req, {
      headers,
      pathPrefix: this.url
    });
  }
}