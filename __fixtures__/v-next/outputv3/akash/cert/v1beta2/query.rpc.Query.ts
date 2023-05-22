import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as fm from "../../../grpc-gateway";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";
export class Query {
  /** Certificates queries certificates */
  static Certificates(request: QueryCertificatesRequest, initRequest?: fm.InitReq): Promise<QueryCertificatesResponse> {
    return fm.fetchReq(`/akash/cert/v1beta2/certificates/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Certificates queries certificates */
  async Certificates(req: QueryCertificatesRequest, headers?: HeadersInit): Promise<QueryCertificatesResponse> {
    return Query.Certificates(req, {
      headers,
      pathPrefix: this.url
    });
  }
}