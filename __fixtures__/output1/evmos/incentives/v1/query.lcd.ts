import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, GasMeter } from "./incentives";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Incentives retrieves registered incentives */
  async incentives(params: QueryIncentivesRequest): Promise<QueryIncentivesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/incentives/v1/incentives/`;
    return await this.request(endpoint, options);
  }

  /* Incentive retrieves a registered incentive */
  async incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const endpoint = `evmos/incentives/v1/incentives/${params.contract}`;
    return await this.request(endpoint);
  }

  /* GasMeters retrieves active gas meters for a given contract */
  async gasMeters(params: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}`;
    return await this.request(endpoint, options);
  }

  /* GasMeter Retrieves a active gas meter */
  async gasMeter(params: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}/${params.participant}`;
    return await this.request(endpoint);
  }

  /* AllocationMeters retrieves active allocation meters for a given
  denomination */
  async allocationMeters(params: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `evmos/incentives/v1/allocation_meters/`;
    return await this.request(endpoint, options);
  }

  /* AllocationMeter Retrieves a active gas meter */
  async allocationMeter(params: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
    const endpoint = `evmos/incentives/v1/allocation_meters/${params.denom}`;
    return await this.request(endpoint);
  }

  /* Params retrieves the incentives module params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `evmos/incentives/v1/params/`;
    return await this.request(endpoint);
  }

}