//@ts-nocheck
/* eslint-disable */
import { GroupID } from "./groupid";
import { GroupSpec } from "./groupspec";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  createdAt: Long;
}
function createBaseGroup(): Group {
  return {
    groupId: GroupID.fromPartial({}),
    state: 0,
    groupSpec: GroupSpec.fromPartial({}),
    createdAt: Long.ZERO
  };
}
export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = GroupID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.groupSpec = GroupSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = (reader.int64() as Long);
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
    if (isSet(object.createdAt)) obj.createdAt = Long.fromValue(object.createdAt);
    return obj;
  },
  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId ? GroupID.toJSON(message.groupId) : undefined);
    message.state !== undefined && (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined && (obj.groupSpec = message.groupSpec ? GroupSpec.toJSON(message.groupSpec) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? GroupID.fromPartial(object.groupId) : GroupID.fromPartial({});
    message.state = object.state ?? 0;
    message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : GroupSpec.fromPartial({});
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }
};