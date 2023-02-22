import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;

  /** Order queries order details */
  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;

  /** Bids queries bids with filters */
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;

  /** Bid queries bid details */
  bid(request: QueryBidRequest): Promise<QueryBidResponse>;

  /** Leases queries leases with filters */
  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;

  /** Lease queries lease details */
  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* Orders queries orders with filters */
  orders = async (request: QueryOrdersRequest): Promise<QueryOrdersResponse> => {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  };

  /* Order queries order details */
  order = async (request: QueryOrderRequest): Promise<QueryOrderResponse> => {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
  };

  /* Bids queries bids with filters */
  bids = async (request: QueryBidsRequest): Promise<QueryBidsResponse> => {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new _m0.Reader(data)));
  };

  /* Bid queries bid details */
  bid = async (request: QueryBidRequest): Promise<QueryBidResponse> => {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new _m0.Reader(data)));
  };

  /* Leases queries leases with filters */
  leases = async (request: QueryLeasesRequest): Promise<QueryLeasesResponse> => {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
    return promise.then(data => QueryLeasesResponse.decode(new _m0.Reader(data)));
  };

  /* Lease queries lease details */
  lease = async (request: QueryLeaseRequest): Promise<QueryLeaseResponse> => {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
    return promise.then(data => QueryLeaseResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
      return queryService.orders(request);
    },

    order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
      return queryService.order(request);
    },

    bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
      return queryService.bids(request);
    },

    bid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.bid(request);
    },

    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
      return queryService.leases(request);
    },

    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
      return queryService.lease(request);
    }

  };
};
export interface UseOrdersQuery<TData> extends ReactQueryParams<QueryOrdersResponse, TData> {
  request: QueryOrdersRequest;
}
export interface UseOrderQuery<TData> extends ReactQueryParams<QueryOrderResponse, TData> {
  request: QueryOrderRequest;
}
export interface UseBidsQuery<TData> extends ReactQueryParams<QueryBidsResponse, TData> {
  request: QueryBidsRequest;
}
export interface UseBidQuery<TData> extends ReactQueryParams<QueryBidResponse, TData> {
  request: QueryBidRequest;
}
export interface UseLeasesQuery<TData> extends ReactQueryParams<QueryLeasesResponse, TData> {
  request: QueryLeasesRequest;
}
export interface UseLeaseQuery<TData> extends ReactQueryParams<QueryLeaseResponse, TData> {
  request: QueryLeaseRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useOrders = <TData = QueryOrdersResponse,>({
    request,
    options
  }: UseOrdersQuery<TData>) => {
    return useQuery<QueryOrdersResponse, Error, TData>(["ordersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.orders(request);
    }, options);
  };

  const useOrder = <TData = QueryOrderResponse,>({
    request,
    options
  }: UseOrderQuery<TData>) => {
    return useQuery<QueryOrderResponse, Error, TData>(["orderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.order(request);
    }, options);
  };

  const useBids = <TData = QueryBidsResponse,>({
    request,
    options
  }: UseBidsQuery<TData>) => {
    return useQuery<QueryBidsResponse, Error, TData>(["bidsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bids(request);
    }, options);
  };

  const useBid = <TData = QueryBidResponse,>({
    request,
    options
  }: UseBidQuery<TData>) => {
    return useQuery<QueryBidResponse, Error, TData>(["bidQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bid(request);
    }, options);
  };

  const useLeases = <TData = QueryLeasesResponse,>({
    request,
    options
  }: UseLeasesQuery<TData>) => {
    return useQuery<QueryLeasesResponse, Error, TData>(["leasesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.leases(request);
    }, options);
  };

  const useLease = <TData = QueryLeaseResponse,>({
    request,
    options
  }: UseLeaseQuery<TData>) => {
    return useQuery<QueryLeaseResponse, Error, TData>(["leaseQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lease(request);
    }, options);
  };

  return {
    /** Orders queries orders with filters */
    useOrders,

    /** Order queries order details */
    useOrder,

    /** Bids queries bids with filters */
    useBids,

    /** Bid queries bid details */
    useBid,

    /** Leases queries leases with filters */
    useLeases,

    /** Lease queries lease details */
    useLease
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryOrdersStore extends QueryStore<QueryOrdersRequest, QueryOrdersResponse> {
    constructor() {
      super(queryService?.orders);
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

    orders(request: QueryOrdersRequest): MobxResponse<QueryOrdersResponse> {
      return this.getData(request);
    }

  }

  class QueryOrderStore extends QueryStore<QueryOrderRequest, QueryOrderResponse> {
    constructor() {
      super(queryService?.order);
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

    order(request: QueryOrderRequest): MobxResponse<QueryOrderResponse> {
      return this.getData(request);
    }

  }

  class QueryBidsStore extends QueryStore<QueryBidsRequest, QueryBidsResponse> {
    constructor() {
      super(queryService?.bids);
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

    bids(request: QueryBidsRequest): MobxResponse<QueryBidsResponse> {
      return this.getData(request);
    }

  }

  class QueryBidStore extends QueryStore<QueryBidRequest, QueryBidResponse> {
    constructor() {
      super(queryService?.bid);
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

    bid(request: QueryBidRequest): MobxResponse<QueryBidResponse> {
      return this.getData(request);
    }

  }

  class QueryLeasesStore extends QueryStore<QueryLeasesRequest, QueryLeasesResponse> {
    constructor() {
      super(queryService?.leases);
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

    leases(request: QueryLeasesRequest): MobxResponse<QueryLeasesResponse> {
      return this.getData(request);
    }

  }

  class QueryLeaseStore extends QueryStore<QueryLeaseRequest, QueryLeaseResponse> {
    constructor() {
      super(queryService?.lease);
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

    lease(request: QueryLeaseRequest): MobxResponse<QueryLeaseResponse> {
      return this.getData(request);
    }

  }

  return {
    /** Orders queries orders with filters */
    QueryOrdersStore,

    /** Order queries order details */
    QueryOrderStore,

    /** Bids queries bids with filters */
    QueryBidsStore,

    /** Bid queries bid details */
    QueryBidStore,

    /** Leases queries leases with filters */
    QueryLeasesStore,

    /** Lease queries lease details */
    QueryLeaseStore
  };
};