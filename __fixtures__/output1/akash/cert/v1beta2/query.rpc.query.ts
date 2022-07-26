import { CertificateFilter, Certificate } from "./cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
  /*Certificates queries certificates*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.certificates = this.certificates.bind(this);
  }

  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new _m0.Reader(data)));
  }

}