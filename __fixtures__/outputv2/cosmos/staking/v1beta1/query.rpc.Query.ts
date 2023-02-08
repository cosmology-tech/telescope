import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import * as fm from "../../../grpc-gateway";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  static Validators(request: QueryValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Validator(request: QueryValidatorRequest, initRequest?: fm.InitReq): Promise<QueryValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({ ...request
    }, ["validator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ValidatorDelegations(request: QueryValidatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations?${fm.renderURLSearchParams({ ...request
    }, ["validator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({ ...request
    }, ["validator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Delegation(request: QueryDelegationRequest, initRequest?: fm.InitReq): Promise<QueryDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}?${fm.renderURLSearchParams({ ...request
    }, ["validator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UnbondingDelegation(request: QueryUnbondingDelegationRequest, initRequest?: fm.InitReq): Promise<QueryUnbondingDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}/unbonding_delegation?${fm.renderURLSearchParams({ ...request
    }, ["validator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorDelegations(request: QueryDelegatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({ ...request
    }, ["delegator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({ ...request
    }, ["delegator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Redelegations(request: QueryRedelegationsRequest, initRequest?: fm.InitReq): Promise<QueryRedelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/redelegations?${fm.renderURLSearchParams({ ...request
    }, ["delegator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators?${fm.renderURLSearchParams({ ...request
    }, ["delegator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorValidator(request: QueryDelegatorValidatorRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators/{validator_addr}?${fm.renderURLSearchParams({ ...request
    }, ["delegator_addr"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static HistoricalInfo(request: QueryHistoricalInfoRequest, initRequest?: fm.InitReq): Promise<QueryHistoricalInfoResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${request["height"]}?${fm.renderURLSearchParams({ ...request
    }, ["height"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}