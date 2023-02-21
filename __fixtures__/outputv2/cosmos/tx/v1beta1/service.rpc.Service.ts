import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";

/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse>;

  /** GetTx fetches a tx by hash. */
  getTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse>;

  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: DeepPartial<BroadcastTxRequest>, metadata?: grpc.Metadata): Promise<BroadcastTxResponse>;

  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: DeepPartial<GetTxsEventRequest>, metadata?: grpc.Metadata): Promise<GetTxsEventResponse>;

  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: DeepPartial<GetBlockWithTxsRequest>, metadata?: grpc.Metadata): Promise<GetBlockWithTxsResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }

  simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse> {
    return this.rpc.unary(SimulateDesc, SimulateRequest.fromPartial(request), metadata);
  }

  getTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse> {
    return this.rpc.unary(GetTxDesc, GetTxRequest.fromPartial(request), metadata);
  }

  broadcastTx(request: DeepPartial<BroadcastTxRequest>, metadata?: grpc.Metadata): Promise<BroadcastTxResponse> {
    return this.rpc.unary(BroadcastTxDesc, BroadcastTxRequest.fromPartial(request), metadata);
  }

  getTxsEvent(request: DeepPartial<GetTxsEventRequest>, metadata?: grpc.Metadata): Promise<GetTxsEventResponse> {
    return this.rpc.unary(GetTxsEventDesc, GetTxsEventRequest.fromPartial(request), metadata);
  }

  getBlockWithTxs(request: DeepPartial<GetBlockWithTxsRequest>, metadata?: grpc.Metadata): Promise<GetBlockWithTxsResponse> {
    return this.rpc.unary(GetBlockWithTxsDesc, GetBlockWithTxsRequest.fromPartial(request), metadata);
  }

}