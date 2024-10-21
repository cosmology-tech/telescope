import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  owner = async (request: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  supply = async (request: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  };
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */
  nFTs = async (request: QueryNFTsRequest): Promise<QueryNFTsResponse> => {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new BinaryReader(data)));
  };
  /* NFT queries an NFT based on its class and id. */
  nFT = async (request: QueryNFTRequest): Promise<QueryNFTResponse> => {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new BinaryReader(data)));
  };
  /* Class queries an NFT class based on its id */
  class = async (request: QueryClassRequest): Promise<QueryClassResponse> => {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  };
  /* Classes queries all NFT classes */
  classes = async (request: QueryClassesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryClassesResponse> => {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
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