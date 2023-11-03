import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  filters: OrderFilters;
  pagination?: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest";
  value: Uint8Array;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestAmino {
  filters?: OrderFiltersAmino;
  pagination?: PageRequestAmino;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
  filters: OrderFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse";
  value: Uint8Array;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseAmino {
  orders: OrderAmino[];
  pagination?: PageResponseAmino;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  id: OrderID;
}
export interface QueryOrderRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest";
  value: Uint8Array;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestAmino {
  id?: OrderIDAmino;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
  id: OrderIDSDKType;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  order: Order;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse";
  value: Uint8Array;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
  order: OrderSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  filters: BidFilters;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest";
  value: Uint8Array;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestAmino {
  filters?: BidFiltersAmino;
  pagination?: PageRequestAmino;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
  filters: BidFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse";
  value: Uint8Array;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseAmino {
  bids: QueryBidResponseAmino[];
  pagination?: PageResponseAmino;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
  bids: QueryBidResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  id: BidID;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest";
  value: Uint8Array;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestAmino {
  id?: BidIDAmino;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
  id: BidIDSDKType;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  bid: Bid;
  escrowAccount: Account;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse";
  value: Uint8Array;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseAmino {
  bid?: BidAmino;
  escrow_account?: AccountAmino;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
  bid: BidSDKType;
  escrow_account: AccountSDKType;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  filters: LeaseFilters;
  pagination?: PageRequest;
}
export interface QueryLeasesRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest";
  value: Uint8Array;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestAmino {
  filters?: LeaseFiltersAmino;
  pagination?: PageRequestAmino;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
  filters: LeaseFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}
export interface QueryLeasesResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse";
  value: Uint8Array;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseAmino {
  leases: QueryLeaseResponseAmino[];
  pagination?: PageResponseAmino;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
  leases: QueryLeaseResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  id: LeaseID;
}
export interface QueryLeaseRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest";
  value: Uint8Array;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestAmino {
  id?: LeaseIDAmino;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
  id: LeaseIDSDKType;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  lease: Lease;
  escrowPayment: FractionalPayment;
}
export interface QueryLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse";
  value: Uint8Array;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseAmino {
  lease?: LeaseAmino;
  escrow_payment?: FractionalPaymentAmino;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
  lease: LeaseSDKType;
  escrow_payment: FractionalPaymentSDKType;
}
function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    filters: OrderFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryOrdersRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
  encode(message: QueryOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrdersRequest {
    const obj = createBaseQueryOrdersRequest();
    if (isSet(object.filters)) obj.filters = OrderFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersRequestSDKType): QueryOrdersRequest {
    return {
      filters: object.filters ? OrderFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersRequest): QueryOrdersRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    return {
      filters: object?.filters ? OrderFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrdersRequest, useInterfaces: boolean = false): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? OrderFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrdersRequestProtoMsg, useInterfaces: boolean = false): QueryOrdersRequest {
    return QueryOrdersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersRequest): Uint8Array {
    return QueryOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
      value: QueryOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QueryOrdersResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
  encode(message: QueryOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrdersResponse {
    const obj = createBaseQueryOrdersResponse();
    if (Array.isArray(object?.orders)) obj.orders = object.orders.map((e: any) => Order.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersResponseSDKType): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersResponse): QueryOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrdersResponse, useInterfaces: boolean = false): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg, useInterfaces: boolean = false): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: OrderID.fromPartial({})
  };
}
export const QueryOrderRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
  encode(message: QueryOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderRequest {
    const obj = createBaseQueryOrderRequest();
    if (isSet(object.id)) obj.id = OrderID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryOrderRequestSDKType): QueryOrderRequest {
    return {
      id: object.id ? OrderID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryOrderRequest): QueryOrderRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    return {
      id: object?.id ? OrderID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: QueryOrderRequest, useInterfaces: boolean = false): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg, useInterfaces: boolean = false): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryOrderResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderResponse {
    const obj = createBaseQueryOrderResponse();
    if (isSet(object.order)) obj.order = Order.fromJSON(object.order);
    return obj;
  },
  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    }
    return message;
  },
  fromSDK(object: QueryOrderResponseSDKType): QueryOrderResponse {
    return {
      order: object.order ? Order.fromSDK(object.order) : undefined
    };
  },
  toSDK(message: QueryOrderResponse): QueryOrderResponseSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toSDK(message.order) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    return {
      order: object?.order ? Order.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: QueryOrderResponse, useInterfaces: boolean = false): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg, useInterfaces: boolean = false): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    filters: BidFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryBidsRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidsRequest {
    const obj = createBaseQueryBidsRequest();
    if (isSet(object.filters)) obj.filters = BidFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsRequestSDKType): QueryBidsRequest {
    return {
      filters: object.filters ? BidFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsRequest): QueryBidsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    return {
      filters: object?.filters ? BidFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBidsRequest, useInterfaces: boolean = false): QueryBidsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? BidFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg, useInterfaces: boolean = false): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}
export const QueryBidsResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidsResponse {
    const obj = createBaseQueryBidsResponse();
    if (Array.isArray(object?.bids)) obj.bids = object.bids.map((e: any) => QueryBidResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsResponseSDKType): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsResponse): QueryBidsResponseSDKType {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toSDK(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBidsResponse, useInterfaces: boolean = false): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.bids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg, useInterfaces: boolean = false): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BidID.fromPartial({})
  };
}
export const QueryBidRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidRequest {
    const obj = createBaseQueryBidRequest();
    if (isSet(object.id)) obj.id = BidID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryBidRequestSDKType): QueryBidRequest {
    return {
      id: object.id ? BidID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryBidRequest): QueryBidRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    return {
      id: object?.id ? BidID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: QueryBidRequest, useInterfaces: boolean = false): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg, useInterfaces: boolean = false): QueryBidRequest {
    return QueryBidRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: Bid.fromPartial({}),
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryBidResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidResponse {
    const obj = createBaseQueryBidResponse();
    if (isSet(object.bid)) obj.bid = Bid.fromJSON(object.bid);
    if (isSet(object.escrowAccount)) obj.escrowAccount = Account.fromJSON(object.escrowAccount);
    return obj;
  },
  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromSDK(object: QueryBidResponseSDKType): QueryBidResponse {
    return {
      bid: object.bid ? Bid.fromSDK(object.bid) : undefined,
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryBidResponse): QueryBidResponseSDKType {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toSDK(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    return {
      bid: object?.bid ? Bid.fromAmino(object.bid) : undefined,
      escrowAccount: object?.escrow_account ? Account.fromAmino(object.escrow_account) : undefined
    };
  },
  toAmino(message: QueryBidResponse, useInterfaces: boolean = false): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid, useInterfaces) : undefined;
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg, useInterfaces: boolean = false): QueryBidResponse {
    return QueryBidResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    filters: LeaseFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryLeasesRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
  encode(message: QueryLeasesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryLeasesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeasesRequest {
    const obj = createBaseQueryLeasesRequest();
    if (isSet(object.filters)) obj.filters = LeaseFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLeasesRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesRequestSDKType): QueryLeasesRequest {
    return {
      filters: object.filters ? LeaseFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesRequest): QueryLeasesRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest {
    return {
      filters: object?.filters ? LeaseFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryLeasesRequest, useInterfaces: boolean = false): QueryLeasesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LeaseFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeasesRequestProtoMsg, useInterfaces: boolean = false): QueryLeasesRequest {
    return QueryLeasesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeasesRequest): Uint8Array {
    return QueryLeasesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesRequest): QueryLeasesRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
      value: QueryLeasesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    leases: [],
    pagination: undefined
  };
}
export const QueryLeasesResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
  encode(message: QueryLeasesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryLeasesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeasesResponse {
    const obj = createBaseQueryLeasesResponse();
    if (Array.isArray(object?.leases)) obj.leases = object.leases.map((e: any) => QueryLeaseResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLeasesResponse): unknown {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toJSON(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesResponseSDKType): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesResponse): QueryLeasesResponseSDKType {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryLeasesResponse, useInterfaces: boolean = false): QueryLeasesResponseAmino {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.leases = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeasesResponseProtoMsg, useInterfaces: boolean = false): QueryLeasesResponse {
    return QueryLeasesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeasesResponse): Uint8Array {
    return QueryLeasesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesResponse): QueryLeasesResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
      value: QueryLeasesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return {
    id: LeaseID.fromPartial({})
  };
}
export const QueryLeaseRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
  encode(message: QueryLeaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryLeaseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseRequest {
    const obj = createBaseQueryLeaseRequest();
    if (isSet(object.id)) obj.id = LeaseID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryLeaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryLeaseRequestSDKType): QueryLeaseRequest {
    return {
      id: object.id ? LeaseID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryLeaseRequest): QueryLeaseRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest {
    return {
      id: object?.id ? LeaseID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: QueryLeaseRequest, useInterfaces: boolean = false): QueryLeaseRequestAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeaseRequestProtoMsg, useInterfaces: boolean = false): QueryLeaseRequest {
    return QueryLeaseRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeaseRequest): Uint8Array {
    return QueryLeaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseRequest): QueryLeaseRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
      value: QueryLeaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    lease: Lease.fromPartial({}),
    escrowPayment: FractionalPayment.fromPartial({})
  };
}
export const QueryLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
  encode(message: QueryLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.escrowPayment = FractionalPayment.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseResponse {
    const obj = createBaseQueryLeaseResponse();
    if (isSet(object.lease)) obj.lease = Lease.fromJSON(object.lease);
    if (isSet(object.escrowPayment)) obj.escrowPayment = FractionalPayment.fromJSON(object.escrowPayment);
    return obj;
  },
  toJSON(message: QueryLeaseResponse): unknown {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrowPayment = message.escrowPayment ? FractionalPayment.toJSON(message.escrowPayment) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = FractionalPayment.fromPartial(object.escrowPayment);
    }
    return message;
  },
  fromSDK(object: QueryLeaseResponseSDKType): QueryLeaseResponse {
    return {
      lease: object.lease ? Lease.fromSDK(object.lease) : undefined,
      escrowPayment: object.escrow_payment ? FractionalPayment.fromSDK(object.escrow_payment) : undefined
    };
  },
  toSDK(message: QueryLeaseResponse): QueryLeaseResponseSDKType {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toSDK(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrow_payment = message.escrowPayment ? FractionalPayment.toSDK(message.escrowPayment) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse {
    return {
      lease: object?.lease ? Lease.fromAmino(object.lease) : undefined,
      escrowPayment: object?.escrow_payment ? FractionalPayment.fromAmino(object.escrow_payment) : undefined
    };
  },
  toAmino(message: QueryLeaseResponse, useInterfaces: boolean = false): QueryLeaseResponseAmino {
    const obj: any = {};
    obj.lease = message.lease ? Lease.toAmino(message.lease, useInterfaces) : undefined;
    obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryLeaseResponseProtoMsg, useInterfaces: boolean = false): QueryLeaseResponse {
    return QueryLeaseResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLeaseResponse): Uint8Array {
    return QueryLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseResponse): QueryLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
      value: QueryLeaseResponse.encode(message).finish()
    };
  }
};