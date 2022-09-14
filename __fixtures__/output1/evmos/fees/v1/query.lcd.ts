import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo } from "./fees";
import { Params } from "./genesis";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
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

  /* DevFeeInfos retrieves all registered contracts for fee distribution */
  async devFeeInfos(params: QueryDevFeeInfosRequest = {
    pagination: undefined
  }): Promise<QueryDevFeeInfosResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/fees/v1/fees`;
    return await this.get<QueryDevFeeInfosResponse>(endpoint, options);
  }

  /* DevFeeInfo retrieves a registered contract for fee distribution */
  async devFeeInfo(params: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
    const endpoint = `evmos/fees/v1/fees/${params.contractAddress}`;
    return await this.get<QueryDevFeeInfoResponse>(endpoint);
  }

  /* Params retrieves the fees module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/fees/v1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
  registered for fee distribution */
  async devFeeInfosPerDeployer(params: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/fees/v1/fees/${params.deployerAddress}`;
    return await this.get<QueryDevFeeInfosPerDeployerResponse>(endpoint, options);
  }

}