//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  deploymentId: DeploymentID;
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
    const obj = createBaseDeploymentID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = Long.fromValue(object.dseq);
    return obj;
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
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Long.fromValue(object.dseq);
    }
    return message;
  }
};
function createBaseDeployment(): Deployment {
  return {
    deploymentId: DeploymentID.fromPartial({}),
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
    const obj = createBaseDeployment();
    if (isSet(object.deploymentId)) obj.deploymentId = DeploymentID.fromJSON(object.deploymentId);
    if (isSet(object.state)) obj.state = deployment_StateFromJSON(object.state);
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.createdAt)) obj.createdAt = Long.fromValue(object.createdAt);
    return obj;
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
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    }
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Long.fromValue(object.createdAt);
    }
    return message;
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
    const obj = createBaseDeploymentFilters();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = Long.fromValue(object.dseq);
    if (isSet(object.state)) obj.state = String(object.state);
    return obj;
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
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Long.fromValue(object.dseq);
    }
    message.state = object.state ?? "";
    return message;
  }
};