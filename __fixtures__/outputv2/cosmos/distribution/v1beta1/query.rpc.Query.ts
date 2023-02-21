import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";

/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse>;

  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse>;

  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse>;

  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse>;

  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse>;

  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;

  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse>;

  /** CommunityPool queries the community pool coins. */
  communityPool(request?: DeepPartial<QueryCommunityPoolRequest>, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
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

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  validatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse> {
    return this.rpc.unary(QueryValidatorOutstandingRewardsDesc, QueryValidatorOutstandingRewardsRequest.fromPartial(request), metadata);
  }

  validatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse> {
    return this.rpc.unary(QueryValidatorCommissionDesc, QueryValidatorCommissionRequest.fromPartial(request), metadata);
  }

  validatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse> {
    return this.rpc.unary(QueryValidatorSlashesDesc, QueryValidatorSlashesRequest.fromPartial(request), metadata);
  }

  delegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse> {
    return this.rpc.unary(QueryDelegationRewardsDesc, QueryDelegationRewardsRequest.fromPartial(request), metadata);
  }

  delegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse> {
    return this.rpc.unary(QueryDelegationTotalRewardsDesc, QueryDelegationTotalRewardsRequest.fromPartial(request), metadata);
  }

  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }

  delegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse> {
    return this.rpc.unary(QueryDelegatorWithdrawAddressDesc, QueryDelegatorWithdrawAddressRequest.fromPartial(request), metadata);
  }

  communityPool(request: DeepPartial<QueryCommunityPoolRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse> {
    return this.rpc.unary(QueryCommunityPoolDesc, QueryCommunityPoolRequest.fromPartial(request), metadata);
  }

}