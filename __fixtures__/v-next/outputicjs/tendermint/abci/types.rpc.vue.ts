import { buildUseVueQuery } from "../../vue-query";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
import { createGetEcho, createGetFlush, createGetInfo, createGetSetOption, createGetDeliverTx, createGetCheckTx, createGetQuery, createGetCommit, createGetInitChain, createGetBeginBlock, createGetEndBlock, createGetListSnapshots, createGetOfferSnapshot, createGetLoadSnapshotChunk, createGetApplySnapshotChunk } from "./types.rpc.func.ts";
export const useGetEcho = buildUseVueQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: createGetEcho,
  queryKeyPrefix: "EchoQuery"
});
export const useGetFlush = buildUseVueQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: createGetFlush,
  queryKeyPrefix: "FlushQuery"
});
export const useGetInfo = buildUseVueQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: createGetInfo,
  queryKeyPrefix: "InfoQuery"
});
export const useGetSetOption = buildUseVueQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: createGetSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
export const useGetDeliverTx = buildUseVueQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: createGetDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
export const useGetCheckTx = buildUseVueQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: createGetCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
export const useGetQuery = buildUseVueQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetCommit = buildUseVueQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: createGetCommit,
  queryKeyPrefix: "CommitQuery"
});
export const useGetInitChain = buildUseVueQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: createGetInitChain,
  queryKeyPrefix: "InitChainQuery"
});
export const useGetBeginBlock = buildUseVueQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: createGetBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
export const useGetEndBlock = buildUseVueQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: createGetEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
export const useGetListSnapshots = buildUseVueQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: createGetListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
export const useGetOfferSnapshot = buildUseVueQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: createGetOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
export const useGetLoadSnapshotChunk = buildUseVueQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: createGetLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
export const useGetApplySnapshotChunk = buildUseVueQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: createGetApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});