//@ts-nocheck
/* eslint-disable */
import { Plan, ModuleVersion } from "./upgrade";
import { Long, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan: Plan;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: Long;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: Long;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponse {
  /** Since: cosmos-sdk 0.43 */
  upgradedConsensusState: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  moduleName: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
  /** module_versions is a list of module names with their consensus versions. */
  moduleVersions: ModuleVersion[];
}
function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}
export const QueryCurrentPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
  encode(_: QueryCurrentPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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
  fromJSON(_: any): QueryCurrentPlanRequest {
    return {};
  },
  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
  fromAmino(_: QueryCurrentPlanRequestAmino): QueryCurrentPlanRequest {
    return {};
  },
  toAmino(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPlanRequestAminoMsg): QueryCurrentPlanRequest {
    return QueryCurrentPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentPlanRequest",
      value: QueryCurrentPlanRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentPlanRequestProtoMsg): QueryCurrentPlanRequest {
    return QueryCurrentPlanRequest.decode(message.value);
  },
  toProto(message: QueryCurrentPlanRequest): Uint8Array {
    return QueryCurrentPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
      value: QueryCurrentPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return {
    plan: Plan.fromPartial({})
  };
}
export const QueryCurrentPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
  encode(message: QueryCurrentPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentPlanResponse {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentPlanResponseAmino): QueryCurrentPlanResponse {
    return {
      plan: object?.plan ? Plan.fromAmino(object.plan) : undefined
    };
  },
  toAmino(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPlanResponseAminoMsg): QueryCurrentPlanResponse {
    return QueryCurrentPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentPlanResponse",
      value: QueryCurrentPlanResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentPlanResponseProtoMsg): QueryCurrentPlanResponse {
    return QueryCurrentPlanResponse.decode(message.value);
  },
  toProto(message: QueryCurrentPlanResponse): Uint8Array {
    return QueryCurrentPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
      value: QueryCurrentPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return {
    name: ""
  };
}
export const QueryAppliedPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
  encode(message: QueryAppliedPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
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
  fromJSON(object: any): QueryAppliedPlanRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryAppliedPlanRequestAmino): QueryAppliedPlanRequest {
    return {
      name: object.name
    };
  },
  toAmino(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: QueryAppliedPlanRequestAminoMsg): QueryAppliedPlanRequest {
    return QueryAppliedPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAppliedPlanRequest",
      value: QueryAppliedPlanRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAppliedPlanRequestProtoMsg): QueryAppliedPlanRequest {
    return QueryAppliedPlanRequest.decode(message.value);
  },
  toProto(message: QueryAppliedPlanRequest): Uint8Array {
    return QueryAppliedPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
      value: QueryAppliedPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return {
    height: Long.ZERO
  };
}
export const QueryAppliedPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
  encode(message: QueryAppliedPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppliedPlanResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: QueryAppliedPlanResponseAmino): QueryAppliedPlanResponse {
    return {
      height: Long.fromString(object.height)
    };
  },
  toAmino(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppliedPlanResponseAminoMsg): QueryAppliedPlanResponse {
    return QueryAppliedPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAppliedPlanResponse",
      value: QueryAppliedPlanResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAppliedPlanResponseProtoMsg): QueryAppliedPlanResponse {
    return QueryAppliedPlanResponse.decode(message.value);
  },
  toProto(message: QueryAppliedPlanResponse): Uint8Array {
    return QueryAppliedPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
      value: QueryAppliedPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {
    lastHeight: Long.ZERO
  };
}
export const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
  encode(message: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    return {
      lastHeight: isSet(object.lastHeight) ? Long.fromValue(object.lastHeight) : Long.ZERO
    };
  },
  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? Long.fromValue(object.lastHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest {
    return {
      lastHeight: Long.fromString(object.last_height)
    };
  },
  toAmino(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino {
    const obj: any = {};
    obj.last_height = message.lastHeight ? message.lastHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array {
    return QueryUpgradedConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}
export const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: isSet(object.upgradedConsensusState) ? bytesFromBase64(object.upgradedConsensusState) : new Uint8Array()
    };
  },
  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = base64FromBytes(message.upgradedConsensusState !== undefined ? message.upgradedConsensusState : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object.upgraded_consensus_state
    };
  },
  toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array {
    return QueryUpgradedConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return {
    moduleName: ""
  };
}
export const QueryModuleVersionsRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
  encode(message: QueryModuleVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleVersionsRequest {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : ""
    };
  },
  toJSON(message: QueryModuleVersionsRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },
  fromPartial(object: Partial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
  fromAmino(object: QueryModuleVersionsRequestAmino): QueryModuleVersionsRequest {
    return {
      moduleName: object.module_name
    };
  },
  toAmino(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAmino {
    const obj: any = {};
    obj.module_name = message.moduleName;
    return obj;
  },
  fromAminoMsg(object: QueryModuleVersionsRequestAminoMsg): QueryModuleVersionsRequest {
    return QueryModuleVersionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleVersionsRequest",
      value: QueryModuleVersionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryModuleVersionsRequestProtoMsg): QueryModuleVersionsRequest {
    return QueryModuleVersionsRequest.decode(message.value);
  },
  toProto(message: QueryModuleVersionsRequest): Uint8Array {
    return QueryModuleVersionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
      value: QueryModuleVersionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return {
    moduleVersions: []
  };
}
export const QueryModuleVersionsResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
  encode(message: QueryModuleVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.moduleVersions) ? object.moduleVersions.map((e: any) => ModuleVersion.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryModuleVersionsResponse): unknown {
    const obj: any = {};
    if (message.moduleVersions) {
      obj.moduleVersions = message.moduleVersions.map(e => e ? ModuleVersion.toJSON(e) : undefined);
    } else {
      obj.moduleVersions = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleVersionsResponseAmino): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.module_versions) ? object.module_versions.map((e: any) => ModuleVersion.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAmino {
    const obj: any = {};
    if (message.moduleVersions) {
      obj.module_versions = message.moduleVersions.map(e => e ? ModuleVersion.toAmino(e) : undefined);
    } else {
      obj.module_versions = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleVersionsResponseAminoMsg): QueryModuleVersionsResponse {
    return QueryModuleVersionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleVersionsResponse",
      value: QueryModuleVersionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryModuleVersionsResponseProtoMsg): QueryModuleVersionsResponse {
    return QueryModuleVersionsResponse.decode(message.value);
  },
  toProto(message: QueryModuleVersionsResponse): Uint8Array {
    return QueryModuleVersionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
      value: QueryModuleVersionsResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.ModuleVersions = this.ModuleVersions.bind(this);
  }
  CurrentPlan(request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }
  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }
  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }
}