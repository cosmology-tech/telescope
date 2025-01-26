import { buildUseVueQuery } from "../../../vue-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
import { createGetEvidence, createGetAllEvidence } from "./query.rpc.func.ts";
export const useGetEvidence = buildUseVueQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: createGetEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const useGetAllEvidence = buildUseVueQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: createGetAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});