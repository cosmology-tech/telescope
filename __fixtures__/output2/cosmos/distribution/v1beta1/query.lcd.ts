import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  /* Params queries params of the distribution module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* ValidatorOutstandingRewards queries rewards of a validator address. */


  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`;
    return await this.req.get<QueryValidatorOutstandingRewardsResponse>(endpoint);
  }
  /* ValidatorCommission queries accumulated commission for a validator. */


  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`;
    return await this.req.get<QueryValidatorCommissionResponse>(endpoint);
  }
  /* ValidatorSlashes queries slash events of a validator. */


  async validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.startingHeight !== "undefined") {
      options.params.starting_height = params.startingHeight;
    }

    if (typeof params?.endingHeight !== "undefined") {
      options.params.ending_height = params.endingHeight;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/slashes`;
    return await this.req.get<QueryValidatorSlashesResponse>(endpoint, options);
  }
  /* DelegationRewards queries the total rewards accrued by a delegation. */


  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}rewards/${params.validatorAddress}`;
    return await this.req.get<QueryDelegationRewardsResponse>(endpoint);
  }
  /* DelegationTotalRewards queries the total rewards accrued by a each
   validator. */


  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`;
    return await this.req.get<QueryDelegationTotalRewardsResponse>(endpoint);
  }
  /* DelegatorValidators queries the validators of a delegator. */


  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`;
    return await this.req.get<QueryDelegatorValidatorsResponse>(endpoint);
  }
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */


  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`;
    return await this.req.get<QueryDelegatorWithdrawAddressResponse>(endpoint);
  }
  /* CommunityPool queries the community pool coins. */


  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return await this.req.get<QueryCommunityPoolResponse>(endpoint);
  }

}