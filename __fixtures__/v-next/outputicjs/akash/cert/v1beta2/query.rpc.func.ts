import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
export const createGetCertificates = (clientResolver?: RpcResolver) => buildQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  encode: QueryCertificatesRequest.encode,
  decode: QueryCertificatesResponse.decode,
  service: "akash.cert.v1beta2.Query",
  method: "Certificates",
  clientResolver
});