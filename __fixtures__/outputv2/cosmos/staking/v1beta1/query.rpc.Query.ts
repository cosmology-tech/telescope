import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Validators queries all validators that match the given status. */
  validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;

  /** Validator queries validator info for given validator address. */
  validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;

  /** ValidatorDelegations queries delegate info for given validator. */
  validatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse>;

  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  validatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse>;

  /** Delegation queries delegate info for given validator delegator pair. */
  delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;

  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  unbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse>;

  /** DelegatorDelegations queries all delegations of a given delegator address. */
  delegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse>;

  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  delegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse>;

  /** Redelegations queries redelegations of given address. */
  redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse>;

  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;

  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  delegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse>;

  /** HistoricalInfo queries the historical info for given height. */
  historicalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse>;

  /** Pool queries the pool info. */
  pool(request?: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;

  /** Parameters queries the staking parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }

  validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse> {
    return this.rpc.unary(QueryValidatorsDesc, QueryValidatorsRequest.fromPartial(request), metadata);
  }

  validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse> {
    return this.rpc.unary(QueryValidatorDesc, QueryValidatorRequest.fromPartial(request), metadata);
  }

  validatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse> {
    return this.rpc.unary(QueryValidatorDelegationsDesc, QueryValidatorDelegationsRequest.fromPartial(request), metadata);
  }

  validatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return this.rpc.unary(QueryValidatorUnbondingDelegationsDesc, QueryValidatorUnbondingDelegationsRequest.fromPartial(request), metadata);
  }

  delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse> {
    return this.rpc.unary(QueryDelegationDesc, QueryDelegationRequest.fromPartial(request), metadata);
  }

  unbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse> {
    return this.rpc.unary(QueryUnbondingDelegationDesc, QueryUnbondingDelegationRequest.fromPartial(request), metadata);
  }

  delegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse> {
    return this.rpc.unary(QueryDelegatorDelegationsDesc, QueryDelegatorDelegationsRequest.fromPartial(request), metadata);
  }

  delegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.rpc.unary(QueryDelegatorUnbondingDelegationsDesc, QueryDelegatorUnbondingDelegationsRequest.fromPartial(request), metadata);
  }

  redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse> {
    return this.rpc.unary(QueryRedelegationsDesc, QueryRedelegationsRequest.fromPartial(request), metadata);
  }

  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }

  delegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse> {
    return this.rpc.unary(QueryDelegatorValidatorDesc, QueryDelegatorValidatorRequest.fromPartial(request), metadata);
  }

  historicalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse> {
    return this.rpc.unary(QueryHistoricalInfoDesc, QueryHistoricalInfoRequest.fromPartial(request), metadata);
  }

  pool(request: DeepPartial<QueryPoolRequest> = {}, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}