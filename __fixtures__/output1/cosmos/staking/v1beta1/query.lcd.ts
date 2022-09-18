import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
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

  /* Validators queries all validators that match the given status. */
  async validators(params: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators`;
    return await this.get<QueryValidatorsResponseSDKType>(endpoint, options);
  }

  /* Validator queries validator info for given validator address. */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}`;
    return await this.get<QueryValidatorResponseSDKType>(endpoint);
  }

  /* ValidatorDelegations queries delegate info for given validator. */
  async validatorDelegations(params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`;
    return await this.get<QueryValidatorDelegationsResponseSDKType>(endpoint, options);
  }

  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async validatorUnbondingDelegations(params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/unbonding_delegations`;
    return await this.get<QueryValidatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  }

  /* Delegation queries delegate info for given validator delegator pair. */
  async delegation(params: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}delegations/${params.delegatorAddr}`;
    return await this.get<QueryDelegationResponseSDKType>(endpoint);
  }

  /* UnbondingDelegation queries unbonding info for given validator delegator
  pair. */
  async unbondingDelegation(params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}/unbonding_delegation`;
    return await this.get<QueryUnbondingDelegationResponseSDKType>(endpoint);
  }

  /* DelegatorDelegations queries all delegations of a given delegator address. */
  async delegatorDelegations(params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegatorAddr}`;
    return await this.get<QueryDelegatorDelegationsResponseSDKType>(endpoint, options);
  }

  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
  delegator address. */
  async delegatorUnbondingDelegations(params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/unbonding_delegations`;
    return await this.get<QueryDelegatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  }

  /* Redelegations queries redelegations of given address. */
  async redelegations(params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.srcValidatorAddr !== "undefined") {
      options.params.src_validator_addr = params.srcValidatorAddr;
    }

    if (typeof params?.dstValidatorAddr !== "undefined") {
      options.params.dst_validator_addr = params.dstValidatorAddr;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/redelegations`;
    return await this.get<QueryRedelegationsResponseSDKType>(endpoint, options);
  }

  /* DelegatorValidators queries all validators info for given delegator
  address. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators`;
    return await this.get<QueryDelegatorValidatorsResponseSDKType>(endpoint, options);
  }

  /* DelegatorValidator queries validator info for given delegator validator
  pair. */
  async delegatorValidator(params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}validators/${params.validatorAddr}`;
    return await this.get<QueryDelegatorValidatorResponseSDKType>(endpoint);
  }

  /* HistoricalInfo queries the historical info for given height. */
  async historicalInfo(params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return await this.get<QueryHistoricalInfoResponseSDKType>(endpoint);
  }

  /* Pool queries the pool info. */
  async pool(_params: QueryPoolRequest = {}): Promise<QueryPoolResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return await this.get<QueryPoolResponseSDKType>(endpoint);
  }

  /* Parameters queries the staking parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }

}