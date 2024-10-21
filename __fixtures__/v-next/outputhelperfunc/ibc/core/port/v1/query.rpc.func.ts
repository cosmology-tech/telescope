import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { SigningClientResolver } from "../../../../helper-func-types";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
export const createGetAppVersion = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
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