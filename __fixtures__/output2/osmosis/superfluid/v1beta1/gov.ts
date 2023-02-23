//@ts-nocheck
/* eslint-disable */
import { SuperfluidAsset } from "../superfluid";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "osmosis.superfluid.v1beta1";

/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
  title: string;
  description: string;
  assets: SuperfluidAsset[];
}

/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
  title: string;
  description: string;
  superfluidAssetDenoms: string[];
}

/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
  title: string;
  description: string;
  ids: Long[];
  isOverwrite: boolean;
}

function createBaseSetSuperfluidAssetsProposal(): SetSuperfluidAssetsProposal {
  return {
    title: "",
    description: "",
    assets: []
  };
}

export const SetSuperfluidAssetsProposal = {
  encode(message: SetSuperfluidAssetsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSuperfluidAssetsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSuperfluidAssetsProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetSuperfluidAssetsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : []
    };
  },

  toJSON(message: SetSuperfluidAssetsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal {
    const message = createBaseSetSuperfluidAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRemoveSuperfluidAssetsProposal(): RemoveSuperfluidAssetsProposal {
  return {
    title: "",
    description: "",
    superfluidAssetDenoms: []
  };
}

export const RemoveSuperfluidAssetsProposal = {
  encode(message: RemoveSuperfluidAssetsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.superfluidAssetDenoms) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSuperfluidAssetsProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.superfluidAssetDenoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RemoveSuperfluidAssetsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      superfluidAssetDenoms: Array.isArray(object?.superfluidAssetDenoms) ? object.superfluidAssetDenoms.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: RemoveSuperfluidAssetsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.superfluidAssetDenoms) {
      obj.superfluidAssetDenoms = message.superfluidAssetDenoms.map(e => e);
    } else {
      obj.superfluidAssetDenoms = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal {
    const message = createBaseRemoveSuperfluidAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.superfluidAssetDenoms = object.superfluidAssetDenoms?.map(e => e) || [];
    return message;
  }

};

function createBaseUpdateUnpoolWhiteListProposal(): UpdateUnpoolWhiteListProposal {
  return {
    title: "",
    description: "",
    ids: [],
    isOverwrite: false
  };
}

export const UpdateUnpoolWhiteListProposal = {
  encode(message: UpdateUnpoolWhiteListProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.isOverwrite === true) {
      writer.uint32(32).bool(message.isOverwrite);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUnpoolWhiteListProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

          break;

        case 4:
          message.isOverwrite = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateUnpoolWhiteListProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      isOverwrite: isSet(object.isOverwrite) ? Boolean(object.isOverwrite) : false
    };
  },

  toJSON(message: UpdateUnpoolWhiteListProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }

    message.isOverwrite !== undefined && (obj.isOverwrite = message.isOverwrite);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal {
    const message = createBaseUpdateUnpoolWhiteListProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    message.isOverwrite = object.isOverwrite ?? false;
    return message;
  }

};