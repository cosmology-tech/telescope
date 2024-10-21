import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";
export const createGetCertificates = (getRpcInstance: RpcResolver) => buildQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  encoder: QueryCertificatesRequest.encode,
  decoder: QueryCertificatesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Certificates",
  getRpcInstance: getRpcInstance
});
export const useGetCertificates = buildUseQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  builderQueryFn: createGetCertificates,
  queryKeyPrefix: "CertificatesQuery"
});