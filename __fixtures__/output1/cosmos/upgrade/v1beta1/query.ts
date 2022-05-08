import * as _m0 from "protobuf/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
import { Plan, ModuleVersion } from "./upgrade";
export interface QueryCurrentPlanRequest {}

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}

export const QueryCurrentPlanRequest = {
  encode(message: QueryCurrentPlanRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryCurrentPlanRequest {
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

  fromJSON(object: any): QueryCurrentPlanRequest {
    return {};
  },

  toJSON(message: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(object: I): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  }

};
export interface QueryCurrentPlanResponse {
  plan: Plan;
}

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return {
    plan: undefined
  };
}

export const QueryCurrentPlanResponse = {
  encode(message: QueryCurrentPlanResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryCurrentPlanResponse {
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

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(object: I): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  }

};
export interface QueryAppliedPlanRequest {
  name: string;
}

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return {
    name: ""
  };
}

export const QueryAppliedPlanRequest = {
  encode(message: QueryAppliedPlanRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryAppliedPlanRequest {
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

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(object: I): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface QueryAppliedPlanResponse {
  height: Long;
}

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return {
    height: Long.UZERO
  };
}

export const QueryAppliedPlanResponse = {
  encode(message: QueryAppliedPlanResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryAppliedPlanResponse {
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
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(object: I): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};
export interface QueryUpgradedConsensusStateRequest {
  lastHeight: Long;
}

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {
    lastHeight: Long.UZERO
  };
}

export const QueryUpgradedConsensusStateRequest = {
  encode(message: QueryUpgradedConsensusStateRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryUpgradedConsensusStateRequest {
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
      lastHeight: isSet(object.lastHeight) ? Long.fromString(object.lastHeight) : Long.ZERO
    };
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(object: I): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? Long.fromValue(object.lastHeight) : Long.ZERO;
    return message;
  }

};
export interface QueryUpgradedConsensusStateResponse {
  upgradedConsensusState: Uint8Array;
}

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}

export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryUpgradedConsensusStateResponse {
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

  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(object: I): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  }

};
export interface QueryModuleVersionsRequest {
  moduleName: string;
}

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return {
    moduleName: ""
  };
}

export const QueryModuleVersionsRequest = {
  encode(message: QueryModuleVersionsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryModuleVersionsRequest {
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

  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsRequest>, I>>(object: I): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  }

};
export interface QueryModuleVersionsResponse {
  moduleVersions: ModuleVersion[];
}

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return {
    moduleVersions: []
  };
}

export const QueryModuleVersionsResponse = {
  encode(message: QueryModuleVersionsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryModuleVersionsResponse {
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

  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsResponse>, I>>(object: I): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
    return message;
  }

};
export interface QueryAuthorityRequest {}

function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return {};
}

export const QueryAuthorityRequest = {
  encode(message: QueryAuthorityRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryAuthorityRequest {
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

  fromJSON(object: any): QueryAuthorityRequest {
    return {};
  },

  toJSON(message: QueryAuthorityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuthorityRequest>, I>>(object: I): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  }

};
export interface QueryAuthorityResponse {
  address: string;
}

function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return {
    address: ""
  };
}

export const QueryAuthorityResponse = {
  encode(message: QueryAuthorityResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryAuthorityResponse {
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

  fromPartial<I extends Exact<DeepPartial<QueryAuthorityResponse>, I>>(object: I): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  }

};