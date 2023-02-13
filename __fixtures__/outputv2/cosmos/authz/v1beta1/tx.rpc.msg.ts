import { Grant, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";

/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  grant(request: DeepPartial<MsgGrant>, metadata?: grpc.Metadata): Promise<MsgGrantResponse>;

  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse>;

  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  revoke(request: DeepPartial<MsgRevoke>, metadata?: grpc.Metadata): Promise<MsgRevokeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
  }

  grant(request: DeepPartial<MsgGrant>, metadata?: grpc.Metadata): Promise<MsgGrantResponse> {
    return this.rpc.unary(MsgGrantDesc, MsgGrant.fromPartial(request), metadata);
  }

  exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse> {
    return this.rpc.unary(MsgExecDesc, MsgExec.fromPartial(request), metadata);
  }

  revoke(request: DeepPartial<MsgRevoke>, metadata?: grpc.Metadata): Promise<MsgRevokeResponse> {
    return this.rpc.unary(MsgRevokeDesc, MsgRevoke.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.authz.v1beta1.Msg"
};
export const MsgGrantDesc: UnaryMethodDefinitionish = {
  methodName: "Grant",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgGrant.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgGrantResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgExecDesc: UnaryMethodDefinitionish = {
  methodName: "Exec",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExec.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgExecResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgRevokeDesc: UnaryMethodDefinitionish = {
  methodName: "Revoke",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRevoke.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgRevokeResponse.decode(data),

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