import { RpcResolver, buildQuery } from "../../helper-func-types";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export const createGetEpochInfos = (clientResolver?: RpcResolver) => buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "osmosis.epochs.v1beta1.Query",
  method: "EpochInfos",
  clientResolver
});
export const createGetCurrentEpoch = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "osmosis.epochs.v1beta1.Query",
  method: "CurrentEpoch",
  clientResolver
});