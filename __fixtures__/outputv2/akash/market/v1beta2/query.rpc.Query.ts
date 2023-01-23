import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import * as fm from "../../../grpc-gateway";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
export class Query {
  static Orders(request: QueryOrdersRequest, initRequest?: fm.InitReq): Promise<QueryOrdersResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/orders/list?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Order(request: QueryOrderRequest, initRequest?: fm.InitReq): Promise<QueryOrderResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/orders/info?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Bids(request: QueryBidsRequest, initRequest?: fm.InitReq): Promise<QueryBidsResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/bids/list?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Bid(request: QueryBidRequest, initRequest?: fm.InitReq): Promise<QueryBidResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/bids/info?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Leases(request: QueryLeasesRequest, initRequest?: fm.InitReq): Promise<QueryLeasesResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/leases/list?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Lease(request: QueryLeaseRequest, initRequest?: fm.InitReq): Promise<QueryLeaseResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/leases/info?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}