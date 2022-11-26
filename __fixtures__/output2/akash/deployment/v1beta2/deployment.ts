//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/** State is an enum which refers to state of deployment */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,

  /** active - DeploymentActive denotes state for deployment active */
  active = 1,

  /** closed - DeploymentClosed denotes state for deployment closed */
  closed = 2,
  UNRECOGNIZED = -1,
}
export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;

    case 1:
    case "active":
      return Deployment_State.active;

    case 2:
    case "closed":
      return Deployment_State.closed;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}
export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";

    case Deployment_State.active:
      return "active";

    case Deployment_State.closed:
      return "closed";

    case Deployment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: Long;
}

/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId?: DeploymentID;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: Long;
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: Long;
  state: string;
}

function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: Long.UZERO
  };
}

export const DeploymentID = {
  encode(message: DeploymentID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeploymentID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO
    };
  },

  toJSON(message: DeploymentID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    return message;
  },

  fromAmino(object: DeploymentIDSDKType): DeploymentID {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      dseq: isSet(object.dseq) ? object.dseq : undefined
    };
  },

  toAmino(message: DeploymentID): DeploymentIDSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = message.dseq);
    return obj;
  }

};

function createBaseDeployment(): Deployment {
  return {
    deploymentId: undefined,
    state: 0,
    version: new Uint8Array(),
    createdAt: Long.ZERO
  };
}

export const Deployment = {
  encode(message: Deployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deploymentId = DeploymentID.decode(reader, reader.uint32());
          break;

        case 2:
          message.state = (reader.int32() as any);
          break;

        case 3:
          message.version = reader.bytes();
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

  fromJSON(object: any): Deployment {
    return {
      deploymentId: isSet(object.deploymentId) ? DeploymentID.fromJSON(object.deploymentId) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO
    };
  },

  toJSON(message: Deployment): unknown {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deploymentId = message.deploymentId ? DeploymentID.toJSON(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.deploymentId = object.deploymentId !== undefined && object.deploymentId !== null ? DeploymentID.fromPartial(object.deploymentId) : undefined;
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  },

  fromAmino(object: DeploymentSDKType): Deployment {
    return {
      deploymentId: isSet(object.deployment_id) ? DeploymentID.fromAmino(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: isSet(object.version) ? object.version : undefined,
      createdAt: isSet(object.created_at) ? object.created_at : undefined
    };
  },

  toAmino(message: Deployment): DeploymentSDKType {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined && (obj.version = message.version);
    message.createdAt !== undefined && (obj.created_at = message.createdAt);
    return obj;
  }

};

function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: Long.UZERO,
    state: ""
  };
}

export const DeploymentFilters = {
  encode(message: DeploymentFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();

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
          message.state = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeploymentFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      state: isSet(object.state) ? String(object.state) : ""
    };
  },

  toJSON(message: DeploymentFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.state = object.state ?? "";
    return message;
  },

  fromAmino(object: DeploymentFiltersSDKType): DeploymentFilters {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      dseq: isSet(object.dseq) ? object.dseq : undefined,
      state: isSet(object.state) ? object.state : undefined
    };
  },

  toAmino(message: DeploymentFilters): DeploymentFiltersSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = message.dseq);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  }

};