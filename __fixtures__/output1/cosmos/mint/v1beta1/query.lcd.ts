import { Params, ParamsSDKType } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
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

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* Inflation returns the current minting inflation value. */
  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponse> {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.get<QueryInflationResponse>(endpoint);
  }

  /* AnnualProvisions current minting annual provisions value. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.get<QueryAnnualProvisionsResponse>(endpoint);
  }

}