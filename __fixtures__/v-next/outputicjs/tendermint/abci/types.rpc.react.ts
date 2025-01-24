import { buildUseQuery } from "../../react-query";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
import { createGetEcho, createGetFlush, createGetInfo, createGetSetOption, createGetDeliverTx, createGetCheckTx, createGetQuery, createGetCommit, createGetInitChain, createGetBeginBlock, createGetEndBlock, createGetListSnapshots, createGetOfferSnapshot, createGetLoadSnapshotChunk, createGetApplySnapshotChunk } from "./types.rpc.func.ts";
export const useGetEcho = buildUseQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: createGetEcho,
  queryKeyPrefix: "EchoQuery"
});
export const useGetFlush = buildUseQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: createGetFlush,
  queryKeyPrefix: "FlushQuery"
});
export const useGetInfo = buildUseQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: createGetInfo,
  queryKeyPrefix: "InfoQuery"
});
export const useGetSetOption = buildUseQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: createGetSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
export const useGetDeliverTx = buildUseQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: createGetDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
export const useGetCheckTx = buildUseQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: createGetCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
export const useGetQuery = buildUseQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetCommit = buildUseQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: createGetCommit,
  queryKeyPrefix: "CommitQuery"
});
export const useGetInitChain = buildUseQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: createGetInitChain,
  queryKeyPrefix: "InitChainQuery"
});
export const useGetBeginBlock = buildUseQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: createGetBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
export const useGetEndBlock = buildUseQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: createGetEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
export const useGetListSnapshots = buildUseQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: createGetListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
export const useGetOfferSnapshot = buildUseQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: createGetOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
export const useGetLoadSnapshotChunk = buildUseQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: createGetLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
export const useGetApplySnapshotChunk = buildUseQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: createGetApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});