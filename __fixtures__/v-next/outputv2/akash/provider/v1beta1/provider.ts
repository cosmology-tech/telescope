import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta1";
/** ProviderInfo */
export interface ProviderInfo {
  email: string;
  website: string;
}
export interface ProviderInfoProtoMsg {
  typeUrl: "/akash.provider.v1beta1.ProviderInfo";
  value: Uint8Array;
}
/** ProviderInfo */
export interface ProviderInfoAmino {
  email: string;
  website: string;
}
export interface ProviderInfoAminoMsg {
  type: "/akash.provider.v1beta1.ProviderInfo";
  value: ProviderInfoAmino;
}
/** ProviderInfo */
export interface ProviderInfoSDKType {
  email: string;
  website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface MsgCreateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProvider";
  value: Uint8Array;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info?: ProviderInfoAmino;
}
export interface MsgCreateProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgCreateProvider";
  value: MsgCreateProviderAmino;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}
export interface MsgCreateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse";
  value: Uint8Array;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseAmino {}
export interface MsgCreateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgCreateProviderResponse";
  value: MsgCreateProviderResponseAmino;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface MsgUpdateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider";
  value: Uint8Array;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info?: ProviderInfoAmino;
}
export interface MsgUpdateProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgUpdateProvider";
  value: MsgUpdateProviderAmino;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}
export interface MsgUpdateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
  value: Uint8Array;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseAmino {}
export interface MsgUpdateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
  value: MsgUpdateProviderResponseAmino;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner: string;
}
export interface MsgDeleteProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider";
  value: Uint8Array;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderAmino {
  owner: string;
}
export interface MsgDeleteProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgDeleteProvider";
  value: MsgDeleteProviderAmino;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
  owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}
export interface MsgDeleteProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
  value: Uint8Array;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseAmino {}
export interface MsgDeleteProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
  value: MsgDeleteProviderResponseAmino;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {}
/** Provider stores owner and host details */
export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface ProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.Provider";
  value: Uint8Array;
}
/** Provider stores owner and host details */
export interface ProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info?: ProviderInfoAmino;
}
export interface ProviderAminoMsg {
  type: "/akash.provider.v1beta1.Provider";
  value: ProviderAmino;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
function createBaseProviderInfo(): ProviderInfo {
  return {
    email: "",
    website: ""
  };
}
export const ProviderInfo = {
  typeUrl: "/akash.provider.v1beta1.ProviderInfo",
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProviderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseProviderInfo();
    if (isSet(object.email)) obj.email = String(object.email);
    if (isSet(object.website)) obj.website = String(object.website);
    return obj;
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
  fromSDK(object: ProviderInfoSDKType): ProviderInfo {
    return {
      email: object?.email,
      website: object?.website
    };
  },
  toSDK(message: ProviderInfo): ProviderInfoSDKType {
    const obj: any = {};
    obj.email = message.email;
    obj.website = message.website;
    return obj;
  },
  fromAmino(object: ProviderInfoAmino): ProviderInfo {
    return {
      email: object.email,
      website: object.website
    };
  },
  toAmino(message: ProviderInfo, useInterfaces: boolean = true): ProviderInfoAmino {
    const obj: any = {};
    obj.email = message.email;
    obj.website = message.website;
    return obj;
  },
  fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo {
    return ProviderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderInfoProtoMsg, useInterfaces: boolean = true): ProviderInfo {
    return ProviderInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProviderInfo): Uint8Array {
    return ProviderInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.ProviderInfo",
      value: ProviderInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgCreateProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateProvider {
    const obj = createBaseMsgCreateProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
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
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: MsgCreateProviderSDKType): MsgCreateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: MsgCreateProvider): MsgCreateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider {
    return {
      owner: object.owner,
      hostUri: object.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: MsgCreateProvider, useInterfaces: boolean = true): MsgCreateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider {
    return MsgCreateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderProtoMsg, useInterfaces: boolean = true): MsgCreateProvider {
    return MsgCreateProvider.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateProvider): Uint8Array {
    return MsgCreateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
      value: MsgCreateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}
export const MsgCreateProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
  encode(_: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgCreateProviderResponse();
    return obj;
  },
  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  fromSDK(_: MsgCreateProviderResponseSDKType): MsgCreateProviderResponse {
    return {};
  },
  toSDK(_: MsgCreateProviderResponse): MsgCreateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateProviderResponseAmino): MsgCreateProviderResponse {
    return {};
  },
  toAmino(_: MsgCreateProviderResponse, useInterfaces: boolean = true): MsgCreateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderResponseProtoMsg, useInterfaces: boolean = true): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateProviderResponse): Uint8Array {
    return MsgCreateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
      value: MsgCreateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgUpdateProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateProvider {
    const obj = createBaseMsgUpdateProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
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
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: MsgUpdateProviderSDKType): MsgUpdateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: MsgUpdateProvider): MsgUpdateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider {
    return {
      owner: object.owner,
      hostUri: object.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: MsgUpdateProvider, useInterfaces: boolean = true): MsgUpdateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderProtoMsg, useInterfaces: boolean = true): MsgUpdateProvider {
    return MsgUpdateProvider.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateProvider): Uint8Array {
    return MsgUpdateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}
export const MsgUpdateProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
  encode(_: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgUpdateProviderResponse();
    return obj;
  },
  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  fromSDK(_: MsgUpdateProviderResponseSDKType): MsgUpdateProviderResponse {
    return {};
  },
  toSDK(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse {
    return {};
  },
  toAmino(_: MsgUpdateProviderResponse, useInterfaces: boolean = true): MsgUpdateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateProviderResponse): Uint8Array {
    return MsgUpdateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
      value: MsgUpdateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}
export const MsgDeleteProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgDeleteProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
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
  fromSDK(object: MsgDeleteProviderSDKType): MsgDeleteProvider {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: MsgDeleteProvider): MsgDeleteProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider {
    return {
      owner: object.owner
    };
  },
  toAmino(message: MsgDeleteProvider, useInterfaces: boolean = true): MsgDeleteProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderProtoMsg, useInterfaces: boolean = true): MsgDeleteProvider {
    return MsgDeleteProvider.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteProvider): Uint8Array {
    return MsgDeleteProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
export const MsgDeleteProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgDeleteProviderResponse();
    return obj;
  },
  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromSDK(_: MsgDeleteProviderResponseSDKType): MsgDeleteProviderResponse {
    return {};
  },
  toSDK(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse {
    return {};
  },
  toAmino(_: MsgDeleteProviderResponse, useInterfaces: boolean = true): MsgDeleteProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg, useInterfaces: boolean = true): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteProviderResponse): Uint8Array {
    return MsgDeleteProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
      value: MsgDeleteProviderResponse.encode(message).finish()
    };
  }
};
function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const Provider = {
  typeUrl: "/akash.provider.v1beta1.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.attributes.push(Attribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Provider {
    const obj = createBaseProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
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
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: ProviderSDKType): Provider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: Provider): ProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: ProviderAmino): Provider {
    return {
      owner: object.owner,
      hostUri: object.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: Provider, useInterfaces: boolean = true): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg, useInterfaces: boolean = true): Provider {
    return Provider.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};