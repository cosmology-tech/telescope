import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}

function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: undefined
  };
}

export const MsgGrant = {
  encode(message: MsgGrant, writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrant {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  }

};
export interface MsgExecResponse {
  results: Uint8Array[];
}

function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}

export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};

    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(object: I): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  }

};
export interface MsgExec {
  grantee: string;
  msgs: Any[];
}

function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}

export const MsgExec = {
  encode(message: MsgExec, writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }

    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);

    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgGrantResponse {}

function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}

export const MsgGrantResponse = {
  encode(message: MsgGrantResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();

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

  fromJSON(object: any): MsgGrantResponse {
    return {};
  },

  toJSON(message: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(object: I): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  }

};
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}

function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}

export const MsgRevoke = {
  encode(message: MsgRevoke, writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.msgTypeUrl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRevoke {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(object: I): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  }

};
export interface MsgRevokeResponse {}

function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}

export const MsgRevokeResponse = {
  encode(message: MsgRevokeResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();

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

  fromJSON(object: any): MsgRevokeResponse {
    return {};
  },

  toJSON(message: MsgRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(object: I): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  }

};