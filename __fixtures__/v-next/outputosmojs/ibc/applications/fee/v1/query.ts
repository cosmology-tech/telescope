import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
  pagination: PageRequestSDKType;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
  incentivized_packet: IdentifiedPacketFeesSDKType;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: bigint;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
  pagination: PageRequestSDKType;
  port_id: string;
  channel_id: string;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
  recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
  ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
  timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
  payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
  counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
  pagination: PageRequestSDKType;
  query_height: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
  port_id: string;
  channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
  fee_enabled: boolean;
}
function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsRequest = {
  encode(message: QueryIncentivizedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    const obj = createBaseQueryIncentivizedPacketsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsRequestSDKType): QueryIncentivizedPacketsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  }
};
function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsResponse = {
  encode(message: QueryIncentivizedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    const obj = createBaseQueryIncentivizedPacketsResponse();
    if (Array.isArray(object?.incentivizedPackets)) object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsResponseSDKType): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsResponseSDKType {
    return {
      incentivized_packets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return {
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketRequest = {
  encode(message: QueryIncentivizedPacketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketRequest {
    const obj = createBaseQueryIncentivizedPacketRequest();
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketRequestSDKType): QueryIncentivizedPacketRequest {
    return {
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketRequestSDKType {
    return {
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestSDKType {
    const obj: any = {};
    obj.query_height = message.queryHeight;
    return obj;
  }
};
function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return {
    incentivizedPacket: IdentifiedPacketFees.fromPartial({})
  };
}
export const QueryIncentivizedPacketResponse = {
  encode(message: QueryIncentivizedPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketResponse {
    const obj = createBaseQueryIncentivizedPacketResponse();
    if (isSet(object.incentivizedPacket)) obj.incentivizedPacket = IdentifiedPacketFees.fromJSON(object.incentivizedPacket);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivizedPacket = message.incentivizedPacket ? IdentifiedPacketFees.toJSON(message.incentivizedPacket) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = object.incentivizedPacket !== undefined && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : IdentifiedPacketFees.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketResponseSDKType): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: object.incentivized_packet ? IdentifiedPacketFees.fromSDK(object.incentivized_packet) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketResponseSDKType {
    return {
      incentivized_packet: isSet(object.incentivized_packet) ? IdentifiedPacketFees.fromSDKJSON(object.incentivized_packet) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseSDKType {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toSDK(message.incentivizedPacket) : undefined);
    return obj;
  }
};
function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    portId: "",
    channelId: "",
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsForChannelRequest = {
  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    const obj = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelRequestSDKType): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      portId: object?.port_id,
      channelId: object?.channel_id,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsForChannelRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight;
    return obj;
  }
};
function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsForChannelResponse = {
  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    const obj = createBaseQueryIncentivizedPacketsForChannelResponse();
    if (Array.isArray(object?.incentivizedPackets)) object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelResponseSDKType): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsForChannelResponseSDKType {
    return {
      incentivized_packets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return {};
}
export const QueryTotalRecvFeesRequest = {
  encode(_: QueryTotalRecvFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
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
  fromJSON(_: any): QueryTotalRecvFeesRequest {
    const obj = createBaseQueryTotalRecvFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalRecvFeesRequestSDKType): QueryTotalRecvFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalRecvFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return {
    recvFees: []
  };
}
export const QueryTotalRecvFeesResponse = {
  encode(message: QueryTotalRecvFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesResponse {
    const obj = createBaseQueryTotalRecvFeesResponse();
    if (Array.isArray(object?.recvFees)) object.recvFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalRecvFeesResponseSDKType): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalRecvFeesResponseSDKType {
    return {
      recv_fees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseSDKType {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  }
};
function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return {};
}
export const QueryTotalAckFeesRequest = {
  encode(_: QueryTotalAckFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
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
  fromJSON(_: any): QueryTotalAckFeesRequest {
    const obj = createBaseQueryTotalAckFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalAckFeesRequestSDKType): QueryTotalAckFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalAckFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return {
    ackFees: []
  };
}
export const QueryTotalAckFeesResponse = {
  encode(message: QueryTotalAckFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesResponse {
    const obj = createBaseQueryTotalAckFeesResponse();
    if (Array.isArray(object?.ackFees)) object.ackFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalAckFeesResponseSDKType): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalAckFeesResponseSDKType {
    return {
      ack_fees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseSDKType {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  }
};
function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return {};
}
export const QueryTotalTimeoutFeesRequest = {
  encode(_: QueryTotalTimeoutFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
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
  fromJSON(_: any): QueryTotalTimeoutFeesRequest {
    const obj = createBaseQueryTotalTimeoutFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalTimeoutFeesRequestSDKType): QueryTotalTimeoutFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalTimeoutFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return {
    timeoutFees: []
  };
}
export const QueryTotalTimeoutFeesResponse = {
  encode(message: QueryTotalTimeoutFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    const obj = createBaseQueryTotalTimeoutFeesResponse();
    if (Array.isArray(object?.timeoutFees)) object.timeoutFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalTimeoutFeesResponseSDKType): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalTimeoutFeesResponseSDKType {
    return {
      timeout_fees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseSDKType {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  }
};
function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryPayeeRequest = {
  encode(message: QueryPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeRequest {
    const obj = createBaseQueryPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeRequestSDKType): QueryPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  fromSDKJSON(object: any): QueryPayeeRequestSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toSDK(message: QueryPayeeRequest): QueryPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  }
};
function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return {
    payeeAddress: ""
  };
}
export const QueryPayeeResponse = {
  encode(message: QueryPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeResponse {
    const obj = createBaseQueryPayeeResponse();
    if (isSet(object.payeeAddress)) obj.payeeAddress = String(object.payeeAddress);
    return obj;
  },
  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeResponseSDKType): QueryPayeeResponse {
    return {
      payeeAddress: object?.payee_address
    };
  },
  fromSDKJSON(object: any): QueryPayeeResponseSDKType {
    return {
      payee_address: isSet(object.payee_address) ? String(object.payee_address) : ""
    };
  },
  toSDK(message: QueryPayeeResponse): QueryPayeeResponseSDKType {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  }
};
function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryCounterpartyPayeeRequest = {
  encode(message: QueryCounterpartyPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    const obj = createBaseQueryCounterpartyPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeRequestSDKType): QueryCounterpartyPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  fromSDKJSON(object: any): QueryCounterpartyPayeeRequestSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toSDK(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  }
};
function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return {
    counterpartyPayee: ""
  };
}
export const QueryCounterpartyPayeeResponse = {
  encode(message: QueryCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    const obj = createBaseQueryCounterpartyPayeeResponse();
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeResponseSDKType): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: object?.counterparty_payee
    };
  },
  fromSDKJSON(object: any): QueryCounterpartyPayeeResponseSDKType {
    return {
      counterparty_payee: isSet(object.counterparty_payee) ? String(object.counterparty_payee) : ""
    };
  },
  toSDK(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseSDKType {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  }
};
function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryFeeEnabledChannelsRequest = {
  encode(message: QueryFeeEnabledChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    const obj = createBaseQueryFeeEnabledChannelsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsRequestSDKType): QueryFeeEnabledChannelsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  }
};
function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return {
    feeEnabledChannels: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFeeEnabledChannelsResponse = {
  encode(message: QueryFeeEnabledChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    const obj = createBaseQueryFeeEnabledChannelsResponse();
    if (Array.isArray(object?.feeEnabledChannels)) object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsResponseSDKType): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelsResponseSDKType {
    return {
      fee_enabled_channels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseSDKType {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toSDK(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryFeeEnabledChannelRequest = {
  encode(message: QueryFeeEnabledChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
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
  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    const obj = createBaseQueryFeeEnabledChannelRequest();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelRequestSDKType): QueryFeeEnabledChannelRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelRequestSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toSDK(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  }
};
function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return {
    feeEnabled: false
  };
}
export const QueryFeeEnabledChannelResponse = {
  encode(message: QueryFeeEnabledChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    const obj = createBaseQueryFeeEnabledChannelResponse();
    if (isSet(object.feeEnabled)) obj.feeEnabled = Boolean(object.feeEnabled);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelResponseSDKType): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: object?.fee_enabled
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelResponseSDKType {
    return {
      fee_enabled: isSet(object.fee_enabled) ? Boolean(object.fee_enabled) : false
    };
  },
  toSDK(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseSDKType {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  }
};