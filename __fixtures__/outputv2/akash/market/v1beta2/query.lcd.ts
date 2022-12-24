import { OrderFilters, OrderFiltersAmino, OrderFiltersAminoType, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDAminoType, OrderIDSDKType, Order, OrderAmino, OrderAminoType, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersAminoType, BidFiltersSDKType, BidID, BidIDAmino, BidIDAminoType, BidIDSDKType, Bid, BidAmino, BidAminoType, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersAminoType, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDAminoType, LeaseIDSDKType, Lease, LeaseAmino, LeaseAminoType, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountAminoType, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentAminoType, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryOrdersRequest, QueryOrdersRequestAmino, QueryOrdersRequestAminoType, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseAmino, QueryOrdersResponseAminoType, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestAmino, QueryOrderRequestAminoType, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseAmino, QueryOrderResponseAminoType, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestAmino, QueryBidsRequestAminoType, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseAmino, QueryBidsResponseAminoType, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestAmino, QueryBidRequestAminoType, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseAmino, QueryBidResponseAminoType, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestAmino, QueryLeasesRequestAminoType, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseAmino, QueryLeasesResponseAminoType, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestAmino, QueryLeaseRequestAminoType, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseAmino, QueryLeaseResponseAminoType, QueryLeaseResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }

  /* Orders queries orders with filters */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/orders/list`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }

  /* Order queries order details */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/orders/info`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint, options);
  }

  /* Bids queries bids with filters */
  async bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/bids/list`;
    return await this.req.get<QueryBidsResponseSDKType>(endpoint, options);
  }

  /* Bid queries bid details */
  async bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/bids/info`;
    return await this.req.get<QueryBidResponseSDKType>(endpoint, options);
  }

  /* Leases queries leases with filters */
  async leases(params: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/leases/list`;
    return await this.req.get<QueryLeasesResponseSDKType>(endpoint, options);
  }

  /* Lease queries lease details */
  async lease(params: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/leases/info`;
    return await this.req.get<QueryLeaseResponseSDKType>(endpoint, options);
  }

}