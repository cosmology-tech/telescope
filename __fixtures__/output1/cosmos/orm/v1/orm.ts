import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
export interface TableDescriptor {
  primaryKey: PrimaryKeyDescriptor;
  index: SecondaryIndexDescriptor[];
  id: number;
}

function createBaseTableDescriptor(): TableDescriptor {
  return {
    primaryKey: undefined,
    index: [],
    id: 0
  };
}

export const TableDescriptor = {
  encode(message: TableDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TableDescriptor {
    return {
      primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: TableDescriptor): unknown {
    const obj: any = {};
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey ? PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);

    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
    } else {
      obj.index = [];
    }

    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TableDescriptor>, I>>(object: I): TableDescriptor {
    const message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  }

};
export interface PrimaryKeyDescriptor {
  fields: string;
  autoIncrement: boolean;
}

function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return {
    fields: "",
    autoIncrement: false
  };
}

export const PrimaryKeyDescriptor = {
  encode(message: PrimaryKeyDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }

    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;

        case 2:
          message.autoIncrement = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrimaryKeyDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false
    };
  },

  toJSON(message: PrimaryKeyDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryKeyDescriptor>, I>>(object: I): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.autoIncrement = object.autoIncrement ?? false;
    return message;
  }

};
export interface SecondaryIndexDescriptor {
  fields: string;
  id: number;
  unique: boolean;
}

function createBaseSecondaryIndexDescriptor(): SecondaryIndexDescriptor {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}

export const SecondaryIndexDescriptor = {
  encode(message: SecondaryIndexDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }

    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }

    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;

        case 2:
          message.id = reader.uint32();
          break;

        case 3:
          message.unique = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SecondaryIndexDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },

  toJSON(message: SecondaryIndexDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unique !== undefined && (obj.unique = message.unique);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondaryIndexDescriptor>, I>>(object: I): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  }

};
export interface SingletonDescriptor {
  id: number;
}

function createBaseSingletonDescriptor(): SingletonDescriptor {
  return {
    id: 0
  };
}

export const SingletonDescriptor = {
  encode(message: SingletonDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SingletonDescriptor {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: SingletonDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SingletonDescriptor>, I>>(object: I): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
    return message;
  }

};