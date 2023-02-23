import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  Certificates(request: DeepPartial<QueryCertificatesRequest>, metadata?: grpc.Metadata): Promise<QueryCertificatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.certificates = this.certificates.bind(this);
  }

  certificates(request: DeepPartial<QueryCertificatesRequest>, metadata?: grpc.Metadata): Promise<QueryCertificatesResponse> {
    return this.rpc.unary(QueryCertificatesDesc, QueryCertificatesRequest.fromPartial(request), metadata);
  }

}