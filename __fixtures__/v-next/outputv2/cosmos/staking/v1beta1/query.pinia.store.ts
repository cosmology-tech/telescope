import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/staking/v1beta1/query.proto', {
  state: () => {
    return {
      validators: ({} as QueryValidatorsResponse),
      validator: ({} as QueryValidatorResponse),
      validatorDelegations: ({} as QueryValidatorDelegationsResponse),
      validatorUnbondingDelegations: ({} as QueryValidatorUnbondingDelegationsResponse),
      delegation: ({} as QueryDelegationResponse),
      unbondingDelegation: ({} as QueryUnbondingDelegationResponse),
      delegatorDelegations: ({} as QueryDelegatorDelegationsResponse),
      delegatorUnbondingDelegations: ({} as QueryDelegatorUnbondingDelegationsResponse),
      redelegations: ({} as QueryRedelegationsResponse),
      delegatorValidators: ({} as QueryDelegatorValidatorsResponse),
      delegatorValidator: ({} as QueryDelegatorValidatorResponse),
      historicalInfo: ({} as QueryHistoricalInfoResponse),
      pool: ({} as QueryPoolResponse),
      params: ({} as QueryParamsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchValidators(param : QueryValidatorsRequest) {
      this.validators = await this.lcdClient.validators(param);
      return this.validators;
    },

    async fetchValidator(param : QueryValidatorRequest) {
      this.validator = await this.lcdClient.validator(param);
      return this.validator;
    },

    async fetchValidatorDelegations(param : QueryValidatorDelegationsRequest) {
      this.validatorDelegations = await this.lcdClient.validatorDelegations(param);
      return this.validatorDelegations;
    },

    async fetchValidatorUnbondingDelegations(param : QueryValidatorUnbondingDelegationsRequest) {
      this.validatorUnbondingDelegations = await this.lcdClient.validatorUnbondingDelegations(param);
      return this.validatorUnbondingDelegations;
    },

    async fetchDelegation(param : QueryDelegationRequest) {
      this.delegation = await this.lcdClient.delegation(param);
      return this.delegation;
    },

    async fetchUnbondingDelegation(param : QueryUnbondingDelegationRequest) {
      this.unbondingDelegation = await this.lcdClient.unbondingDelegation(param);
      return this.unbondingDelegation;
    },

    async fetchDelegatorDelegations(param : QueryDelegatorDelegationsRequest) {
      this.delegatorDelegations = await this.lcdClient.delegatorDelegations(param);
      return this.delegatorDelegations;
    },

    async fetchDelegatorUnbondingDelegations(param : QueryDelegatorUnbondingDelegationsRequest) {
      this.delegatorUnbondingDelegations = await this.lcdClient.delegatorUnbondingDelegations(param);
      return this.delegatorUnbondingDelegations;
    },

    async fetchRedelegations(param : QueryRedelegationsRequest) {
      this.redelegations = await this.lcdClient.redelegations(param);
      return this.redelegations;
    },

    async fetchDelegatorValidators(param : QueryDelegatorValidatorsRequest) {
      this.delegatorValidators = await this.lcdClient.delegatorValidators(param);
      return this.delegatorValidators;
    },

    async fetchDelegatorValidator(param : QueryDelegatorValidatorRequest) {
      this.delegatorValidator = await this.lcdClient.delegatorValidator(param);
      return this.delegatorValidator;
    },

    async fetchHistoricalInfo(param : QueryHistoricalInfoRequest) {
      this.historicalInfo = await this.lcdClient.historicalInfo(param);
      return this.historicalInfo;
    },

    async fetchPool(param : QueryPoolRequest) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }

  }
});