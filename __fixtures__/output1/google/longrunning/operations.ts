import { Duration } from "../protobuf/duration";
import { Any } from "../protobuf/any";
import { Status } from "../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   */
  name: string;

  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: Any;

  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;

  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;

  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx`
   * is the original method name.  For example, if the original method name
   * is `TakeSnapshot()`, the inferred response type is
   * `TakeSnapshotResponse`.
   */
  response?: Any;
}

/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
  /** The name of the operation resource. */
  name: string;
}

/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;

  /** The standard list filter. */
  filter: string;

  /** The standard list page size. */
  pageSize: number;

  /** The standard list page token. */
  pageToken: string;
}

/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations: Operation[];

  /** The standard List next-page token. */
  nextPageToken: string;
}

/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
  /** The name of the operation resource to wait on. */
  name: string;

  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   */
  timeout: string;
}

/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 * rpc LongRunningRecognize(LongRunningRecognizeRequest)
 * returns (google.longrunning.Operation) {
 * option (google.longrunning.operation_info) = {
 * response_type: "LongRunningRecognizeResponse"
 * metadata_type: "LongRunningRecognizeMetadata"
 * };
 * }
 */
export interface OperationInfo {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   * 
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   * 
   * Note: Altering this value constitutes a breaking change.
   */
  responseType: string;

  /**
   * Required. The message name of the metadata type for this long-running
   * operation.
   * 
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   * 
   * Note: Altering this value constitutes a breaking change.
   */
  metadataType: string;
}

function createBaseOperation(): Operation {
  return {
    name: "",
    metadata: undefined,
    done: false,
    error: undefined,
    response: undefined
  };
}

export const Operation = {
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }

    if (message.done === true) {
      writer.uint32(24).bool(message.done);
    }

    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).ldelim();
    }

    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.metadata = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.done = reader.bool();
          break;

        case 4:
          message.error = Status.decode(reader, reader.uint32());
          break;

        case 5:
          message.response = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Operation {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      done: isSet(object.done) ? Boolean(object.done) : false,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromJSON(object.response) : undefined
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Any.toJSON(message.metadata) : undefined);
    message.done !== undefined && (obj.done = message.done);
    message.error !== undefined && (obj.error = message.error ? Status.toJSON(message.error) : undefined);
    message.response !== undefined && (obj.response = message.response ? Any.toJSON(message.response) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation>, I>>(object: I): Operation {
    const message = createBaseOperation();
    message.name = object.name ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Any.fromPartial(object.metadata) : undefined;
    message.done = object.done ?? false;
    message.error = object.error !== undefined && object.error !== null ? Status.fromPartial(object.error) : undefined;
    message.response = object.response !== undefined && object.response !== null ? Any.fromPartial(object.response) : undefined;
    return message;
  }

};

function createBaseGetOperationRequest(): GetOperationRequest {
  return {
    name: ""
  };
}

export const GetOperationRequest = {
  encode(message: GetOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetOperationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOperationRequest>, I>>(object: I): GetOperationRequest {
    const message = createBaseGetOperationRequest();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseListOperationsRequest(): ListOperationsRequest {
  return {
    name: "",
    filter: "",
    pageSize: 0,
    pageToken: ""
  };
}

export const ListOperationsRequest = {
  encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }

    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }

    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 4:
          message.name = reader.string();
          break;

        case 1:
          message.filter = reader.string();
          break;

        case 2:
          message.pageSize = reader.int32();
          break;

        case 3:
          message.pageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListOperationsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.filter !== undefined && (obj.filter = message.filter);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(object: I): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    message.name = object.name ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  }

};

function createBaseListOperationsResponse(): ListOperationsResponse {
  return {
    operations: [],
    nextPageToken: ""
  };
}

export const ListOperationsResponse = {
  encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextPageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListOperationsResponse {
    return {
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListOperationsResponse): unknown {
    const obj: any = {};

    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(object: I): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map(e => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};

function createBaseCancelOperationRequest(): CancelOperationRequest {
  return {
    name: ""
  };
}

export const CancelOperationRequest = {
  encode(message: CancelOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOperationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CancelOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: CancelOperationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelOperationRequest>, I>>(object: I): CancelOperationRequest {
    const message = createBaseCancelOperationRequest();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseDeleteOperationRequest(): DeleteOperationRequest {
  return {
    name: ""
  };
}

export const DeleteOperationRequest = {
  encode(message: DeleteOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOperationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: DeleteOperationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOperationRequest>, I>>(object: I): DeleteOperationRequest {
    const message = createBaseDeleteOperationRequest();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseWaitOperationRequest(): WaitOperationRequest {
  return {
    name: "",
    timeout: undefined
  };
}

export const WaitOperationRequest = {
  encode(message: WaitOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitOperationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WaitOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      timeout: isSet(object.timeout) ? String(object.timeout) : undefined
    };
  },

  toJSON(message: WaitOperationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WaitOperationRequest>, I>>(object: I): WaitOperationRequest {
    const message = createBaseWaitOperationRequest();
    message.name = object.name ?? "";
    message.timeout = object.timeout ?? undefined;
    return message;
  }

};

function createBaseOperationInfo(): OperationInfo {
  return {
    responseType: "",
    metadataType: ""
  };
}

export const OperationInfo = {
  encode(message: OperationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.responseType !== "") {
      writer.uint32(10).string(message.responseType);
    }

    if (message.metadataType !== "") {
      writer.uint32(18).string(message.metadataType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.responseType = reader.string();
          break;

        case 2:
          message.metadataType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OperationInfo {
    return {
      responseType: isSet(object.responseType) ? String(object.responseType) : "",
      metadataType: isSet(object.metadataType) ? String(object.metadataType) : ""
    };
  },

  toJSON(message: OperationInfo): unknown {
    const obj: any = {};
    message.responseType !== undefined && (obj.responseType = message.responseType);
    message.metadataType !== undefined && (obj.metadataType = message.metadataType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationInfo>, I>>(object: I): OperationInfo {
    const message = createBaseOperationInfo();
    message.responseType = object.responseType ?? "";
    message.metadataType = object.metadataType ?? "";
    return message;
  }

};