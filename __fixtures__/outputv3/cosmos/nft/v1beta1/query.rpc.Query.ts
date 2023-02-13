import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
export class Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/balance/${request["owner"]}/{class_id}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  static Owner(request: QueryOwnerRequest, initRequest?: fm.InitReq): Promise<QueryOwnerResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/owner/${request["class_id"]}/{id}?${fm.renderURLSearchParams({ ...request
    }, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  static Supply(request: QuerySupplyRequest, initRequest?: fm.InitReq): Promise<QuerySupplyResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/supply/${request["class_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  static NFTs(request: QueryNFTsRequest, initRequest?: fm.InitReq): Promise<QueryNFTsResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/nfts?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** NFT queries an NFT based on its class and id. */
  static NFT(request: QueryNFTRequest, initRequest?: fm.InitReq): Promise<QueryNFTResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/nfts/${request["class_id"]}/{id}?${fm.renderURLSearchParams({ ...request
    }, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Class queries an NFT class based on its id */
  static Class(request: QueryClassRequest, initRequest?: fm.InitReq): Promise<QueryClassResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/classes/${request["class_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Classes queries all NFT classes */
  static Classes(request: QueryClassesRequest, initRequest?: fm.InitReq): Promise<QueryClassesResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/classes?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}