import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balances = this.balances.bind(this);
  }

  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Query", "Balances", data);
    return promise.then(data => QueryBalancesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
      return queryService.balances(request);
    }

  };
};
export interface UseBalancesQuery<TData> extends ReactQueryParams<QueryBalancesResponse, TData> {
  request: QueryBalancesRequest;
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

  const useBalances = <TData = QueryBalancesResponse,>({
    request,
    options
  }: UseBalancesQuery<TData>) => {
    return useQuery<QueryBalancesResponse, Error, TData>(["balancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balances(request);
    }, options);
  };

  return {
    /** Retrieves the unvested, vested and locked tokens for a vesting account */
    useBalances
  };
};