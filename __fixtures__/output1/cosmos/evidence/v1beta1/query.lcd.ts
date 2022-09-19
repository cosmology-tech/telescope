import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
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

  /* Evidence queries evidence based on evidence hash. */
  async evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> {
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidenceHash}`;
    return await this.get<QueryEvidenceResponseSDKType>(endpoint);
  }

  /* AllEvidence queries all evidence. */
  async allEvidence(params: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.get<QueryAllEvidenceResponseSDKType>(endpoint, options);
  }

}