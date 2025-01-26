import { buildUseVueQuery } from "../../../../vue-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
import { createGetAppVersion } from "./query.rpc.func.ts";
export const useGetAppVersion = buildUseVueQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: createGetAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});