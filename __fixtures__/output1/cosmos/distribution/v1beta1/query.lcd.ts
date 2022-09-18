import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
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

  /* Params queries params of the distribution module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`;
    return await this.get<QueryValidatorOutstandingRewardsResponse>(endpoint);
  }

  /* ValidatorCommission queries accumulated commission for a validator. */
  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`;
    return await this.get<QueryValidatorCommissionResponse>(endpoint);
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
    return await this.get<QueryValidatorSlashesResponse>(endpoint, options);
  }

  /* DelegationRewards queries the total rewards accrued by a delegation. */
  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}rewards/${params.validatorAddress}`;
    return await this.get<QueryDelegationRewardsResponse>(endpoint);
  }

  /* DelegationTotalRewards queries the total rewards accrued by a each
  validator. */
  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`;
    return await this.get<QueryDelegationTotalRewardsResponse>(endpoint);
  }

  /* DelegatorValidators queries the validators of a delegator. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`;
    return await this.get<QueryDelegatorValidatorsResponse>(endpoint);
  }

  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`;
    return await this.get<QueryDelegatorWithdrawAddressResponse>(endpoint);
  }

  /* CommunityPool queries the community pool coins. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return await this.get<QueryCommunityPoolResponse>(endpoint);
  }

}