import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";

/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;

  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
  }

  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse> {
    return this.rpc.unary(MsgSendDesc, MsgSend.fromPartial(request), metadata);
  }

  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse> {
    return this.rpc.unary(MsgMultiSendDesc, MsgMultiSend.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.bank.v1beta1.Msg"
};
export const MsgSendDesc: UnaryMethodDefinitionish = {
  methodName: "Send",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSend.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSendResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgMultiSendDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSend",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgMultiSend.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgMultiSendResponse.decode(data),

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