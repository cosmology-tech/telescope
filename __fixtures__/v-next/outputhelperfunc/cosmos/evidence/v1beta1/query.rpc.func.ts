import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { SigningClientResolver } from "../../../helpers";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
export const createGetEvidence = (getRpcInstance: SigningClientResolver) => buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
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
export const createGetAllEvidence = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
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