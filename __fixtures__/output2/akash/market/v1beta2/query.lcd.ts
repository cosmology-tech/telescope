import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Orders queries orders with filters */


  orders = async (params: QueryOrdersRequest): Promise<QueryOrdersResponse> => {
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
    return await this.req.get<QueryOrdersResponse>(endpoint, options);
  };
  /* Order queries order details */

  order = async (params: QueryOrderRequest): Promise<QueryOrderResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/orders/info`;
    return await this.req.get<QueryOrderResponse>(endpoint, options);
  };
  /* Bids queries bids with filters */

  bids = async (params: QueryBidsRequest): Promise<QueryBidsResponse> => {
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
    return await this.req.get<QueryBidsResponse>(endpoint, options);
  };
  /* Bid queries bid details */

  bid = async (params: QueryBidRequest): Promise<QueryBidResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/bids/info`;
    return await this.req.get<QueryBidResponse>(endpoint, options);
  };
  /* Leases queries leases with filters */

  leases = async (params: QueryLeasesRequest): Promise<QueryLeasesResponse> => {
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
    return await this.req.get<QueryLeasesResponse>(endpoint, options);
  };
  /* Lease queries lease details */

  lease = async (params: QueryLeaseRequest): Promise<QueryLeaseResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/leases/info`;
    return await this.req.get<QueryLeaseResponse>(endpoint, options);
  };
}