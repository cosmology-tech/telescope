import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
export const createGetAppVersion = (getRpcInstance: RpcResolver) => buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encoder: QueryAppVersionRequest.encode,
  decoder: QueryAppVersionResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AppVersion",
  getRpcInstance: getRpcInstance
});
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: createGetAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});