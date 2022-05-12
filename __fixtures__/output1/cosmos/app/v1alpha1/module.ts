import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface ModuleDescriptor {
  goImport: string;
  usePackage: PackageReference[];
  canMigrateFrom: MigrateFromInfo[];
}

function createBaseModuleDescriptor(): ModuleDescriptor {
  return {
    goImport: "",
    usePackage: [],
    canMigrateFrom: []
  };
}

export const ModuleDescriptor = {
  encode(message: ModuleDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.goImport !== "") {
      writer.uint32(10).string(message.goImport);
    }

    for (const v of message.usePackage) {
      PackageReference.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.canMigrateFrom) {
      MigrateFromInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.goImport = reader.string();
          break;

        case 2:
          message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
          break;

        case 3:
          message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleDescriptor {
    return {
      goImport: isSet(object.goImport) ? String(object.goImport) : "",
      usePackage: Array.isArray(object?.usePackage) ? object.usePackage.map((e: any) => PackageReference.fromJSON(e)) : [],
      canMigrateFrom: Array.isArray(object?.canMigrateFrom) ? object.canMigrateFrom.map((e: any) => MigrateFromInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleDescriptor): unknown {
    const obj: any = {};
    message.goImport !== undefined && (obj.goImport = message.goImport);

    if (message.usePackage) {
      obj.usePackage = message.usePackage.map(e => e ? PackageReference.toJSON(e) : undefined);
    } else {
      obj.usePackage = [];
    }

    if (message.canMigrateFrom) {
      obj.canMigrateFrom = message.canMigrateFrom.map(e => e ? MigrateFromInfo.toJSON(e) : undefined);
    } else {
      obj.canMigrateFrom = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleDescriptor>, I>>(object: I): ModuleDescriptor {
    const message = createBaseModuleDescriptor();
    message.goImport = object.goImport ?? "";
    message.usePackage = object.usePackage?.map(e => PackageReference.fromPartial(e)) || [];
    message.canMigrateFrom = object.canMigrateFrom?.map(e => MigrateFromInfo.fromPartial(e)) || [];
    return message;
  }

};
export interface PackageReference {
  name: string;
  revision: number;
}

function createBasePackageReference(): PackageReference {
  return {
    name: "",
    revision: 0
  };
}

export const PackageReference = {
  encode(message: PackageReference, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageReference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.revision = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PackageReference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      revision: isSet(object.revision) ? Number(object.revision) : 0
    };
  },

  toJSON(message: PackageReference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackageReference>, I>>(object: I): PackageReference {
    const message = createBasePackageReference();
    message.name = object.name ?? "";
    message.revision = object.revision ?? 0;
    return message;
  }

};
export interface MigrateFromInfo {
  module: string;
}

function createBaseMigrateFromInfo(): MigrateFromInfo {
  return {
    module: ""
  };
}

export const MigrateFromInfo = {
  encode(message: MigrateFromInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateFromInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateFromInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MigrateFromInfo {
    return {
      module: isSet(object.module) ? String(object.module) : ""
    };
  },

  toJSON(message: MigrateFromInfo): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MigrateFromInfo>, I>>(object: I): MigrateFromInfo {
    const message = createBaseMigrateFromInfo();
    message.module = object.module ?? "";
    return message;
  }

};