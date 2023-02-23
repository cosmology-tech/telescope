import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/authz/v1beta1/query.proto', {
  state: () => {
    return {
      grants: ({} as QueryGrantsResponse),
      granterGrants: ({} as QueryGranterGrantsResponse),
      granteeGrants: ({} as QueryGranteeGrantsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchGrants(param : QueryGrantsRequest) {
      this.grants = await this.lcdClient.grants(param);
      return this.grants;
    },

    async fetchGranterGrants(param : QueryGranterGrantsRequest) {
      this.granterGrants = await this.lcdClient.granterGrants(param);
      return this.granterGrants;
    },

    async fetchGranteeGrants(param : QueryGranteeGrantsRequest) {
      this.granteeGrants = await this.lcdClient.granteeGrants(param);
      return this.granteeGrants;
    }

  }
});