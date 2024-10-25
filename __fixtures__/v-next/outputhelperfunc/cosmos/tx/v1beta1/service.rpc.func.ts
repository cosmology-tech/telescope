import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
export const createGetSimulate = (getRpcInstance: RpcResolver) => buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "Simulate",
  getRpcInstance: getRpcInstance
});
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const createGetGetTx = (getRpcInstance: RpcResolver) => buildQuery<GetTxRequest, GetTxResponse>({
  encode: GetTxRequest.encode,
  decode: GetTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTx",
  getRpcInstance: getRpcInstance
});
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const createGetBroadcastTx = (getRpcInstance: RpcResolver) => buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encode: BroadcastTxRequest.encode,
  decode: BroadcastTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "BroadcastTx",
  getRpcInstance: getRpcInstance
});
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const createGetGetTxsEvent = (getRpcInstance: RpcResolver) => buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encode: GetTxsEventRequest.encode,
  decode: GetTxsEventResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTxsEvent",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const createGetGetBlockWithTxs = (getRpcInstance: RpcResolver) => buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encode: GetBlockWithTxsRequest.encode,
  decode: GetBlockWithTxsResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetBlockWithTxs",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});