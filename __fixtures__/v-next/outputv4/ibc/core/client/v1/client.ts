import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v1";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
  /** client identifier */
  clientId: string;
  /** client state */
  clientState: Any;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateSDKType {
  client_id: string;
  client_state: AnySDKType;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
  /** consensus state height */
  height: Height;
  /** consensus state */
  consensusState: Any;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightSDKType {
  height: HeightSDKType;
  consensus_state: AnySDKType;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
  /** client identifier */
  clientId: string;
  /** consensus states and their heights associated with the client */
  consensusStates: ConsensusStateWithHeight[];
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesSDKType {
  client_id: string;
  consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  subjectClientId: string;
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   */
  substituteClientId: string;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposalSDKType {
  title: string;
  description: string;
  subject_client_id: string;
  substitute_client_id: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposal {
  title: string;
  description: string;
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   */
  upgradedClientState: Any;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposalSDKType {
  title: string;
  description: string;
  plan: PlanSDKType;
  upgraded_client_state: AnySDKType;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
  /** the revision that the client is currently on */
  revisionNumber: bigint;
  /** the height within the given revision */
  revisionHeight: bigint;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightSDKType {
  revision_number: bigint;
  revision_height: bigint;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
  /** allowed_clients defines the list of allowed client state types. */
  allowedClients: string[];
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsSDKType {
  allowed_clients: string[];
}
function createBaseIdentifiedClientState(): IdentifiedClientState {
  return {
    clientId: "",
    clientState: undefined
  };
}
export const IdentifiedClientState = {
  encode(message: IdentifiedClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedClientState {
    const obj = createBaseIdentifiedClientState();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    return obj;
  },
  toJSON(message: IdentifiedClientState): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedClientState>): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : Any.fromPartial({});
    return message;
  },
  fromSDK(object: IdentifiedClientStateSDKType): IdentifiedClientState {
    return {
      clientId: object?.client_id,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined
    };
  },
  fromSDKJSON(object: any): IdentifiedClientStateSDKType {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_state: isSet(object.client_state) ? Any.fromSDKJSON(object.client_state) : undefined
    };
  },
  toSDK(message: IdentifiedClientState): IdentifiedClientStateSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    return obj;
  }
};
function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return {
    height: Height.fromPartial({}),
    consensusState: undefined
  };
}
export const ConsensusStateWithHeight = {
  encode(message: ConsensusStateWithHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateWithHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusStateWithHeight {
    const obj = createBaseConsensusStateWithHeight();
    if (isSet(object.height)) obj.height = Height.fromJSON(object.height);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    return obj;
  },
  toJSON(message: ConsensusStateWithHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusStateWithHeight>): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : Height.fromPartial({});
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : Any.fromPartial({});
    return message;
  },
  fromSDK(object: ConsensusStateWithHeightSDKType): ConsensusStateWithHeight {
    return {
      height: object.height ? Height.fromSDK(object.height) : undefined,
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined
    };
  },
  fromSDKJSON(object: any): ConsensusStateWithHeightSDKType {
    return {
      height: isSet(object.height) ? Height.fromSDKJSON(object.height) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromSDKJSON(object.consensus_state) : undefined
    };
  },
  toSDK(message: ConsensusStateWithHeight): ConsensusStateWithHeightSDKType {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    return obj;
  }
};
function createBaseClientConsensusStates(): ClientConsensusStates {
  return {
    clientId: "",
    consensusStates: []
  };
}
export const ClientConsensusStates = {
  encode(message: ClientConsensusStates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientConsensusStates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientConsensusStates {
    const obj = createBaseClientConsensusStates();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.consensusStates)) object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e));
    return obj;
  },
  toJSON(message: ClientConsensusStates): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
    } else {
      obj.consensusStates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClientConsensusStates>): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.clientId = object.clientId ?? "";
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ClientConsensusStatesSDKType): ClientConsensusStates {
    return {
      clientId: object?.client_id,
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ClientConsensusStatesSDKType {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ClientConsensusStates): ClientConsensusStatesSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toSDK(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    return obj;
  }
};
function createBaseClientUpdateProposal(): ClientUpdateProposal {
  return {
    title: "",
    description: "",
    subjectClientId: "",
    substituteClientId: ""
  };
}
export const ClientUpdateProposal = {
  encode(message: ClientUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subjectClientId !== "") {
      writer.uint32(26).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(34).string(message.substituteClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.subjectClientId = reader.string();
          break;
        case 4:
          message.substituteClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientUpdateProposal {
    const obj = createBaseClientUpdateProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.subjectClientId)) obj.subjectClientId = String(object.subjectClientId);
    if (isSet(object.substituteClientId)) obj.substituteClientId = String(object.substituteClientId);
    return obj;
  },
  toJSON(message: ClientUpdateProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.subjectClientId !== undefined && (obj.subjectClientId = message.subjectClientId);
    message.substituteClientId !== undefined && (obj.substituteClientId = message.substituteClientId);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientUpdateProposal>): ClientUpdateProposal {
    const message = createBaseClientUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    return message;
  },
  fromSDK(object: ClientUpdateProposalSDKType): ClientUpdateProposal {
    return {
      title: object?.title,
      description: object?.description,
      subjectClientId: object?.subject_client_id,
      substituteClientId: object?.substitute_client_id
    };
  },
  fromSDKJSON(object: any): ClientUpdateProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
      substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : ""
    };
  },
  toSDK(message: ClientUpdateProposal): ClientUpdateProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.subject_client_id = message.subjectClientId;
    obj.substitute_client_id = message.substituteClientId;
    return obj;
  }
};
function createBaseUpgradeProposal(): UpgradeProposal {
  return {
    title: "",
    description: "",
    plan: Plan.fromPartial({}),
    upgradedClientState: undefined
  };
}
export const UpgradeProposal = {
  encode(message: UpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 4:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpgradeProposal {
    const obj = createBaseUpgradeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    return obj;
  },
  toJSON(message: UpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpgradeProposal>): UpgradeProposal {
    const message = createBaseUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : Plan.fromPartial({});
    message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : Any.fromPartial({});
    return message;
  },
  fromSDK(object: UpgradeProposalSDKType): UpgradeProposal {
    return {
      title: object?.title,
      description: object?.description,
      plan: object.plan ? Plan.fromSDK(object.plan) : undefined,
      upgradedClientState: object.upgraded_client_state ? Any.fromSDK(object.upgraded_client_state) : undefined
    };
  },
  fromSDKJSON(object: any): UpgradeProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plan: isSet(object.plan) ? Plan.fromSDKJSON(object.plan) : undefined,
      upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromSDKJSON(object.upgraded_client_state) : undefined
    };
  },
  toSDK(message: UpgradeProposal): UpgradeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toSDK(message.plan) : undefined);
    message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? Any.toSDK(message.upgradedClientState) : undefined);
    return obj;
  }
};
function createBaseHeight(): Height {
  return {
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
export const Height = {
  encode(message: Height, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Height {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;
        case 2:
          message.revisionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Height {
    const obj = createBaseHeight();
    if (isSet(object.revisionNumber)) obj.revisionNumber = BigInt(object.revisionNumber.toString());
    if (isSet(object.revisionHeight)) obj.revisionHeight = BigInt(object.revisionHeight.toString());
    return obj;
  },
  toJSON(message: Height): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Height>): Height {
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: HeightSDKType): Height {
    return {
      revisionNumber: object?.revision_number,
      revisionHeight: object?.revision_height
    };
  },
  fromSDKJSON(object: any): HeightSDKType {
    return {
      revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
      revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: Height): HeightSDKType {
    const obj: any = {};
    obj.revision_number = message.revisionNumber;
    obj.revision_height = message.revisionHeight;
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    allowedClients: []
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.allowedClients)) object.allowedClients.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowedClients = message.allowedClients.map(e => e);
    } else {
      obj.allowedClients = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.allowedClients = object.allowedClients?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      allowedClients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      allowed_clients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowed_clients = message.allowedClients.map(e => e);
    } else {
      obj.allowed_clients = [];
    }
    return obj;
  }
};