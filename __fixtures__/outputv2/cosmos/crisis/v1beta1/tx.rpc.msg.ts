import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";

/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  verifyInvariant(request: DeepPartial<MsgVerifyInvariant>, metadata?: grpc.Metadata): Promise<MsgVerifyInvariantResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
  }

  verifyInvariant(request: DeepPartial<MsgVerifyInvariant>, metadata?: grpc.Metadata): Promise<MsgVerifyInvariantResponse> {
    return this.rpc.unary(MsgVerifyInvariantDesc, MsgVerifyInvariant.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.crisis.v1beta1.Msg"
};
export const MsgVerifyInvariantDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyInvariant",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgVerifyInvariant.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgVerifyInvariantResponse.decode(data),

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