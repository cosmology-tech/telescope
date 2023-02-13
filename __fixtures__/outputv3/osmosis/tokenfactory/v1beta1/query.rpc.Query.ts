import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType } from "./query";
export class Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  static DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomAuthorityMetadataResponse> {
    return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/denoms/${request["denom"]}/authority_metadata?${fm.renderURLSearchParams({ ...request
    }, ["denom"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  static DenomsFromCreator(request: QueryDenomsFromCreatorRequest, initRequest?: fm.InitReq): Promise<QueryDenomsFromCreatorResponse> {
    return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/denoms_from_creator/${request["creator"]}?${fm.renderURLSearchParams({ ...request
    }, ["creator"])}`, { ...initRequest,
      method: "GET"
    });
  }

}