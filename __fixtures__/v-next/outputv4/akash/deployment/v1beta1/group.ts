import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Exact } from "../../../helpers";
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
  id: GroupID | undefined;
}
export interface MsgCloseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup";
  value: Uint8Array;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupAmino {
  id?: GroupIDAmino | undefined;
}
export interface MsgCloseGroupAminoMsg {
  type: "akash/deployment/testonly-close-group";
  value: MsgCloseGroupAmino;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
  id: GroupIDSDKType | undefined;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}
export interface MsgCloseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse";
  value: Uint8Array;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseAmino {}
export interface MsgCloseGroupResponseAminoMsg {
  type: "akash/deployment/testonly-close-group-response";
  value: MsgCloseGroupResponseAmino;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id: GroupID | undefined;
}
export interface MsgPauseGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup";
  value: Uint8Array;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupAmino {
  id?: GroupIDAmino | undefined;
}
export interface MsgPauseGroupAminoMsg {
  type: "akash/deployment/testonly-pause-group";
  value: MsgPauseGroupAmino;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
  id: GroupIDSDKType | undefined;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}
export interface MsgPauseGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse";
  value: Uint8Array;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseAmino {}
export interface MsgPauseGroupResponseAminoMsg {
  type: "akash/deployment/testonly-pause-group-response";
  value: MsgPauseGroupResponseAmino;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id: GroupID | undefined;
}
export interface MsgStartGroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroup";
  value: Uint8Array;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupAmino {
  id?: GroupIDAmino | undefined;
}
export interface MsgStartGroupAminoMsg {
  type: "akash/deployment/testonly-start-group";
  value: MsgStartGroupAmino;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
  id: GroupIDSDKType | undefined;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}
export interface MsgStartGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse";
  value: Uint8Array;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseAmino {}
export interface MsgStartGroupResponseAminoMsg {
  type: "akash/deployment/testonly-start-group-response";
  value: MsgStartGroupResponseAmino;
}
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
  owner: string;
  dseq: string;
  gseq: number;
}
export interface GroupIDAminoMsg {
  type: "akash/deployment/group-i-d";
  value: GroupIDAmino;
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
  requirements: PlacementRequirements | undefined;
  resources: Resource[];
}
export interface GroupSpecProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.GroupSpec";
  value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
  name: string;
  requirements?: PlacementRequirementsAmino | undefined;
  resources: ResourceAmino[];
}
export interface GroupSpecAminoMsg {
  type: "akash/deployment/group-spec";
  value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
  name: string;
  requirements: PlacementRequirementsSDKType | undefined;
  resources: ResourceSDKType[];
}
/** Group stores group id, state and specifications of group */
export interface Group {
  groupId: GroupID | undefined;
  state: Group_State;
  groupSpec: GroupSpec | undefined;
  createdAt: bigint;
}
export interface GroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Group";
  value: Uint8Array;
}
/** Group stores group id, state and specifications of group */
export interface GroupAmino {
  group_id?: GroupIDAmino | undefined;
  state: Group_State;
  group_spec?: GroupSpecAmino | undefined;
  created_at: string;
}
export interface GroupAminoMsg {
  type: "akash/deployment/group";
  value: GroupAmino;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
  group_id: GroupIDSDKType | undefined;
  state: Group_State;
  group_spec: GroupSpecSDKType | undefined;
  created_at: bigint;
}
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources: ResourceUnits | undefined;
  count: number;
  price: Coin | undefined;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Resource";
  value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
  resources?: ResourceUnitsAmino | undefined;
  count: number;
  price?: CoinAmino | undefined;
}
export interface ResourceAminoMsg {
  type: "akash/deployment/resource";
  value: ResourceAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources: ResourceUnitsSDKType | undefined;
  count: number;
  price: CoinSDKType | undefined;
}
function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: GroupID.fromPartial({})
  };
}
export const MsgCloseGroup = {
  encode(message: MsgCloseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<MsgCloseGroup>, I>>(object: I): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromSDK(object: MsgCloseGroupSDKType): MsgCloseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCloseGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseGroup): MsgCloseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseGroupAmino): MsgCloseGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: MsgCloseGroup): MsgCloseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseGroupAminoMsg): MsgCloseGroup {
    return MsgCloseGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseGroup): MsgCloseGroupAminoMsg {
    return {
      type: "akash/deployment/testonly-close-group",
      value: MsgCloseGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseGroupProtoMsg): MsgCloseGroup {
    return MsgCloseGroup.decode(message.value);
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
  encode(_: MsgCloseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseGroupResponse {
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
    return {};
  },
  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCloseGroupResponse>, I>>(_: I): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },
  fromSDK(_: MsgCloseGroupResponseSDKType): MsgCloseGroupResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCloseGroupResponseSDKType {
    return {};
  },
  toSDK(_: MsgCloseGroupResponse): MsgCloseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseGroupResponseAmino): MsgCloseGroupResponse {
    return {};
  },
  toAmino(_: MsgCloseGroupResponse): MsgCloseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseGroupResponseAminoMsg): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseGroupResponse): MsgCloseGroupResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-close-group-response",
      value: MsgCloseGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseGroupResponseProtoMsg): MsgCloseGroupResponse {
    return MsgCloseGroupResponse.decode(message.value);
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
  encode(message: MsgPauseGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<MsgPauseGroup>, I>>(object: I): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromSDK(object: MsgPauseGroupSDKType): MsgPauseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgPauseGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: MsgPauseGroup): MsgPauseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgPauseGroupAmino): MsgPauseGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: MsgPauseGroup): MsgPauseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPauseGroupAminoMsg): MsgPauseGroup {
    return MsgPauseGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPauseGroup): MsgPauseGroupAminoMsg {
    return {
      type: "akash/deployment/testonly-pause-group",
      value: MsgPauseGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPauseGroupProtoMsg): MsgPauseGroup {
    return MsgPauseGroup.decode(message.value);
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
  encode(_: MsgPauseGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseGroupResponse {
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
    return {};
  },
  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgPauseGroupResponse>, I>>(_: I): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },
  fromSDK(_: MsgPauseGroupResponseSDKType): MsgPauseGroupResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgPauseGroupResponseSDKType {
    return {};
  },
  toSDK(_: MsgPauseGroupResponse): MsgPauseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPauseGroupResponseAmino): MsgPauseGroupResponse {
    return {};
  },
  toAmino(_: MsgPauseGroupResponse): MsgPauseGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPauseGroupResponseAminoMsg): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPauseGroupResponse): MsgPauseGroupResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-pause-group-response",
      value: MsgPauseGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPauseGroupResponseProtoMsg): MsgPauseGroupResponse {
    return MsgPauseGroupResponse.decode(message.value);
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
  encode(message: MsgStartGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<MsgStartGroup>, I>>(object: I): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromSDK(object: MsgStartGroupSDKType): MsgStartGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgStartGroupSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: MsgStartGroup): MsgStartGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgStartGroupAmino): MsgStartGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: MsgStartGroup): MsgStartGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStartGroupAminoMsg): MsgStartGroup {
    return MsgStartGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStartGroup): MsgStartGroupAminoMsg {
    return {
      type: "akash/deployment/testonly-start-group",
      value: MsgStartGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStartGroupProtoMsg): MsgStartGroup {
    return MsgStartGroup.decode(message.value);
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
  encode(_: MsgStartGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartGroupResponse {
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
    return {};
  },
  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgStartGroupResponse>, I>>(_: I): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },
  fromSDK(_: MsgStartGroupResponseSDKType): MsgStartGroupResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgStartGroupResponseSDKType {
    return {};
  },
  toSDK(_: MsgStartGroupResponse): MsgStartGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStartGroupResponseAmino): MsgStartGroupResponse {
    return {};
  },
  toAmino(_: MsgStartGroupResponse): MsgStartGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStartGroupResponseAminoMsg): MsgStartGroupResponse {
    return MsgStartGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStartGroupResponse): MsgStartGroupResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-start-group-response",
      value: MsgStartGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStartGroupResponseProtoMsg): MsgStartGroupResponse {
    return MsgStartGroupResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GroupID {
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
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  },
  toJSON(message: GroupID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    return obj;
  },
  fromPartial<I extends Exact<Partial<GroupID>, I>>(object: I): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
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
  fromSDKJSON(object: any): GroupIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
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
    return {
      owner: object.owner,
      dseq: BigInt(object.dseq),
      gseq: object.gseq
    };
  },
  toAmino(message: GroupID): GroupIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    return obj;
  },
  fromAminoMsg(object: GroupIDAminoMsg): GroupID {
    return GroupID.fromAmino(object.value);
  },
  toAminoMsg(message: GroupID): GroupIDAminoMsg {
    return {
      type: "akash/deployment/group-i-d",
      value: GroupID.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupIDProtoMsg): GroupID {
    return GroupID.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GroupSpec {
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
  fromPartial<I extends Exact<Partial<GroupSpec>, I>>(object: I): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
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
  fromSDKJSON(object: any): GroupSpecSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements) ? PlacementRequirements.fromSDKJSON(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDKJSON(e)) : []
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
    return {
      name: object.name,
      requirements: object?.requirements ? PlacementRequirements.fromAmino(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromAmino(e)) : []
    };
  },
  toAmino(message: GroupSpec): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : undefined;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec {
    return GroupSpec.fromAmino(object.value);
  },
  toAminoMsg(message: GroupSpec): GroupSpecAminoMsg {
    return {
      type: "akash/deployment/group-spec",
      value: GroupSpec.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec {
    return GroupSpec.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      groupId: isSet(object.groupId) ? GroupID.fromJSON(object.groupId) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : -1,
      groupSpec: isSet(object.groupSpec) ? GroupSpec.fromJSON(object.groupSpec) : undefined,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId ? GroupID.toJSON(message.groupId) : undefined);
    message.state !== undefined && (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined && (obj.groupSpec = message.groupSpec ? GroupSpec.toJSON(message.groupSpec) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<Partial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? GroupID.fromPartial(object.groupId) : undefined;
    message.state = object.state ?? 0;
    message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
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
  fromSDKJSON(object: any): GroupSDKType {
    return {
      group_id: isSet(object.group_id) ? GroupID.fromSDKJSON(object.group_id) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : -1,
      group_spec: isSet(object.group_spec) ? GroupSpec.fromSDKJSON(object.group_spec) : undefined,
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0)
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
    return {
      groupId: object?.group_id ? GroupID.fromAmino(object.group_id) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : -1,
      groupSpec: object?.group_spec ? GroupSpec.fromAmino(object.group_spec) : undefined,
      createdAt: BigInt(object.created_at)
    };
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? GroupID.toAmino(message.groupId) : undefined;
    obj.state = message.state;
    obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  toAminoMsg(message: Group): GroupAminoMsg {
    return {
      type: "akash/deployment/group",
      value: Group.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromSDK(object: ResourceSDKType): Resource {
    return {
      resources: object.resources ? ResourceUnits.fromSDK(object.resources) : undefined,
      count: object?.count,
      price: object.price ? Coin.fromSDK(object.price) : undefined
    };
  },
  fromSDKJSON(object: any): ResourceSDKType {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromSDKJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? Coin.fromSDKJSON(object.price) : undefined
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
    return {
      resources: object?.resources ? ResourceUnits.fromAmino(object.resources) : undefined,
      count: object.count,
      price: object?.price ? Coin.fromAmino(object.price) : undefined
    };
  },
  toAmino(message: Resource): ResourceAmino {
    const obj: any = {};
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : undefined;
    obj.count = message.count;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResourceAminoMsg): Resource {
    return Resource.fromAmino(object.value);
  },
  toAminoMsg(message: Resource): ResourceAminoMsg {
    return {
      type: "akash/deployment/resource",
      value: Resource.toAmino(message)
    };
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
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