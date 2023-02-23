import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/evidence/v1beta1/query.proto', {
  state: () => {
    return {
      evidence: ({} as QueryEvidenceResponse),
      allEvidence: ({} as QueryAllEvidenceResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchEvidence(param : QueryEvidenceRequest) {
      this.evidence = await this.lcdClient.evidence(param);
      return this.evidence;
    },

    async fetchAllEvidence(param : QueryAllEvidenceRequest) {
      this.allEvidence = await this.lcdClient.allEvidence(param);
      return this.allEvidence;
    }

  }
});