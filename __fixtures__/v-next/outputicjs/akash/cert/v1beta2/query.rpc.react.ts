import { buildUseQuery } from "../../../react-query";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
import { createGetCertificates } from "./query.rpc.func.ts";
export const useGetCertificates = buildUseQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  builderQueryFn: createGetCertificates,
  queryKeyPrefix: "CertificatesQuery"
});