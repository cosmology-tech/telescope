import { Config, ConfigSDKType } from "./config";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export const createGetConfig = (getRpcInstance: RpcResolver) => buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encoder: QueryConfigRequest.encode,
  decoder: QueryConfigResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Config",
  getRpcInstance: getRpcInstance
});
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});