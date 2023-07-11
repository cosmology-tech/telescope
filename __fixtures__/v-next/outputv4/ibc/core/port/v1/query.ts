import { Order, OrderSDKType, Counterparty, CounterpartySDKType, orderFromJSON, orderToJSON } from "../../channel/v1/channel";
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
  counterparty: Counterparty;
  /** proposed version */
  proposedVersion: string;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestSDKType {
  port_id: string;
  connection_id: string;
  ordering: Order;
  counterparty: CounterpartySDKType;
  proposed_version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
  /** port id associated with the request identifiers */
  portId: string;
  /** supported app version */
  version: string;
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
    counterparty: Counterparty.fromPartial({}),
    proposedVersion: ""
  };
}
export const QueryAppVersionRequest = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppVersionRequest {
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
          message.counterparty = Counterparty.decode(reader, reader.uint32());
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
  toJSON(message: QueryAppVersionRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.proposedVersion !== undefined && (obj.proposedVersion = message.proposedVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest {
    const message = createBaseQueryAppVersionRequest();
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : Counterparty.fromPartial({});
    message.proposedVersion = object.proposedVersion ?? "";
    return message;
  },
  fromSDK(object: QueryAppVersionRequestSDKType): QueryAppVersionRequest {
    return {
      portId: object?.port_id,
      connectionId: object?.connection_id,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      proposedVersion: object?.proposed_version
    };
  },
  fromSDKJSON(object: any): QueryAppVersionRequestSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromSDKJSON(object.counterparty) : undefined,
      proposed_version: isSet(object.proposed_version) ? String(object.proposed_version) : ""
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
  }
};
function createBaseQueryAppVersionResponse(): QueryAppVersionResponse {
  return {
    portId: "",
    version: ""
  };
}
export const QueryAppVersionResponse = {
  encode(message: QueryAppVersionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppVersionResponse {
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
  toJSON(message: QueryAppVersionResponse): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.version !== undefined && (obj.version = message.version);
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
  fromSDKJSON(object: any): QueryAppVersionResponseSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toSDK(message: QueryAppVersionResponse): QueryAppVersionResponseSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.version = message.version;
    return obj;
  }
};