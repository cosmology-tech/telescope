import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.bank.v1beta1";

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {}

function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgSendSDKType): MsgSend {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): MsgSendSDKType {
    return {
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: MsgSend): MsgSendSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();

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

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },

  fromSDK(_: MsgSendResponseSDKType): MsgSendResponse {
    return {};
  },

  fromSDKJSON(_: any): MsgSendResponseSDKType {
    return {};
  },

  toSDK(_: MsgSendResponse): MsgSendResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: []
  };
}

export const MsgMultiSend = {
  encode(message: MsgMultiSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;

        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMultiSend {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgMultiSend): unknown {
    const obj: any = {};

    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgMultiSendSDKType): MsgMultiSend {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromSDK(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): MsgMultiSendSDKType {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromSDKJSON(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: MsgMultiSend): MsgMultiSendSDKType {
    const obj: any = {};

    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toSDK(e) : undefined);
    } else {
      obj.inputs = [];
    }

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toSDK(e) : undefined);
    } else {
      obj.outputs = [];
    }

    return obj;
  }

};

function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}

export const MsgMultiSendResponse = {
  encode(_: MsgMultiSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();

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

  fromJSON(_: any): MsgMultiSendResponse {
    return {};
  },

  toJSON(_: MsgMultiSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },

  fromSDK(_: MsgMultiSendResponseSDKType): MsgMultiSendResponse {
    return {};
  },

  fromSDKJSON(_: any): MsgMultiSendResponseSDKType {
    return {};
  },

  toSDK(_: MsgMultiSendResponse): MsgMultiSendResponseSDKType {
    const obj: any = {};
    return obj;
  }

};