import { buildUseVueQuery } from "../../../vue-query";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
import { createGetCertificates } from "./query.rpc.func.ts";
export const useGetCertificates = buildUseVueQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  builderQueryFn: createGetCertificates,
  queryKeyPrefix: "CertificatesQuery"
});