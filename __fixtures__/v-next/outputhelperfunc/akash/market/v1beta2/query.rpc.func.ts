import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
export const createGetOrders = (getRpcInstance: RpcResolver) => buildQuery<QueryOrdersRequest, QueryOrdersResponse>({
  encode: QueryOrdersRequest.encode,
  decode: QueryOrdersResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Orders",
  getRpcInstance: getRpcInstance
});
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: createGetOrders,
  queryKeyPrefix: "OrdersQuery"
});
export const createGetOrder = (getRpcInstance: RpcResolver) => buildQuery<QueryOrderRequest, QueryOrderResponse>({
  encode: QueryOrderRequest.encode,
  decode: QueryOrderResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Order",
  getRpcInstance: getRpcInstance
});
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: createGetOrder,
  queryKeyPrefix: "OrderQuery"
});
export const createGetBids = (getRpcInstance: RpcResolver) => buildQuery<QueryBidsRequest, QueryBidsResponse>({
  encode: QueryBidsRequest.encode,
  decode: QueryBidsResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bids",
  getRpcInstance: getRpcInstance
});
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: createGetBids,
  queryKeyPrefix: "BidsQuery"
});
export const createGetBid = (getRpcInstance: RpcResolver) => buildQuery<QueryBidRequest, QueryBidResponse>({
  encode: QueryBidRequest.encode,
  decode: QueryBidResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bid",
  getRpcInstance: getRpcInstance
});
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: createGetBid,
  queryKeyPrefix: "BidQuery"
});
export const createGetLeases = (getRpcInstance: RpcResolver) => buildQuery<QueryLeasesRequest, QueryLeasesResponse>({
  encode: QueryLeasesRequest.encode,
  decode: QueryLeasesResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Leases",
  getRpcInstance: getRpcInstance
});
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: createGetLeases,
  queryKeyPrefix: "LeasesQuery"
});
export const createGetLease = (getRpcInstance: RpcResolver) => buildQuery<QueryLeaseRequest, QueryLeaseResponse>({
  encode: QueryLeaseRequest.encode,
  decode: QueryLeaseResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Lease",
  getRpcInstance: getRpcInstance
});
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: createGetLease,
  queryKeyPrefix: "LeaseQuery"
});