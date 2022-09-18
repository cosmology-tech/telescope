import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
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

  /* Params queries the parameters of slashing module */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* SigningInfo queries the signing info of given cons address */
  async signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.consAddress}`;
    return await this.get<QuerySigningInfoResponse>(endpoint);
  }

  /* SigningInfos queries signing info of all validators */
  async signingInfos(params: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.get<QuerySigningInfosResponse>(endpoint, options);
  }

}