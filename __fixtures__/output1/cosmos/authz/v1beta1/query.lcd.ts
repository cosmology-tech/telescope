import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  async grants(params: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.granter !== "undefined") {
      options.params.granter = params.granter;
    }

    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }

    if (typeof params?.msgTypeUrl !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants`;
    return await this.get<QueryGrantsResponseSDKType>(endpoint, options);
  }

  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
  Since: cosmos-sdk 0.46 */
  async granterGrants(params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants/granter/${params.granter}`;
    return await this.get<QueryGranterGrantsResponseSDKType>(endpoint, options);
  }

  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
  Since: cosmos-sdk 0.46 */
  async granteeGrants(params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants/grantee/${params.grantee}`;
    return await this.get<QueryGranteeGrantsResponseSDKType>(endpoint, options);
  }

}