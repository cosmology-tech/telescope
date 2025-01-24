import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export const createGetEvidence = (clientResolver?: RpcResolver) => buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  encode: QueryEvidenceRequest.encode,
  decode: QueryEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "Evidence",
  clientResolver
});
export const createGetAllEvidence = (clientResolver?: RpcResolver) => buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  encode: QueryAllEvidenceRequest.encode,
  decode: QueryAllEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "AllEvidence",
  clientResolver
});