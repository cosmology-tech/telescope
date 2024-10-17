import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Incentives retrieves registered incentives */
  incentives = async (params: QueryIncentivesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryIncentivesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/incentives`;
    return QueryIncentivesResponse.fromSDKJSON(await this.req.get<QueryIncentivesResponseSDKType>(endpoint, options));
  };
  /* Incentive retrieves a registered incentive */
  incentive = async (params: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType> => {
    const endpoint = `evmos/incentives/v1/incentives/${params.contract}`;
    return QueryIncentiveResponse.fromSDKJSON(await this.req.get<QueryIncentiveResponseSDKType>(endpoint));
  };
  /* GasMeters retrieves active gas meters for a given contract */
  gasMeters = async (params: QueryGasMetersRequest): Promise<QueryGasMetersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}`;
    return QueryGasMetersResponse.fromSDKJSON(await this.req.get<QueryGasMetersResponseSDKType>(endpoint, options));
  };
  /* GasMeter Retrieves a active gas meter */
  gasMeter = async (params: QueryGasMeterRequest): Promise<QueryGasMeterResponseSDKType> => {
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}/${params.participant}`;
    return QueryGasMeterResponse.fromSDKJSON(await this.req.get<QueryGasMeterResponseSDKType>(endpoint));
  };
  /* AllocationMeters retrieves active allocation meters for a given
   denomination */
  allocationMeters = async (params: QueryAllocationMetersRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllocationMetersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/allocation_meters`;
    return QueryAllocationMetersResponse.fromSDKJSON(await this.req.get<QueryAllocationMetersResponseSDKType>(endpoint, options));
  };
  /* AllocationMeter Retrieves a active gas meter */
  allocationMeter = async (params: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponseSDKType> => {
    const endpoint = `evmos/incentives/v1/allocation_meters/${params.denom}`;
    return QueryAllocationMeterResponse.fromSDKJSON(await this.req.get<QueryAllocationMeterResponseSDKType>(endpoint));
  };
  /* Params retrieves the incentives module params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `evmos/incentives/v1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
}