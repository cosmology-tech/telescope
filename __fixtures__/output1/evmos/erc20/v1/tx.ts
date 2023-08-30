import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.erc20.v1";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin: Coin;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender: string;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinSDKType {
  coin: CoinSDKType;
  receiver: string;
  sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseSDKType {}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered in a token pair */
  contractAddress: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20SDKType {
  contract_address: string;
  amount: string;
  receiver: string;
  sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseSDKType {}
function createBaseMsgConvertCoin(): MsgConvertCoin {
  return {
    coin: Coin.fromPartial({}),
    receiver: "",
    sender: ""
  };
}
export const MsgConvertCoin = {
  encode(message: MsgConvertCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertCoin {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertCoinSDKType): MsgConvertCoin {
    return {
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  toSDK(message: MsgConvertCoin): MsgConvertCoinSDKType {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  }
};
function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}
export const MsgConvertCoinResponse = {
  encode(_: MsgConvertCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
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
  fromJSON(_: any): MsgConvertCoinResponse {
    return {};
  },
  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  fromSDK(_: MsgConvertCoinResponseSDKType): MsgConvertCoinResponse {
    return {};
  },
  toSDK(_: MsgConvertCoinResponse): MsgConvertCoinResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return {
    contractAddress: "",
    amount: "",
    receiver: "",
    sender: ""
  };
}
export const MsgConvertERC20 = {
  encode(message: MsgConvertERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertERC20 {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertERC20SDKType): MsgConvertERC20 {
    return {
      contractAddress: object?.contract_address,
      amount: object?.amount,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  toSDK(message: MsgConvertERC20): MsgConvertERC20SDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.amount = message.amount;
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  }
};
function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}
export const MsgConvertERC20Response = {
  encode(_: MsgConvertERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
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
  fromJSON(_: any): MsgConvertERC20Response {
    return {};
  },
  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  fromSDK(_: MsgConvertERC20ResponseSDKType): MsgConvertERC20Response {
    return {};
  },
  toSDK(_: MsgConvertERC20Response): MsgConvertERC20ResponseSDKType {
    const obj: any = {};
    return obj;
  }
};