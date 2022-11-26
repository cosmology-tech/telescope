//@ts-nocheck
/* eslint-disable */
import { Attribute } from "../../base/v1beta1/attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta1";

/** ProviderInfo */
export interface ProviderInfo {
  email: string;
  website: string;
}

/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}

/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}

/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner: string;
}

/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}

/** Provider stores owner and host details */
export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

function createBaseProviderInfo(): ProviderInfo {
  return {
    email: "",
    website: ""
  };
}

export const ProviderInfo = {
  encode(message: ProviderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }

    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;

        case 2:
          message.website = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProviderInfo {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      website: isSet(object.website) ? String(object.website) : ""
    };
  },

  toJSON(message: ProviderInfo): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },

  fromPartial(object: DeepPartial<ProviderInfo>): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  },

  fromAmino(object: ProviderInfoSDKType): ProviderInfo {
    return {
      email: isSet(object.email) ? object.email : undefined,
      website: isSet(object.website) ? object.website : undefined
    };
  },

  toAmino(message: ProviderInfo): ProviderInfoSDKType {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  }

};

function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const MsgCreateProvider = {
  encode(message: MsgCreateProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },

  toJSON(message: MsgCreateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProvider>): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },

  fromAmino(object: MsgCreateProviderSDKType): MsgCreateProvider {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      hostUri: isSet(object.host_uri) ? object.host_uri : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },

  toAmino(message: MsgCreateProvider): MsgCreateProviderSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.host_uri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined);
    return obj;
  }

};

function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}

export const MsgCreateProviderResponse = {
  encode(_: MsgCreateProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();

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

  fromJSON(_: any): MsgCreateProviderResponse {
    return {};
  },

  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },

  fromAmino(_: MsgCreateProviderResponseSDKType): MsgCreateProviderResponse {
    return {};
  },

  toAmino(_: MsgCreateProviderResponse): MsgCreateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const MsgUpdateProvider = {
  encode(message: MsgUpdateProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },

  toJSON(message: MsgUpdateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },

  fromAmino(object: MsgUpdateProviderSDKType): MsgUpdateProvider {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      hostUri: isSet(object.host_uri) ? object.host_uri : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },

  toAmino(message: MsgUpdateProvider): MsgUpdateProviderSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.host_uri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined);
    return obj;
  }

};

function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}

export const MsgUpdateProviderResponse = {
  encode(_: MsgUpdateProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();

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

  fromJSON(_: any): MsgUpdateProviderResponse {
    return {};
  },

  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },

  fromAmino(_: MsgUpdateProviderResponseSDKType): MsgUpdateProviderResponse {
    return {};
  },

  toAmino(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}

export const MsgDeleteProvider = {
  encode(message: MsgDeleteProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: MsgDeleteProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: MsgDeleteProviderSDKType): MsgDeleteProvider {
    return {
      owner: isSet(object.owner) ? object.owner : undefined
    };
  },

  toAmino(message: MsgDeleteProvider): MsgDeleteProviderSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  }

};

function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}

export const MsgDeleteProviderResponse = {
  encode(_: MsgDeleteProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();

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

  fromJSON(_: any): MsgDeleteProviderResponse {
    return {};
  },

  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },

  fromAmino(_: MsgDeleteProviderResponseSDKType): MsgDeleteProviderResponse {
    return {};
  },

  toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Provider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },

  fromAmino(object: ProviderSDKType): Provider {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      hostUri: isSet(object.host_uri) ? object.host_uri : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },

  toAmino(message: Provider): ProviderSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.host_uri = message.hostUri);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined);
    return obj;
  }

};

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;

  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;

  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateProvider = this.CreateProvider.bind(this);
    this.UpdateProvider = this.UpdateProvider.bind(this);
    this.DeleteProvider = this.DeleteProvider.bind(this);
  }

  CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse> {
    const data = MsgCreateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta1.Msg", "CreateProvider", data);
    return promise.then(data => MsgCreateProviderResponse.decode(new _m0.Reader(data)));
  }

  UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse> {
    const data = MsgUpdateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta1.Msg", "UpdateProvider", data);
    return promise.then(data => MsgUpdateProviderResponse.decode(new _m0.Reader(data)));
  }

  DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse> {
    const data = MsgDeleteProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta1.Msg", "DeleteProvider", data);
    return promise.then(data => MsgDeleteProviderResponse.decode(new _m0.Reader(data)));
  }

}