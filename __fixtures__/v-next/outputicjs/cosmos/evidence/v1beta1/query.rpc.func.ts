import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export const createGetEvidence = (getRpcInstance: RpcResolver) => buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  encoder: QueryEvidenceRequest.encode,
  decoder: QueryEvidenceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Evidence",
  getRpcInstance: getRpcInstance
});
export const useGetEvidence = buildUseQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: createGetEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const createGetAllEvidence = (getRpcInstance: RpcResolver) => buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  encoder: QueryAllEvidenceRequest.encode,
  decoder: QueryAllEvidenceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllEvidence",
  getRpcInstance: getRpcInstance
});
export const useGetAllEvidence = buildUseQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: createGetAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});