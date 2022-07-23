import { OrderFilters, OrderID, Order } from "./order";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "./bid";
import { LeaseFilters, LeaseID, Lease } from "./lease";
import { Account, FractionalPayment } from "../../escrow/v1beta2/types";
import { LCDClient } from "@osmonauts/lcd";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Orders queries orders with filters */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/market/v1beta2/orders/list/`;
    return await this.request(endpoint, options);
  }

  /* Order queries order details */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/orders/info/`;
    return await this.request(endpoint, options);
  }

  /* Bids queries bids with filters */
  async bids(params: QueryBidsRequest): Promise<QueryBidsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/market/v1beta2/bids/list/`;
    return await this.request(endpoint, options);
  }

  /* Bid queries bid details */
  async bid(params: QueryBidRequest): Promise<QueryBidResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/bids/info/`;
    return await this.request(endpoint, options);
  }

  /* Leases queries leases with filters */
  async leases(params: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/market/v1beta2/leases/list/`;
    return await this.request(endpoint, options);
  }

  /* Lease queries lease details */
  async lease(params: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/leases/info/`;
    return await this.request(endpoint, options);
  }

}