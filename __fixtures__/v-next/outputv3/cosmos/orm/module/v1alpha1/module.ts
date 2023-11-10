import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
export const protobufPackage = "cosmos.orm.module.v1alpha1";
/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.orm.module.v1alpha1.Module";
  value: Uint8Array;
}
/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface ModuleAmino {}
/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface ModuleSDKType {}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  typeUrl: "/cosmos.orm.module.v1alpha1.Module",
  aminoType: "cosmos-sdk/Module",
  encode(_: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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
  fromJSON(_: any): Module {
    const obj = createBaseModule();
    return obj;
  },
  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Module>): Module {
    const message = createBaseModule();
    return message;
  },
  fromSDK(_: ModuleSDKType): Module {
    return {};
  },
  toSDK(_: Module): ModuleSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ModuleAmino): Module {
    return {};
  },
  toAmino(_: Module, useInterfaces: boolean = true): ModuleAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: ModuleProtoMsg, useInterfaces: boolean = true): Module {
    return Module.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.orm.module.v1alpha1.Module",
      value: Module.encode(message).finish()
    };
  }
};