import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* DevFeeInfos retrieves all registered contracts for fee distribution */
  devFeeInfos = async (params: QueryDevFeeInfosRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryDevFeeInfosResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/fees/v1/fees`;
    return QueryDevFeeInfosResponse.fromSDKJSON(await this.req.get<QueryDevFeeInfosResponseSDKType>(endpoint, options));
  };
  /* DevFeeInfo retrieves a registered contract for fee distribution */
  devFeeInfo = async (params: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponseSDKType> => {
    const endpoint = `evmos/fees/v1/fees/${params.contractAddress}`;
    return QueryDevFeeInfoResponse.fromSDKJSON(await this.req.get<QueryDevFeeInfoResponseSDKType>(endpoint));
  };
  /* Params retrieves the fees module params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `evmos/fees/v1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
  /* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   registered for fee distribution */
  devFeeInfosPerDeployer = async (params: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/fees/v1/fees/${params.deployerAddress}`;
    return QueryDevFeeInfosPerDeployerResponse.fromSDKJSON(await this.req.get<QueryDevFeeInfosPerDeployerResponseSDKType>(endpoint, options));
  };
}