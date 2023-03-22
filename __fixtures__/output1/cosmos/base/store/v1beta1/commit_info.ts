import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.store.v1beta1";

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: Long;
  storeInfos: StoreInfo[];
}

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
  version: Long;
  store_infos: StoreInfoSDKType[];
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commitId?: CommitID;
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
  name: string;
  commit_id?: CommitIDSDKType;
}

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: Long;
  hash: Uint8Array;
}

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
  version: Long;
  hash: Uint8Array;
}

function createBaseCommitInfo(): CommitInfo {
  return {
    version: Long.ZERO,
    storeInfos: []
  };
}

export const CommitInfo = {
  encode(message: CommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }

    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.int64() as Long);
          break;

        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitInfo {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
      storeInfos: Array.isArray(object?.storeInfos) ? object.storeInfos.map((e: any) => StoreInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());

    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map(e => e ? StoreInfo.toJSON(e) : undefined);
    } else {
      obj.storeInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.storeInfos = object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CommitInfoSDKType): CommitInfo {
    return {
      version: object?.version,
      storeInfos: Array.isArray(object?.store_infos) ? object.store_infos.map((e: any) => StoreInfo.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): CommitInfoSDKType {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
      store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e: any) => StoreInfo.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: CommitInfo): CommitInfoSDKType {
    const obj: any = {};
    obj.version = message.version;

    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toSDK(e) : undefined);
    } else {
      obj.store_infos = [];
    }

    return obj;
  }

};

function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commitId: undefined
  };
}

export const StoreInfo = {
  encode(message: StoreInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      commitId: isSet(object.commitId) ? CommitID.fromJSON(object.commitId) : undefined
    };
  },

  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined && (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
    return message;
  },

  fromSDK(object: StoreInfoSDKType): StoreInfo {
    return {
      name: object?.name,
      commitId: object.commit_id ? CommitID.fromSDK(object.commit_id) : undefined
    };
  },

  fromSDKJSON(object: any): StoreInfoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      commit_id: isSet(object.commit_id) ? CommitID.fromSDKJSON(object.commit_id) : undefined
    };
  },

  toSDK(message: StoreInfo): StoreInfoSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.commitId !== undefined && (obj.commit_id = message.commitId ? CommitID.toSDK(message.commitId) : undefined);
    return obj;
  }

};

function createBaseCommitID(): CommitID {
  return {
    version: Long.ZERO,
    hash: new Uint8Array()
  };
}

export const CommitID = {
  encode(message: CommitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.int64() as Long);
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitID {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },

  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },

  fromSDK(object: CommitIDSDKType): CommitID {
    return {
      version: object?.version,
      hash: object?.hash
    };
  },

  fromSDKJSON(object: any): CommitIDSDKType {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },

  toSDK(message: CommitID): CommitIDSDKType {
    const obj: any = {};
    obj.version = message.version;
    obj.hash = message.hash;
    return obj;
  }

};