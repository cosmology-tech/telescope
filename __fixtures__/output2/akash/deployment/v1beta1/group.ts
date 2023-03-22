//@ts-nocheck
/* eslint-disable */
import { PlacementRequirements } from "../../base/v1beta1/attribute";
import { ResourceUnits } from "../../base/v1beta1/resource";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";

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

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  id?: GroupID;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id?: GroupID;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id?: GroupID;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: Long;
  gseq: number;
}

/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements?: PlacementRequirements;
  resources: Resource[];
}

/** Group stores group id, state and specifications of group */
export interface Group {
  groupId?: GroupID;
  state: Group_State;
  groupSpec?: GroupSpec;
  createdAt: Long;
}

/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources?: ResourceUnits;
  count: number;
  price?: Coin;
}

function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: undefined
  };
}

export const MsgCloseGroup = {
  encode(message: MsgCloseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCloseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgCloseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDKJSON(object: any): MsgCloseGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  }

};

function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return {};
}

export const MsgCloseGroupResponse = {
  encode(_: MsgCloseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroupResponse();

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

  fromJSON(_: any): MsgCloseGroupResponse {
    return {};
  },

  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },

  fromSDKJSON(_: any): MsgCloseGroupResponseSDKType {
    return {};
  }

};

function createBaseMsgPauseGroup(): MsgPauseGroup {
  return {
    id: undefined
  };
}

export const MsgPauseGroup = {
  encode(message: MsgPauseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPauseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgPauseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDKJSON(object: any): MsgPauseGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  }

};

function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return {};
}

export const MsgPauseGroupResponse = {
  encode(_: MsgPauseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroupResponse();

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

  fromJSON(_: any): MsgPauseGroupResponse {
    return {};
  },

  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },

  fromSDKJSON(_: any): MsgPauseGroupResponseSDKType {
    return {};
  }

};

function createBaseMsgStartGroup(): MsgStartGroup {
  return {
    id: undefined
  };
}

export const MsgStartGroup = {
  encode(message: MsgStartGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStartGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgStartGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDKJSON(object: any): MsgStartGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  }

};

function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return {};
}

export const MsgStartGroupResponse = {
  encode(_: MsgStartGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroupResponse();

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

  fromJSON(_: any): MsgStartGroupResponse {
    return {};
  },

  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },

  fromSDKJSON(_: any): MsgStartGroupResponseSDKType {
    return {};
  }

};

function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0
  };
}

export const GroupID = {
  encode(message: GroupID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
          break;

        case 3:
          message.gseq = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GroupID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  },

  toJSON(message: GroupID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    return obj;
  },

  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    return message;
  },

  fromSDKJSON(object: any): GroupIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  }

};

function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: undefined,
    resources: []
  };
}

export const GroupSpec = {
  encode(message: GroupSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.requirements !== undefined) {
      PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.requirements = PlacementRequirements.decode(reader, reader.uint32());
          break;

        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GroupSpec {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements) ? PlacementRequirements.fromJSON(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : []
    };
  },

  toJSON(message: GroupSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requirements !== undefined && (obj.requirements = message.requirements ? PlacementRequirements.toJSON(message.requirements) : undefined);

    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GroupSpec>): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): GroupSpecSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements) ? PlacementRequirements.fromSDKJSON(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDKJSON(e)) : []
    };
  }

};

function createBaseGroup(): Group {
  return {
    groupId: undefined,
    state: 0,
    groupSpec: undefined,
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
    return {
      groupId: isSet(object.groupId) ? GroupID.fromJSON(object.groupId) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
      groupSpec: isSet(object.groupSpec) ? GroupSpec.fromJSON(object.groupSpec) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO
    };
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
    message.groupId = object.groupId !== undefined && object.groupId !== null ? GroupID.fromPartial(object.groupId) : undefined;
    message.state = object.state ?? 0;
    message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  },

  fromSDKJSON(object: any): GroupSDKType {
    return {
      group_id: isSet(object.group_id) ? GroupID.fromSDKJSON(object.group_id) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
      group_spec: isSet(object.group_spec) ? GroupSpec.fromSDKJSON(object.group_spec) : undefined,
      created_at: isSet(object.created_at) ? Long.fromValue(object.created_at) : Long.ZERO
    };
  }

};

function createBaseResource(): Resource {
  return {
    resources: undefined,
    count: 0,
    price: undefined
  };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }

    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;

        case 2:
          message.count = reader.uint32();
          break;

        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Resource {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? ResourceUnits.toJSON(message.resources) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },

  fromSDKJSON(object: any): ResourceSDKType {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromSDKJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? Coin.fromSDKJSON(object.price) : undefined
    };
  }

};