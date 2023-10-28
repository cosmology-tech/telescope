import { Duration, DurationSDKType } from "../protobuf/duration";
import { Any, AnySDKType } from "../protobuf/any";
import { Status, StatusSDKType } from "../rpc/status";
import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.longrunning";
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
  metadata?: Any;
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
export interface OperationProtoMsg {
  typeUrl: "/google.longrunning.Operation";
  value: Uint8Array;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface OperationSDKType {
  name: string;
  metadata?: AnySDKType;
  done: boolean;
  error?: StatusSDKType;
  response?: AnySDKType;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
  /** The name of the operation resource. */
  name: string;
}
export interface GetOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.GetOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequestSDKType {
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
export interface ListOperationsRequestProtoMsg {
  typeUrl: "/google.longrunning.ListOperationsRequest";
  value: Uint8Array;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequestSDKType {
  name: string;
  filter: string;
  page_size: number;
  page_token: string;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations: Operation[];
  /** The standard List next-page token. */
  nextPageToken: string;
}
export interface ListOperationsResponseProtoMsg {
  typeUrl: "/google.longrunning.ListOperationsResponse";
  value: Uint8Array;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponseSDKType {
  operations: OperationSDKType[];
  next_page_token: string;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}
export interface CancelOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.CancelOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequestSDKType {
  name: string;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}
export interface DeleteOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.DeleteOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequestSDKType {
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
  timeout?: Duration;
}
export interface WaitOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.WaitOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequestSDKType {
  name: string;
  timeout?: DurationSDKType;
}
/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
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
export interface OperationInfoProtoMsg {
  typeUrl: "/google.longrunning.OperationInfo";
  value: Uint8Array;
}
/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfoSDKType {
  response_type: string;
  metadata_type: string;
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
  typeUrl: "/google.longrunning.Operation",
  encode(message: Operation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Operation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: OperationProtoMsg): Operation {
    return Operation.decode(message.value);
  },
  toProto(message: Operation): Uint8Array {
    return Operation.encode(message).finish();
  },
  toProtoMsg(message: Operation): OperationProtoMsg {
    return {
      typeUrl: "/google.longrunning.Operation",
      value: Operation.encode(message).finish()
    };
  }
};
function createBaseGetOperationRequest(): GetOperationRequest {
  return {
    name: ""
  };
}
export const GetOperationRequest = {
  typeUrl: "/google.longrunning.GetOperationRequest",
  encode(message: GetOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: GetOperationRequestProtoMsg): GetOperationRequest {
    return GetOperationRequest.decode(message.value);
  },
  toProto(message: GetOperationRequest): Uint8Array {
    return GetOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: GetOperationRequest): GetOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.GetOperationRequest",
      value: GetOperationRequest.encode(message).finish()
    };
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
  typeUrl: "/google.longrunning.ListOperationsRequest",
  encode(message: ListOperationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: ListOperationsRequestProtoMsg): ListOperationsRequest {
    return ListOperationsRequest.decode(message.value);
  },
  toProto(message: ListOperationsRequest): Uint8Array {
    return ListOperationsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListOperationsRequest): ListOperationsRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.ListOperationsRequest",
      value: ListOperationsRequest.encode(message).finish()
    };
  }
};
function createBaseListOperationsResponse(): ListOperationsResponse {
  return {
    operations: [],
    nextPageToken: ""
  };
}
export const ListOperationsResponse = {
  typeUrl: "/google.longrunning.ListOperationsResponse",
  encode(message: ListOperationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: ListOperationsResponseProtoMsg): ListOperationsResponse {
    return ListOperationsResponse.decode(message.value);
  },
  toProto(message: ListOperationsResponse): Uint8Array {
    return ListOperationsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListOperationsResponse): ListOperationsResponseProtoMsg {
    return {
      typeUrl: "/google.longrunning.ListOperationsResponse",
      value: ListOperationsResponse.encode(message).finish()
    };
  }
};
function createBaseCancelOperationRequest(): CancelOperationRequest {
  return {
    name: ""
  };
}
export const CancelOperationRequest = {
  typeUrl: "/google.longrunning.CancelOperationRequest",
  encode(message: CancelOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: CancelOperationRequestProtoMsg): CancelOperationRequest {
    return CancelOperationRequest.decode(message.value);
  },
  toProto(message: CancelOperationRequest): Uint8Array {
    return CancelOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: CancelOperationRequest): CancelOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.CancelOperationRequest",
      value: CancelOperationRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteOperationRequest(): DeleteOperationRequest {
  return {
    name: ""
  };
}
export const DeleteOperationRequest = {
  typeUrl: "/google.longrunning.DeleteOperationRequest",
  encode(message: DeleteOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: DeleteOperationRequestProtoMsg): DeleteOperationRequest {
    return DeleteOperationRequest.decode(message.value);
  },
  toProto(message: DeleteOperationRequest): Uint8Array {
    return DeleteOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteOperationRequest): DeleteOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.DeleteOperationRequest",
      value: DeleteOperationRequest.encode(message).finish()
    };
  }
};
function createBaseWaitOperationRequest(): WaitOperationRequest {
  return {
    name: "",
    timeout: undefined
  };
}
export const WaitOperationRequest = {
  typeUrl: "/google.longrunning.WaitOperationRequest",
  encode(message: WaitOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WaitOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: WaitOperationRequestProtoMsg): WaitOperationRequest {
    return WaitOperationRequest.decode(message.value);
  },
  toProto(message: WaitOperationRequest): Uint8Array {
    return WaitOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: WaitOperationRequest): WaitOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.WaitOperationRequest",
      value: WaitOperationRequest.encode(message).finish()
    };
  }
};
function createBaseOperationInfo(): OperationInfo {
  return {
    responseType: "",
    metadataType: ""
  };
}
export const OperationInfo = {
  typeUrl: "/google.longrunning.OperationInfo",
  encode(message: OperationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.responseType !== "") {
      writer.uint32(10).string(message.responseType);
    }
    if (message.metadataType !== "") {
      writer.uint32(18).string(message.metadataType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: OperationInfoProtoMsg): OperationInfo {
    return OperationInfo.decode(message.value);
  },
  toProto(message: OperationInfo): Uint8Array {
    return OperationInfo.encode(message).finish();
  },
  toProtoMsg(message: OperationInfo): OperationInfoProtoMsg {
    return {
      typeUrl: "/google.longrunning.OperationInfo",
      value: OperationInfo.encode(message).finish()
    };
  }
};