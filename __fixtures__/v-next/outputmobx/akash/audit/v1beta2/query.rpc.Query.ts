import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;

  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;

  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;

  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* AllProvidersAttributes queries all providers
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  allProvidersAttributes = async (request: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> => {
    const data = QueryAllProvidersAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AllProvidersAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  };

  /* ProviderAttributes queries all provider signed attributes
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  providerAttributes = async (request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> => {
    const data = QueryProviderAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  };

  /* ProviderAuditorAttributes queries provider signed attributes by specific auditor
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  providerAuditorAttributes = async (request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> => {
    const data = QueryProviderAuditorRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  };

  /* AuditorAttributes queries all providers signed by this auditor
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  auditorAttributes = async (request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> => {
    const data = QueryAuditorAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.allProvidersAttributes(request);
    },

    providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.providerAttributes(request);
    },

    providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
      return queryService.providerAuditorAttributes(request);
    },

    auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.auditorAttributes(request);
    }

  };
};
export interface UseAllProvidersAttributesQuery<TData> extends ReactQueryParams<QueryProvidersResponse, TData> {
  request?: QueryAllProvidersAttributesRequest;
}
export interface UseProviderAttributesQuery<TData> extends ReactQueryParams<QueryProvidersResponse, TData> {
  request: QueryProviderAttributesRequest;
}
export interface UseProviderAuditorAttributesQuery<TData> extends ReactQueryParams<QueryProvidersResponse, TData> {
  request: QueryProviderAuditorRequest;
}
export interface UseAuditorAttributesQuery<TData> extends ReactQueryParams<QueryProvidersResponse, TData> {
  request: QueryAuditorAttributesRequest;
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

  const useAllProvidersAttributes = <TData = QueryProvidersResponse,>({
    request,
    options
  }: UseAllProvidersAttributesQuery<TData>) => {
    return useQuery<QueryProvidersResponse, Error, TData>(["allProvidersAttributesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allProvidersAttributes(request);
    }, options);
  };

  const useProviderAttributes = <TData = QueryProvidersResponse,>({
    request,
    options
  }: UseProviderAttributesQuery<TData>) => {
    return useQuery<QueryProvidersResponse, Error, TData>(["providerAttributesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.providerAttributes(request);
    }, options);
  };

  const useProviderAuditorAttributes = <TData = QueryProvidersResponse,>({
    request,
    options
  }: UseProviderAuditorAttributesQuery<TData>) => {
    return useQuery<QueryProvidersResponse, Error, TData>(["providerAuditorAttributesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.providerAuditorAttributes(request);
    }, options);
  };

  const useAuditorAttributes = <TData = QueryProvidersResponse,>({
    request,
    options
  }: UseAuditorAttributesQuery<TData>) => {
    return useQuery<QueryProvidersResponse, Error, TData>(["auditorAttributesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.auditorAttributes(request);
    }, options);
  };

  return {
    /**
     * AllProvidersAttributes queries all providers
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useAllProvidersAttributes,

    /**
     * ProviderAttributes queries all provider signed attributes
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useProviderAttributes,

    /**
     * ProviderAuditorAttributes queries provider signed attributes by specific auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useProviderAuditorAttributes,

    /**
     * AuditorAttributes queries all providers signed by this auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useAuditorAttributes
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryAllProvidersAttributesStore extends QueryStore<QueryAllProvidersAttributesRequest, QueryProvidersResponse> {
    constructor() {
      super(queryService?.allProvidersAttributes);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): MobxResponse<QueryProvidersResponse> {
      return this.getData(request);
    }

  }

  class QueryProviderAttributesStore extends QueryStore<QueryProviderAttributesRequest, QueryProvidersResponse> {
    constructor() {
      super(queryService?.providerAttributes);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    providerAttributes(request: QueryProviderAttributesRequest): MobxResponse<QueryProvidersResponse> {
      return this.getData(request);
    }

  }

  class QueryProviderAuditorAttributesStore extends QueryStore<QueryProviderAuditorRequest, QueryProvidersResponse> {
    constructor() {
      super(queryService?.providerAuditorAttributes);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    providerAuditorAttributes(request: QueryProviderAuditorRequest): MobxResponse<QueryProvidersResponse> {
      return this.getData(request);
    }

  }

  class QueryAuditorAttributesStore extends QueryStore<QueryAuditorAttributesRequest, QueryProvidersResponse> {
    constructor() {
      super(queryService?.auditorAttributes);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    auditorAttributes(request: QueryAuditorAttributesRequest): MobxResponse<QueryProvidersResponse> {
      return this.getData(request);
    }

  }

  return {
    /**
     * AllProvidersAttributes queries all providers
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryAllProvidersAttributesStore,

    /**
     * ProviderAttributes queries all provider signed attributes
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryProviderAttributesStore,

    /**
     * ProviderAuditorAttributes queries provider signed attributes by specific auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryProviderAuditorAttributesStore,

    /**
     * AuditorAttributes queries all providers signed by this auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryAuditorAttributesStore
  };
};