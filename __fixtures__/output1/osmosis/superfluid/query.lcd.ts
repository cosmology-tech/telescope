import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse } from "./query";
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

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Returns superfluid asset type */
  async assetType(params: AssetTypeRequest): Promise<AssetTypeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.request<AssetTypeResponse>(endpoint, options);
  }

  /* Returns all superfluid asset types */
  async allAssets(_params: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.request<AllAssetsResponse>(endpoint);
  }

  /* Returns superfluid asset Multiplier */
  async assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.request<AssetMultiplierResponse>(endpoint, options);
  }

  /* Returns all superfluid intermediary account */
  async allIntermediaryAccounts(params: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.request<AllIntermediaryAccountsResponse>(endpoint, options);
  }

  /* Returns intermediary account connected to a superfluid staked lock by id */
  async connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.lockId !== "undefined") {
      options.params.lock_id = params.lockId;
    }

    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lockId}`;
    return await this.request<ConnectedIntermediaryAccountResponse>(endpoint, options);
  }

  /* Returns the total amount of osmo superfluidly staked
  response denominated in uosmo */
  async totalSuperfluidDelegations(_params: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.request<TotalSuperfluidDelegationsResponse>(endpoint);
  }

  /* Returns the coins superfluid delegated for a delegator, validator, denom
  triplet */
  async superfluidDelegationAmount(params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.request<SuperfluidDelegationAmountResponse>(endpoint, options);
  }

  /* Returns all the superfluid poistions for a specific delegator */
  async superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegatorAddress}`;
    return await this.request<SuperfluidDelegationsByDelegatorResponse>(endpoint, options);
  }

  /* SuperfluidUndelegationsByDelegator */
  async superfluidUndelegationsByDelegator(params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegatorAddress}`;
    return await this.request<SuperfluidUndelegationsByDelegatorResponse>(endpoint, options);
  }

  /* Returns all the superfluid positions of a specific denom delegated to one
  validator */
  async superfluidDelegationsByValidatorDenom(params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.request<SuperfluidDelegationsByValidatorDenomResponse>(endpoint, options);
  }

  /* Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount */
  async estimateSuperfluidDelegatedAmountByValidatorDenom(params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.request<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>(endpoint, options);
  }

}