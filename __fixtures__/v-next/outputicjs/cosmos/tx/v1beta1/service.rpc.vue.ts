import { buildUseVueQuery } from "../../../vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
import { createGetSimulate, createGetGetTx, createGetBroadcastTx, createGetGetTxsEvent, createGetGetBlockWithTxs } from "./service.rpc.func.ts";
export const useGetSimulate = buildUseVueQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const useGetGetTx = buildUseVueQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const useGetBroadcastTx = buildUseVueQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const useGetGetTxsEvent = buildUseVueQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const useGetGetBlockWithTxs = buildUseVueQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});