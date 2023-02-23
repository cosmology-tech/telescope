import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  Orders(request: DeepPartial<QueryOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryOrdersResponse>;

  /** Order queries order details */
  Order(request: DeepPartial<QueryOrderRequest>, metadata?: grpc.Metadata): Promise<QueryOrderResponse>;

  /** Bids queries bids with filters */
  Bids(request: DeepPartial<QueryBidsRequest>, metadata?: grpc.Metadata): Promise<QueryBidsResponse>;

  /** Bid queries bid details */
  Bid(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse>;

  /** Leases queries leases with filters */
  Leases(request: DeepPartial<QueryLeasesRequest>, metadata?: grpc.Metadata): Promise<QueryLeasesResponse>;

  /** Lease queries lease details */
  Lease(request: DeepPartial<QueryLeaseRequest>, metadata?: grpc.Metadata): Promise<QueryLeaseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }

  orders(request: DeepPartial<QueryOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryOrdersResponse> {
    return this.rpc.unary(QueryOrdersDesc, QueryOrdersRequest.fromPartial(request), metadata);
  }

  order(request: DeepPartial<QueryOrderRequest>, metadata?: grpc.Metadata): Promise<QueryOrderResponse> {
    return this.rpc.unary(QueryOrderDesc, QueryOrderRequest.fromPartial(request), metadata);
  }

  bids(request: DeepPartial<QueryBidsRequest>, metadata?: grpc.Metadata): Promise<QueryBidsResponse> {
    return this.rpc.unary(QueryBidsDesc, QueryBidsRequest.fromPartial(request), metadata);
  }

  bid(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse> {
    return this.rpc.unary(QueryBidDesc, QueryBidRequest.fromPartial(request), metadata);
  }

  leases(request: DeepPartial<QueryLeasesRequest>, metadata?: grpc.Metadata): Promise<QueryLeasesResponse> {
    return this.rpc.unary(QueryLeasesDesc, QueryLeasesRequest.fromPartial(request), metadata);
  }

  lease(request: DeepPartial<QueryLeaseRequest>, metadata?: grpc.Metadata): Promise<QueryLeaseResponse> {
    return this.rpc.unary(QueryLeaseDesc, QueryLeaseRequest.fromPartial(request), metadata);
  }

}