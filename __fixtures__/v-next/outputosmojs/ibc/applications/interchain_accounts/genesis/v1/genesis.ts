import { Params as Params1 } from "../../controller/v1/controller";
import { ParamsSDKType as Params1SDKType } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { ParamsSDKType as Params2SDKType } from "../../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.genesis.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
  controllerGenesisState?: ControllerGenesisState;
  hostGenesisState?: HostGenesisState;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateSDKType {
  controller_genesis_state?: ControllerGenesisStateSDKType;
  host_genesis_state?: HostGenesisStateSDKType;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  ports: string[];
  params?: Params1;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateSDKType {
  active_channels: ActiveChannelSDKType[];
  interchain_accounts: RegisteredInterchainAccountSDKType[];
  ports: string[];
  params?: Params1SDKType;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  port: string;
  params?: Params2;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateSDKType {
  active_channels: ActiveChannelSDKType[];
  interchain_accounts: RegisteredInterchainAccountSDKType[];
  port: string;
  params?: Params2SDKType;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
  connectionId: string;
  portId: string;
  channelId: string;
  isMiddlewareEnabled: boolean;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelSDKType {
  connection_id: string;
  port_id: string;
  channel_id: string;
  is_middleware_enabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
  connectionId: string;
  portId: string;
  accountAddress: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountSDKType {
  connection_id: string;
  port_id: string;
  account_address: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    controllerGenesisState: undefined,
    hostGenesisState: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerGenesisState !== undefined) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostGenesisState !== undefined) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      controllerGenesisState: isSet(object.controllerGenesisState) ? ControllerGenesisState.fromJSON(object.controllerGenesisState) : undefined,
      hostGenesisState: isSet(object.hostGenesisState) ? HostGenesisState.fromJSON(object.hostGenesisState) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.controllerGenesisState !== undefined && (obj.controllerGenesisState = message.controllerGenesisState ? ControllerGenesisState.toJSON(message.controllerGenesisState) : undefined);
    message.hostGenesisState !== undefined && (obj.hostGenesisState = message.hostGenesisState ? HostGenesisState.toJSON(message.hostGenesisState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.controllerGenesisState = object.controllerGenesisState !== undefined && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : undefined;
    message.hostGenesisState = object.hostGenesisState !== undefined && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      controllerGenesisState: object.controller_genesis_state ? ControllerGenesisState.fromSDK(object.controller_genesis_state) : undefined,
      hostGenesisState: object.host_genesis_state ? HostGenesisState.fromSDK(object.host_genesis_state) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      controller_genesis_state: isSet(object.controller_genesis_state) ? ControllerGenesisState.fromSDKJSON(object.controller_genesis_state) : undefined,
      host_genesis_state: isSet(object.host_genesis_state) ? HostGenesisState.fromSDKJSON(object.host_genesis_state) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.controllerGenesisState !== undefined && (obj.controller_genesis_state = message.controllerGenesisState ? ControllerGenesisState.toSDK(message.controllerGenesisState) : undefined);
    message.hostGenesisState !== undefined && (obj.host_genesis_state = message.hostGenesisState ? HostGenesisState.toSDK(message.hostGenesisState) : undefined);
    return obj;
  }
};
function createBaseControllerGenesisState(): ControllerGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: undefined
  };
}
export const ControllerGenesisState = {
  encode(message: ControllerGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v!);
    }
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(reader.string());
          break;
        case 4:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ControllerGenesisState {
    return {
      activeChannels: Array.isArray(object?.activeChannels) ? object.activeChannels.map((e: any) => ActiveChannel.fromJSON(e)) : [],
      interchainAccounts: Array.isArray(object?.interchainAccounts) ? object.interchainAccounts.map((e: any) => RegisteredInterchainAccount.fromJSON(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => String(e)) : [],
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ControllerGenesisState): unknown {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchainAccounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ControllerGenesisState>): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.ports = object.ports?.map(e => e) || [];
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: ControllerGenesisStateSDKType): ControllerGenesisState {
    return {
      activeChannels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromSDK(e)) : [],
      interchainAccounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromSDK(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => e) : [],
      params: object.params ? Params1.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): ControllerGenesisStateSDKType {
    return {
      active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromSDKJSON(e)) : [],
      interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromSDKJSON(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => String(e)) : [],
      params: isSet(object.params) ? Params1.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: ControllerGenesisState): ControllerGenesisStateSDKType {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toSDK(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toSDK(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params1.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseHostGenesisState(): HostGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: undefined
  };
}
export const HostGenesisState = {
  encode(message: HostGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.params !== undefined) {
      Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.params = Params2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostGenesisState {
    return {
      activeChannels: Array.isArray(object?.activeChannels) ? object.activeChannels.map((e: any) => ActiveChannel.fromJSON(e)) : [],
      interchainAccounts: Array.isArray(object?.interchainAccounts) ? object.interchainAccounts.map((e: any) => RegisteredInterchainAccount.fromJSON(e)) : [],
      port: isSet(object.port) ? String(object.port) : "",
      params: isSet(object.params) ? Params2.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: HostGenesisState): unknown {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchainAccounts = [];
    }
    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined && (obj.params = message.params ? Params2.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<HostGenesisState>): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.port = object.port ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params2.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: HostGenesisStateSDKType): HostGenesisState {
    return {
      activeChannels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromSDK(e)) : [],
      interchainAccounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromSDK(e)) : [],
      port: object?.port,
      params: object.params ? Params2.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): HostGenesisStateSDKType {
    return {
      active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromSDKJSON(e)) : [],
      interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromSDKJSON(e)) : [],
      port: isSet(object.port) ? String(object.port) : "",
      params: isSet(object.params) ? Params2.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: HostGenesisState): HostGenesisStateSDKType {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toSDK(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toSDK(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    obj.port = message.port;
    message.params !== undefined && (obj.params = message.params ? Params2.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseActiveChannel(): ActiveChannel {
  return {
    connectionId: "",
    portId: "",
    channelId: "",
    isMiddlewareEnabled: false
  };
}
export const ActiveChannel = {
  encode(message: ActiveChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.isMiddlewareEnabled === true) {
      writer.uint32(32).bool(message.isMiddlewareEnabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.isMiddlewareEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveChannel {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      isMiddlewareEnabled: isSet(object.isMiddlewareEnabled) ? Boolean(object.isMiddlewareEnabled) : false
    };
  },
  toJSON(message: ActiveChannel): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.isMiddlewareEnabled !== undefined && (obj.isMiddlewareEnabled = message.isMiddlewareEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<ActiveChannel>): ActiveChannel {
    const message = createBaseActiveChannel();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.isMiddlewareEnabled = object.isMiddlewareEnabled ?? false;
    return message;
  },
  fromSDK(object: ActiveChannelSDKType): ActiveChannel {
    return {
      connectionId: object?.connection_id,
      portId: object?.port_id,
      channelId: object?.channel_id,
      isMiddlewareEnabled: object?.is_middleware_enabled
    };
  },
  fromSDKJSON(object: any): ActiveChannelSDKType {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      is_middleware_enabled: isSet(object.is_middleware_enabled) ? Boolean(object.is_middleware_enabled) : false
    };
  },
  toSDK(message: ActiveChannel): ActiveChannelSDKType {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.is_middleware_enabled = message.isMiddlewareEnabled;
    return obj;
  }
};
function createBaseRegisteredInterchainAccount(): RegisteredInterchainAccount {
  return {
    connectionId: "",
    portId: "",
    accountAddress: ""
  };
}
export const RegisteredInterchainAccount = {
  encode(message: RegisteredInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredInterchainAccount {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },
  toJSON(message: RegisteredInterchainAccount): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisteredInterchainAccount>): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromSDK(object: RegisteredInterchainAccountSDKType): RegisteredInterchainAccount {
    return {
      connectionId: object?.connection_id,
      portId: object?.port_id,
      accountAddress: object?.account_address
    };
  },
  fromSDKJSON(object: any): RegisteredInterchainAccountSDKType {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      account_address: isSet(object.account_address) ? String(object.account_address) : ""
    };
  },
  toSDK(message: RegisteredInterchainAccount): RegisteredInterchainAccountSDKType {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    obj.account_address = message.accountAddress;
    return obj;
  }
};