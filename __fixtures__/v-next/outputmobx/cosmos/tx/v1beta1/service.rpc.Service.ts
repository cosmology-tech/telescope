import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";

/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: SimulateRequest): Promise<SimulateResponse>;

  /** GetTx fetches a tx by hash. */
  getTx(request: GetTxRequest): Promise<GetTxResponse>;

  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;

  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;

  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
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

  simulate(request: SimulateRequest): Promise<SimulateResponse> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new _m0.Reader(data)));
  }

  getTx(request: GetTxRequest): Promise<GetTxResponse> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new _m0.Reader(data)));
  }

  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new _m0.Reader(data)));
  }

  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new _m0.Reader(data)));
  }

  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request: SimulateRequest): Promise<SimulateResponse> {
      return queryService.simulate(request);
    },

    getTx(request: GetTxRequest): Promise<GetTxResponse> {
      return queryService.getTx(request);
    },

    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
      return queryService.broadcastTx(request);
    },

    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
      return queryService.getTxsEvent(request);
    },

    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
      return queryService.getBlockWithTxs(request);
    }

  };
};
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
  request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
  request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
  request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
  request: GetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends ReactQueryParams<GetBlockWithTxsResponse, TData> {
  request: GetBlockWithTxsRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, ServiceClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): ServiceClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new ServiceClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useSimulate = <TData = SimulateResponse,>({
    request,
    options
  }: UseSimulateQuery<TData>) => {
    return useQuery<SimulateResponse, Error, TData>(["simulateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.simulate(request);
    }, options);
  };

  const useGetTx = <TData = GetTxResponse,>({
    request,
    options
  }: UseGetTxQuery<TData>) => {
    return useQuery<GetTxResponse, Error, TData>(["getTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTx(request);
    }, options);
  };

  const useBroadcastTx = <TData = BroadcastTxResponse,>({
    request,
    options
  }: UseBroadcastTxQuery<TData>) => {
    return useQuery<BroadcastTxResponse, Error, TData>(["broadcastTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.broadcastTx(request);
    }, options);
  };

  const useGetTxsEvent = <TData = GetTxsEventResponse,>({
    request,
    options
  }: UseGetTxsEventQuery<TData>) => {
    return useQuery<GetTxsEventResponse, Error, TData>(["getTxsEventQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxsEvent(request);
    }, options);
  };

  const useGetBlockWithTxs = <TData = GetBlockWithTxsResponse,>({
    request,
    options
  }: UseGetBlockWithTxsQuery<TData>) => {
    return useQuery<GetBlockWithTxsResponse, Error, TData>(["getBlockWithTxsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockWithTxs(request);
    }, options);
  };

  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    useSimulate,

    /** GetTx fetches a tx by hash. */
    useGetTx,

    /** BroadcastTx broadcast transaction. */
    useBroadcastTx,

    /** GetTxsEvent fetches txs by event. */
    useGetTxsEvent,

    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QuerySimulateStore extends QueryStore<SimulateRequest, SimulateResponse> {
    constructor() {
      super(queryService?.simulate);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    simulate(request: SimulateRequest): MobxResponse<SimulateResponse> {
      return this.getData(request);
    }

  }

  class QueryGetTxStore extends QueryStore<GetTxRequest, GetTxResponse> {
    constructor() {
      super(queryService?.getTx);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    getTx(request: GetTxRequest): MobxResponse<GetTxResponse> {
      return this.getData(request);
    }

  }

  class QueryBroadcastTxStore extends QueryStore<BroadcastTxRequest, BroadcastTxResponse> {
    constructor() {
      super(queryService?.broadcastTx);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    broadcastTx(request: BroadcastTxRequest): MobxResponse<BroadcastTxResponse> {
      return this.getData(request);
    }

  }

  class QueryGetTxsEventStore extends QueryStore<GetTxsEventRequest, GetTxsEventResponse> {
    constructor() {
      super(queryService?.getTxsEvent);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    getTxsEvent(request: GetTxsEventRequest): MobxResponse<GetTxsEventResponse> {
      return this.getData(request);
    }

  }

  class QueryGetBlockWithTxsStore extends QueryStore<GetBlockWithTxsRequest, GetBlockWithTxsResponse> {
    constructor() {
      super(queryService?.getBlockWithTxs);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    getBlockWithTxs(request: GetBlockWithTxsRequest): MobxResponse<GetBlockWithTxsResponse> {
      return this.getData(request);
    }

  }

  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    QuerySimulateStore,

    /** GetTx fetches a tx by hash. */
    QueryGetTxStore,

    /** BroadcastTx broadcast transaction. */
    QueryBroadcastTxStore,

    /** GetTxsEvent fetches txs by event. */
    QueryGetTxsEventStore,

    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    QueryGetBlockWithTxsStore
  };
};