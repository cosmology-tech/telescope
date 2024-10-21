import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
export const createGetOrders = (getRpcInstance: SigningClientResolver) => buildQuery<QueryOrdersRequest, QueryOrdersResponse>({
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
export const createGetOrder = (getRpcInstance: SigningClientResolver) => buildQuery<QueryOrderRequest, QueryOrderResponse>({
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
export const createGetBids = (getRpcInstance: SigningClientResolver) => buildQuery<QueryBidsRequest, QueryBidsResponse>({
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
export const createGetBid = (getRpcInstance: SigningClientResolver) => buildQuery<QueryBidRequest, QueryBidResponse>({
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
export const createGetLeases = (getRpcInstance: SigningClientResolver) => buildQuery<QueryLeasesRequest, QueryLeasesResponse>({
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
export const createGetLease = (getRpcInstance: SigningClientResolver) => buildQuery<QueryLeaseRequest, QueryLeaseResponse>({
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