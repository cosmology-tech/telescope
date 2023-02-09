import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;

  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  Owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse>;

  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  Supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse>;

  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  NFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse>;

  /** NFT queries an NFT based on its class and id. */
  NFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse>;

  /** Class queries an NFT class based on its id */
  Class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse>;

  /** Classes queries all NFT classes */
  Classes(request?: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse>;
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
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryClassesResponse> {
    return this.rpc.unary(QueryClassesDesc, QueryClassesRequest.fromPartial(request), metadata);
  }

}