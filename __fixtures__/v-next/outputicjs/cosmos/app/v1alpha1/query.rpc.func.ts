import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
export const createGetConfig = (getRpcInstance: RpcResolver) => buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encode: QueryConfigRequest.encode,
  decode: QueryConfigResponse.decode,
  service: "cosmos.app.v1alpha1.Config",
  method: "Config",
  getRpcInstance: getRpcInstance
});
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});