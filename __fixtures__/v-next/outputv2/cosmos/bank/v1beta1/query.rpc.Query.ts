import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ReactQueryParams } from "../../../react-query";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;

  /** AllBalances queries the balance of all coins for a single account. */
  allBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse>;

  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  spendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse>;

  /** TotalSupply queries the total supply of all coins. */
  totalSupply(request?: DeepPartial<QueryTotalSupplyRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse>;

  /** SupplyOf queries the supply of a single coin. */
  supplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse>;

  /** Params queries the parameters of x/bank module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  denomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse>;

  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  denomsMetadata(request?: DeepPartial<QueryDenomsMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse>;

  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  denomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }

  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }

  allBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse> {
    return this.rpc.unary(QueryAllBalancesDesc, QueryAllBalancesRequest.fromPartial(request), metadata);
  }

  spendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse> {
    return this.rpc.unary(QuerySpendableBalancesDesc, QuerySpendableBalancesRequest.fromPartial(request), metadata);
  }

  totalSupply(request: DeepPartial<QueryTotalSupplyRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse> {
    return this.rpc.unary(QueryTotalSupplyDesc, QueryTotalSupplyRequest.fromPartial(request), metadata);
  }

  supplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse> {
    return this.rpc.unary(QuerySupplyOfDesc, QuerySupplyOfRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  denomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse> {
    return this.rpc.unary(QueryDenomMetadataDesc, QueryDenomMetadataRequest.fromPartial(request), metadata);
  }

  denomsMetadata(request: DeepPartial<QueryDenomsMetadataRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse> {
    return this.rpc.unary(QueryDenomsMetadataDesc, QueryDenomsMetadataRequest.fromPartial(request), metadata);
  }

  denomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse> {
    return this.rpc.unary(QueryDenomOwnersDesc, QueryDenomOwnersRequest.fromPartial(request), metadata);
  }

}
export const QueryDesc = {
  serviceName: "cosmos.bank.v1beta1.Query"
};
export const QueryBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "Balance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBalanceRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryBalanceResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryAllBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "AllBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllBalancesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryAllBalancesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QuerySpendableBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "SpendableBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySpendableBalancesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySpendableBalancesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryTotalSupplyDesc: UnaryMethodDefinitionish = {
  methodName: "TotalSupply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalSupplyRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTotalSupplyResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QuerySupplyOfDesc: UnaryMethodDefinitionish = {
  methodName: "SupplyOf",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySupplyOfRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySupplyOfResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryParamsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryDenomMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomMetadataRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryDenomMetadataResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryDenomsMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomsMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomsMetadataRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryDenomsMetadataResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryDenomOwnersDesc: UnaryMethodDefinitionish = {
  methodName: "DenomOwners",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomOwnersRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryDenomOwnersResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = { ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({ ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }

}
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
  request: QueryAllBalancesRequest;
}
export interface UseSpendableBalancesQuery<TData> extends ReactQueryParams<QuerySpendableBalancesResponse, TData> {
  request: QuerySpendableBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
  request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
  request: QuerySupplyOfRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends ReactQueryParams<QueryDenomMetadataResponse, TData> {
  request: QueryDenomMetadataRequest;
}
export interface UseDenomsMetadataQuery<TData> extends ReactQueryParams<QueryDenomsMetadataResponse, TData> {
  request?: QueryDenomsMetadataRequest;
}
export interface UseDenomOwnersQuery<TData> extends ReactQueryParams<QueryDenomOwnersResponse, TData> {
  request: QueryDenomOwnersRequest;
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

  const useBalance = <TData = QueryBalanceResponse,>({
    request,
    options
  }: UseBalanceQuery<TData>) => {
    return useQuery<QueryBalanceResponse, Error, TData>(["balanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };

  const useAllBalances = <TData = QueryAllBalancesResponse,>({
    request,
    options
  }: UseAllBalancesQuery<TData>) => {
    return useQuery<QueryAllBalancesResponse, Error, TData>(["allBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allBalances(request);
    }, options);
  };

  const useSpendableBalances = <TData = QuerySpendableBalancesResponse,>({
    request,
    options
  }: UseSpendableBalancesQuery<TData>) => {
    return useQuery<QuerySpendableBalancesResponse, Error, TData>(["spendableBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalances(request);
    }, options);
  };

  const useTotalSupply = <TData = QueryTotalSupplyResponse,>({
    request,
    options
  }: UseTotalSupplyQuery<TData>) => {
    return useQuery<QueryTotalSupplyResponse, Error, TData>(["totalSupplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSupply(request);
    }, options);
  };

  const useSupplyOf = <TData = QuerySupplyOfResponse,>({
    request,
    options
  }: UseSupplyOfQuery<TData>) => {
    return useQuery<QuerySupplyOfResponse, Error, TData>(["supplyOfQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplyOf(request);
    }, options);
  };

  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  const useDenomMetadata = <TData = QueryDenomMetadataResponse,>({
    request,
    options
  }: UseDenomMetadataQuery<TData>) => {
    return useQuery<QueryDenomMetadataResponse, Error, TData>(["denomMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomMetadata(request);
    }, options);
  };

  const useDenomsMetadata = <TData = QueryDenomsMetadataResponse,>({
    request,
    options
  }: UseDenomsMetadataQuery<TData>) => {
    return useQuery<QueryDenomsMetadataResponse, Error, TData>(["denomsMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomsMetadata(request);
    }, options);
  };

  const useDenomOwners = <TData = QueryDenomOwnersResponse,>({
    request,
    options
  }: UseDenomOwnersQuery<TData>) => {
    return useQuery<QueryDenomOwnersResponse, Error, TData>(["denomOwnersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomOwners(request);
    }, options);
  };

  return {
    /** Balance queries the balance of a single coin for a single account. */
    useBalance,

    /** AllBalances queries the balance of all coins for a single account. */
    useAllBalances,

    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    useSpendableBalances,

    /** TotalSupply queries the total supply of all coins. */
    useTotalSupply,

    /** SupplyOf queries the supply of a single coin. */
    useSupplyOf,

    /** Params queries the parameters of x/bank module. */
    useParams,

    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    useDenomMetadata,

    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata,

    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    useDenomOwners
  };
};