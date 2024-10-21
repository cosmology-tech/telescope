import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
export const createGetSimulate = (getRpcInstance: RpcResolver) => buildQuery<SimulateRequest, SimulateResponse>({
  encoder: SimulateRequest.encode,
  decoder: SimulateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Simulate",
  getRpcInstance: getRpcInstance
});
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const createGetGetTx = (getRpcInstance: RpcResolver) => buildQuery<GetTxRequest, GetTxResponse>({
  encoder: GetTxRequest.encode,
  decoder: GetTxResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetTx",
  getRpcInstance: getRpcInstance
});
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const createGetBroadcastTx = (getRpcInstance: RpcResolver) => buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encoder: BroadcastTxRequest.encode,
  decoder: BroadcastTxResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "BroadcastTx",
  getRpcInstance: getRpcInstance
});
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const createGetGetTxsEvent = (getRpcInstance: RpcResolver) => buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encoder: GetTxsEventRequest.encode,
  decoder: GetTxsEventResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetTxsEvent",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const createGetGetBlockWithTxs = (getRpcInstance: RpcResolver) => buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encoder: GetBlockWithTxsRequest.encode,
  decoder: GetBlockWithTxsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetBlockWithTxs",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});