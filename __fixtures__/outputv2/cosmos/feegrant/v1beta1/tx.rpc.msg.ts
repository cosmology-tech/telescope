import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";

/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;

  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }

  grantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse> {
    return this.rpc.unary(MsgGrantAllowance, MsgGrantAllowance.fromPartial(request), metadata);
  }

  revokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse> {
    return this.rpc.unary(MsgRevokeAllowance, MsgRevokeAllowance.fromPartial(request), metadata);
  }

}