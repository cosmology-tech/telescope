import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";

/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  SubmitEvidence(request: DeepPartial<MsgSubmitEvidence>, metadata?: grpc.Metadata): Promise<MsgSubmitEvidenceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }

  submitEvidence(request: DeepPartial<MsgSubmitEvidence>, metadata?: grpc.Metadata): Promise<MsgSubmitEvidenceResponse> {
    return this.rpc.unary(MsgSubmitEvidence, MsgSubmitEvidence.fromPartial(request), metadata);
  }

}