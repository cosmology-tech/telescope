import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo } from "./fees";
import { Params } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* DevFeeInfos retrieves all registered contracts for fee distribution */
  async devFeeInfos(params: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/fees/v1/fees`;
    return await this.request<QueryDevFeeInfosResponse>(endpoint, options);
  }

  /* DevFeeInfo retrieves a registered contract for fee distribution */
  async devFeeInfo(params: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.contractAddress !== "undefined") {
      options.params.contract_address = params.contractAddress;
    }

    const endpoint = `evmos/fees/v1/fees/${params.contract_address}`;
    return await this.request<QueryDevFeeInfoResponse>(endpoint, options);
  }

  /* Params retrieves the fees module params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `evmos/fees/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
  registered for fee distribution */
  async devFeeInfosPerDeployer(params: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.deployerAddress !== "undefined") {
      options.params.deployer_address = params.deployerAddress;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/fees/v1/fees/${params.deployer_address}`;
    return await this.request<QueryDevFeeInfosPerDeployerResponse>(endpoint, options);
  }

}