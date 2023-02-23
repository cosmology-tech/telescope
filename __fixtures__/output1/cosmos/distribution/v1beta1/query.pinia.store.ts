import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/distribution/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      validatorOutstandingRewards: ({} as QueryValidatorOutstandingRewardsResponse),
      validatorCommission: ({} as QueryValidatorCommissionResponse),
      validatorSlashes: ({} as QueryValidatorSlashesResponse),
      delegationRewards: ({} as QueryDelegationRewardsResponse),
      delegationTotalRewards: ({} as QueryDelegationTotalRewardsResponse),
      delegatorValidators: ({} as QueryDelegatorValidatorsResponse),
      delegatorWithdrawAddress: ({} as QueryDelegatorWithdrawAddressResponse),
      communityPool: ({} as QueryCommunityPoolResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchValidatorOutstandingRewards(param : QueryValidatorOutstandingRewardsRequest) {
      this.validatorOutstandingRewards = await this.lcdClient.validatorOutstandingRewards(param);
      return this.validatorOutstandingRewards;
    },

    async fetchValidatorCommission(param : QueryValidatorCommissionRequest) {
      this.validatorCommission = await this.lcdClient.validatorCommission(param);
      return this.validatorCommission;
    },

    async fetchValidatorSlashes(param : QueryValidatorSlashesRequest) {
      this.validatorSlashes = await this.lcdClient.validatorSlashes(param);
      return this.validatorSlashes;
    },

    async fetchDelegationRewards(param : QueryDelegationRewardsRequest) {
      this.delegationRewards = await this.lcdClient.delegationRewards(param);
      return this.delegationRewards;
    },

    async fetchDelegationTotalRewards(param : QueryDelegationTotalRewardsRequest) {
      this.delegationTotalRewards = await this.lcdClient.delegationTotalRewards(param);
      return this.delegationTotalRewards;
    },

    async fetchDelegatorValidators(param : QueryDelegatorValidatorsRequest) {
      this.delegatorValidators = await this.lcdClient.delegatorValidators(param);
      return this.delegatorValidators;
    },

    async fetchDelegatorWithdrawAddress(param : QueryDelegatorWithdrawAddressRequest) {
      this.delegatorWithdrawAddress = await this.lcdClient.delegatorWithdrawAddress(param);
      return this.delegatorWithdrawAddress;
    },

    async fetchCommunityPool(param : QueryCommunityPoolRequest) {
      this.communityPool = await this.lcdClient.communityPool(param);
      return this.communityPool;
    }

  }
});