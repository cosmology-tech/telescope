import { buildUseQuery } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
import { createGetEvidence, createGetAllEvidence } from "./query.rpc.func";
export const useGetEvidence = buildUseQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: createGetEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const useGetAllEvidence = buildUseQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: createGetAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});