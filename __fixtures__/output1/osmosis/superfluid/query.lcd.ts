import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params returns the total set of minting parameters. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/params/`;
    return await this.request(endpoint);
  }

  /* Returns superfluid asset type */
  async assetType(params: AssetTypeRequest): Promise<AssetTypeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_type/`;
    return await this.request(endpoint, options);
  }

  /* Returns all superfluid asset types */
  async allAssets(params: AllAssetsRequest): Promise<AllAssetsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets/`;
    return await this.request(endpoint);
  }

  /* Returns superfluid asset Multiplier */
  async assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier/`;
    return await this.request(endpoint, options);
  }

  /* Returns all superfluid intermediary account */
  async allIntermediaryAccounts(params: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts/`;
    return await this.request(endpoint, options);
  }

  /* Returns intermediary account connected to a superfluid staked lock by id */
  async connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.lockId !== "undefined") {
      options.params.lock_id = params.lockId;
    }

    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lock_id}`;
    return await this.request(endpoint, options);
  }

  /* Returns the total amount of osmo superfluidly staked
  response denominated in uosmo */
  async totalSuperfluidDelegations(params: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations/`;
    return await this.request(endpoint);
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

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount/`;
    return await this.request(endpoint, options);
  }

  /* Returns all the superfluid poistions for a specific delegator */
  async superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegator_address}`;
    return await this.request(endpoint, options);
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

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegator_address}`;
    return await this.request(endpoint, options);
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

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom/`;
    return await this.request(endpoint, options);
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

    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom/`;
    return await this.request(endpoint, options);
  }

}