import { CertificateFilter, Certificate } from "./cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Certificates queries certificates */
  async certificates(params: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filter !== "undefined") {
      options.params.filter = params.filter;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/cert/v1beta2/certificates/list`;
    return await this.request<QueryCertificatesResponse>(endpoint, options);
  }

}