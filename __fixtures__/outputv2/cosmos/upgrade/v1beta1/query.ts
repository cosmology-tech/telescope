import { Plan, PlanAmino, PlanSDKType, ModuleVersion, ModuleVersionAmino, ModuleVersionSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {}

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestAmino {}
export interface QueryCurrentPlanRequestAminoType {
  type: "cosmos-sdk/QueryCurrentPlanRequest";
  value: QueryCurrentPlanRequestAmino;
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestSDKType {}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: Plan;
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseAmino {
  /** plan is the current upgrade plan. */
  plan?: PlanAmino;
}
export interface QueryCurrentPlanResponseAminoType {
  type: "cosmos-sdk/QueryCurrentPlanResponse";
  value: QueryCurrentPlanResponseAmino;
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseSDKType {
  plan?: PlanSDKType;
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
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestAmino {
  /** name is the name of the applied plan to query for. */
  name: string;
}
export interface QueryAppliedPlanRequestAminoType {
  type: "cosmos-sdk/QueryAppliedPlanRequest";
  value: QueryAppliedPlanRequestAmino;
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestSDKType {
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
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseAmino {
  /** height is the block height at which the plan was applied. */
  height: string;
}
export interface QueryAppliedPlanResponseAminoType {
  type: "cosmos-sdk/QueryAppliedPlanResponse";
  value: QueryAppliedPlanResponseAmino;
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseSDKType {
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
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */
export interface QueryUpgradedConsensusStateRequestAmino {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  last_height: string;
}
export interface QueryUpgradedConsensusStateRequestAminoType {
  type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
  value: QueryUpgradedConsensusStateRequestAmino;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */
export interface QueryUpgradedConsensusStateRequestSDKType {
  last_height: Long;
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
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */
export interface QueryUpgradedConsensusStateResponseAmino {
  /** Since: cosmos-sdk 0.43 */
  upgraded_consensus_state: Uint8Array;
}
export interface QueryUpgradedConsensusStateResponseAminoType {
  type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
  value: QueryUpgradedConsensusStateResponseAmino;
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */
export interface QueryUpgradedConsensusStateResponseSDKType {
  upgraded_consensus_state: Uint8Array;
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
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequestAmino {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  module_name: string;
}
export interface QueryModuleVersionsRequestAminoType {
  type: "cosmos-sdk/QueryModuleVersionsRequest";
  value: QueryModuleVersionsRequestAmino;
}

/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequestSDKType {
  module_name: string;
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

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponseAmino {
  /** module_versions is a list of module names with their consensus versions. */
  module_versions: ModuleVersionAmino[];
}
export interface QueryModuleVersionsResponseAminoType {
  type: "cosmos-sdk/QueryModuleVersionsResponse";
  value: QueryModuleVersionsResponseAmino;
}

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponseSDKType {
  module_versions: ModuleVersionSDKType[];
}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequestAmino {}
export interface QueryAuthorityRequestAminoType {
  type: "cosmos-sdk/QueryAuthorityRequest";
  value: QueryAuthorityRequestAmino;
}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequestSDKType {}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
  address: string;
}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponseAmino {
  address: string;
}
export interface QueryAuthorityResponseAminoType {
  type: "cosmos-sdk/QueryAuthorityResponse";
  value: QueryAuthorityResponseAmino;
}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponseSDKType {
  address: string;
}

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}

export const QueryCurrentPlanRequest = {
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

  fromPartial(_: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },

  fromSDK(_: QueryCurrentPlanRequestSDKType): QueryCurrentPlanRequest {
    return {};
  },

  toSDK(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryCurrentPlanRequestAmino): QueryCurrentPlanRequest {
    return {};
  },

  toAmino(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return {
    plan: undefined
  };
}

export const QueryCurrentPlanResponse = {
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

  fromPartial(object: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },

  fromSDK(object: QueryCurrentPlanResponseSDKType): QueryCurrentPlanResponse {
    return {
      plan: object.plan ? Plan.fromSDK(object.plan) : undefined
    };
  },

  toSDK(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseSDKType {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toSDK(message.plan) : undefined);
    return obj;
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
  }

};

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return {
    name: ""
  };
}

export const QueryAppliedPlanRequest = {
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

  fromPartial(object: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },

  fromSDK(object: QueryAppliedPlanRequestSDKType): QueryAppliedPlanRequest {
    return {
      name: object?.name
    };
  },

  toSDK(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
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
  }

};

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return {
    height: Long.ZERO
  };
}

export const QueryAppliedPlanResponse = {
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

  fromPartial(object: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryAppliedPlanResponseSDKType): QueryAppliedPlanResponse {
    return {
      height: object?.height
    };
  },

  toSDK(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
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
  }

};

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {
    lastHeight: Long.ZERO
  };
}

export const QueryUpgradedConsensusStateRequest = {
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

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? Long.fromValue(object.lastHeight) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryUpgradedConsensusStateRequestSDKType): QueryUpgradedConsensusStateRequest {
    return {
      lastHeight: object?.last_height
    };
  },

  toSDK(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestSDKType {
    const obj: any = {};
    obj.last_height = message.lastHeight;
    return obj;
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
  }

};

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}

export const QueryUpgradedConsensusStateResponse = {
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

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QueryUpgradedConsensusStateResponseSDKType): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object?.upgraded_consensus_state
    };
  },

  toSDK(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseSDKType {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState;
    return obj;
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
  }

};

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return {
    moduleName: ""
  };
}

export const QueryModuleVersionsRequest = {
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

  fromPartial(object: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },

  fromSDK(object: QueryModuleVersionsRequestSDKType): QueryModuleVersionsRequest {
    return {
      moduleName: object?.module_name
    };
  },

  toSDK(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestSDKType {
    const obj: any = {};
    obj.module_name = message.moduleName;
    return obj;
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
  }

};

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return {
    moduleVersions: []
  };
}

export const QueryModuleVersionsResponse = {
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

  fromPartial(object: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryModuleVersionsResponseSDKType): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.module_versions) ? object.module_versions.map((e: any) => ModuleVersion.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseSDKType {
    const obj: any = {};

    if (message.moduleVersions) {
      obj.module_versions = message.moduleVersions.map(e => e ? ModuleVersion.toSDK(e) : undefined);
    } else {
      obj.module_versions = [];
    }

    return obj;
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
  }

};

function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return {};
}

export const QueryAuthorityRequest = {
  encode(_: QueryAuthorityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();

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

  fromJSON(_: any): QueryAuthorityRequest {
    return {};
  },

  toJSON(_: QueryAuthorityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },

  fromSDK(_: QueryAuthorityRequestSDKType): QueryAuthorityRequest {
    return {};
  },

  toSDK(_: QueryAuthorityRequest): QueryAuthorityRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryAuthorityRequestAmino): QueryAuthorityRequest {
    return {};
  },

  toAmino(_: QueryAuthorityRequest): QueryAuthorityRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return {
    address: ""
  };
}

export const QueryAuthorityResponse = {
  encode(message: QueryAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAuthorityResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAuthorityResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },

  fromSDK(object: QueryAuthorityResponseSDKType): QueryAuthorityResponse {
    return {
      address: object?.address
    };
  },

  toSDK(message: QueryAuthorityResponse): QueryAuthorityResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },

  fromAmino(object: QueryAuthorityResponseAmino): QueryAuthorityResponse {
    return {
      address: object.address
    };
  },

  toAmino(message: QueryAuthorityResponse): QueryAuthorityResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};