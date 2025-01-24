import { buildUseVueQuery } from "../../../vue-query";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
import { createGetOrders, createGetOrder, createGetBids, createGetBid, createGetLeases, createGetLease } from "./query.rpc.func.ts";
export const useGetOrders = buildUseVueQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: createGetOrders,
  queryKeyPrefix: "OrdersQuery"
});
export const useGetOrder = buildUseVueQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: createGetOrder,
  queryKeyPrefix: "OrderQuery"
});
export const useGetBids = buildUseVueQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: createGetBids,
  queryKeyPrefix: "BidsQuery"
});
export const useGetBid = buildUseVueQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: createGetBid,
  queryKeyPrefix: "BidQuery"
});
export const useGetLeases = buildUseVueQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: createGetLeases,
  queryKeyPrefix: "LeasesQuery"
});
export const useGetLease = buildUseVueQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: createGetLease,
  queryKeyPrefix: "LeaseQuery"
});