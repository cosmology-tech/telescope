import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the paramaters of the module. */
  params: Params;
  factoryDenoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
  /** params defines the paramaters of the module. */
  params?: ParamsAmino;
  factory_denoms: GenesisDenomAmino[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
  denom: string;
  authorityMetadata: DenomAuthorityMetadata;
}
export interface GenesisDenomProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom";
  value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
  denom: string;
  authority_metadata?: DenomAuthorityMetadataAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
  denom: string;
  authority_metadata: DenomAuthorityMetadataSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    factoryDenoms: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
  aminoType: "osmosis/tokenfactory/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.factoryDenoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.factoryDenoms.push(GenesisDenom.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.factoryDenoms)) obj.factoryDenoms = object.factoryDenoms.map((e: any) => GenesisDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.factoryDenoms) {
      obj.factoryDenoms = message.factoryDenoms.map(e => e ? GenesisDenom.toJSON(e) : undefined);
    } else {
      obj.factoryDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.factoryDenoms = object.factoryDenoms?.map(e => GenesisDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      factoryDenoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.factoryDenoms) {
      obj.factory_denoms = message.factoryDenoms.map(e => e ? GenesisDenom.toSDK(e) : undefined);
    } else {
      obj.factory_denoms = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      factoryDenoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.factoryDenoms) {
      obj.factory_denoms = message.factoryDenoms.map(e => e ? GenesisDenom.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.factory_denoms = [];
    }
    return obj;
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authorityMetadata: DenomAuthorityMetadata.fromPartial({})
  };
}
export const GenesisDenom = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
  aminoType: "osmosis/tokenfactory/genesis-denom",
  encode(message: GenesisDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDenom {
    const obj = createBaseGenesisDenom();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.authorityMetadata)) obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    return obj;
  },
  toJSON(message: GenesisDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    return message;
  },
  fromSDK(object: GenesisDenomSDKType): GenesisDenom {
    return {
      denom: object?.denom,
      authorityMetadata: object.authority_metadata ? DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
    };
  },
  toSDK(message: GenesisDenom): GenesisDenomSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.authorityMetadata !== undefined && (obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toSDK(message.authorityMetadata) : undefined);
    return obj;
  },
  fromAmino(object: GenesisDenomAmino): GenesisDenom {
    return {
      denom: object.denom,
      authorityMetadata: object?.authority_metadata ? DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
    };
  },
  toAmino(message: GenesisDenom, useInterfaces: boolean = true): GenesisDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GenesisDenomProtoMsg, useInterfaces: boolean = true): GenesisDenom {
    return GenesisDenom.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisDenom): Uint8Array {
    return GenesisDenom.encode(message).finish();
  },
  toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
      value: GenesisDenom.encode(message).finish()
    };
  }
};