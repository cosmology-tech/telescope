import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export const createGetEvidence = (getRpcInstance: RpcResolver) => buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  encode: QueryEvidenceRequest.encode,
  decode: QueryEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Evidence",
  method: "Evidence",
  getRpcInstance: getRpcInstance
});
export const useGetEvidence = buildUseQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: createGetEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const createGetAllEvidence = (getRpcInstance: RpcResolver) => buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  encode: QueryAllEvidenceRequest.encode,
  decode: QueryAllEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.AllEvidence",
  method: "AllEvidence",
  getRpcInstance: getRpcInstance
});
export const useGetAllEvidence = buildUseQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: createGetAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});