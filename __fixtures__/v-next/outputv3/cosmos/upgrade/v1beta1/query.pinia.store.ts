import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/upgrade/v1beta1/query.proto', {
  state: () => {
    return {
      currentPlan: ({} as QueryCurrentPlanResponse),
      appliedPlan: ({} as QueryAppliedPlanResponse),
      upgradedConsensusState: ({} as QueryUpgradedConsensusStateResponse),
      moduleVersions: ({} as QueryModuleVersionsResponse),
      authority: ({} as QueryAuthorityResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchCurrentPlan(param : QueryCurrentPlanRequest) {
      this.currentPlan = await this.lcdClient.currentPlan(param);
      return this.currentPlan;
    },

    async fetchAppliedPlan(param : QueryAppliedPlanRequest) {
      this.appliedPlan = await this.lcdClient.appliedPlan(param);
      return this.appliedPlan;
    },

    async fetchUpgradedConsensusState(param : QueryUpgradedConsensusStateRequest) {
      this.upgradedConsensusState = await this.lcdClient.upgradedConsensusState(param);
      return this.upgradedConsensusState;
    },

    async fetchModuleVersions(param : QueryModuleVersionsRequest) {
      this.moduleVersions = await this.lcdClient.moduleVersions(param);
      return this.moduleVersions;
    },

    async fetchAuthority(param : QueryAuthorityRequest) {
      this.authority = await this.lcdClient.authority(param);
      return this.authority;
    }

  }
});