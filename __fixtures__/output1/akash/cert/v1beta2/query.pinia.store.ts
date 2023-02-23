import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/cert/v1beta2/query.proto', {
  state: () => {
    return {
      certificates: ({} as QueryCertificatesResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchCertificates(param : QueryCertificatesRequest) {
      this.certificates = await this.lcdClient.certificates(param);
      return this.certificates;
    }

  }
});