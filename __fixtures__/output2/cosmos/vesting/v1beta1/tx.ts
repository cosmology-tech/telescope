//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { Long, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: Long;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: Long.ZERO,
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  encode(message: MsgCreateVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = (reader.int64() as Long);
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  },
  fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount {
    return {
      fromAddress: object.from_address,
      toAddress: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      endTime: Long.fromString(object.end_time),
      delayed: object.delayed
    };
  },
  toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.end_time = message.endTime ? message.endTime.toString() : undefined;
    obj.delayed = message.delayed;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccount): Uint8Array {
    return MsgCreateVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  encode(_: MsgCreateVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccountResponse): Uint8Array {
    return MsgCreateVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.encode(message).finish()
    };
  }
};
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
  }
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
  }
}