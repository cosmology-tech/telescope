import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface MsgJoinPool {
  sender: string;
  poolId: Long;
  shareOutAmount: string;
  tokenInMaxs: Coin[];
}

function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    sender: "",
    poolId: Long.UZERO,
    shareOutAmount: "",
    tokenInMaxs: []
  };
}

export const MsgJoinPool = {
  encode(message: MsgJoinPool, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.shareOutAmount !== "") {
      writer.uint32(26).string(message.shareOutAmount);
    }

    for (const v of message.tokenInMaxs) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.shareOutAmount = reader.string();
          break;

        case 4:
          message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgJoinPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      shareOutAmount: isSet(object.shareOutAmount) ? String(object.shareOutAmount) : "",
      tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);

    if (message.tokenInMaxs) {
      obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenInMaxs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPool>, I>>(object: I): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgJoinPoolResponse {}

function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {};
}

export const MsgJoinPoolResponse = {
  encode(message: MsgJoinPoolResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();

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

  fromJSON(object: any): MsgJoinPoolResponse {
    return {};
  },

  toJSON(message: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPoolResponse>, I>>(object: I): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    return message;
  }

};
export interface MsgExitPool {
  sender: string;
  poolId: Long;
  shareInAmount: string;
  tokenOutMins: Coin[];
}

function createBaseMsgExitPool(): MsgExitPool {
  return {
    sender: "",
    poolId: Long.UZERO,
    shareInAmount: "",
    tokenOutMins: []
  };
}

export const MsgExitPool = {
  encode(message: MsgExitPool, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.shareInAmount !== "") {
      writer.uint32(26).string(message.shareInAmount);
    }

    for (const v of message.tokenOutMins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.shareInAmount = reader.string();
          break;

        case 4:
          message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExitPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      shareInAmount: isSet(object.shareInAmount) ? String(object.shareInAmount) : "",
      tokenOutMins: Array.isArray(object?.tokenOutMins) ? object.tokenOutMins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);

    if (message.tokenOutMins) {
      obj.tokenOutMins = message.tokenOutMins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenOutMins = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPool>, I>>(object: I): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.shareInAmount = object.shareInAmount ?? "";
    message.tokenOutMins = object.tokenOutMins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgExitPoolResponse {}

function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return {};
}

export const MsgExitPoolResponse = {
  encode(message: MsgExitPoolResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();

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

  fromJSON(object: any): MsgExitPoolResponse {
    return {};
  },

  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPoolResponse>, I>>(object: I): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    return message;
  }

};
export interface SwapAmountInRoute {
  poolId: Long;
  tokenOutDenom: string;
}

function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: Long.UZERO,
    tokenOutDenom: ""
  };
}

export const SwapAmountInRoute = {
  encode(message: SwapAmountInRoute, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenOutDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SwapAmountInRoute {
    return {
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },

  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapAmountInRoute>, I>>(object: I): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  }

};
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}

function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: undefined,
    tokenOutMinAmount: ""
  };
}

export const MsgSwapExactAmountIn = {
  encode(message: MsgSwapExactAmountIn, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutMinAmount: isSet(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }

    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountIn>, I>>(object: I): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  }

};
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}

function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}

export const MsgSwapExactAmountInResponse = {
  encode(message: MsgSwapExactAmountInResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountInResponse>, I>>(object: I): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  }

};
export interface SwapAmountOutRoute {
  poolId: Long;
  tokenInDenom: string;
}

function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: Long.UZERO,
    tokenInDenom: ""
  };
}

export const SwapAmountOutRoute = {
  encode(message: SwapAmountOutRoute, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenInDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SwapAmountOutRoute {
    return {
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : ""
    };
  },

  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapAmountOutRoute>, I>>(object: I): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  }

};
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut: Coin;
}

function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: undefined
  };
}

export const MsgSwapExactAmountOut = {
  encode(message: MsgSwapExactAmountOut, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }

    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenInMaxAmount = reader.string();
          break;

        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenInMaxAmount: isSet(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : "",
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined
    };
  },

  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }

    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountOut>, I>>(object: I): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  }

};
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}

function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}

export const MsgSwapExactAmountOutResponse = {
  encode(message: MsgSwapExactAmountOutResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountOutResponse>, I>>(object: I): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  }

};
export interface MsgJoinSwapExternAmountIn {
  sender: string;
  poolId: Long;
  tokenIn: Coin;
  shareOutMinAmount: string;
}

function createBaseMsgJoinSwapExternAmountIn(): MsgJoinSwapExternAmountIn {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenIn: undefined,
    shareOutMinAmount: ""
  };
}

export const MsgJoinSwapExternAmountIn = {
  encode(message: MsgJoinSwapExternAmountIn, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }

    if (message.shareOutMinAmount !== "") {
      writer.uint32(34).string(message.shareOutMinAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shareOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgJoinSwapExternAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      shareOutMinAmount: isSet(object.shareOutMinAmount) ? String(object.shareOutMinAmount) : ""
    };
  },

  toJSON(message: MsgJoinSwapExternAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.shareOutMinAmount !== undefined && (obj.shareOutMinAmount = message.shareOutMinAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinSwapExternAmountIn>, I>>(object: I): MsgJoinSwapExternAmountIn {
    const message = createBaseMsgJoinSwapExternAmountIn();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.shareOutMinAmount = object.shareOutMinAmount ?? "";
    return message;
  }

};
export interface MsgJoinSwapExternAmountInResponse {
  shareOutAmount: string;
}

function createBaseMsgJoinSwapExternAmountInResponse(): MsgJoinSwapExternAmountInResponse {
  return {
    shareOutAmount: ""
  };
}

export const MsgJoinSwapExternAmountInResponse = {
  encode(message: MsgJoinSwapExternAmountInResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountInResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgJoinSwapExternAmountInResponse {
    return {
      shareOutAmount: isSet(object.shareOutAmount) ? String(object.shareOutAmount) : ""
    };
  },

  toJSON(message: MsgJoinSwapExternAmountInResponse): unknown {
    const obj: any = {};
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinSwapExternAmountInResponse>, I>>(object: I): MsgJoinSwapExternAmountInResponse {
    const message = createBaseMsgJoinSwapExternAmountInResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    return message;
  }

};
export interface MsgJoinSwapShareAmountOut {
  sender: string;
  poolId: Long;
  tokenInDenom: string;
  shareOutAmount: string;
  tokenInMaxAmount: string;
}

function createBaseMsgJoinSwapShareAmountOut(): MsgJoinSwapShareAmountOut {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenInDenom: "",
    shareOutAmount: "",
    tokenInMaxAmount: ""
  };
}

export const MsgJoinSwapShareAmountOut = {
  encode(message: MsgJoinSwapShareAmountOut, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }

    if (message.shareOutAmount !== "") {
      writer.uint32(34).string(message.shareOutAmount);
    }

    if (message.tokenInMaxAmount !== "") {
      writer.uint32(42).string(message.tokenInMaxAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenInDenom = reader.string();
          break;

        case 4:
          message.shareOutAmount = reader.string();
          break;

        case 5:
          message.tokenInMaxAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgJoinSwapShareAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      shareOutAmount: isSet(object.shareOutAmount) ? String(object.shareOutAmount) : "",
      tokenInMaxAmount: isSet(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : ""
    };
  },

  toJSON(message: MsgJoinSwapShareAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinSwapShareAmountOut>, I>>(object: I): MsgJoinSwapShareAmountOut {
    const message = createBaseMsgJoinSwapShareAmountOut();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    return message;
  }

};
export interface MsgJoinSwapShareAmountOutResponse {
  tokenInAmount: string;
}

function createBaseMsgJoinSwapShareAmountOutResponse(): MsgJoinSwapShareAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}

export const MsgJoinSwapShareAmountOutResponse = {
  encode(message: MsgJoinSwapShareAmountOutResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOutResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgJoinSwapShareAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },

  toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinSwapShareAmountOutResponse>, I>>(object: I): MsgJoinSwapShareAmountOutResponse {
    const message = createBaseMsgJoinSwapShareAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  }

};
export interface MsgExitSwapShareAmountIn {
  sender: string;
  poolId: Long;
  tokenOutDenom: string;
  shareInAmount: string;
  tokenOutMinAmount: string;
}

function createBaseMsgExitSwapShareAmountIn(): MsgExitSwapShareAmountIn {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenOutDenom: "",
    shareInAmount: "",
    tokenOutMinAmount: ""
  };
}

export const MsgExitSwapShareAmountIn = {
  encode(message: MsgExitSwapShareAmountIn, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }

    if (message.shareInAmount !== "") {
      writer.uint32(34).string(message.shareInAmount);
    }

    if (message.tokenOutMinAmount !== "") {
      writer.uint32(42).string(message.tokenOutMinAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenOutDenom = reader.string();
          break;

        case 4:
          message.shareInAmount = reader.string();
          break;

        case 5:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExitSwapShareAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
      shareInAmount: isSet(object.shareInAmount) ? String(object.shareInAmount) : "",
      tokenOutMinAmount: isSet(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : ""
    };
  },

  toJSON(message: MsgExitSwapShareAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitSwapShareAmountIn>, I>>(object: I): MsgExitSwapShareAmountIn {
    const message = createBaseMsgExitSwapShareAmountIn();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.shareInAmount = object.shareInAmount ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  }

};
export interface MsgExitSwapShareAmountInResponse {
  tokenOutAmount: string;
}

function createBaseMsgExitSwapShareAmountInResponse(): MsgExitSwapShareAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}

export const MsgExitSwapShareAmountInResponse = {
  encode(message: MsgExitSwapShareAmountInResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountInResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExitSwapShareAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },

  toJSON(message: MsgExitSwapShareAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitSwapShareAmountInResponse>, I>>(object: I): MsgExitSwapShareAmountInResponse {
    const message = createBaseMsgExitSwapShareAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  }

};
export interface MsgExitSwapExternAmountOut {
  sender: string;
  poolId: Long;
  tokenOut: Coin;
  shareInMaxAmount: string;
}

function createBaseMsgExitSwapExternAmountOut(): MsgExitSwapExternAmountOut {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenOut: undefined,
    shareInMaxAmount: ""
  };
}

export const MsgExitSwapExternAmountOut = {
  encode(message: MsgExitSwapExternAmountOut, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
    }

    if (message.shareInMaxAmount !== "") {
      writer.uint32(34).string(message.shareInMaxAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shareInMaxAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExitSwapExternAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      shareInMaxAmount: isSet(object.shareInMaxAmount) ? String(object.shareInMaxAmount) : ""
    };
  },

  toJSON(message: MsgExitSwapExternAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.shareInMaxAmount !== undefined && (obj.shareInMaxAmount = message.shareInMaxAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitSwapExternAmountOut>, I>>(object: I): MsgExitSwapExternAmountOut {
    const message = createBaseMsgExitSwapExternAmountOut();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.shareInMaxAmount = object.shareInMaxAmount ?? "";
    return message;
  }

};
export interface MsgExitSwapExternAmountOutResponse {
  shareInAmount: string;
}

function createBaseMsgExitSwapExternAmountOutResponse(): MsgExitSwapExternAmountOutResponse {
  return {
    shareInAmount: ""
  };
}

export const MsgExitSwapExternAmountOutResponse = {
  encode(message: MsgExitSwapExternAmountOutResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.shareInAmount !== "") {
      writer.uint32(10).string(message.shareInAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOutResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shareInAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExitSwapExternAmountOutResponse {
    return {
      shareInAmount: isSet(object.shareInAmount) ? String(object.shareInAmount) : ""
    };
  },

  toJSON(message: MsgExitSwapExternAmountOutResponse): unknown {
    const obj: any = {};
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitSwapExternAmountOutResponse>, I>>(object: I): MsgExitSwapExternAmountOutResponse {
    const message = createBaseMsgExitSwapExternAmountOutResponse();
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  }

};
export interface AminoMsgJoinPool extends AminoMsg {
  type: "osmosis/gamm/join-pool";
  value: {
    sender: string;
    pool_id: string;
    share_out_amount: string;
    token_in_maxs: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExitPool extends AminoMsg {
  type: "osmosis/gamm/exit-pool";
  value: {
    sender: string;
    pool_id: string;
    share_in_amount: string;
    token_out_mins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgSwapExactAmountIn extends AminoMsg {
  type: "osmosis/gamm/swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_out_denom: string;
    }[];
    token_in: {
      denom: string;
      amount: string;
    };
    token_out_min_amount: string;
  };
}
export interface AminoMsgSwapExactAmountOut extends AminoMsg {
  type: "osmosis/gamm/swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_in_denom: string;
    }[];
    token_in_max_amount: string;
    token_out: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgJoinSwapExternAmountIn extends AminoMsg {
  type: "osmosis/gamm/join-swap-extern-amount-in";
  value: {
    sender: string;
    pool_id: string;
    token_in: {
      denom: string;
      amount: string;
    };
    share_out_min_amount: string;
  };
}
export interface AminoMsgJoinSwapShareAmountOut extends AminoMsg {
  type: "osmosis/gamm/join-swap-share-amount-out";
  value: {
    sender: string;
    pool_id: string;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
  };
}
export interface AminoMsgExitSwapExternAmountOut extends AminoMsg {
  type: "osmosis/gamm/exit-swap-extern-amount-out";
  value: {
    sender: string;
    pool_id: string;
    token_out: {
      denom: string;
      amount: string;
    };
    share_in_max_amount: string;
  };
}
export interface AminoMsgExitSwapShareAmountIn extends AminoMsg {
  type: "osmosis/gamm/exit-swap-share-amount-in";
  value: {
    sender: string;
    pool_id: string;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
  };
}
export const AminoConverter = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": {
    aminoType: "osmosis/gamm/join-pool",
    toAmino: ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    }: MsgJoinPool): AminoMsgJoinPool["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        share_out_amount: shareOutAmount,
        token_in_maxs: tokenInMaxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      share_out_amount,
      token_in_maxs
    }: AminoMsgJoinPool["value"]): MsgJoinPool => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        shareOutAmount: share_out_amount,
        tokenInMaxs: token_in_maxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitPool": {
    aminoType: "osmosis/gamm/exit-pool",
    toAmino: ({
      sender,
      poolId,
      shareInAmount,
      tokenOutMins
    }: MsgExitPool): AminoMsgExitPool["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        share_in_amount: shareInAmount,
        token_out_mins: tokenOutMins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      share_in_amount,
      token_out_mins
    }: AminoMsgExitPool["value"]): MsgExitPool => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        shareInAmount: share_in_amount,
        tokenOutMins: token_out_mins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/gamm/swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): AminoMsgSwapExactAmountIn["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_out_denom: el0.tokenOutDenom
        })),
        token_in: {
          denom: tokenIn.denom,
          amount: tokenIn.amount
        },
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in,
      token_out_min_amount
    }: AminoMsgSwapExactAmountIn["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenOutDenom: el0.token_out_denom
        })),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/gamm/swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): AminoMsgSwapExactAmountOut["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_in_denom: el0.tokenInDenom
        })),
        token_in_max_amount: tokenInMaxAmount,
        token_out: {
          denom: tokenOut.denom,
          amount: tokenOut.amount
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_max_amount,
      token_out
    }: AminoMsgSwapExactAmountOut["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenInDenom: el0.token_in_denom
        })),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
    aminoType: "osmosis/gamm/join-swap-extern-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenIn,
      shareOutMinAmount
    }: MsgJoinSwapExternAmountIn): AminoMsgJoinSwapExternAmountIn["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        token_in: {
          denom: tokenIn.denom,
          amount: tokenIn.amount
        },
        share_out_min_amount: shareOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_in,
      share_out_min_amount
    }: AminoMsgJoinSwapExternAmountIn["value"]): MsgJoinSwapExternAmountIn => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        shareOutMinAmount: share_out_min_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
    aminoType: "osmosis/gamm/join-swap-share-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenInDenom,
      shareOutAmount,
      tokenInMaxAmount
    }: MsgJoinSwapShareAmountOut): AminoMsgJoinSwapShareAmountOut["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        token_in_denom: tokenInDenom,
        share_out_amount: shareOutAmount,
        token_in_max_amount: tokenInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_in_denom,
      share_out_amount,
      token_in_max_amount
    }: AminoMsgJoinSwapShareAmountOut["value"]): MsgJoinSwapShareAmountOut => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        tokenInDenom: token_in_denom,
        shareOutAmount: share_out_amount,
        tokenInMaxAmount: token_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
    aminoType: "osmosis/gamm/exit-swap-extern-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenOut,
      shareInMaxAmount
    }: MsgExitSwapExternAmountOut): AminoMsgExitSwapExternAmountOut["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        token_out: {
          denom: tokenOut.denom,
          amount: tokenOut.amount
        },
        share_in_max_amount: shareInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_out,
      share_in_max_amount
    }: AminoMsgExitSwapExternAmountOut["value"]): MsgExitSwapExternAmountOut => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        },
        shareInMaxAmount: share_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
    aminoType: "osmosis/gamm/exit-swap-share-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenOutDenom,
      shareInAmount,
      tokenOutMinAmount
    }: MsgExitSwapShareAmountIn): AminoMsgExitSwapShareAmountIn["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        token_out_denom: tokenOutDenom,
        share_in_amount: shareInAmount,
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_out_denom,
      share_in_amount,
      token_out_min_amount
    }: AminoMsgExitSwapShareAmountIn["value"]): MsgExitSwapShareAmountIn => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        tokenOutDenom: token_out_denom,
        shareInAmount: share_in_amount,
        tokenOutMinAmount: token_out_min_amount
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.gamm.v1beta1.MsgJoinPool", MsgJoinPool], ["/osmosis.gamm.v1beta1.MsgExitPool", MsgExitPool], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn", MsgJoinSwapExternAmountIn], ["/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut", MsgJoinSwapShareAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut", MsgExitSwapExternAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn", MsgExitSwapShareAmountIn]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    joinPool(value: MsgJoinPool) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: MsgJoinPool.encode(value).finish()
      };
    },

    exitPool(value: MsgExitPool) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    },

    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },

    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },

    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.encode(value).finish()
      };
    },

    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.encode(value).finish()
      };
    },

    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.encode(value).finish()
      };
    },

    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value
      };
    },

    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value
      };
    },

    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value
      };
    },

    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value
      };
    },

    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value
      };
    },

    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value
      };
    },

    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value
      };
    },

    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value
      };
    }

  },
  toJSON: {
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: MsgJoinPool.toJSON(value)
      };
    },

    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: MsgExitPool.toJSON(value)
      };
    },

    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.toJSON(value)
      };
    },

    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.toJSON(value)
      };
    },

    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.toJSON(value)
      };
    },

    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.toJSON(value)
      };
    },

    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.toJSON(value)
      };
    },

    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.toJSON(value)
      };
    }

  },
  fromJSON: {
    joinPool(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: MsgJoinPool.fromJSON(value)
      };
    },

    exitPool(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: MsgExitPool.fromJSON(value)
      };
    },

    swapExactAmountIn(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromJSON(value)
      };
    },

    swapExactAmountOut(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromJSON(value)
      };
    },

    joinSwapExternAmountIn(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.fromJSON(value)
      };
    },

    joinSwapShareAmountOut(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.fromJSON(value)
      };
    },

    exitSwapExternAmountOut(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.fromJSON(value)
      };
    },

    exitSwapShareAmountIn(value: any) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.fromJSON(value)
      };
    }

  },
  fromPartial: {
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: MsgJoinPool.fromPartial(value)
      };
    },

    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    },

    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },

    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },

    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.fromPartial(value)
      };
    },

    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.fromPartial(value)
      };
    },

    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.fromPartial(value)
      };
    },

    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.fromPartial(value)
      };
    }

  }
};