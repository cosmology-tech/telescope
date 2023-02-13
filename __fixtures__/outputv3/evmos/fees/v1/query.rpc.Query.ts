import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
export class Query {
  /** DevFeeInfos retrieves all registered contracts for fee distribution */
  static DevFeeInfos(request: QueryDevFeeInfosRequest, initRequest?: fm.InitReq): Promise<QueryDevFeeInfosResponse> {
    return fm.fetchReq(`/evmos/fees/v1/fees?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** DevFeeInfo retrieves a registered contract for fee distribution */
  static DevFeeInfo(request: QueryDevFeeInfoRequest, initRequest?: fm.InitReq): Promise<QueryDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos/fees/v1/fees/${request["contract_address"]}?${fm.renderURLSearchParams({ ...request
    }, ["contract_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Params retrieves the fees module params */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/fees/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   * registered for fee distribution
   */
  static DevFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest, initRequest?: fm.InitReq): Promise<QueryDevFeeInfosPerDeployerResponse> {
    return fm.fetchReq(`/evmos/fees/v1/fees/${request["deployer_address"]}?${fm.renderURLSearchParams({ ...request
    }, ["deployer_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

}