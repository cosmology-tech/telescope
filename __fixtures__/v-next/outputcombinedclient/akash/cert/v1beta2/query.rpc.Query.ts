import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Certificates queries certificates */
  certificates = async (request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> => {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
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