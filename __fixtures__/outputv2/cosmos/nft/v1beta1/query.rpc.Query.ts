import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
export class Query {
  static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/balance/${request["owner"]}/{class_id}?${fm.renderURLSearchParams(request, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Owner(request: QueryOwnerRequest, initRequest?: fm.InitReq): Promise<QueryOwnerResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/owner/${request["class_id"]}/{id}?${fm.renderURLSearchParams(request, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Supply(request: QuerySupplyRequest, initRequest?: fm.InitReq): Promise<QuerySupplyResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/supply/${request["class_id"]}?${fm.renderURLSearchParams(request, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static NFTs(request: QueryNFTsRequest, initRequest?: fm.InitReq): Promise<QueryNFTsResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/nfts?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static NFT(request: QueryNFTRequest, initRequest?: fm.InitReq): Promise<QueryNFTResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/nfts/${request["class_id"]}/{id}?${fm.renderURLSearchParams(request, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Class(request: QueryClassRequest, initRequest?: fm.InitReq): Promise<QueryClassResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/classes/${request["class_id"]}?${fm.renderURLSearchParams(request, ["class_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Classes(request: QueryClassesRequest, initRequest?: fm.InitReq): Promise<QueryClassesResponse> {
    return fm.fetchReq(`/cosmos/nft/v1beta1/classes?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}