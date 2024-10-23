import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
export const createGetEcho = (getRpcInstance: RpcResolver) => buildQuery<RequestEcho, ResponseEcho>({
  encode: RequestEcho.encode,
  decode: ResponseEcho.decode,
  service: "tendermint.abci.Echo",
  method: "Echo",
  getRpcInstance: getRpcInstance
});
export const useGetEcho = buildUseQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: createGetEcho,
  queryKeyPrefix: "EchoQuery"
});
export const createGetFlush = (getRpcInstance: RpcResolver) => buildQuery<RequestFlush, ResponseFlush>({
  encode: RequestFlush.encode,
  decode: ResponseFlush.decode,
  service: "tendermint.abci.Flush",
  method: "Flush",
  getRpcInstance: getRpcInstance
});
export const useGetFlush = buildUseQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: createGetFlush,
  queryKeyPrefix: "FlushQuery"
});
export const createGetInfo = (getRpcInstance: RpcResolver) => buildQuery<RequestInfo, ResponseInfo>({
  encode: RequestInfo.encode,
  decode: ResponseInfo.decode,
  service: "tendermint.abci.Info",
  method: "Info",
  getRpcInstance: getRpcInstance
});
export const useGetInfo = buildUseQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: createGetInfo,
  queryKeyPrefix: "InfoQuery"
});
export const createGetSetOption = (getRpcInstance: RpcResolver) => buildQuery<RequestSetOption, ResponseSetOption>({
  encode: RequestSetOption.encode,
  decode: ResponseSetOption.decode,
  service: "tendermint.abci.SetOption",
  method: "SetOption",
  getRpcInstance: getRpcInstance
});
export const useGetSetOption = buildUseQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: createGetSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
export const createGetDeliverTx = (getRpcInstance: RpcResolver) => buildQuery<RequestDeliverTx, ResponseDeliverTx>({
  encode: RequestDeliverTx.encode,
  decode: ResponseDeliverTx.decode,
  service: "tendermint.abci.DeliverTx",
  method: "DeliverTx",
  getRpcInstance: getRpcInstance
});
export const useGetDeliverTx = buildUseQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: createGetDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
export const createGetCheckTx = (getRpcInstance: RpcResolver) => buildQuery<RequestCheckTx, ResponseCheckTx>({
  encode: RequestCheckTx.encode,
  decode: ResponseCheckTx.decode,
  service: "tendermint.abci.CheckTx",
  method: "CheckTx",
  getRpcInstance: getRpcInstance
});
export const useGetCheckTx = buildUseQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: createGetCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
export const createGetQuery = (getRpcInstance: RpcResolver) => buildQuery<RequestQuery, ResponseQuery>({
  encode: RequestQuery.encode,
  decode: ResponseQuery.decode,
  service: "tendermint.abci.Query",
  method: "Query",
  getRpcInstance: getRpcInstance
});
export const useGetQuery = buildUseQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const createGetCommit = (getRpcInstance: RpcResolver) => buildQuery<RequestCommit, ResponseCommit>({
  encode: RequestCommit.encode,
  decode: ResponseCommit.decode,
  service: "tendermint.abci.Commit",
  method: "Commit",
  getRpcInstance: getRpcInstance
});
export const useGetCommit = buildUseQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: createGetCommit,
  queryKeyPrefix: "CommitQuery"
});
export const createGetInitChain = (getRpcInstance: RpcResolver) => buildQuery<RequestInitChain, ResponseInitChain>({
  encode: RequestInitChain.encode,
  decode: ResponseInitChain.decode,
  service: "tendermint.abci.InitChain",
  method: "InitChain",
  getRpcInstance: getRpcInstance
});
export const useGetInitChain = buildUseQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: createGetInitChain,
  queryKeyPrefix: "InitChainQuery"
});
export const createGetBeginBlock = (getRpcInstance: RpcResolver) => buildQuery<RequestBeginBlock, ResponseBeginBlock>({
  encode: RequestBeginBlock.encode,
  decode: ResponseBeginBlock.decode,
  service: "tendermint.abci.BeginBlock",
  method: "BeginBlock",
  getRpcInstance: getRpcInstance
});
export const useGetBeginBlock = buildUseQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: createGetBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
export const createGetEndBlock = (getRpcInstance: RpcResolver) => buildQuery<RequestEndBlock, ResponseEndBlock>({
  encode: RequestEndBlock.encode,
  decode: ResponseEndBlock.decode,
  service: "tendermint.abci.EndBlock",
  method: "EndBlock",
  getRpcInstance: getRpcInstance
});
export const useGetEndBlock = buildUseQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: createGetEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
export const createGetListSnapshots = (getRpcInstance: RpcResolver) => buildQuery<RequestListSnapshots, ResponseListSnapshots>({
  encode: RequestListSnapshots.encode,
  decode: ResponseListSnapshots.decode,
  service: "tendermint.abci.ListSnapshots",
  method: "ListSnapshots",
  getRpcInstance: getRpcInstance
});
export const useGetListSnapshots = buildUseQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: createGetListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
export const createGetOfferSnapshot = (getRpcInstance: RpcResolver) => buildQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  encode: RequestOfferSnapshot.encode,
  decode: ResponseOfferSnapshot.decode,
  service: "tendermint.abci.OfferSnapshot",
  method: "OfferSnapshot",
  getRpcInstance: getRpcInstance
});
export const useGetOfferSnapshot = buildUseQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: createGetOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
export const createGetLoadSnapshotChunk = (getRpcInstance: RpcResolver) => buildQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  encode: RequestLoadSnapshotChunk.encode,
  decode: ResponseLoadSnapshotChunk.decode,
  service: "tendermint.abci.LoadSnapshotChunk",
  method: "LoadSnapshotChunk",
  getRpcInstance: getRpcInstance
});
export const useGetLoadSnapshotChunk = buildUseQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: createGetLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
export const createGetApplySnapshotChunk = (getRpcInstance: RpcResolver) => buildQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  encode: RequestApplySnapshotChunk.encode,
  decode: ResponseApplySnapshotChunk.decode,
  service: "tendermint.abci.ApplySnapshotChunk",
  method: "ApplySnapshotChunk",
  getRpcInstance: getRpcInstance
});
export const useGetApplySnapshotChunk = buildUseQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: createGetApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});