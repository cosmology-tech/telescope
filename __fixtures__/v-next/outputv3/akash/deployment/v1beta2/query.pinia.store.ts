import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/deployment/v1beta2/query.proto', {
  state: () => {
    return {
      deployments: ({} as QueryDeploymentsResponse),
      deployment: ({} as QueryDeploymentResponse),
      group: ({} as QueryGroupResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchDeployments(param : QueryDeploymentsRequest) {
      this.deployments = await this.lcdClient.deployments(param);
      return this.deployments;
    },

    async fetchDeployment(param : QueryDeploymentRequest) {
      this.deployment = await this.lcdClient.deployment(param);
      return this.deployment;
    },

    async fetchGroup(param : QueryGroupRequest) {
      this.group = await this.lcdClient.group(param);
      return this.group;
    }

  }
});