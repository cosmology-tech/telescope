import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.class_id}`;
    return await this.request(endpoint, options);
  }

  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  async owner(params: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    const endpoint = `cosmos/nft/v1beta1/owner/${params.class_id}/${params.id}`;
    return await this.request(endpoint, options);
  }

  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    const endpoint = `cosmos/nft/v1beta1/supply/${params.class_id}`;
    return await this.request(endpoint, options);
  }

  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
  ERC721Enumerable */
  async nFTs(params: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return await this.request(endpoint, options);
  }

  /* NFT queries an NFT based on its class and id. */
  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    const endpoint = `cosmos/nft/v1beta1/nfts/${params.class_id}/${params.id}`;
    return await this.request(endpoint, options);
  }

  /* Class queries an NFT class based on its id */
  async class(params: QueryClassRequest): Promise<QueryClassResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }

    const endpoint = `cosmos/nft/v1beta1/classes/${params.class_id}`;
    return await this.request(endpoint, options);
  }

  /* Classes queries all NFT classes */
  async classes(params: QueryClassesRequest): Promise<QueryClassesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/nft/v1beta1/classes`;
    return await this.request(endpoint, options);
  }

}