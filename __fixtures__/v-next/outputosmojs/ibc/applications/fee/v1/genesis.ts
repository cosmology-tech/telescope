import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
  identified_fees: IdentifiedPacketFeesSDKType[];
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  registered_payees: RegisteredPayeeSDKType[];
  registered_counterparty_payees: RegisteredCounterpartyPayeeSDKType[];
  forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
  port_id: string;
  channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeSDKType {
  channel_id: string;
  relayer: string;
  payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeSDKType {
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
  address: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.identifiedFees)) object.identifiedFees.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (Array.isArray(object?.feeEnabledChannels)) object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e));
    if (Array.isArray(object?.registeredPayees)) object.registeredPayees.map((e: any) => RegisteredPayee.fromJSON(e));
    if (Array.isArray(object?.registeredCounterpartyPayees)) object.registeredCounterpartyPayees.map((e: any) => RegisteredCounterpartyPayee.fromJSON(e));
    if (Array.isArray(object?.forwardRelayers)) object.forwardRelayers.map((e: any) => ForwardRelayerAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map(e => e ? RegisteredPayee.toJSON(e) : undefined);
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toJSON(e) : undefined);
    } else {
      obj.registeredCounterpartyPayees = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toJSON(e) : undefined);
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredPayees = object.registeredPayees?.map(e => RegisteredPayee.fromPartial(e)) || [];
    message.registeredCounterpartyPayees = object.registeredCounterpartyPayees?.map(e => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identified_fees) ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDK(e)) : [],
      registeredPayees: Array.isArray(object?.registered_payees) ? object.registered_payees.map((e: any) => RegisteredPayee.fromSDK(e)) : [],
      registeredCounterpartyPayees: Array.isArray(object?.registered_counterparty_payees) ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromSDK(e)) : [],
      forwardRelayers: Array.isArray(object?.forward_relayers) ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      identified_fees: Array.isArray(object?.identified_fees) ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      fee_enabled_channels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDKJSON(e)) : [],
      registered_payees: Array.isArray(object?.registered_payees) ? object.registered_payees.map((e: any) => RegisteredPayee.fromSDKJSON(e)) : [],
      registered_counterparty_payees: Array.isArray(object?.registered_counterparty_payees) ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromSDKJSON(e)) : [],
      forward_relayers: Array.isArray(object?.forward_relayers) ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identified_fees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.identified_fees = [];
    }
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toSDK(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    if (message.registeredPayees) {
      obj.registered_payees = message.registeredPayees.map(e => e ? RegisteredPayee.toSDK(e) : undefined);
    } else {
      obj.registered_payees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toSDK(e) : undefined);
    } else {
      obj.registered_counterparty_payees = [];
    }
    if (message.forwardRelayers) {
      obj.forward_relayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toSDK(e) : undefined);
    } else {
      obj.forward_relayers = [];
    }
    return obj;
  }
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: ""
  };
}
export const FeeEnabledChannel = {
  encode(message: FeeEnabledChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeEnabledChannel {
    const obj = createBaseFeeEnabledChannel();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: FeeEnabledChannel): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromSDK(object: FeeEnabledChannelSDKType): FeeEnabledChannel {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },
  fromSDKJSON(object: any): FeeEnabledChannelSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toSDK(message: FeeEnabledChannel): FeeEnabledChannelSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  }
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channelId: "",
    relayer: "",
    payee: ""
  };
}
export const RegisteredPayee = {
  encode(message: RegisteredPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredPayee {
    const obj = createBaseRegisteredPayee();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.payee)) obj.payee = String(object.payee);
    return obj;
  },
  toJSON(message: RegisteredPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisteredPayee>): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromSDK(object: RegisteredPayeeSDKType): RegisteredPayee {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer,
      payee: object?.payee
    };
  },
  fromSDKJSON(object: any): RegisteredPayeeSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toSDK(message: RegisteredPayee): RegisteredPayeeSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  }
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
export const RegisteredCounterpartyPayee = {
  encode(message: RegisteredCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredCounterpartyPayee {
    const obj = createBaseRegisteredCounterpartyPayee();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: RegisteredCounterpartyPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: RegisteredCounterpartyPayeeSDKType): RegisteredCounterpartyPayee {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer,
      counterpartyPayee: object?.counterparty_payee
    };
  },
  fromSDKJSON(object: any): RegisteredCounterpartyPayeeSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterparty_payee: isSet(object.counterparty_payee) ? String(object.counterparty_payee) : ""
    };
  },
  toSDK(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  }
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: ""
  };
}
export const ForwardRelayerAddress = {
  encode(message: ForwardRelayerAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
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
  fromJSON(object: any): ForwardRelayerAddress {
    const obj = createBaseForwardRelayerAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: ForwardRelayerAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: ForwardRelayerAddressSDKType): ForwardRelayerAddress {
    return {
      address: object?.address
    };
  },
  fromSDKJSON(object: any): ForwardRelayerAddressSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: ForwardRelayerAddress): ForwardRelayerAddressSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }
};