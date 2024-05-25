import { Order, OrderSDKType, Counterparty, CounterpartyAmino, CounterpartySDKType, orderFromJSON, orderToJSON } from "../../channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.core.port.v1";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
  /** port unique identifier */
  portId: string;
  /** connection unique identifier */
  connectionId: string;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty?: Counterparty;
  /** proposed version */
  proposedVersion: string;
}
export interface QueryAppVersionRequestProtoMsg {
  typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest";
  value: Uint8Array;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** connection unique identifier */
  connection_id?: string;
  /** whether the channel is ordered or unordered */
  ordering?: Order;
  /** counterparty channel end */
  counterparty?: CounterpartyAmino;
  /** proposed version */
  proposed_version?: string;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestSDKType {
  port_id: string;
  connection_id: string;
  ordering: Order;
  counterparty?: CounterpartySDKType;
  proposed_version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
  /** port id associated with the request identifiers */
  portId: string;
  /** supported app version */
  version: string;
}
export interface QueryAppVersionResponseProtoMsg {
  typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse";
  value: Uint8Array;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponseAmino {
  /** port id associated with the request identifiers */
  port_id?: string;
  /** supported app version */
  version?: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponseSDKType {
  port_id: string;
  version: string;
}
function createBaseQueryAppVersionRequest(): QueryAppVersionRequest {
  return {
    portId: "",
    connectionId: "",
    ordering: 0,
    counterparty: undefined,
    proposedVersion: ""
  };
}
export const QueryAppVersionRequest = {
  typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
  aminoType: "cosmos-sdk/QueryAppVersionRequest",
  encode(message: QueryAppVersionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.ordering !== 0) {
      writer.uint32(24).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.proposedVersion !== "") {
      writer.uint32(42).string(message.proposedVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAppVersionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.ordering = (reader.int32() as any);
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.proposedVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppVersionRequest {
    const obj = createBaseQueryAppVersionRequest();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.ordering)) obj.ordering = orderFromJSON(object.ordering);
    if (isSet(object.counterparty)) obj.counterparty = Counterparty.fromJSON(object.counterparty);
    if (isSet(object.proposedVersion)) obj.proposedVersion = String(object.proposedVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest {
    const message = createBaseQueryAppVersionRequest();
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.ordering = object.ordering ?? 0;
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromPartial(object.counterparty);
    }
    message.proposedVersion = object.proposedVersion ?? "";
    return message;
  },
  fromSDK(object: QueryAppVersionRequestSDKType): QueryAppVersionRequest {
    return {
      portId: object?.port_id,
      connectionId: object?.connection_id,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      proposedVersion: object?.proposed_version
    };
  },
  toSDK(message: QueryAppVersionRequest): QueryAppVersionRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.connection_id = message.connectionId;
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toSDK(message.counterparty) : undefined);
    obj.proposed_version = message.proposedVersion;
    return obj;
  },
  fromAmino(object: QueryAppVersionRequestAmino): QueryAppVersionRequest {
    const message = createBaseQueryAppVersionRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.proposed_version !== undefined && object.proposed_version !== null) {
      message.proposedVersion = object.proposed_version;
    }
    return message;
  },
  toAmino(message: QueryAppVersionRequest, useInterfaces: boolean = true): QueryAppVersionRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.ordering = message.ordering === 0 ? undefined : message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty, useInterfaces) : undefined;
    obj.proposed_version = message.proposedVersion === "" ? undefined : message.proposedVersion;
    return obj;
  },
  fromProtoMsg(message: QueryAppVersionRequestProtoMsg, useInterfaces: boolean = true): QueryAppVersionRequest {
    return QueryAppVersionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAppVersionRequest): Uint8Array {
    return QueryAppVersionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAppVersionRequest): QueryAppVersionRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
      value: QueryAppVersionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAppVersionResponse(): QueryAppVersionResponse {
  return {
    portId: "",
    version: ""
  };
}
export const QueryAppVersionResponse = {
  typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
  aminoType: "cosmos-sdk/QueryAppVersionResponse",
  encode(message: QueryAppVersionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAppVersionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppVersionResponse {
    const obj = createBaseQueryAppVersionResponse();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.version)) obj.version = String(object.version);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAppVersionResponse>): QueryAppVersionResponse {
    const message = createBaseQueryAppVersionResponse();
    message.portId = object.portId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromSDK(object: QueryAppVersionResponseSDKType): QueryAppVersionResponse {
    return {
      portId: object?.port_id,
      version: object?.version
    };
  },
  toSDK(message: QueryAppVersionResponse): QueryAppVersionResponseSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: QueryAppVersionResponseAmino): QueryAppVersionResponse {
    const message = createBaseQueryAppVersionResponse();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: QueryAppVersionResponse, useInterfaces: boolean = true): QueryAppVersionResponseAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromProtoMsg(message: QueryAppVersionResponseProtoMsg, useInterfaces: boolean = true): QueryAppVersionResponse {
    return QueryAppVersionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAppVersionResponse): Uint8Array {
    return QueryAppVersionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAppVersionResponse): QueryAppVersionResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
      value: QueryAppVersionResponse.encode(message).finish()
    };
  }
};