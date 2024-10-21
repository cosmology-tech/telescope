import { Config, ConfigSDKType } from "./config";
import { SigningClientResolver } from "../../../helpers";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export const createGetConfig = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConfigRequest, QueryConfigResponse>({
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