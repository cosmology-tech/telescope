import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.base.snapshots.v1beta1";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
export interface SnapshotProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot";
  value: Uint8Array;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotAmino {
  height?: string;
  format?: number;
  chunks?: number;
  hash?: string;
  metadata?: MetadataAmino;
}
export interface SnapshotAminoMsg {
  type: "cosmos-sdk/Snapshot";
  value: SnapshotAmino;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
export interface MetadataProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata";
  value: Uint8Array;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataAmino {
  /** SHA-256 chunk hashes */
  chunk_hashes?: string[];
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
  chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
  store?: SnapshotStoreItem;
  iavl?: SnapshotIAVLItem;
  extension?: SnapshotExtensionMeta;
  extensionPayload?: SnapshotExtensionPayload;
  kv?: SnapshotKVItem;
  schema?: SnapshotSchema;
}
export interface SnapshotItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem";
  value: Uint8Array;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemAmino {
  store?: SnapshotStoreItemAmino;
  iavl?: SnapshotIAVLItemAmino;
  extension?: SnapshotExtensionMetaAmino;
  extension_payload?: SnapshotExtensionPayloadAmino;
  kv?: SnapshotKVItemAmino;
  schema?: SnapshotSchemaAmino;
}
export interface SnapshotItemAminoMsg {
  type: "cosmos-sdk/SnapshotItem";
  value: SnapshotItemAmino;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemSDKType {
  store?: SnapshotStoreItemSDKType;
  iavl?: SnapshotIAVLItemSDKType;
  extension?: SnapshotExtensionMetaSDKType;
  extension_payload?: SnapshotExtensionPayloadSDKType;
  kv?: SnapshotKVItemSDKType;
  schema?: SnapshotSchemaSDKType;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
  name: string;
}
export interface SnapshotStoreItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem";
  value: Uint8Array;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItemAmino {
  name?: string;
}
export interface SnapshotStoreItemAminoMsg {
  type: "cosmos-sdk/SnapshotStoreItem";
  value: SnapshotStoreItemAmino;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItemSDKType {
  name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: bigint;
  /** height is depth of the tree. */
  height: number;
}
export interface SnapshotIAVLItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem";
  value: Uint8Array;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemAmino {
  key?: string;
  value?: string;
  /** version is block height */
  version?: string;
  /** height is depth of the tree. */
  height?: number;
}
export interface SnapshotIAVLItemAminoMsg {
  type: "cosmos-sdk/SnapshotIAVLItem";
  value: SnapshotIAVLItemAmino;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
  version: bigint;
  height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
  name: string;
  format: number;
}
export interface SnapshotExtensionMetaProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta";
  value: Uint8Array;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMetaAmino {
  name?: string;
  format?: number;
}
export interface SnapshotExtensionMetaAminoMsg {
  type: "cosmos-sdk/SnapshotExtensionMeta";
  value: SnapshotExtensionMetaAmino;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMetaSDKType {
  name: string;
  format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
  payload: Uint8Array;
}
export interface SnapshotExtensionPayloadProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload";
  value: Uint8Array;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadAmino {
  payload?: string;
}
export interface SnapshotExtensionPayloadAminoMsg {
  type: "cosmos-sdk/SnapshotExtensionPayload";
  value: SnapshotExtensionPayloadAmino;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadSDKType {
  payload: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItem {
  key: Uint8Array;
  value: Uint8Array;
}
export interface SnapshotKVItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem";
  value: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItemAmino {
  key?: string;
  value?: string;
}
export interface SnapshotKVItemAminoMsg {
  type: "cosmos-sdk/SnapshotKVItem";
  value: SnapshotKVItemAmino;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchema {
  keys: Uint8Array[];
}
export interface SnapshotSchemaProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema";
  value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchemaAmino {
  keys?: string[];
}
export interface SnapshotSchemaAminoMsg {
  type: "cosmos-sdk/SnapshotSchema";
  value: SnapshotSchemaAmino;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchemaSDKType {
  keys: Uint8Array[];
}
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: Metadata.fromPartial({})
  };
}
export const Snapshot = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    return message;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  toAminoMsg(message: Snapshot): SnapshotAminoMsg {
    return {
      type: "cosmos-sdk/Snapshot",
      value: Snapshot.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    chunkHashes: []
  };
}
export const Metadata = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunkHashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunk_hashes?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunk_hashes = message.chunkHashes.map(e => base64FromBytes(e));
    } else {
      obj.chunk_hashes = message.chunkHashes;
    }
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseSnapshotItem(): SnapshotItem {
  return {
    store: undefined,
    iavl: undefined,
    extension: undefined,
    extensionPayload: undefined,
    kv: undefined,
    schema: undefined
  };
}
export const SnapshotItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
  encode(message: SnapshotItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.store !== undefined) {
      SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
    }
    if (message.iavl !== undefined) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
    }
    if (message.extensionPayload !== undefined) {
      SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
    }
    if (message.kv !== undefined) {
      SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
          break;
        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
          break;
        case 5:
          message.kv = SnapshotKVItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.schema = SnapshotSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotItem>): SnapshotItem {
    const message = createBaseSnapshotItem();
    if (object.store !== undefined && object.store !== null) {
      message.store = SnapshotStoreItem.fromPartial(object.store);
    }
    if (object.iavl !== undefined && object.iavl !== null) {
      message.iavl = SnapshotIAVLItem.fromPartial(object.iavl);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = SnapshotExtensionMeta.fromPartial(object.extension);
    }
    if (object.extensionPayload !== undefined && object.extensionPayload !== null) {
      message.extensionPayload = SnapshotExtensionPayload.fromPartial(object.extensionPayload);
    }
    if (object.kv !== undefined && object.kv !== null) {
      message.kv = SnapshotKVItem.fromPartial(object.kv);
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SnapshotSchema.fromPartial(object.schema);
    }
    return message;
  },
  fromAmino(object: SnapshotItemAmino): SnapshotItem {
    const message = createBaseSnapshotItem();
    if (object.store !== undefined && object.store !== null) {
      message.store = SnapshotStoreItem.fromAmino(object.store);
    }
    if (object.iavl !== undefined && object.iavl !== null) {
      message.iavl = SnapshotIAVLItem.fromAmino(object.iavl);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = SnapshotExtensionMeta.fromAmino(object.extension);
    }
    if (object.extension_payload !== undefined && object.extension_payload !== null) {
      message.extensionPayload = SnapshotExtensionPayload.fromAmino(object.extension_payload);
    }
    if (object.kv !== undefined && object.kv !== null) {
      message.kv = SnapshotKVItem.fromAmino(object.kv);
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SnapshotSchema.fromAmino(object.schema);
    }
    return message;
  },
  toAmino(message: SnapshotItem): SnapshotItemAmino {
    const obj: any = {};
    obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : undefined;
    obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : undefined;
    obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : undefined;
    obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
    obj.kv = message.kv ? SnapshotKVItem.toAmino(message.kv) : undefined;
    obj.schema = message.schema ? SnapshotSchema.toAmino(message.schema) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotItemAminoMsg): SnapshotItem {
    return SnapshotItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotItem): SnapshotItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotItem",
      value: SnapshotItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotItemProtoMsg): SnapshotItem {
    return SnapshotItem.decode(message.value);
  },
  toProto(message: SnapshotItem): Uint8Array {
    return SnapshotItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotItem): SnapshotItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
      value: SnapshotItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotStoreItem(): SnapshotStoreItem {
  return {
    name: ""
  };
}
export const SnapshotStoreItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
  encode(message: SnapshotStoreItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotStoreItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotStoreItem>): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: SnapshotStoreItemAmino): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: SnapshotStoreItem): SnapshotStoreItemAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: SnapshotStoreItemAminoMsg): SnapshotStoreItem {
    return SnapshotStoreItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotStoreItem): SnapshotStoreItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotStoreItem",
      value: SnapshotStoreItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotStoreItemProtoMsg): SnapshotStoreItem {
    return SnapshotStoreItem.decode(message.value);
  },
  toProto(message: SnapshotStoreItem): Uint8Array {
    return SnapshotStoreItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotStoreItem): SnapshotStoreItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
      value: SnapshotStoreItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: BigInt(0),
    height: 0
  };
}
export const SnapshotIAVLItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
  encode(message: SnapshotIAVLItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(24).int64(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotIAVLItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.version = reader.int64();
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotIAVLItem>): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    message.height = object.height ?? 0;
    return message;
  },
  fromAmino(object: SnapshotIAVLItemAmino): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    return message;
  },
  toAmino(message: SnapshotIAVLItem): SnapshotIAVLItemAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    obj.height = message.height === 0 ? undefined : message.height;
    return obj;
  },
  fromAminoMsg(object: SnapshotIAVLItemAminoMsg): SnapshotIAVLItem {
    return SnapshotIAVLItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotIAVLItem",
      value: SnapshotIAVLItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotIAVLItemProtoMsg): SnapshotIAVLItem {
    return SnapshotIAVLItem.decode(message.value);
  },
  toProto(message: SnapshotIAVLItem): Uint8Array {
    return SnapshotIAVLItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
      value: SnapshotIAVLItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
  return {
    name: "",
    format: 0
  };
}
export const SnapshotExtensionMeta = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
  encode(message: SnapshotExtensionMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotExtensionMeta>): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? "";
    message.format = object.format ?? 0;
    return message;
  },
  fromAmino(object: SnapshotExtensionMetaAmino): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    return message;
  },
  toAmino(message: SnapshotExtensionMeta): SnapshotExtensionMetaAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.format = message.format === 0 ? undefined : message.format;
    return obj;
  },
  fromAminoMsg(object: SnapshotExtensionMetaAminoMsg): SnapshotExtensionMeta {
    return SnapshotExtensionMeta.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotExtensionMetaProtoMsg): SnapshotExtensionMeta {
    return SnapshotExtensionMeta.decode(message.value);
  },
  toProto(message: SnapshotExtensionMeta): Uint8Array {
    return SnapshotExtensionMeta.encode(message).finish();
  },
  toProtoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
  return {
    payload: new Uint8Array()
  };
}
export const SnapshotExtensionPayload = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
  encode(message: SnapshotExtensionPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotExtensionPayload>): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotExtensionPayloadAmino): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    return message;
  },
  toAmino(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAmino {
    const obj: any = {};
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotExtensionPayloadAminoMsg): SnapshotExtensionPayload {
    return SnapshotExtensionPayload.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotExtensionPayloadProtoMsg): SnapshotExtensionPayload {
    return SnapshotExtensionPayload.decode(message.value);
  },
  toProto(message: SnapshotExtensionPayload): Uint8Array {
    return SnapshotExtensionPayload.encode(message).finish();
  },
  toProtoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.encode(message).finish()
    };
  }
};
function createBaseSnapshotKVItem(): SnapshotKVItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const SnapshotKVItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
  encode(message: SnapshotKVItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotKVItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotKVItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotKVItem>): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotKVItemAmino): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: SnapshotKVItem): SnapshotKVItemAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotKVItemAminoMsg): SnapshotKVItem {
    return SnapshotKVItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotKVItem): SnapshotKVItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotKVItem",
      value: SnapshotKVItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotKVItemProtoMsg): SnapshotKVItem {
    return SnapshotKVItem.decode(message.value);
  },
  toProto(message: SnapshotKVItem): Uint8Array {
    return SnapshotKVItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotKVItem): SnapshotKVItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
      value: SnapshotKVItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotSchema(): SnapshotSchema {
  return {
    keys: []
  };
}
export const SnapshotSchema = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
  encode(message: SnapshotSchema, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SnapshotSchema>): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SnapshotSchemaAmino): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: SnapshotSchema): SnapshotSchemaAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => base64FromBytes(e));
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: SnapshotSchemaAminoMsg): SnapshotSchema {
    return SnapshotSchema.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotSchema): SnapshotSchemaAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotSchema",
      value: SnapshotSchema.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotSchemaProtoMsg): SnapshotSchema {
    return SnapshotSchema.decode(message.value);
  },
  toProto(message: SnapshotSchema): Uint8Array {
    return SnapshotSchema.encode(message).finish();
  },
  toProtoMsg(message: SnapshotSchema): SnapshotSchemaProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
      value: SnapshotSchema.encode(message).finish()
    };
  }
};