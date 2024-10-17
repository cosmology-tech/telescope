import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@cosmology/lcd";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Period retrieves current period. */
  period = async (_params: QueryPeriodRequest = {}): Promise<QueryPeriodResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/period`;
    return QueryPeriodResponse.fromSDKJSON(await this.req.get<QueryPeriodResponseSDKType>(endpoint));
  };
  /* EpochMintProvision retrieves current minting epoch provision value. */
  epochMintProvision = async (_params: QueryEpochMintProvisionRequest = {}): Promise<QueryEpochMintProvisionResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/epoch_mint_provision`;
    return QueryEpochMintProvisionResponse.fromSDKJSON(await this.req.get<QueryEpochMintProvisionResponseSDKType>(endpoint));
  };
  /* SkippedEpochs retrieves the total number of skipped epochs. */
  skippedEpochs = async (_params: QuerySkippedEpochsRequest = {}): Promise<QuerySkippedEpochsResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/skipped_epochs`;
    return QuerySkippedEpochsResponse.fromSDKJSON(await this.req.get<QuerySkippedEpochsResponseSDKType>(endpoint));
  };
  /* CirculatingSupply retrieves the total number of tokens that are in
   circulation (i.e. excluding unvested tokens). */
  circulatingSupply = async (_params: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/circulating_supply`;
    return QueryCirculatingSupplyResponse.fromSDKJSON(await this.req.get<QueryCirculatingSupplyResponseSDKType>(endpoint));
  };
  /* InflationRate retrieves the inflation rate of the current period. */
  inflationRate = async (_params: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/inflation_rate`;
    return QueryInflationRateResponse.fromSDKJSON(await this.req.get<QueryInflationRateResponseSDKType>(endpoint));
  };
  /* Params retrieves the total set of minting parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `evmos/inflation/v1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  };
}