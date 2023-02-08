import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  static Incentives(request: QueryIncentivesRequest, initRequest?: fm.InitReq): Promise<QueryIncentivesResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/incentives?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Incentive(request: QueryIncentiveRequest, initRequest?: fm.InitReq): Promise<QueryIncentiveResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/incentives/${request["contract"]}?${fm.renderURLSearchParams({ ...request
    }, ["contract"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GasMeters(request: QueryGasMetersRequest, initRequest?: fm.InitReq): Promise<QueryGasMetersResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/gas_meters/${request["contract"]}?${fm.renderURLSearchParams({ ...request
    }, ["contract"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GasMeter(request: QueryGasMeterRequest, initRequest?: fm.InitReq): Promise<QueryGasMeterResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/gas_meters/${request["contract"]}/{participant}?${fm.renderURLSearchParams({ ...request
    }, ["contract"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AllocationMeters(request: QueryAllocationMetersRequest, initRequest?: fm.InitReq): Promise<QueryAllocationMetersResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/allocation_meters?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AllocationMeter(request: QueryAllocationMeterRequest, initRequest?: fm.InitReq): Promise<QueryAllocationMeterResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/allocation_meters/${request["denom"]}?${fm.renderURLSearchParams({ ...request
    }, ["denom"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/incentives/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}