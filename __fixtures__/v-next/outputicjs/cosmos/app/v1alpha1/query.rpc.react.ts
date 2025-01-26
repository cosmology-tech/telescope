import { buildUseQuery } from "../../../react-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
import { createGetConfig } from "./query.rpc.func";
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});