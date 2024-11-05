import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export const createGetEvidence = (clientResolver?: RpcResolver) => buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  encode: QueryEvidenceRequest.encode,
  decode: QueryEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "Evidence",
  clientResolver
});
export const useGetEvidence = buildUseQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: createGetEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const createGetAllEvidence = (clientResolver?: RpcResolver) => buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  encode: QueryAllEvidenceRequest.encode,
  decode: QueryAllEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "AllEvidence",
  clientResolver
});
export const useGetAllEvidence = buildUseQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: createGetAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});