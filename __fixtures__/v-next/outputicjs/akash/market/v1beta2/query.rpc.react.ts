import { buildUseQuery } from "../../../react-query";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
import { createGetOrders, createGetOrder, createGetBids, createGetBid, createGetLeases, createGetLease } from "./query.rpc.func";
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: createGetOrders,
  queryKeyPrefix: "OrdersQuery"
});
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: createGetOrder,
  queryKeyPrefix: "OrderQuery"
});
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: createGetBids,
  queryKeyPrefix: "BidsQuery"
});
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: createGetBid,
  queryKeyPrefix: "BidQuery"
});
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: createGetLeases,
  queryKeyPrefix: "LeasesQuery"
});
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: createGetLease,
  queryKeyPrefix: "LeaseQuery"
});