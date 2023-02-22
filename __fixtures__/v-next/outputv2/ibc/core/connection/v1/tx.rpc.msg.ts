import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";

/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  ConnectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse>;

  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  ConnectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse>;

  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  ConnectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse>;

  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  ConnectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connectionOpenInit = this.connectionOpenInit.bind(this);
    this.connectionOpenTry = this.connectionOpenTry.bind(this);
    this.connectionOpenAck = this.connectionOpenAck.bind(this);
    this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
  }

  connectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse> {
    return this.rpc.unary(MsgConnectionOpenInit, MsgConnectionOpenInit.fromPartial(request), metadata);
  }

  connectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse> {
    return this.rpc.unary(MsgConnectionOpenTry, MsgConnectionOpenTry.fromPartial(request), metadata);
  }

  connectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse> {
    return this.rpc.unary(MsgConnectionOpenAck, MsgConnectionOpenAck.fromPartial(request), metadata);
  }

  connectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse> {
    return this.rpc.unary(MsgConnectionOpenConfirm, MsgConnectionOpenConfirm.fromPartial(request), metadata);
  }

}