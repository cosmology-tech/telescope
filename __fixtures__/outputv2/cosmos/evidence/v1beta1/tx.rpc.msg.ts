import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";

/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  submitEvidence(request: DeepPartial<MsgSubmitEvidence>, metadata?: grpc.Metadata): Promise<MsgSubmitEvidenceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }

  submitEvidence(request: DeepPartial<MsgSubmitEvidence>, metadata?: grpc.Metadata): Promise<MsgSubmitEvidenceResponse> {
    return this.rpc.unary(MsgSubmitEvidenceDesc, MsgSubmitEvidence.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.evidence.v1beta1.Msg"
};
export const MsgSubmitEvidenceDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitEvidence",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSubmitEvidence.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSubmitEvidenceResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined);
}