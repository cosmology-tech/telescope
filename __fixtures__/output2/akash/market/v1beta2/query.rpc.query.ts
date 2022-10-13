import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
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