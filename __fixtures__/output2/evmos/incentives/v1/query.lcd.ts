import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }
  /* Incentives retrieves registered incentives */


  async incentives(params: QueryIncentivesRequest = {
    pagination: undefined
  }): Promise<QueryIncentivesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/incentives/v1/incentives`;
    return await this.req.get<QueryIncentivesResponse>(endpoint, options);
  }
  /* Incentive retrieves a registered incentive */


  async incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const endpoint = `evmos/incentives/v1/incentives/${params.contract}`;
    return await this.req.get<QueryIncentiveResponse>(endpoint);
  }
  /* GasMeters retrieves active gas meters for a given contract */


  async gasMeters(params: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}`;
    return await this.req.get<QueryGasMetersResponse>(endpoint, options);
  }
  /* GasMeter Retrieves a active gas meter */


  async gasMeter(params: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}/${params.participant}`;
    return await this.req.get<QueryGasMeterResponse>(endpoint);
  }
  /* AllocationMeters retrieves active allocation meters for a given
   denomination */


  async allocationMeters(params: QueryAllocationMetersRequest = {
    pagination: undefined
  }): Promise<QueryAllocationMetersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/incentives/v1/allocation_meters`;
    return await this.req.get<QueryAllocationMetersResponse>(endpoint, options);
  }
  /* AllocationMeter Retrieves a active gas meter */


  async allocationMeter(params: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
    const endpoint = `evmos/incentives/v1/allocation_meters/${params.denom}`;
    return await this.req.get<QueryAllocationMeterResponse>(endpoint);
  }
  /* Params retrieves the incentives module params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/incentives/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }

}