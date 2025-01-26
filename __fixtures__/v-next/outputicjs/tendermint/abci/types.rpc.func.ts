import { RpcResolver, buildQuery } from "../../helper-func-types";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
export const createGetEcho = (clientResolver?: RpcResolver) => buildQuery<RequestEcho, ResponseEcho>({
  encode: RequestEcho.encode,
  decode: ResponseEcho.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Echo",
  clientResolver
});
export const createGetFlush = (clientResolver?: RpcResolver) => buildQuery<RequestFlush, ResponseFlush>({
  encode: RequestFlush.encode,
  decode: ResponseFlush.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Flush",
  clientResolver
});
export const createGetInfo = (clientResolver?: RpcResolver) => buildQuery<RequestInfo, ResponseInfo>({
  encode: RequestInfo.encode,
  decode: ResponseInfo.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Info",
  clientResolver
});
export const createGetSetOption = (clientResolver?: RpcResolver) => buildQuery<RequestSetOption, ResponseSetOption>({
  encode: RequestSetOption.encode,
  decode: ResponseSetOption.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "SetOption",
  clientResolver
});
export const createGetDeliverTx = (clientResolver?: RpcResolver) => buildQuery<RequestDeliverTx, ResponseDeliverTx>({
  encode: RequestDeliverTx.encode,
  decode: ResponseDeliverTx.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "DeliverTx",
  clientResolver
});
export const createGetCheckTx = (clientResolver?: RpcResolver) => buildQuery<RequestCheckTx, ResponseCheckTx>({
  encode: RequestCheckTx.encode,
  decode: ResponseCheckTx.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "CheckTx",
  clientResolver
});
export const createGetQuery = (clientResolver?: RpcResolver) => buildQuery<RequestQuery, ResponseQuery>({
  encode: RequestQuery.encode,
  decode: ResponseQuery.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Query",
  clientResolver
});
export const createGetCommit = (clientResolver?: RpcResolver) => buildQuery<RequestCommit, ResponseCommit>({
  encode: RequestCommit.encode,
  decode: ResponseCommit.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "Commit",
  clientResolver
});
export const createGetInitChain = (clientResolver?: RpcResolver) => buildQuery<RequestInitChain, ResponseInitChain>({
  encode: RequestInitChain.encode,
  decode: ResponseInitChain.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "InitChain",
  clientResolver
});
export const createGetBeginBlock = (clientResolver?: RpcResolver) => buildQuery<RequestBeginBlock, ResponseBeginBlock>({
  encode: RequestBeginBlock.encode,
  decode: ResponseBeginBlock.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "BeginBlock",
  clientResolver
});
export const createGetEndBlock = (clientResolver?: RpcResolver) => buildQuery<RequestEndBlock, ResponseEndBlock>({
  encode: RequestEndBlock.encode,
  decode: ResponseEndBlock.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "EndBlock",
  clientResolver
});
export const createGetListSnapshots = (clientResolver?: RpcResolver) => buildQuery<RequestListSnapshots, ResponseListSnapshots>({
  encode: RequestListSnapshots.encode,
  decode: ResponseListSnapshots.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "ListSnapshots",
  clientResolver
});
export const createGetOfferSnapshot = (clientResolver?: RpcResolver) => buildQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  encode: RequestOfferSnapshot.encode,
  decode: ResponseOfferSnapshot.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "OfferSnapshot",
  clientResolver
});
export const createGetLoadSnapshotChunk = (clientResolver?: RpcResolver) => buildQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  encode: RequestLoadSnapshotChunk.encode,
  decode: ResponseLoadSnapshotChunk.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "LoadSnapshotChunk",
  clientResolver
});
export const createGetApplySnapshotChunk = (clientResolver?: RpcResolver) => buildQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  encode: RequestApplySnapshotChunk.encode,
  decode: ResponseApplySnapshotChunk.decode,
  service: "tendermint.abci.ABCIApplication",
  method: "ApplySnapshotChunk",
  clientResolver
});