import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
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
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* DenomAuthorityMetadata */
  async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
    return await this.request<QueryDenomAuthorityMetadataResponse>(endpoint);
  }

  /* DenomsFromCreator */
  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
    return await this.request<QueryDenomsFromCreatorResponse>(endpoint);
  }

}