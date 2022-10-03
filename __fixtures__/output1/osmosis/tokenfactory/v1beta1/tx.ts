import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";

/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 *  a new denom. It requires a sender address and a subdenomination.
 *  The (sender_address, sub_denomination) pair must be unique and cannot be
 *  re-used. The resulting denom created is `factory/{creator
 *  address}/{subdenom}`. The resultant denom's admin is originally set to be the
 *  creator, but this can be changed later. The token denom does not indicate the
 *  current admin.
 */
export interface MsgCreateDenom {
  sender: string;

  /** subdenom can be up to 44 "alphanumeric" characters long. */
  subdenom: string;
}

/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 *  a new denom. It requires a sender address and a subdenomination.
 *  The (sender_address, sub_denomination) pair must be unique and cannot be
 *  re-used. The resulting denom created is `factory/{creator
 *  address}/{subdenom}`. The resultant denom's admin is originally set to be the
 *  creator, but this can be changed later. The token denom does not indicate the
 *  current admin.
 */
export interface MsgCreateDenomSDKType {
  sender: string;

  /** subdenom can be up to 44 "alphanumeric" characters long. */
  subdenom: string;
}

/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 *  It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}

/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 *  It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
  new_token_denom: string;
}

/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 *  more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
  sender: string;
  amount: Coin;
}

/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 *  more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
  sender: string;
  amount: CoinSDKType;
}
export interface MsgMintResponse {}
export interface MsgMintResponseSDKType {}

/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 *  a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
  sender: string;
  amount: Coin;
}

/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 *  a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
  sender: string;
  amount: CoinSDKType;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}

/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 *  adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}

/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 *  adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
  sender: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminResponse {}
export interface MsgChangeAdminResponseSDKType {}

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    subdenom: ""
  };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subdenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subdenom: isSet(object.subdenom) ? String(object.subdenom) : ""
    };
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },

  fromSDK(object: MsgCreateDenomSDKType): MsgCreateDenom {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      subdenom: isSet(object.subdenom) ? object.subdenom : undefined
    };
  },

  toSDK(message: MsgCreateDenom): MsgCreateDenomSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  }

};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}

export const MsgCreateDenomResponse = {
  encode(message: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateDenomResponse {
    return {
      newTokenDenom: isSet(object.newTokenDenom) ? String(object.newTokenDenom) : ""
    };
  },

  toJSON(message: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    message.newTokenDenom !== undefined && (obj.newTokenDenom = message.newTokenDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },

  fromSDK(object: MsgCreateDenomResponseSDKType): MsgCreateDenomResponse {
    return {
      newTokenDenom: isSet(object.new_token_denom) ? object.new_token_denom : undefined
    };
  },

  toSDK(message: MsgCreateDenomResponse): MsgCreateDenomResponseSDKType {
    const obj: any = {};
    message.newTokenDenom !== undefined && (obj.new_token_denom = message.newTokenDenom);
    return obj;
  }

};

function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    amount: undefined
  };
}

export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgMintSDKType): MsgMint {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      amount: isSet(object.amount) ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgMint): MsgMintSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();

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

  fromJSON(_: any): MsgMintResponse {
    return {};
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },

  fromSDK(_: MsgMintResponseSDKType): MsgMintResponse {
    return {};
  },

  toSDK(_: MsgMintResponse): MsgMintResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    amount: undefined
  };
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgBurnSDKType): MsgBurn {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      amount: isSet(object.amount) ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgBurn): MsgBurnSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();

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

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },

  fromSDK(_: MsgBurnResponseSDKType): MsgBurnResponse {
    return {};
  },

  toSDK(_: MsgBurnResponse): MsgBurnResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}

export const MsgChangeAdmin = {
  encode(message: MsgChangeAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgChangeAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },

  fromSDK(object: MsgChangeAdminSDKType): MsgChangeAdmin {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      denom: isSet(object.denom) ? object.denom : undefined,
      newAdmin: isSet(object.newAdmin) ? object.newAdmin : undefined
    };
  },

  toSDK(message: MsgChangeAdmin): MsgChangeAdminSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  }

};

function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}

export const MsgChangeAdminResponse = {
  encode(_: MsgChangeAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();

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

  fromJSON(_: any): MsgChangeAdminResponse {
    return {};
  },

  toJSON(_: MsgChangeAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },

  fromSDK(_: MsgChangeAdminResponseSDKType): MsgChangeAdminResponse {
    return {};
  },

  toSDK(_: MsgChangeAdminResponse): MsgChangeAdminResponseSDKType {
    const obj: any = {};
    return obj;
  }

};