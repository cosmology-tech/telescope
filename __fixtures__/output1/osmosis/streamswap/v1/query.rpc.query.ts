import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Sale, SaleSDKType, UserPosition, UserPositionSDKType } from "./state";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QuerySales, QuerySalesSDKType, QuerySalesResponse, QuerySalesResponseSDKType, QuerySale, QuerySaleSDKType, QuerySaleResponse, QuerySaleResponseSDKType, QueryUserPosition, QueryUserPositionSDKType, QueryUserPositionResponse, QueryUserPositionResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of Sales ordered by the creation time */
  sales(request?: QuerySales): Promise<QuerySalesResponse>;

  /** Returns the specific Sale object */
  sale(request: QuerySale): Promise<QuerySaleResponse>;
  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sales = this.sales.bind(this);
    this.sale = this.sale.bind(this);
    this.userPosition = this.userPosition.bind(this);
  }

  sales(request: QuerySales = {
    pagination: undefined
  }): Promise<QuerySalesResponse> {
    const data = QuerySales.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sales", data);
    return promise.then(data => QuerySalesResponse.decode(new _m0.Reader(data)));
  }

  sale(request: QuerySale): Promise<QuerySaleResponse> {
    const data = QuerySale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sale", data);
    return promise.then(data => QuerySaleResponse.decode(new _m0.Reader(data)));
  }

  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse> {
    const data = QueryUserPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "UserPosition", data);
    return promise.then(data => QueryUserPositionResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    sales(request?: QuerySales): Promise<QuerySalesResponse> {
      return queryService.sales(request);
    },

    sale(request: QuerySale): Promise<QuerySaleResponse> {
      return queryService.sale(request);
    },

    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse> {
      return queryService.userPosition(request);
    }

  };
};
export interface UseSalesQuery<TData> extends ReactQueryParams<QuerySalesResponse, TData> {
  request?: QuerySales;
}
export interface UseSaleQuery<TData> extends ReactQueryParams<QuerySaleResponse, TData> {
  request: QuerySale;
}
export interface UseUserPositionQuery<TData> extends ReactQueryParams<QueryUserPositionResponse, TData> {
  request: QueryUserPosition;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useSales = ({
    request,
    options
  }: UseSalesQuery<TData>) => {
    return useQuery<QuerySalesResponse, Error, TData>(["salesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sales(request);
    }, options);
  };

  const useSale = ({
    request,
    options
  }: UseSaleQuery<TData>) => {
    return useQuery<QuerySaleResponse, Error, TData>(["saleQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sale(request);
    }, options);
  };

  const useUserPosition = ({
    request,
    options
  }: UseUserPositionQuery<TData>) => {
    return useQuery<QueryUserPositionResponse, Error, TData>(["userPositionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userPosition(request);
    }, options);
  };

  return {
    /** Returns list of Sales ordered by the creation time */
    useSales,

    /** Returns the specific Sale object */
    useSale,
    useUserPosition
  };
};