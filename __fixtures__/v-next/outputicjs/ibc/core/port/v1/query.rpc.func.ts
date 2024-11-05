import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
export const createGetAppVersion = (clientResolver?: RpcResolver) => buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encode: QueryAppVersionRequest.encode,
  decode: QueryAppVersionResponse.decode,
  service: "ibc.core.port.v1.Query",
  method: "AppVersion",
  clientResolver
});
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: createGetAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});