import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
import { JsonSafe } from "../json-safe";
import { GlobalDecoderRegistry } from "../registry";
export const protobufPackage = "misc";
export interface TestNest {
  test: string;
}
export interface TestNestProtoMsg {
  typeUrl: "/misc.TestNest";
  value: Uint8Array;
}
export interface TestNestAmino {
  test?: string;
}
export interface TestNestAminoMsg {
  type: "/misc.TestNest";
  value: TestNestAmino;
}
export interface TestNestSDKType {
  test: string;
}
export interface TestNest_Graph {
  name: string;
}
export interface TestNest_GraphProtoMsg {
  typeUrl: "/misc.Graph";
  value: Uint8Array;
}
export interface TestNest_GraphAmino {
  name?: string;
}
export interface TestNest_GraphAminoMsg {
  type: "/misc.Graph";
  value: TestNest_GraphAmino;
}
export interface TestNest_GraphSDKType {
  name: string;
}
function createBaseTestNest(): TestNest {
  return {
    test: ""
  };
}
export const TestNest = {
  typeUrl: "/misc.TestNest",
  is(o: any): o is TestNest {
    return o && (o.$typeUrl === TestNest.typeUrl || typeof o.test === "string");
  },
  isSDK(o: any): o is TestNestSDKType {
    return o && (o.$typeUrl === TestNest.typeUrl || typeof o.test === "string");
  },
  isAmino(o: any): o is TestNestAmino {
    return o && (o.$typeUrl === TestNest.typeUrl || typeof o.test === "string");
  },
  encode(message: TestNest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.test !== "") {
      writer.uint32(10).string(message.test);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TestNest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestNest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.test = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestNest {
    const obj = createBaseTestNest();
    if (isSet(object.test)) obj.test = String(object.test);
    return obj;
  },
  toJSON(message: TestNest): JsonSafe<TestNest> {
    const obj: any = {};
    message.test !== undefined && (obj.test = message.test);
    return obj;
  },
  fromPartial(object: DeepPartial<TestNest>): TestNest {
    const message = createBaseTestNest();
    message.test = object.test ?? "";
    return message;
  },
  fromSDK(object: TestNestSDKType): TestNest {
    return {
      test: object?.test
    };
  },
  fromSDKJSON(object: any): TestNestSDKType {
    return {
      test: isSet(object.test) ? String(object.test) : ""
    };
  },
  toSDK(message: TestNest): TestNestSDKType {
    const obj: any = {};
    obj.test = message.test;
    return obj;
  },
  fromAmino(object: TestNestAmino): TestNest {
    const message = createBaseTestNest();
    if (object.test !== undefined && object.test !== null) {
      message.test = object.test;
    }
    return message;
  },
  toAmino(message: TestNest): TestNestAmino {
    const obj: any = {};
    obj.test = message.test === "" ? undefined : message.test;
    return obj;
  },
  fromAminoMsg(object: TestNestAminoMsg): TestNest {
    return TestNest.fromAmino(object.value);
  },
  fromProtoMsg(message: TestNestProtoMsg): TestNest {
    return TestNest.decode(message.value);
  },
  toProto(message: TestNest): Uint8Array {
    return TestNest.encode(message).finish();
  },
  toProtoMsg(message: TestNest): TestNestProtoMsg {
    return {
      typeUrl: "/misc.TestNest",
      value: TestNest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TestNest.typeUrl, TestNest);
function createBaseTestNest_Graph(): TestNest_Graph {
  return {
    name: ""
  };
}
export const TestNest_Graph = {
  typeUrl: "/misc.Graph",
  is(o: any): o is TestNest_Graph {
    return o && (o.$typeUrl === TestNest_Graph.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is TestNest_GraphSDKType {
    return o && (o.$typeUrl === TestNest_Graph.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is TestNest_GraphAmino {
    return o && (o.$typeUrl === TestNest_Graph.typeUrl || typeof o.name === "string");
  },
  encode(message: TestNest_Graph, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TestNest_Graph {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestNest_Graph();
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
  fromJSON(object: any): TestNest_Graph {
    const obj = createBaseTestNest_Graph();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: TestNest_Graph): JsonSafe<TestNest_Graph> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<TestNest_Graph>): TestNest_Graph {
    const message = createBaseTestNest_Graph();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: TestNest_GraphSDKType): TestNest_Graph {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): TestNest_GraphSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: TestNest_Graph): TestNest_GraphSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: TestNest_GraphAmino): TestNest_Graph {
    const message = createBaseTestNest_Graph();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: TestNest_Graph): TestNest_GraphAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: TestNest_GraphAminoMsg): TestNest_Graph {
    return TestNest_Graph.fromAmino(object.value);
  },
  fromProtoMsg(message: TestNest_GraphProtoMsg): TestNest_Graph {
    return TestNest_Graph.decode(message.value);
  },
  toProto(message: TestNest_Graph): Uint8Array {
    return TestNest_Graph.encode(message).finish();
  },
  toProtoMsg(message: TestNest_Graph): TestNest_GraphProtoMsg {
    return {
      typeUrl: "/misc.Graph",
      value: TestNest_Graph.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TestNest_Graph.typeUrl, TestNest_Graph);