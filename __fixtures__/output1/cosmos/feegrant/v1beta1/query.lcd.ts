import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Allowance returns fee granted to the grantee by the granter. */
  async allowance(params: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return await this.request(endpoint);
  }

  /* Allowances returns all the grants for address. */
  async allowances(params: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return await this.request(endpoint, options);
  }

  /* AllowancesByGranter returns all the grants given by an address
  Since v0.46 */
  async allowancesByGranter(params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return await this.request(endpoint, options);
  }

}