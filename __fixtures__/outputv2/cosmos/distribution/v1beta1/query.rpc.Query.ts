import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
export class Query {
  static Params(request?: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorOutstandingRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams(request, ["validator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ValidatorCommission(request: QueryValidatorCommissionRequest, initRequest?: fm.InitReq): Promise<QueryValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/commission?${fm.renderURLSearchParams(request, ["validator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ValidatorSlashes(request: QueryValidatorSlashesRequest, initRequest?: fm.InitReq): Promise<QueryValidatorSlashesResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/slashes?${fm.renderURLSearchParams(request, ["validator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegationRewards(request: QueryDelegationRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards/{validator_address}?${fm.renderURLSearchParams(request, ["delegator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationTotalRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards?${fm.renderURLSearchParams(request, ["delegator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/validators?${fm.renderURLSearchParams(request, ["delegator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams(request, ["delegator_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static CommunityPool(request?: QueryCommunityPoolRequest, initRequest?: fm.InitReq): Promise<QueryCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}