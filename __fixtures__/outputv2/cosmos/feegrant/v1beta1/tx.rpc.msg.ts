import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";

/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  grantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;

  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  revokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }

  grantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse> {
    return this.rpc.unary(MsgGrantAllowanceDesc, MsgGrantAllowance.fromPartial(request), metadata);
  }

  revokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse> {
    return this.rpc.unary(MsgRevokeAllowanceDesc, MsgRevokeAllowance.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.feegrant.v1beta1.Msg"
};
export const MsgGrantAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "GrantAllowance",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgGrantAllowance.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgGrantAllowanceResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgRevokeAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "RevokeAllowance",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRevokeAllowance.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgRevokeAllowanceResponse.decode(data),

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