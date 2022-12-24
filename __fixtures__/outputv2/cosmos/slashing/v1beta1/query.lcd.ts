import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsAminoType, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoAminoType, ValidatorSigningInfoSDKType } from "./slashing";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestAminoType, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseAminoType, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestAmino, QuerySigningInfoRequestAminoType, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseAmino, QuerySigningInfoResponseAminoType, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestAmino, QuerySigningInfosRequestAminoType, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseAmino, QuerySigningInfosResponseAminoType, QuerySigningInfosResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }

  /* Params queries the parameters of slashing module */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* SigningInfo queries the signing info of given cons address */
  async signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType> {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.consAddress}`;
    return await this.req.get<QuerySigningInfoResponseSDKType>(endpoint);
  }

  /* SigningInfos queries signing info of all validators */
  async signingInfos(params: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.req.get<QuerySigningInfosResponseSDKType>(endpoint, options);
  }

}