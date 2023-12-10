import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, base64FromBytes } from "../../../helpers";
import { fromBase64 } from "@cosmjs/encoding";
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
export const Deployment_StateSDKType = Deployment_State;
export const Deployment_StateAmino = Deployment_State;
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
  dseq: bigint;
}
export interface DeploymentIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.DeploymentID";
  value: Uint8Array;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
  owner?: string;
  dseq?: string;
}
export interface DeploymentIDAminoMsg {
  type: "/akash.deployment.v1beta2.DeploymentID";
  value: DeploymentIDAmino;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
  owner: string;
  dseq: bigint;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId: DeploymentID;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: bigint;
}
export interface DeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Deployment";
  value: Uint8Array;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentAmino {
  deployment_id?: DeploymentIDAmino;
  state?: Deployment_State;
  version?: string;
  created_at?: string;
}
export interface DeploymentAminoMsg {
  type: "/akash.deployment.v1beta2.Deployment";
  value: DeploymentAmino;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
  deployment_id: DeploymentIDSDKType;
  state: Deployment_State;
  version: Uint8Array;
  created_at: bigint;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: bigint;
  state: string;
}
export interface DeploymentFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.DeploymentFilters";
  value: Uint8Array;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
  owner?: string;
  dseq?: string;
  state?: string;
}
export interface DeploymentFiltersAminoMsg {
  type: "/akash.deployment.v1beta2.DeploymentFilters";
  value: DeploymentFiltersAmino;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
  owner: string;
  dseq: bigint;
  state: string;
}
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
export const DeploymentID = {
  typeUrl: "/akash.deployment.v1beta2.DeploymentID",
  encode(message: DeploymentID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<DeploymentID>, I>>(object: I): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    return message;
  },
  fromAmino(object: DeploymentIDAmino): DeploymentID {
    const message = createBaseDeploymentID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    return message;
  },
  toAmino(message: DeploymentID): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentIDAminoMsg): DeploymentID {
    return DeploymentID.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentIDProtoMsg): DeploymentID {
    return DeploymentID.decode(message.value);
  },
  toProto(message: DeploymentID): Uint8Array {
    return DeploymentID.encode(message).finish();
  },
  toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.DeploymentID",
      value: DeploymentID.encode(message).finish()
    };
  }
};
function createBaseDeployment(): Deployment {
  return {
    deploymentId: DeploymentID.fromPartial({}),
    state: 0,
    version: new Uint8Array(),
    createdAt: BigInt(0)
  };
}
export const Deployment = {
  typeUrl: "/akash.deployment.v1beta2.Deployment",
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<Deployment>, I>>(object: I): Deployment {
    const message = createBaseDeployment();
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    }
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.deployment_id !== undefined && object.deployment_id !== null) {
      message.deploymentId = DeploymentID.fromAmino(object.deployment_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = deployment_StateFromJSON(object.state);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = fromBase64(object.version);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : undefined;
    obj.state = message.state;
    message.version !== undefined && (obj.version = base64FromBytes(message.version));
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentAminoMsg): Deployment {
    return Deployment.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentProtoMsg): Deployment {
    return Deployment.decode(message.value);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Deployment",
      value: Deployment.encode(message).finish()
    };
  }
};
function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    state: ""
  };
}
export const DeploymentFilters = {
  typeUrl: "/akash.deployment.v1beta2.DeploymentFilters",
  encode(message: DeploymentFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();
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
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<DeploymentFilters>, I>>(object: I): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: DeploymentFilters): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: DeploymentFiltersAminoMsg): DeploymentFilters {
    return DeploymentFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentFiltersProtoMsg): DeploymentFilters {
    return DeploymentFilters.decode(message.value);
  },
  toProto(message: DeploymentFilters): Uint8Array {
    return DeploymentFilters.encode(message).finish();
  },
  toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.DeploymentFilters",
      value: DeploymentFilters.encode(message).finish()
    };
  }
};