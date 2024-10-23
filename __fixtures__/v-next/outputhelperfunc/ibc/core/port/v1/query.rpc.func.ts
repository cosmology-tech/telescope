import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
export const createGetAppVersion = (getRpcInstance: RpcResolver) => buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encode: QueryAppVersionRequest.encode,
  decode: QueryAppVersionResponse.decode,
  service: "ibc.core.port.v1.AppVersion",
  method: "AppVersion",
  getRpcInstance: getRpcInstance
});
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: createGetAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});