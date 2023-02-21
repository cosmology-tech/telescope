import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  evidence(request: DeepPartial<QueryEvidenceRequest>, metadata?: grpc.Metadata): Promise<QueryEvidenceResponse>;

  /** AllEvidence queries all evidence. */
  allEvidence(request?: DeepPartial<QueryAllEvidenceRequest>, metadata?: grpc.Metadata): Promise<QueryAllEvidenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }

  evidence(request: DeepPartial<QueryEvidenceRequest>, metadata?: grpc.Metadata): Promise<QueryEvidenceResponse> {
    return this.rpc.unary(QueryEvidenceDesc, QueryEvidenceRequest.fromPartial(request), metadata);
  }

  allEvidence(request: DeepPartial<QueryAllEvidenceRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllEvidenceResponse> {
    return this.rpc.unary(QueryAllEvidenceDesc, QueryAllEvidenceRequest.fromPartial(request), metadata);
  }

}