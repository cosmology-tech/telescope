import { MerklePrefix, MerklePrefixSDKType } from "../../commitment/v1/commitment";
import { Long, isSet, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.connection.v1";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A connection end has just started the opening handshake. */
  STATE_INIT = 1,
  /**
   * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
   * chain.
   */
  STATE_TRYOPEN = 2,
  /** STATE_OPEN - A connection end has completed the handshake. */
  STATE_OPEN = 3,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEnd {
  /** client associated with this connection. */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty: Counterparty;
  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   */
  delayPeriod: Long;
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEndSDKType {
  client_id: string;
  versions: VersionSDKType[];
  state: State;
  counterparty: CounterpartySDKType;
  delay_period: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
  /** connection identifier. */
  id: string;
  /** client associated with this connection. */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty: Counterparty;
  /** delay period associated with this connection. */
  delayPeriod: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnectionSDKType {
  id: string;
  client_id: string;
  versions: VersionSDKType[];
  state: State;
  counterparty: CounterpartySDKType;
  delay_period: Long;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  clientId: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connectionId: string;
  /** commitment merkle prefix of the counterparty chain. */
  prefix: MerklePrefix;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface CounterpartySDKType {
  client_id: string;
  connection_id: string;
  prefix: MerklePrefixSDKType;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
  /** list of connection paths */
  paths: string[];
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPathsSDKType {
  paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
  /** client state unique identifier */
  clientId: string;
  /** list of connection paths */
  paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPathsSDKType {
  client_id: string;
  paths: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
  /** unique version identifier */
  identifier: string;
  /** list of features compatible with the specified identifier */
  features: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface VersionSDKType {
  identifier: string;
  features: string[];
}
/** Params defines the set of Connection parameters. */
export interface Params {
  /**
   * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
   * largest amount of time that the chain might reasonably take to produce the next block under normal operating
   * conditions. A safe choice is 3-5x the expected time per block.
   */
  maxExpectedTimePerBlock: Long;
}
/** Params defines the set of Connection parameters. */
export interface ParamsSDKType {
  max_expected_time_per_block: Long;
}
function createBaseConnectionEnd(): ConnectionEnd {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: Long.UZERO
  };
}
export const ConnectionEnd = {
  encode(message: ConnectionEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionEnd {
    const obj = createBaseConnectionEnd();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.versions)) object.versions.map((e: any) => Version.fromJSON(e));
    if (isSet(object.state)) obj.state = stateFromJSON(object.state);
    if (isSet(object.counterparty)) obj.counterparty = Counterparty.fromJSON(object.counterparty);
    if (isSet(object.delayPeriod)) obj.delayPeriod = Long.fromValue(object.delayPeriod);
    return obj;
  },
  toJSON(message: ConnectionEnd): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectionEnd>): ConnectionEnd {
    const message = createBaseConnectionEnd();
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromPartial(object.counterparty);
    }
    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = Long.fromValue(object.delayPeriod);
    }
    return message;
  },
  fromSDK(object: ConnectionEndSDKType): ConnectionEnd {
    return {
      clientId: object?.client_id,
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromSDK(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      delayPeriod: object?.delay_period
    };
  },
  toSDK(message: ConnectionEnd): ConnectionEndSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toSDK(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toSDK(message.counterparty) : undefined);
    obj.delay_period = message.delayPeriod;
    return obj;
  }
};
function createBaseIdentifiedConnection(): IdentifiedConnection {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: Long.UZERO
  };
}
export const IdentifiedConnection = {
  encode(message: IdentifiedConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedConnection {
    const obj = createBaseIdentifiedConnection();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.versions)) object.versions.map((e: any) => Version.fromJSON(e));
    if (isSet(object.state)) obj.state = stateFromJSON(object.state);
    if (isSet(object.counterparty)) obj.counterparty = Counterparty.fromJSON(object.counterparty);
    if (isSet(object.delayPeriod)) obj.delayPeriod = Long.fromValue(object.delayPeriod);
    return obj;
  },
  toJSON(message: IdentifiedConnection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedConnection>): IdentifiedConnection {
    const message = createBaseIdentifiedConnection();
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromPartial(object.counterparty);
    }
    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = Long.fromValue(object.delayPeriod);
    }
    return message;
  },
  fromSDK(object: IdentifiedConnectionSDKType): IdentifiedConnection {
    return {
      id: object?.id,
      clientId: object?.client_id,
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromSDK(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      delayPeriod: object?.delay_period
    };
  },
  toSDK(message: IdentifiedConnection): IdentifiedConnectionSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.client_id = message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toSDK(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toSDK(message.counterparty) : undefined);
    obj.delay_period = message.delayPeriod;
    return obj;
  }
};
function createBaseCounterparty(): Counterparty {
  return {
    clientId: "",
    connectionId: "",
    prefix: MerklePrefix.fromPartial({})
  };
}
export const Counterparty = {
  encode(message: Counterparty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== undefined) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Counterparty {
    const obj = createBaseCounterparty();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.prefix)) obj.prefix = MerklePrefix.fromJSON(object.prefix);
    return obj;
  },
  toJSON(message: Counterparty): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.prefix !== undefined && (obj.prefix = message.prefix ? MerklePrefix.toJSON(message.prefix) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.clientId = object.clientId ?? "";
    message.connectionId = object.connectionId ?? "";
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = MerklePrefix.fromPartial(object.prefix);
    }
    return message;
  },
  fromSDK(object: CounterpartySDKType): Counterparty {
    return {
      clientId: object?.client_id,
      connectionId: object?.connection_id,
      prefix: object.prefix ? MerklePrefix.fromSDK(object.prefix) : undefined
    };
  },
  toSDK(message: Counterparty): CounterpartySDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.connection_id = message.connectionId;
    message.prefix !== undefined && (obj.prefix = message.prefix ? MerklePrefix.toSDK(message.prefix) : undefined);
    return obj;
  }
};
function createBaseClientPaths(): ClientPaths {
  return {
    paths: []
  };
}
export const ClientPaths = {
  encode(message: ClientPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientPaths {
    const obj = createBaseClientPaths();
    if (Array.isArray(object?.paths)) object.paths.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ClientPaths): unknown {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClientPaths>): ClientPaths {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ClientPathsSDKType): ClientPaths {
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => e) : []
    };
  },
  toSDK(message: ClientPaths): ClientPathsSDKType {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }
    return obj;
  }
};
function createBaseConnectionPaths(): ConnectionPaths {
  return {
    clientId: "",
    paths: []
  };
}
export const ConnectionPaths = {
  encode(message: ConnectionPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionPaths {
    const obj = createBaseConnectionPaths();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.paths)) object.paths.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ConnectionPaths): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectionPaths>): ConnectionPaths {
    const message = createBaseConnectionPaths();
    message.clientId = object.clientId ?? "";
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ConnectionPathsSDKType): ConnectionPaths {
    return {
      clientId: object?.client_id,
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => e) : []
    };
  },
  toSDK(message: ConnectionPaths): ConnectionPathsSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }
    return obj;
  }
};
function createBaseVersion(): Version {
  return {
    identifier: "",
    features: []
  };
}
export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Version {
    const obj = createBaseVersion();
    if (isSet(object.identifier)) obj.identifier = String(object.identifier);
    if (Array.isArray(object?.features)) object.features.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Version): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    if (message.features) {
      obj.features = message.features.map(e => e);
    } else {
      obj.features = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map(e => e) || [];
    return message;
  },
  fromSDK(object: VersionSDKType): Version {
    return {
      identifier: object?.identifier,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => e) : []
    };
  },
  toSDK(message: Version): VersionSDKType {
    const obj: any = {};
    obj.identifier = message.identifier;
    if (message.features) {
      obj.features = message.features.map(e => e);
    } else {
      obj.features = [];
    }
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    maxExpectedTimePerBlock: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxExpectedTimePerBlock.isZero()) {
      writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExpectedTimePerBlock = (reader.uint64() as Long);
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
    if (isSet(object.maxExpectedTimePerBlock)) obj.maxExpectedTimePerBlock = Long.fromValue(object.maxExpectedTimePerBlock);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxExpectedTimePerBlock !== undefined && (obj.maxExpectedTimePerBlock = (message.maxExpectedTimePerBlock || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    if (object.maxExpectedTimePerBlock !== undefined && object.maxExpectedTimePerBlock !== null) {
      message.maxExpectedTimePerBlock = Long.fromValue(object.maxExpectedTimePerBlock);
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      maxExpectedTimePerBlock: object?.max_expected_time_per_block
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.max_expected_time_per_block = message.maxExpectedTimePerBlock;
    return obj;
  }
};