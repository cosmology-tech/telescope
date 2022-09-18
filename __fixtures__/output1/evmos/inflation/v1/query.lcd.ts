import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
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

  /* Period retrieves current period. */
  async period(_params: QueryPeriodRequest = {}): Promise<QueryPeriodResponse> {
    const endpoint = `evmos/inflation/v1/period`;
    return await this.get<QueryPeriodResponse>(endpoint);
  }

  /* EpochMintProvision retrieves current minting epoch provision value. */
  async epochMintProvision(_params: QueryEpochMintProvisionRequest = {}): Promise<QueryEpochMintProvisionResponse> {
    const endpoint = `evmos/inflation/v1/epoch_mint_provision`;
    return await this.get<QueryEpochMintProvisionResponse>(endpoint);
  }

  /* SkippedEpochs retrieves the total number of skipped epochs. */
  async skippedEpochs(_params: QuerySkippedEpochsRequest = {}): Promise<QuerySkippedEpochsResponse> {
    const endpoint = `evmos/inflation/v1/skipped_epochs`;
    return await this.get<QuerySkippedEpochsResponse>(endpoint);
  }

  /* CirculatingSupply retrieves the total number of tokens that are in
  circulation (i.e. excluding unvested tokens). */
  async circulatingSupply(_params: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponse> {
    const endpoint = `evmos/inflation/v1/circulating_supply`;
    return await this.get<QueryCirculatingSupplyResponse>(endpoint);
  }

  /* InflationRate retrieves the inflation rate of the current period. */
  async inflationRate(_params: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponse> {
    const endpoint = `evmos/inflation/v1/inflation_rate`;
    return await this.get<QueryInflationRateResponse>(endpoint);
  }

  /* Params retrieves the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `evmos/inflation/v1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

}