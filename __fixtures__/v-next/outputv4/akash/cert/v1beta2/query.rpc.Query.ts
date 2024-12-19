import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert.js";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Rpc } from "../../../helpers.js";
import { BinaryReader } from "../../../binary.js";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query.js";
import { VueQueryParams } from "../../../vue-query.js";
import { useQuery } from "@tanstack/react-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryStore, MobxResponse } from "../../../mobx.js";
import { makeObservable, override } from "mobx";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType, ReactiveQueryCertificatesRequest } from "./query.js";
/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Certificates queries certificates */
  certificates = async (request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> => {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
      return queryService.certificates(request);
    }
  };
};
export interface UseCertificatesQuery<TData> extends ReactQueryParams<QueryCertificatesResponse, TData> {
  request: QueryCertificatesRequest;
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
export interface UseCertificatesQuery<TData> extends VueQueryParams<QueryCertificatesResponse, TData> {
  request: ReactiveQueryCertificatesRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useCertificates = <TData = QueryCertificatesResponse,>({
    request,
    options
  }: UseCertificatesQuery<TData>) => {
    return useQuery<QueryCertificatesResponse, Error, TData>(["certificatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.certificates(request);
    }, options);
  };
  return {
    /** Certificates queries certificates */useCertificates
  };
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useCertificates = <TData = QueryCertificatesResponse,>({
    request,
    options
  }: UseCertificatesQuery<TData>) => {
    const queryKey = ["certificatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCertificatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.certificates(params);
      },
      ...options
    });
  };
  return {
    /** Certificates queries certificates */useCertificates
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryCertificatesStore {
    store = new QueryStore<QueryCertificatesRequest, QueryCertificatesResponse>(queryService?.certificates);
    certificates(request: QueryCertificatesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Certificates queries certificates */QueryCertificatesStore
  };
};