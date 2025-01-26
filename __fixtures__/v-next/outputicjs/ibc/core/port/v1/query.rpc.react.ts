import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
import { createGetAppVersion } from "./query.rpc.func";
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: createGetAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});