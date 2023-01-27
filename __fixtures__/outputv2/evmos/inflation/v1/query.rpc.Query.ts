import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  static Period(request: QueryPeriodRequest, initRequest?: fm.InitReq): Promise<QueryPeriodResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/period?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static EpochMintProvision(request: QueryEpochMintProvisionRequest, initRequest?: fm.InitReq): Promise<QueryEpochMintProvisionResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/epoch_mint_provision?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static SkippedEpochs(request: QuerySkippedEpochsRequest, initRequest?: fm.InitReq): Promise<QuerySkippedEpochsResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/skipped_epochs?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static CirculatingSupply(request: QueryCirculatingSupplyRequest, initRequest?: fm.InitReq): Promise<QueryCirculatingSupplyResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/circulating_supply?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static InflationRate(request: QueryInflationRateRequest, initRequest?: fm.InitReq): Promise<QueryInflationRateResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/inflation_rate?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}