import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * `Context` defines which contexts an API requests.
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 * 
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 * 
 * Available context types are defined in package
 * `google.rpc.context`.
 * 
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 * 
 * Example:
 * 
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 * 
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 */
export interface Context {
  /**
   * A list of RPC context rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: ContextRule[];
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 */
export interface ContextRule {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /** A list of full type names of requested contexts. */
  requested: string[];
  /** A list of full type names of provided contexts. */
  provided: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from client to backend.
   */
  allowedRequestExtensions: string[];
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from backend to client.
   */
  allowedResponseExtensions: string[];
}
function createBaseContext(): Context {
  return {
    rules: []
  };
}
export const Context = {
  typeUrl: "/google.api.Context",
  encode(message: Context, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      ContextRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Context {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(ContextRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.rules = object.rules?.map(e => ContextRule.fromPartial(e)) || [];
    return message;
  }
};
function createBaseContextRule(): ContextRule {
  return {
    selector: "",
    requested: [],
    provided: [],
    allowedRequestExtensions: [],
    allowedResponseExtensions: []
  };
}
export const ContextRule = {
  typeUrl: "/google.api.ContextRule",
  encode(message: ContextRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    for (const v of message.requested) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.provided) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.allowedRequestExtensions) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedResponseExtensions) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContextRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.requested.push(reader.string());
          break;
        case 3:
          message.provided.push(reader.string());
          break;
        case 4:
          message.allowedRequestExtensions.push(reader.string());
          break;
        case 5:
          message.allowedResponseExtensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContextRule>): ContextRule {
    const message = createBaseContextRule();
    message.selector = object.selector ?? "";
    message.requested = object.requested?.map(e => e) || [];
    message.provided = object.provided?.map(e => e) || [];
    message.allowedRequestExtensions = object.allowedRequestExtensions?.map(e => e) || [];
    message.allowedResponseExtensions = object.allowedResponseExtensions?.map(e => e) || [];
    return message;
  }
};