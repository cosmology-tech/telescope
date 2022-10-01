import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /*Orders queries orders with filters*/

  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /*Order queries order details*/

  bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  /*Bids queries bids with filters*/

  bid(request: QueryBidRequest): Promise<QueryBidResponse>;
  /*Bid queries bid details*/

  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  /*Leases queries leases with filters*/

  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
  /*Lease queries lease details*/

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