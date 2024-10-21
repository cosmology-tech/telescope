import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
export const createGetOrders = (getRpcInstance: RpcResolver) => buildQuery<QueryOrdersRequest, QueryOrdersResponse>({
  encoder: QueryOrdersRequest.encode,
  decoder: QueryOrdersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Orders",
  getRpcInstance: getRpcInstance
});
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: createGetOrders,
  queryKeyPrefix: "OrdersQuery"
});
export const createGetOrder = (getRpcInstance: RpcResolver) => buildQuery<QueryOrderRequest, QueryOrderResponse>({
  encoder: QueryOrderRequest.encode,
  decoder: QueryOrderResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Order",
  getRpcInstance: getRpcInstance
});
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: createGetOrder,
  queryKeyPrefix: "OrderQuery"
});
export const createGetBids = (getRpcInstance: RpcResolver) => buildQuery<QueryBidsRequest, QueryBidsResponse>({
  encoder: QueryBidsRequest.encode,
  decoder: QueryBidsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Bids",
  getRpcInstance: getRpcInstance
});
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: createGetBids,
  queryKeyPrefix: "BidsQuery"
});
export const createGetBid = (getRpcInstance: RpcResolver) => buildQuery<QueryBidRequest, QueryBidResponse>({
  encoder: QueryBidRequest.encode,
  decoder: QueryBidResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Bid",
  getRpcInstance: getRpcInstance
});
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: createGetBid,
  queryKeyPrefix: "BidQuery"
});
export const createGetLeases = (getRpcInstance: RpcResolver) => buildQuery<QueryLeasesRequest, QueryLeasesResponse>({
  encoder: QueryLeasesRequest.encode,
  decoder: QueryLeasesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Leases",
  getRpcInstance: getRpcInstance
});
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: createGetLeases,
  queryKeyPrefix: "LeasesQuery"
});
export const createGetLease = (getRpcInstance: RpcResolver) => buildQuery<QueryLeaseRequest, QueryLeaseResponse>({
  encoder: QueryLeaseRequest.encode,
  decoder: QueryLeaseResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Lease",
  getRpcInstance: getRpcInstance
});
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: createGetLease,
  queryKeyPrefix: "LeaseQuery"
});