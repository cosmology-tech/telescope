import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.request(endpoint);
  }

  /* DenomTraces queries all denomination traces. */
  async denomTraces(params: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.request(endpoint, options);
  }

  /* Params queries all parameters of the ibc-transfer module. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.request(endpoint);
  }

}