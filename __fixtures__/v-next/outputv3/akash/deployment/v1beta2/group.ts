import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "./groupspec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";
/** State is an enum which refers to state of group */
export enum Group_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - GroupOpen denotes state for group open */
  open = 1,
  /** paused - GroupOrdered denotes state for group ordered */
  paused = 2,
  /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
  insufficient_funds = 3,
  /** closed - GroupClosed denotes state for group closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Group_StateSDKType = Group_State;
export const Group_StateAmino = Group_State;
export function group_StateFromJSON(object: any): Group_State {
  switch (object) {
    case 0:
    case "invalid":
      return Group_State.invalid;
    case 1:
    case "open":
      return Group_State.open;
    case 2:
    case "paused":
      return Group_State.paused;
    case 3:
    case "insufficient_funds":
      return Group_State.insufficient_funds;
    case 4:
    case "closed":
      return Group_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Group_State.UNRECOGNIZED;
  }
}
export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return "invalid";
    case Group_State.open:
      return "open";
    case Group_State.paused:
      return "paused";
    case Group_State.insufficient_funds:
      return "insufficient_funds";
    case Group_State.closed:
      return "closed";
    case Group_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Group stores group id, state and specifications of group */
export interface Group {
  groupId: GroupID;
  state: Group_State;
  groupSpec: GroupSpec;
  createdAt: bigint;
}
export interface GroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Group";
  value: Uint8Array;
}
/** Group stores group id, state and specifications of group */
export interface GroupAmino {
  group_id: GroupIDAmino;
  state: Group_State;
  group_spec: GroupSpecAmino;
  created_at?: string;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
  group_id: GroupIDSDKType;
  state: Group_State;
  group_spec: GroupSpecSDKType;
  created_at: bigint;
}
function createBaseGroup(): Group {
  return {
    groupId: GroupID.fromPartial({}),
    state: 0,
    groupSpec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0)
  };
}
export const Group = {
  typeUrl: "/akash.deployment.v1beta2.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.groupSpec = GroupSpec.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Group {
    const obj = createBaseGroup();
    if (isSet(object.groupId)) obj.groupId = GroupID.fromJSON(object.groupId);
    if (isSet(object.state)) obj.state = group_StateFromJSON(object.state);
    if (isSet(object.groupSpec)) obj.groupSpec = GroupSpec.fromJSON(object.groupSpec);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = GroupID.fromPartial(object.groupId);
    }
    message.state = object.state ?? 0;
    if (object.groupSpec !== undefined && object.groupSpec !== null) {
      message.groupSpec = GroupSpec.fromPartial(object.groupSpec);
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromSDK(object: GroupSDKType): Group {
    return {
      groupId: object.group_id ? GroupID.fromSDK(object.group_id) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : -1,
      groupSpec: object.group_spec ? GroupSpec.fromSDK(object.group_spec) : undefined,
      createdAt: object?.created_at
    };
  },
  toSDK(message: Group): GroupSDKType {
    const obj: any = {};
    message.groupId !== undefined && (obj.group_id = message.groupId ? GroupID.toSDK(message.groupId) : undefined);
    message.state !== undefined && (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined && (obj.group_spec = message.groupSpec ? GroupSpec.toSDK(message.groupSpec) : undefined);
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = GroupID.fromAmino(object.group_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.group_spec !== undefined && object.group_spec !== null) {
      message.groupSpec = GroupSpec.fromAmino(object.group_spec);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Group, useInterfaces: boolean = true): GroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? GroupID.toAmino(message.groupId, useInterfaces) : GroupID.toAmino(GroupID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec, useInterfaces) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
    return obj;
  },
  fromProtoMsg(message: GroupProtoMsg, useInterfaces: boolean = true): Group {
    return Group.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Group",
      value: Group.encode(message).finish()
    };
  }
};