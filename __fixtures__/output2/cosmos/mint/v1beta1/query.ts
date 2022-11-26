//@ts-nocheck
/* eslint-disable */
import { Params } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.mint.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {}

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromAmino(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toAmino(message.params) : undefined);
    return obj;
  }

};

function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}

export const QueryInflationRequest = {
  encode(_: QueryInflationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRequest();

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

  fromJSON(_: any): QueryInflationRequest {
    return {};
  },

  toJSON(_: QueryInflationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  },

  fromAmino(_: QueryInflationRequestSDKType): QueryInflationRequest {
    return {};
  },

  toAmino(_: QueryInflationRequest): QueryInflationRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    inflation: new Uint8Array()
  };
}

export const QueryInflationResponse = {
  encode(message: QueryInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInflationResponse {
    return {
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },

  toJSON(message: QueryInflationResponse): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = base64FromBytes(message.inflation !== undefined ? message.inflation : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  },

  fromAmino(object: QueryInflationResponseSDKType): QueryInflationResponse {
    return {
      inflation: isSet(object.inflation) ? object.inflation : undefined
    };
  },

  toAmino(message: QueryInflationResponse): QueryInflationResponseSDKType {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    return obj;
  }

};

function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}

export const QueryAnnualProvisionsRequest = {
  encode(_: QueryAnnualProvisionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsRequest();

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

  fromJSON(_: any): QueryAnnualProvisionsRequest {
    return {};
  },

  toJSON(_: QueryAnnualProvisionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },

  fromAmino(_: QueryAnnualProvisionsRequestSDKType): QueryAnnualProvisionsRequest {
    return {};
  },

  toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}

export const QueryAnnualProvisionsResponse = {
  encode(message: QueryAnnualProvisionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
    };
  },

  toJSON(message: QueryAnnualProvisionsResponse): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annualProvisions = base64FromBytes(message.annualProvisions !== undefined ? message.annualProvisions : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  },

  fromAmino(object: QueryAnnualProvisionsResponseSDKType): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: isSet(object.annual_provisions) ? object.annual_provisions : undefined
    };
  },

  toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseSDKType {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annual_provisions = message.annualProvisions);
    return obj;
  }

};

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;

  /** Inflation returns the current minting inflation value. */
  Inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;

  /** AnnualProvisions current minting annual provisions value. */
  AnnualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Inflation = this.Inflation.bind(this);
    this.AnnualProvisions = this.AnnualProvisions.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Inflation(request: QueryInflationRequest = {}): Promise<QueryInflationResponse> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new _m0.Reader(data)));
  }

  AnnualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
  }

}