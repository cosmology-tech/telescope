import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";

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
export interface ContextSDKType {
  rules: ContextRuleSDKType[];
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

/**
 * A context rule provides information about the context for an individual API
 * element.
 */
export interface ContextRuleSDKType {
  selector: string;
  requested: string[];
  provided: string[];
  allowed_request_extensions: string[];
  allowed_response_extensions: string[];
}

function createBaseContext(): Context {
  return {
    rules: []
  };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      ContextRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): Context {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromJSON(e)) : []
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? ContextRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.rules = object.rules?.map(e => ContextRule.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ContextSDKType): Context {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromSDK(e)) : []
    };
  },

  toSDK(message: Context): ContextSDKType {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? ContextRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): ContextSDKType {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromSDKJSON(e)) : []
    };
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
  encode(message: ContextRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ContextRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => String(e)) : [],
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => String(e)) : [],
      allowedRequestExtensions: Array.isArray(object?.allowedRequestExtensions) ? object.allowedRequestExtensions.map((e: any) => String(e)) : [],
      allowedResponseExtensions: Array.isArray(object?.allowedResponseExtensions) ? object.allowedResponseExtensions.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ContextRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);

    if (message.requested) {
      obj.requested = message.requested.map(e => e);
    } else {
      obj.requested = [];
    }

    if (message.provided) {
      obj.provided = message.provided.map(e => e);
    } else {
      obj.provided = [];
    }

    if (message.allowedRequestExtensions) {
      obj.allowedRequestExtensions = message.allowedRequestExtensions.map(e => e);
    } else {
      obj.allowedRequestExtensions = [];
    }

    if (message.allowedResponseExtensions) {
      obj.allowedResponseExtensions = message.allowedResponseExtensions.map(e => e);
    } else {
      obj.allowedResponseExtensions = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ContextRule>): ContextRule {
    const message = createBaseContextRule();
    message.selector = object.selector ?? "";
    message.requested = object.requested?.map(e => e) || [];
    message.provided = object.provided?.map(e => e) || [];
    message.allowedRequestExtensions = object.allowedRequestExtensions?.map(e => e) || [];
    message.allowedResponseExtensions = object.allowedResponseExtensions?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ContextRuleSDKType): ContextRule {
    return {
      selector: object?.selector,
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => e) : [],
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => e) : [],
      allowedRequestExtensions: Array.isArray(object?.allowed_request_extensions) ? object.allowed_request_extensions.map((e: any) => e) : [],
      allowedResponseExtensions: Array.isArray(object?.allowed_response_extensions) ? object.allowed_response_extensions.map((e: any) => e) : []
    };
  },

  toSDK(message: ContextRule): ContextRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;

    if (message.requested) {
      obj.requested = message.requested.map(e => e);
    } else {
      obj.requested = [];
    }

    if (message.provided) {
      obj.provided = message.provided.map(e => e);
    } else {
      obj.provided = [];
    }

    if (message.allowedRequestExtensions) {
      obj.allowed_request_extensions = message.allowedRequestExtensions.map(e => e);
    } else {
      obj.allowed_request_extensions = [];
    }

    if (message.allowedResponseExtensions) {
      obj.allowed_response_extensions = message.allowedResponseExtensions.map(e => e);
    } else {
      obj.allowed_response_extensions = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): ContextRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => String(e)) : [],
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => String(e)) : [],
      allowed_request_extensions: Array.isArray(object?.allowed_request_extensions) ? object.allowed_request_extensions.map((e: any) => String(e)) : [],
      allowed_response_extensions: Array.isArray(object?.allowed_response_extensions) ? object.allowed_response_extensions.map((e: any) => String(e)) : []
    };
  }

};