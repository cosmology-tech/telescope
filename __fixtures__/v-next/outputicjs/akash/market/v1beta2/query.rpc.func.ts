import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
export const createGetOrders = (clientResolver?: RpcResolver) => buildQuery<QueryOrdersRequest, QueryOrdersResponse>({
  encode: QueryOrdersRequest.encode,
  decode: QueryOrdersResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Orders",
  clientResolver
});
export const createGetOrder = (clientResolver?: RpcResolver) => buildQuery<QueryOrderRequest, QueryOrderResponse>({
  encode: QueryOrderRequest.encode,
  decode: QueryOrderResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Order",
  clientResolver
});
export const createGetBids = (clientResolver?: RpcResolver) => buildQuery<QueryBidsRequest, QueryBidsResponse>({
  encode: QueryBidsRequest.encode,
  decode: QueryBidsResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bids",
  clientResolver
});
export const createGetBid = (clientResolver?: RpcResolver) => buildQuery<QueryBidRequest, QueryBidResponse>({
  encode: QueryBidRequest.encode,
  decode: QueryBidResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Bid",
  clientResolver
});
export const createGetLeases = (clientResolver?: RpcResolver) => buildQuery<QueryLeasesRequest, QueryLeasesResponse>({
  encode: QueryLeasesRequest.encode,
  decode: QueryLeasesResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Leases",
  clientResolver
});
export const createGetLease = (clientResolver?: RpcResolver) => buildQuery<QueryLeaseRequest, QueryLeaseResponse>({
  encode: QueryLeaseRequest.encode,
  decode: QueryLeaseResponse.decode,
  service: "akash.market.v1beta2.Query",
  method: "Lease",
  clientResolver
});