import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of superfluid parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  assetType(request: DeepPartial<AssetTypeRequest>, metadata?: grpc.Metadata): Promise<AssetTypeResponse>;

  /** Returns all registered superfluid assets. */
  allAssets(request?: DeepPartial<AllAssetsRequest>, metadata?: grpc.Metadata): Promise<AllAssetsResponse>;

  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier(request: DeepPartial<AssetMultiplierRequest>, metadata?: grpc.Metadata): Promise<AssetMultiplierResponse>;

  /** Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts(request?: DeepPartial<AllIntermediaryAccountsRequest>, metadata?: grpc.Metadata): Promise<AllIntermediaryAccountsResponse>;

  /** Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount(request: DeepPartial<ConnectedIntermediaryAccountRequest>, metadata?: grpc.Metadata): Promise<ConnectedIntermediaryAccountResponse>;

  /** Returns the amount of delegations of specific denom for all validators */
  totalDelegationByValidatorForDenom(request: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByValidatorForDenomResponse>;

  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  totalSuperfluidDelegations(request?: DeepPartial<TotalSuperfluidDelegationsRequest>, metadata?: grpc.Metadata): Promise<TotalSuperfluidDelegationsResponse>;

  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  superfluidDelegationAmount(request: DeepPartial<SuperfluidDelegationAmountRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationAmountResponse>;

  /** Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator(request: DeepPartial<SuperfluidDelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByDelegatorResponse>;

  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator(request: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidUndelegationsByDelegatorResponse>;

  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  superfluidDelegationsByValidatorDenom(request: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByValidatorDenomResponse>;

  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;

  /** Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator(request: DeepPartial<QueryTotalDelegationByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByDelegatorResponse>;

  /** Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist(request?: DeepPartial<QueryUnpoolWhitelistRequest>, metadata?: grpc.Metadata): Promise<QueryUnpoolWhitelistResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalDelegationByValidatorForDenom = this.totalDelegationByValidatorForDenom.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
    this.unpoolWhitelist = this.unpoolWhitelist.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  assetType(request: DeepPartial<AssetTypeRequest>, metadata?: grpc.Metadata): Promise<AssetTypeResponse> {
    return this.rpc.unary(AssetTypeDesc, AssetTypeRequest.fromPartial(request), metadata);
  }

  allAssets(request: DeepPartial<AllAssetsRequest> = {}, metadata?: grpc.Metadata): Promise<AllAssetsResponse> {
    return this.rpc.unary(AllAssetsDesc, AllAssetsRequest.fromPartial(request), metadata);
  }

  assetMultiplier(request: DeepPartial<AssetMultiplierRequest>, metadata?: grpc.Metadata): Promise<AssetMultiplierResponse> {
    return this.rpc.unary(AssetMultiplierDesc, AssetMultiplierRequest.fromPartial(request), metadata);
  }

  allIntermediaryAccounts(request: DeepPartial<AllIntermediaryAccountsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<AllIntermediaryAccountsResponse> {
    return this.rpc.unary(AllIntermediaryAccountsDesc, AllIntermediaryAccountsRequest.fromPartial(request), metadata);
  }

  connectedIntermediaryAccount(request: DeepPartial<ConnectedIntermediaryAccountRequest>, metadata?: grpc.Metadata): Promise<ConnectedIntermediaryAccountResponse> {
    return this.rpc.unary(ConnectedIntermediaryAccountDesc, ConnectedIntermediaryAccountRequest.fromPartial(request), metadata);
  }

  totalDelegationByValidatorForDenom(request: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    return this.rpc.unary(QueryTotalDelegationByValidatorForDenomDesc, QueryTotalDelegationByValidatorForDenomRequest.fromPartial(request), metadata);
  }

  totalSuperfluidDelegations(request: DeepPartial<TotalSuperfluidDelegationsRequest> = {}, metadata?: grpc.Metadata): Promise<TotalSuperfluidDelegationsResponse> {
    return this.rpc.unary(TotalSuperfluidDelegationsDesc, TotalSuperfluidDelegationsRequest.fromPartial(request), metadata);
  }

  superfluidDelegationAmount(request: DeepPartial<SuperfluidDelegationAmountRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationAmountResponse> {
    return this.rpc.unary(SuperfluidDelegationAmountDesc, SuperfluidDelegationAmountRequest.fromPartial(request), metadata);
  }

  superfluidDelegationsByDelegator(request: DeepPartial<SuperfluidDelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByDelegatorResponse> {
    return this.rpc.unary(SuperfluidDelegationsByDelegatorDesc, SuperfluidDelegationsByDelegatorRequest.fromPartial(request), metadata);
  }

  superfluidUndelegationsByDelegator(request: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    return this.rpc.unary(SuperfluidUndelegationsByDelegatorDesc, SuperfluidUndelegationsByDelegatorRequest.fromPartial(request), metadata);
  }

  superfluidDelegationsByValidatorDenom(request: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    return this.rpc.unary(SuperfluidDelegationsByValidatorDenomDesc, SuperfluidDelegationsByValidatorDenomRequest.fromPartial(request), metadata);
  }

  estimateSuperfluidDelegatedAmountByValidatorDenom(request: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    return this.rpc.unary(EstimateSuperfluidDelegatedAmountByValidatorDenomDesc, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromPartial(request), metadata);
  }

  totalDelegationByDelegator(request: DeepPartial<QueryTotalDelegationByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByDelegatorResponse> {
    return this.rpc.unary(QueryTotalDelegationByDelegatorDesc, QueryTotalDelegationByDelegatorRequest.fromPartial(request), metadata);
  }

  unpoolWhitelist(request: DeepPartial<QueryUnpoolWhitelistRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUnpoolWhitelistResponse> {
    return this.rpc.unary(QueryUnpoolWhitelistDesc, QueryUnpoolWhitelistRequest.fromPartial(request), metadata);
  }

}