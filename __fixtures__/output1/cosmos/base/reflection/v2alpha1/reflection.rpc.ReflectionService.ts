import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorRequestSDKType, GetAuthnDescriptorResponse, GetAuthnDescriptorResponseSDKType, GetChainDescriptorRequest, GetChainDescriptorRequestSDKType, GetChainDescriptorResponse, GetChainDescriptorResponseSDKType, GetCodecDescriptorRequest, GetCodecDescriptorRequestSDKType, GetCodecDescriptorResponse, GetCodecDescriptorResponseSDKType, GetConfigurationDescriptorRequest, GetConfigurationDescriptorRequestSDKType, GetConfigurationDescriptorResponse, GetConfigurationDescriptorResponseSDKType, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorRequestSDKType, GetQueryServicesDescriptorResponse, GetQueryServicesDescriptorResponseSDKType, GetTxDescriptorRequest, GetTxDescriptorRequestSDKType, GetTxDescriptorResponse, GetTxDescriptorResponseSDKType } from "./reflection";

/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
  /**
   * GetAuthnDescriptor returns information on how to authenticate transactions in the application
   * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   * future releases of the cosmos-sdk.
   */
  getAuthnDescriptor(request?: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;

  /** GetChainDescriptor returns the description of the chain */
  getChainDescriptor(request?: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;

  /** GetCodecDescriptor returns the descriptor of the codec of the application */
  getCodecDescriptor(request?: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;

  /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  getConfigurationDescriptor(request?: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;

  /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  getQueryServicesDescriptor(request?: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;

  /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  getTxDescriptor(request?: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getAuthnDescriptor = this.getAuthnDescriptor.bind(this);
    this.getChainDescriptor = this.getChainDescriptor.bind(this);
    this.getCodecDescriptor = this.getCodecDescriptor.bind(this);
    this.getConfigurationDescriptor = this.getConfigurationDescriptor.bind(this);
    this.getQueryServicesDescriptor = this.getQueryServicesDescriptor.bind(this);
    this.getTxDescriptor = this.getTxDescriptor.bind(this);
  }

  getAuthnDescriptor(request: GetAuthnDescriptorRequest = {}): Promise<GetAuthnDescriptorResponse> {
    const data = GetAuthnDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetAuthnDescriptor", data);
    return promise.then(data => GetAuthnDescriptorResponse.decode(new _m0.Reader(data)));
  }

  getChainDescriptor(request: GetChainDescriptorRequest = {}): Promise<GetChainDescriptorResponse> {
    const data = GetChainDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetChainDescriptor", data);
    return promise.then(data => GetChainDescriptorResponse.decode(new _m0.Reader(data)));
  }

  getCodecDescriptor(request: GetCodecDescriptorRequest = {}): Promise<GetCodecDescriptorResponse> {
    const data = GetCodecDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetCodecDescriptor", data);
    return promise.then(data => GetCodecDescriptorResponse.decode(new _m0.Reader(data)));
  }

  getConfigurationDescriptor(request: GetConfigurationDescriptorRequest = {}): Promise<GetConfigurationDescriptorResponse> {
    const data = GetConfigurationDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetConfigurationDescriptor", data);
    return promise.then(data => GetConfigurationDescriptorResponse.decode(new _m0.Reader(data)));
  }

  getQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest = {}): Promise<GetQueryServicesDescriptorResponse> {
    const data = GetQueryServicesDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetQueryServicesDescriptor", data);
    return promise.then(data => GetQueryServicesDescriptorResponse.decode(new _m0.Reader(data)));
  }

  getTxDescriptor(request: GetTxDescriptorRequest = {}): Promise<GetTxDescriptorResponse> {
    const data = GetTxDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v2alpha1.ReflectionService", "GetTxDescriptor", data);
    return promise.then(data => GetTxDescriptorResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ReflectionServiceClientImpl(rpc);
  return {
    getAuthnDescriptor(request?: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse> {
      return queryService.getAuthnDescriptor(request);
    },

    getChainDescriptor(request?: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse> {
      return queryService.getChainDescriptor(request);
    },

    getCodecDescriptor(request?: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse> {
      return queryService.getCodecDescriptor(request);
    },

    getConfigurationDescriptor(request?: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse> {
      return queryService.getConfigurationDescriptor(request);
    },

    getQueryServicesDescriptor(request?: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse> {
      return queryService.getQueryServicesDescriptor(request);
    },

    getTxDescriptor(request?: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse> {
      return queryService.getTxDescriptor(request);
    }

  };
};
export interface UseGetAuthnDescriptorQuery<TData> extends ReactQueryParams<GetAuthnDescriptorResponse, TData> {
  request?: GetAuthnDescriptorRequest;
}
export interface UseGetChainDescriptorQuery<TData> extends ReactQueryParams<GetChainDescriptorResponse, TData> {
  request?: GetChainDescriptorRequest;
}
export interface UseGetCodecDescriptorQuery<TData> extends ReactQueryParams<GetCodecDescriptorResponse, TData> {
  request?: GetCodecDescriptorRequest;
}
export interface UseGetConfigurationDescriptorQuery<TData> extends ReactQueryParams<GetConfigurationDescriptorResponse, TData> {
  request?: GetConfigurationDescriptorRequest;
}
export interface UseGetQueryServicesDescriptorQuery<TData> extends ReactQueryParams<GetQueryServicesDescriptorResponse, TData> {
  request?: GetQueryServicesDescriptorRequest;
}
export interface UseGetTxDescriptorQuery<TData> extends ReactQueryParams<GetTxDescriptorResponse, TData> {
  request?: GetTxDescriptorRequest;
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

  const useGetAuthnDescriptor = <TData = GetAuthnDescriptorResponse,>({
    request,
    options
  }: UseGetAuthnDescriptorQuery<TData>) => {
    return useQuery<GetAuthnDescriptorResponse, Error, TData>(["getAuthnDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getAuthnDescriptor(request);
    }, options);
  };

  const useGetChainDescriptor = <TData = GetChainDescriptorResponse,>({
    request,
    options
  }: UseGetChainDescriptorQuery<TData>) => {
    return useQuery<GetChainDescriptorResponse, Error, TData>(["getChainDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getChainDescriptor(request);
    }, options);
  };

  const useGetCodecDescriptor = <TData = GetCodecDescriptorResponse,>({
    request,
    options
  }: UseGetCodecDescriptorQuery<TData>) => {
    return useQuery<GetCodecDescriptorResponse, Error, TData>(["getCodecDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getCodecDescriptor(request);
    }, options);
  };

  const useGetConfigurationDescriptor = <TData = GetConfigurationDescriptorResponse,>({
    request,
    options
  }: UseGetConfigurationDescriptorQuery<TData>) => {
    return useQuery<GetConfigurationDescriptorResponse, Error, TData>(["getConfigurationDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getConfigurationDescriptor(request);
    }, options);
  };

  const useGetQueryServicesDescriptor = <TData = GetQueryServicesDescriptorResponse,>({
    request,
    options
  }: UseGetQueryServicesDescriptorQuery<TData>) => {
    return useQuery<GetQueryServicesDescriptorResponse, Error, TData>(["getQueryServicesDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getQueryServicesDescriptor(request);
    }, options);
  };

  const useGetTxDescriptor = <TData = GetTxDescriptorResponse,>({
    request,
    options
  }: UseGetTxDescriptorQuery<TData>) => {
    return useQuery<GetTxDescriptorResponse, Error, TData>(["getTxDescriptorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxDescriptor(request);
    }, options);
  };

  return {
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     */
    useGetAuthnDescriptor,

    /** GetChainDescriptor returns the description of the chain */
    useGetChainDescriptor,

    /** GetCodecDescriptor returns the descriptor of the codec of the application */
    useGetCodecDescriptor,

    /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
    useGetConfigurationDescriptor,

    /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
    useGetQueryServicesDescriptor,

    /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
    useGetTxDescriptor
  };
};