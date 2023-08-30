//@ts-nocheck
/* eslint-disable */
import { Params as Params1 } from "../controller/v1/controller";
import { Params as Params2 } from "../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
  controllerGenesisState: ControllerGenesisState;
  hostGenesisState: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  ports: string[];
  params: Params1;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  port: string;
  params: Params2;
}
/** ActiveChannel contains a connection ID, port ID and associated active channel ID */
export interface ActiveChannel {
  connectionId: string;
  portId: string;
  channelId: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
  connectionId: string;
  portId: string;
  accountAddress: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    controllerGenesisState: ControllerGenesisState.fromPartial({}),
    hostGenesisState: HostGenesisState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.GenesisState",
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.controllerGenesisState = object.controllerGenesisState !== undefined && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : undefined;
    message.hostGenesisState = object.hostGenesisState !== undefined && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      controllerGenesisState: object?.controller_genesis_state ? ControllerGenesisState.fromAmino(object.controller_genesis_state) : undefined,
      hostGenesisState: object?.host_genesis_state ? HostGenesisState.fromAmino(object.host_genesis_state) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.controller_genesis_state = message.controllerGenesisState ? ControllerGenesisState.toAmino(message.controllerGenesisState) : undefined;
    obj.host_genesis_state = message.hostGenesisState ? HostGenesisState.toAmino(message.hostGenesisState) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseControllerGenesisState(): ControllerGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: Params1.fromPartial({})
  };
}
export const ControllerGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.ControllerGenesisState",
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
  fromPartial(object: Partial<ControllerGenesisState>): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.ports = object.ports?.map(e => e) || [];
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ControllerGenesisStateAmino): ControllerGenesisState {
    return {
      activeChannels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromAmino(e)) : [],
      interchainAccounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromAmino(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => e) : [],
      params: object?.params ? Params1.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ControllerGenesisState): ControllerGenesisStateAmino {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ControllerGenesisStateAminoMsg): ControllerGenesisState {
    return ControllerGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: ControllerGenesisState): ControllerGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/ControllerGenesisState",
      value: ControllerGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: ControllerGenesisStateProtoMsg): ControllerGenesisState {
    return ControllerGenesisState.decode(message.value);
  },
  toProto(message: ControllerGenesisState): Uint8Array {
    return ControllerGenesisState.encode(message).finish();
  },
  toProtoMsg(message: ControllerGenesisState): ControllerGenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.ControllerGenesisState",
      value: ControllerGenesisState.encode(message).finish()
    };
  }
};
function createBaseHostGenesisState(): HostGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: Params2.fromPartial({})
  };
}
export const HostGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.HostGenesisState",
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
  fromPartial(object: Partial<HostGenesisState>): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.port = object.port ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params2.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: HostGenesisStateAmino): HostGenesisState {
    return {
      activeChannels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromAmino(e)) : [],
      interchainAccounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromAmino(e)) : [],
      port: object.port,
      params: object?.params ? Params2.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: HostGenesisState): HostGenesisStateAmino {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    obj.port = message.port;
    obj.params = message.params ? Params2.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostGenesisStateAminoMsg): HostGenesisState {
    return HostGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: HostGenesisState): HostGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/HostGenesisState",
      value: HostGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: HostGenesisStateProtoMsg): HostGenesisState {
    return HostGenesisState.decode(message.value);
  },
  toProto(message: HostGenesisState): Uint8Array {
    return HostGenesisState.encode(message).finish();
  },
  toProtoMsg(message: HostGenesisState): HostGenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.HostGenesisState",
      value: HostGenesisState.encode(message).finish()
    };
  }
};
function createBaseActiveChannel(): ActiveChannel {
  return {
    connectionId: "",
    portId: "",
    channelId: ""
  };
}
export const ActiveChannel = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.ActiveChannel",
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
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message: ActiveChannel): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: Partial<ActiveChannel>): ActiveChannel {
    const message = createBaseActiveChannel();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: ActiveChannelAmino): ActiveChannel {
    return {
      connectionId: object.connection_id,
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: ActiveChannel): ActiveChannelAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: ActiveChannelAminoMsg): ActiveChannel {
    return ActiveChannel.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveChannel): ActiveChannelAminoMsg {
    return {
      type: "cosmos-sdk/ActiveChannel",
      value: ActiveChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveChannelProtoMsg): ActiveChannel {
    return ActiveChannel.decode(message.value);
  },
  toProto(message: ActiveChannel): Uint8Array {
    return ActiveChannel.encode(message).finish();
  },
  toProtoMsg(message: ActiveChannel): ActiveChannelProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.ActiveChannel",
      value: ActiveChannel.encode(message).finish()
    };
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
  typeUrl: "/ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount",
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
  fromPartial(object: Partial<RegisteredInterchainAccount>): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: RegisteredInterchainAccountAmino): RegisteredInterchainAccount {
    return {
      connectionId: object.connection_id,
      portId: object.port_id,
      accountAddress: object.account_address
    };
  },
  toAmino(message: RegisteredInterchainAccount): RegisteredInterchainAccountAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    obj.account_address = message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: RegisteredInterchainAccountAminoMsg): RegisteredInterchainAccount {
    return RegisteredInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredInterchainAccountProtoMsg): RegisteredInterchainAccount {
    return RegisteredInterchainAccount.decode(message.value);
  },
  toProto(message: RegisteredInterchainAccount): Uint8Array {
    return RegisteredInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.encode(message).finish()
    };
  }
};