import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params queries the parameters of slashing module */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.request(endpoint);
  }

  /* SigningInfo queries the signing info of given cons address */
  async signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.consAddress !== "undefined") {
      options.params.cons_address = params.consAddress;
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.cons_address}`;
    return await this.request(endpoint, options);
  }

  /* SigningInfos queries signing info of all validators */
  async signingInfos(params: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.request(endpoint, options);
  }

}