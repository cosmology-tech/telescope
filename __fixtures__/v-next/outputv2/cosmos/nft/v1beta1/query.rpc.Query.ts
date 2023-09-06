import { PageRequest } from "../../base/query/v1beta1/pagination";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  nFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  nFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  classes(request?: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }
  owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse> {
    return this.rpc.unary(QueryOwnerDesc, QueryOwnerRequest.fromPartial(request), metadata);
  }
  supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse> {
    return this.rpc.unary(QuerySupplyDesc, QuerySupplyRequest.fromPartial(request), metadata);
  }
  nFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse> {
    return this.rpc.unary(QueryNFTsDesc, QueryNFTsRequest.fromPartial(request), metadata);
  }
  nFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse> {
    return this.rpc.unary(QueryNFTDesc, QueryNFTRequest.fromPartial(request), metadata);
  }
  class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse> {
    return this.rpc.unary(QueryClassDesc, QueryClassRequest.fromPartial(request), metadata);
  }
  classes(request: DeepPartial<QueryClassesRequest> = {
    pagination: PageRequest.fromPartial({})
  }, metadata?: grpc.Metadata): Promise<QueryClassesResponse> {
    return this.rpc.unary(QueryClassesDesc, QueryClassesRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.nft.v1beta1.Query"
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
      return {
        ...QueryBalanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryOwnerDesc: UnaryMethodDefinitionish = {
  methodName: "Owner",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryOwnerRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryOwnerResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySupplyDesc: UnaryMethodDefinitionish = {
  methodName: "Supply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySupplyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySupplyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryNFTsDesc: UnaryMethodDefinitionish = {
  methodName: "NFTs",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryNFTsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryNFTsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryNFTDesc: UnaryMethodDefinitionish = {
  methodName: "NFT",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryNFTRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryNFTResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClassDesc: UnaryMethodDefinitionish = {
  methodName: "Class",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClassRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClassResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClassesDesc: UnaryMethodDefinitionish = {
  methodName: "Classes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClassesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClassesResponse.decode(data),
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
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
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
export interface UseOwnerQuery<TData> extends ReactQueryParams<QueryOwnerResponse, TData> {
  request: QueryOwnerRequest;
}
export interface UseSupplyQuery<TData> extends ReactQueryParams<QuerySupplyResponse, TData> {
  request: QuerySupplyRequest;
}
export interface UseNFTsQuery<TData> extends ReactQueryParams<QueryNFTsResponse, TData> {
  request: QueryNFTsRequest;
}
export interface UseNFTQuery<TData> extends ReactQueryParams<QueryNFTResponse, TData> {
  request: QueryNFTRequest;
}
export interface UseClassQuery<TData> extends ReactQueryParams<QueryClassResponse, TData> {
  request: QueryClassRequest;
}
export interface UseClassesQuery<TData> extends ReactQueryParams<QueryClassesResponse, TData> {
  request?: QueryClassesRequest;
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
  const useOwner = <TData = QueryOwnerResponse,>({
    request,
    options
  }: UseOwnerQuery<TData>) => {
    return useQuery<QueryOwnerResponse, Error, TData>(["ownerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.owner(request);
    }, options);
  };
  const useSupply = <TData = QuerySupplyResponse,>({
    request,
    options
  }: UseSupplyQuery<TData>) => {
    return useQuery<QuerySupplyResponse, Error, TData>(["supplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supply(request);
    }, options);
  };
  const useNFTs = <TData = QueryNFTsResponse,>({
    request,
    options
  }: UseNFTsQuery<TData>) => {
    return useQuery<QueryNFTsResponse, Error, TData>(["nFTsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFTs(request);
    }, options);
  };
  const useNFT = <TData = QueryNFTResponse,>({
    request,
    options
  }: UseNFTQuery<TData>) => {
    return useQuery<QueryNFTResponse, Error, TData>(["nFTQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFT(request);
    }, options);
  };
  const useClass = <TData = QueryClassResponse,>({
    request,
    options
  }: UseClassQuery<TData>) => {
    return useQuery<QueryClassResponse, Error, TData>(["classQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.class(request);
    }, options);
  };
  const useClasses = <TData = QueryClassesResponse,>({
    request,
    options
  }: UseClassesQuery<TData>) => {
    return useQuery<QueryClassesResponse, Error, TData>(["classesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classes(request);
    }, options);
  };
  return {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */useBalance,
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */useOwner,
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */useSupply,
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs,
    /** NFT queries an NFT based on its class and id. */useNFT,
    /** Class queries an NFT class based on its id */useClass,
    /** Classes queries all NFT classes */useClasses
  };
};