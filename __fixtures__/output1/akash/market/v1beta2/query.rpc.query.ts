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
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType>;
  /*Orders queries orders with filters*/

  order(request: QueryOrderRequest): Promise<QueryOrderResponseSDKType>;
  /*Order queries order details*/

  bids(request: QueryBidsRequest): Promise<QueryBidsResponseSDKType>;
  /*Bids queries bids with filters*/

  bid(request: QueryBidRequest): Promise<QueryBidResponseSDKType>;
  /*Bid queries bid details*/

  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType>;
  /*Leases queries leases with filters*/

  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType>;
  /*Lease queries lease details*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* Orders queries orders with filters */
  orders = async (request: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> => {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  };

  /* Order queries order details */
  order = async (request: QueryOrderRequest): Promise<QueryOrderResponseSDKType> => {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
  };

  /* Bids queries bids with filters */
  bids = async (request: QueryBidsRequest): Promise<QueryBidsResponseSDKType> => {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new _m0.Reader(data)));
  };

  /* Bid queries bid details */
  bid = async (request: QueryBidRequest): Promise<QueryBidResponseSDKType> => {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new _m0.Reader(data)));
  };

  /* Leases queries leases with filters */
  leases = async (request: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType> => {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
    return promise.then(data => QueryLeasesResponse.decode(new _m0.Reader(data)));
  };

  /* Lease queries lease details */
  lease = async (request: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType> => {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
    return promise.then(data => QueryLeaseResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
      return queryService.orders(request);
    },

    order(request: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
      return queryService.order(request);
    },

    bids(request: QueryBidsRequest): Promise<QueryBidsResponseSDKType> {
      return queryService.bids(request);
    },

    bid(request: QueryBidRequest): Promise<QueryBidResponseSDKType> {
      return queryService.bid(request);
    },

    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType> {
      return queryService.leases(request);
    },

    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType> {
      return queryService.lease(request);
    }

  };
};