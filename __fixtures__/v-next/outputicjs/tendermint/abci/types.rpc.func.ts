import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
export const createGetEcho = (getRpcInstance: RpcResolver) => buildQuery<RequestEcho, ResponseEcho>({
  encoder: RequestEcho.encode,
  decoder: ResponseEcho.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Echo",
  getRpcInstance: getRpcInstance
});
export const useGetEcho = buildUseQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: createGetEcho,
  queryKeyPrefix: "EchoQuery"
});
export const createGetFlush = (getRpcInstance: RpcResolver) => buildQuery<RequestFlush, ResponseFlush>({
  encoder: RequestFlush.encode,
  decoder: ResponseFlush.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Flush",
  getRpcInstance: getRpcInstance
});
export const useGetFlush = buildUseQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: createGetFlush,
  queryKeyPrefix: "FlushQuery"
});
export const createGetInfo = (getRpcInstance: RpcResolver) => buildQuery<RequestInfo, ResponseInfo>({
  encoder: RequestInfo.encode,
  decoder: ResponseInfo.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Info",
  getRpcInstance: getRpcInstance
});
export const useGetInfo = buildUseQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: createGetInfo,
  queryKeyPrefix: "InfoQuery"
});
export const createGetSetOption = (getRpcInstance: RpcResolver) => buildQuery<RequestSetOption, ResponseSetOption>({
  encoder: RequestSetOption.encode,
  decoder: ResponseSetOption.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SetOption",
  getRpcInstance: getRpcInstance
});
export const useGetSetOption = buildUseQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: createGetSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
export const createGetDeliverTx = (getRpcInstance: RpcResolver) => buildQuery<RequestDeliverTx, ResponseDeliverTx>({
  encoder: RequestDeliverTx.encode,
  decoder: ResponseDeliverTx.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DeliverTx",
  getRpcInstance: getRpcInstance
});
export const useGetDeliverTx = buildUseQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: createGetDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
export const createGetCheckTx = (getRpcInstance: RpcResolver) => buildQuery<RequestCheckTx, ResponseCheckTx>({
  encoder: RequestCheckTx.encode,
  decoder: ResponseCheckTx.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CheckTx",
  getRpcInstance: getRpcInstance
});
export const useGetCheckTx = buildUseQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: createGetCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
export const createGetQuery = (getRpcInstance: RpcResolver) => buildQuery<RequestQuery, ResponseQuery>({
  encoder: RequestQuery.encode,
  decoder: ResponseQuery.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Query",
  getRpcInstance: getRpcInstance
});
export const useGetQuery = buildUseQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const createGetCommit = (getRpcInstance: RpcResolver) => buildQuery<RequestCommit, ResponseCommit>({
  encoder: RequestCommit.encode,
  decoder: ResponseCommit.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Commit",
  getRpcInstance: getRpcInstance
});
export const useGetCommit = buildUseQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: createGetCommit,
  queryKeyPrefix: "CommitQuery"
});
export const createGetInitChain = (getRpcInstance: RpcResolver) => buildQuery<RequestInitChain, ResponseInitChain>({
  encoder: RequestInitChain.encode,
  decoder: ResponseInitChain.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "InitChain",
  getRpcInstance: getRpcInstance
});
export const useGetInitChain = buildUseQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: createGetInitChain,
  queryKeyPrefix: "InitChainQuery"
});
export const createGetBeginBlock = (getRpcInstance: RpcResolver) => buildQuery<RequestBeginBlock, ResponseBeginBlock>({
  encoder: RequestBeginBlock.encode,
  decoder: ResponseBeginBlock.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "BeginBlock",
  getRpcInstance: getRpcInstance
});
export const useGetBeginBlock = buildUseQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: createGetBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
export const createGetEndBlock = (getRpcInstance: RpcResolver) => buildQuery<RequestEndBlock, ResponseEndBlock>({
  encoder: RequestEndBlock.encode,
  decoder: ResponseEndBlock.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EndBlock",
  getRpcInstance: getRpcInstance
});
export const useGetEndBlock = buildUseQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: createGetEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
export const createGetListSnapshots = (getRpcInstance: RpcResolver) => buildQuery<RequestListSnapshots, ResponseListSnapshots>({
  encoder: RequestListSnapshots.encode,
  decoder: ResponseListSnapshots.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ListSnapshots",
  getRpcInstance: getRpcInstance
});
export const useGetListSnapshots = buildUseQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: createGetListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
export const createGetOfferSnapshot = (getRpcInstance: RpcResolver) => buildQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  encoder: RequestOfferSnapshot.encode,
  decoder: ResponseOfferSnapshot.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "OfferSnapshot",
  getRpcInstance: getRpcInstance
});
export const useGetOfferSnapshot = buildUseQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: createGetOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
export const createGetLoadSnapshotChunk = (getRpcInstance: RpcResolver) => buildQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  encoder: RequestLoadSnapshotChunk.encode,
  decoder: ResponseLoadSnapshotChunk.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "LoadSnapshotChunk",
  getRpcInstance: getRpcInstance
});
export const useGetLoadSnapshotChunk = buildUseQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: createGetLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
export const createGetApplySnapshotChunk = (getRpcInstance: RpcResolver) => buildQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  encoder: RequestApplySnapshotChunk.encode,
  decoder: ResponseApplySnapshotChunk.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ApplySnapshotChunk",
  getRpcInstance: getRpcInstance
});
export const useGetApplySnapshotChunk = buildUseQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: createGetApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});