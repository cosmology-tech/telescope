import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";

/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }

  transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse> {
    return this.rpc.unary(MsgTransferDesc, MsgTransfer.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "ibc.applications.transfer.v1.Msg"
};
export const MsgTransferDesc: UnaryMethodDefinitionish = {
  methodName: "Transfer",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTransfer.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgTransferResponse.decode(data),

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