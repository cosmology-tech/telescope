import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
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
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  id: GroupID;
}
export interface MsgCloseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup";
  value: Uint8Array;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupAmino {
  id?: GroupIDAmino;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
  id: GroupIDSDKType;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}
export interface MsgCloseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse";
  value: Uint8Array;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseAmino {}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id: GroupID;
}
export interface MsgPauseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup";
  value: Uint8Array;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupAmino {
  id?: GroupIDAmino;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
  id: GroupIDSDKType;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}
export interface MsgPauseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse";
  value: Uint8Array;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseAmino {}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id: GroupID;
}
export interface MsgStartGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroup";
  value: Uint8Array;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupAmino {
  id?: GroupIDAmino;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
  id: GroupIDSDKType;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}
export interface MsgStartGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse";
  value: Uint8Array;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseAmino {}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: bigint;
  gseq: number;
}
export interface GroupIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.GroupID";
  value: Uint8Array;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDAmino {
  owner?: string;
  dseq?: string;
  gseq?: number;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
}
/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements: PlacementRequirements;
  resources: Resource[];
}
export interface GroupSpecProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.GroupSpec";
  value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
  name?: string;
  requirements?: PlacementRequirementsAmino;
  resources?: ResourceAmino[];
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
  name: string;
  requirements: PlacementRequirementsSDKType;
  resources: ResourceSDKType[];
}
/** Group stores group id, state and specifications of group */
export interface Group {
  groupId: GroupID;
  state: Group_State;
  groupSpec: GroupSpec;
  createdAt: bigint;
}
export interface GroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Group";
  value: Uint8Array;
}
/** Group stores group id, state and specifications of group */
export interface GroupAmino {
  group_id?: GroupIDAmino;
  state?: Group_State;
  group_spec?: GroupSpecAmino;
  created_at?: string;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
  group_id: GroupIDSDKType;
  state: Group_State;
  group_spec: GroupSpecSDKType;
  created_at: bigint;
}
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources: ResourceUnits;
  count: number;
  price: Coin;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Resource";
  value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
  resources?: ResourceUnitsAmino;
  count?: number;
  price?: CoinAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources: ResourceUnitsSDKType;
  count: number;
  price: CoinSDKType;
}
function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
export const MsgCloseGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
  encode(message: MsgCloseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseGroup {
    const obj = createBaseMsgCloseGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgCloseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgCloseGroupSDKType): MsgCloseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseGroup): MsgCloseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseGroupAmino): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseGroup, useInterfaces: boolean = true): MsgCloseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgCloseGroupProtoMsg, useInterfaces: boolean = true): MsgCloseGroup {
    return MsgCloseGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseGroup): Uint8Array {
    return MsgCloseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroup): MsgCloseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
      value: MsgCloseGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return {};
}
export const MsgCloseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
  encode(_: MsgCloseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCloseGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgCloseGroupResponse();
    return obj;
  },
  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
  fromSDK(_: MsgCloseGroupResponseSDKType): MsgCloseGroupResponse {
    return {};
  },
  toSDK(_: MsgCloseGroupResponse): MsgCloseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseGroupResponseAmino): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
  toAmino(_: MsgCloseGroupResponse, useInterfaces: boolean = true): MsgCloseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgCloseGroupResponseProtoMsg, useInterfaces: boolean = true): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCloseGroupResponse): Uint8Array {
    return MsgCloseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseGroupResponse): MsgCloseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
      value: MsgCloseGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPauseGroup(): MsgPauseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
export const MsgPauseGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
  encode(message: MsgPauseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgPauseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPauseGroup {
    const obj = createBaseMsgPauseGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgPauseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgPauseGroupSDKType): MsgPauseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgPauseGroup): MsgPauseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgPauseGroupAmino): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgPauseGroup, useInterfaces: boolean = true): MsgPauseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgPauseGroupProtoMsg, useInterfaces: boolean = true): MsgPauseGroup {
    return MsgPauseGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgPauseGroup): Uint8Array {
    return MsgPauseGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroup): MsgPauseGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
      value: MsgPauseGroup.encode(message).finish()
    };
  }
};
function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return {};
}
export const MsgPauseGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
  encode(_: MsgPauseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgPauseGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgPauseGroupResponse();
    return obj;
  },
  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
  fromSDK(_: MsgPauseGroupResponseSDKType): MsgPauseGroupResponse {
    return {};
  },
  toSDK(_: MsgPauseGroupResponse): MsgPauseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPauseGroupResponseAmino): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
  toAmino(_: MsgPauseGroupResponse, useInterfaces: boolean = true): MsgPauseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgPauseGroupResponseProtoMsg, useInterfaces: boolean = true): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgPauseGroupResponse): Uint8Array {
    return MsgPauseGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseGroupResponse): MsgPauseGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
      value: MsgPauseGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStartGroup(): MsgStartGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
export const MsgStartGroup = {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
  encode(message: MsgStartGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStartGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStartGroup {
    const obj = createBaseMsgStartGroup();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgStartGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgStartGroupSDKType): MsgStartGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: MsgStartGroup): MsgStartGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgStartGroupAmino): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgStartGroup, useInterfaces: boolean = true): MsgStartGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgStartGroupProtoMsg, useInterfaces: boolean = true): MsgStartGroup {
    return MsgStartGroup.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStartGroup): Uint8Array {
    return MsgStartGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroup): MsgStartGroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
      value: MsgStartGroup.encode(message).finish()
    };
  }
};
function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return {};
}
export const MsgStartGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
  encode(_: MsgStartGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStartGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgStartGroupResponse();
    return obj;
  },
  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
  fromSDK(_: MsgStartGroupResponseSDKType): MsgStartGroupResponse {
    return {};
  },
  toSDK(_: MsgStartGroupResponse): MsgStartGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStartGroupResponseAmino): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
  toAmino(_: MsgStartGroupResponse, useInterfaces: boolean = true): MsgStartGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgStartGroupResponseProtoMsg, useInterfaces: boolean = true): MsgStartGroupResponse {
    return MsgStartGroupResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStartGroupResponse): Uint8Array {
    return MsgStartGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartGroupResponse): MsgStartGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
      value: MsgStartGroupResponse.encode(message).finish()
    };
  }
};
function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0
  };
}
export const GroupID = {
  typeUrl: "/akash.deployment.v1beta1.GroupID",
  encode(message: GroupID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GroupID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
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
    const obj = createBaseGroupID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.gseq)) obj.gseq = Number(object.gseq);
    return obj;
  },
  toJSON(message: GroupID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    return obj;
  },
  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.gseq = object.gseq ?? 0;
    return message;
  },
  fromSDK(object: GroupIDSDKType): GroupID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq
    };
  },
  toSDK(message: GroupID): GroupIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    return obj;
  },
  fromAmino(object: GroupIDAmino): GroupID {
    const message = createBaseGroupID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    return message;
  },
  toAmino(message: GroupID, useInterfaces: boolean = true): GroupIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    return obj;
  },
  fromProtoMsg(message: GroupIDProtoMsg, useInterfaces: boolean = true): GroupID {
    return GroupID.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GroupID): Uint8Array {
    return GroupID.encode(message).finish();
  },
  toProtoMsg(message: GroupID): GroupIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.GroupID",
      value: GroupID.encode(message).finish()
    };
  }
};
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: PlacementRequirements.fromPartial({}),
    resources: []
  };
}
export const GroupSpec = {
  typeUrl: "/akash.deployment.v1beta1.GroupSpec",
  encode(message: GroupSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GroupSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupSpec {
    const obj = createBaseGroupSpec();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.requirements)) obj.requirements = PlacementRequirements.fromJSON(object.requirements);
    if (Array.isArray(object?.resources)) obj.resources = object.resources.map((e: any) => Resource.fromJSON(e));
    return obj;
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
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromPartial(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GroupSpecSDKType): GroupSpec {
    return {
      name: object?.name,
      requirements: object.requirements ? PlacementRequirements.fromSDK(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDK(e)) : []
    };
  },
  toSDK(message: GroupSpec): GroupSpecSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.requirements !== undefined && (obj.requirements = message.requirements ? PlacementRequirements.toSDK(message.requirements) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toSDK(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAmino(object: GroupSpecAmino): GroupSpec {
    const message = createBaseGroupSpec();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromAmino(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupSpec, useInterfaces: boolean = true): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements, useInterfaces) : undefined;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromProtoMsg(message: GroupSpecProtoMsg, useInterfaces: boolean = true): GroupSpec {
    return GroupSpec.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GroupSpec): Uint8Array {
    return GroupSpec.encode(message).finish();
  },
  toProtoMsg(message: GroupSpec): GroupSpecProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.GroupSpec",
      value: GroupSpec.encode(message).finish()
    };
  }
};
function createBaseGroup(): Group {
  return {
    groupId: GroupID.fromPartial({}),
    state: 0,
    groupSpec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0)
  };
}
export const Group = {
  typeUrl: "/akash.deployment.v1beta1.Group",
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
  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId ? GroupID.toJSON(message.groupId) : undefined);
    message.state !== undefined && (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined && (obj.groupSpec = message.groupSpec ? GroupSpec.toJSON(message.groupSpec) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
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
      message.state = group_StateFromJSON(object.state);
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
    obj.group_id = message.groupId ? GroupID.toAmino(message.groupId, useInterfaces) : undefined;
    obj.state = group_StateToJSON(message.state);
    obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec, useInterfaces) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
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
      typeUrl: "/akash.deployment.v1beta1.Group",
      value: Group.encode(message).finish()
    };
  }
};
function createBaseResource(): Resource {
  return {
    resources: ResourceUnits.fromPartial({}),
    count: 0,
    price: Coin.fromPartial({})
  };
}
export const Resource = {
  typeUrl: "/akash.deployment.v1beta1.Resource",
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Resource {
    const obj = createBaseResource();
    if (isSet(object.resources)) obj.resources = ResourceUnits.fromJSON(object.resources);
    if (isSet(object.count)) obj.count = Number(object.count);
    if (isSet(object.price)) obj.price = Coin.fromJSON(object.price);
    return obj;
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
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromPartial(object.resources);
    }
    message.count = object.count ?? 0;
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    }
    return message;
  },
  fromSDK(object: ResourceSDKType): Resource {
    return {
      resources: object.resources ? ResourceUnits.fromSDK(object.resources) : undefined,
      count: object?.count,
      price: object.price ? Coin.fromSDK(object.price) : undefined
    };
  },
  toSDK(message: Resource): ResourceSDKType {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? ResourceUnits.toSDK(message.resources) : undefined);
    obj.count = message.count;
    message.price !== undefined && (obj.price = message.price ? Coin.toSDK(message.price) : undefined);
    return obj;
  },
  fromAmino(object: ResourceAmino): Resource {
    const message = createBaseResource();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: Resource, useInterfaces: boolean = true): ResourceAmino {
    const obj: any = {};
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources, useInterfaces) : undefined;
    obj.count = message.count;
    obj.price = message.price ? Coin.toAmino(message.price, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ResourceProtoMsg, useInterfaces: boolean = true): Resource {
    return Resource.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Resource",
      value: Resource.encode(message).finish()
    };
  }
};