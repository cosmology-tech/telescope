//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  validatorAddr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}
function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}
export const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnjail {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailAmino): MsgUnjail {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: MsgUnjail): MsgUnjailAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail {
    return MsgUnjail.decode(message.value);
  },
  toProto(message: MsgUnjail): Uint8Array {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}
export const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUnjailResponse {
    return {};
  },
  toJSON(_: MsgUnjailResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse {
    return {};
  },
  toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto(message: MsgUnjailResponse): Uint8Array {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};
/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Unjail = this.Unjail.bind(this);
  }
  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse> {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
    return promise.then(data => MsgUnjailResponse.decode(new _m0.Reader(data)));
  }
}