import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ReactQueryParams } from "../../../react-query";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  tokenPairs(request?: DeepPartial<QueryTokenPairsRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse>;

  /** TokenPair retrieves a registered token pair */
  tokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse>;

  /** Params retrieves the erc20 module params */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }

  tokenPairs(request: DeepPartial<QueryTokenPairsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse> {
    return this.rpc.unary(QueryTokenPairsDesc, QueryTokenPairsRequest.fromPartial(request), metadata);
  }

  tokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse> {
    return this.rpc.unary(QueryTokenPairDesc, QueryTokenPairRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}
export const QueryDesc = {
  serviceName: "evmos.erc20.v1.Query"
};
export const QueryTokenPairsDesc: UnaryMethodDefinitionish = {
  methodName: "TokenPairs",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenPairsRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTokenPairsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryTokenPairDesc: UnaryMethodDefinitionish = {
  methodName: "TokenPair",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenPairRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTokenPairResponse.decode(data),

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
export interface UseTokenPairsQuery<TData> extends ReactQueryParams<QueryTokenPairsResponse, TData> {
  request?: QueryTokenPairsRequest;
}
export interface UseTokenPairQuery<TData> extends ReactQueryParams<QueryTokenPairResponse, TData> {
  request: QueryTokenPairRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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

  const useTokenPairs = <TData = QueryTokenPairsResponse,>({
    request,
    options
  }: UseTokenPairsQuery<TData>) => {
    return useQuery<QueryTokenPairsResponse, Error, TData>(["tokenPairsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tokenPairs(request);
    }, options);
  };

  const useTokenPair = <TData = QueryTokenPairResponse,>({
    request,
    options
  }: UseTokenPairQuery<TData>) => {
    return useQuery<QueryTokenPairResponse, Error, TData>(["tokenPairQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tokenPair(request);
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

  return {
    /** TokenPairs retrieves registered token pairs */
    useTokenPairs,

    /** TokenPair retrieves a registered token pair */
    useTokenPair,

    /** Params retrieves the erc20 module params */
    useParams
  };
};