import { Option, OptionAmino, OptionSDKType, Syntax, SyntaxSDKType, syntaxFromJSON, syntaxToJSON } from "./type";
import { SourceContext, SourceContextAmino, SourceContextSDKType } from "./source_context";
import { isSet, DeepPartial } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.protobuf";
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface Api {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   */
  name: string;
  /** The methods of this interface, in unspecified order. */
  methods: Method[];
  /** Any metadata attached to the interface. */
  options: Option[];
  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   * 
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   * 
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   */
  version: string;
  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  sourceContext?: SourceContext;
  /** Included interfaces. See [Mixin][]. */
  mixins: Mixin[];
  /** The source syntax of the service. */
  syntax: Syntax;
}
export interface ApiProtoMsg {
  typeUrl: "/google.protobuf.Api";
  value: Uint8Array;
}
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface ApiAmino {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   */
  name?: string;
  /** The methods of this interface, in unspecified order. */
  methods?: MethodAmino[];
  /** Any metadata attached to the interface. */
  options?: OptionAmino[];
  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   * 
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   * 
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   */
  version?: string;
  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  source_context?: SourceContextAmino;
  /** Included interfaces. See [Mixin][]. */
  mixins?: MixinAmino[];
  /** The source syntax of the service. */
  syntax?: Syntax;
}
export interface ApiAminoMsg {
  type: "/google.protobuf.Api";
  value: ApiAmino;
}
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface ApiSDKType {
  name: string;
  methods: MethodSDKType[];
  options: OptionSDKType[];
  version: string;
  source_context?: SourceContextSDKType;
  mixins: MixinSDKType[];
  syntax: Syntax;
}
/** Method represents a method of an API interface. */
export interface Method {
  /** The simple name of this method. */
  name: string;
  /** A URL of the input message type. */
  requestTypeUrl: string;
  /** If true, the request is streamed. */
  requestStreaming: boolean;
  /** The URL of the output message type. */
  responseTypeUrl: string;
  /** If true, the response is streamed. */
  responseStreaming: boolean;
  /** Any metadata attached to the method. */
  options: Option[];
  /** The source syntax of this method. */
  syntax: Syntax;
}
export interface MethodProtoMsg {
  typeUrl: "/google.protobuf.Method";
  value: Uint8Array;
}
/** Method represents a method of an API interface. */
export interface MethodAmino {
  /** The simple name of this method. */
  name?: string;
  /** A URL of the input message type. */
  request_type_url?: string;
  /** If true, the request is streamed. */
  request_streaming?: boolean;
  /** The URL of the output message type. */
  response_type_url?: string;
  /** If true, the response is streamed. */
  response_streaming?: boolean;
  /** Any metadata attached to the method. */
  options?: OptionAmino[];
  /** The source syntax of this method. */
  syntax?: Syntax;
}
export interface MethodAminoMsg {
  type: "/google.protobuf.Method";
  value: MethodAmino;
}
/** Method represents a method of an API interface. */
export interface MethodSDKType {
  name: string;
  request_type_url: string;
  request_streaming: boolean;
  response_type_url: string;
  response_streaming: boolean;
  options: OptionSDKType[];
  syntax: Syntax;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface Mixin {
  /** The fully qualified name of the interface which is included. */
  name: string;
  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root: string;
}
export interface MixinProtoMsg {
  typeUrl: "/google.protobuf.Mixin";
  value: Uint8Array;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface MixinAmino {
  /** The fully qualified name of the interface which is included. */
  name?: string;
  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root?: string;
}
export interface MixinAminoMsg {
  type: "/google.protobuf.Mixin";
  value: MixinAmino;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface MixinSDKType {
  name: string;
  root: string;
}
function createBaseApi(): Api {
  return {
    name: "",
    methods: [],
    options: [],
    version: "",
    sourceContext: undefined,
    mixins: [],
    syntax: 0
  };
}
export const Api = {
  typeUrl: "/google.protobuf.Api",
  is(o: any): o is Api {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.is(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.is(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.is(o.mixins[0])) && isSet(o.syntax));
  },
  isSDK(o: any): o is ApiSDKType {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.isSDK(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.isSDK(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.isSDK(o.mixins[0])) && isSet(o.syntax));
  },
  isAmino(o: any): o is ApiAmino {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.isAmino(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.isAmino(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.isAmino(o.mixins[0])) && isSet(o.syntax));
  },
  encode(message: Api, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.methods) {
      Method.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      writer.uint32(34).string(message.version);
    }
    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.mixins) {
      Mixin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Api {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.methods.push(Method.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;
        case 6:
          message.mixins.push(Mixin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.syntax = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Api {
    const obj = createBaseApi();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => Method.fromJSON(e));
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.sourceContext)) obj.sourceContext = SourceContext.fromJSON(object.sourceContext);
    if (Array.isArray(object?.mixins)) obj.mixins = object.mixins.map((e: any) => Mixin.fromJSON(e));
    if (isSet(object.syntax)) obj.syntax = syntaxFromJSON(object.syntax);
    return obj;
  },
  toJSON(message: Api): JsonSafe<Api> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.sourceContext !== undefined && (obj.sourceContext = message.sourceContext ? SourceContext.toJSON(message.sourceContext) : undefined);
    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toJSON(e) : undefined);
    } else {
      obj.mixins = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromPartial(object: DeepPartial<Api>): Api {
    const message = createBaseApi();
    message.name = object.name ?? "";
    message.methods = object.methods?.map(e => Method.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.version = object.version ?? "";
    if (object.sourceContext !== undefined && object.sourceContext !== null) {
      message.sourceContext = SourceContext.fromPartial(object.sourceContext);
    }
    message.mixins = object.mixins?.map(e => Mixin.fromPartial(e)) || [];
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromSDK(object: ApiSDKType): Api {
    return {
      name: object?.name,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => Method.fromSDK(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : [],
      version: object?.version,
      sourceContext: object.source_context ? SourceContext.fromSDK(object.source_context) : undefined,
      mixins: Array.isArray(object?.mixins) ? object.mixins.map((e: any) => Mixin.fromSDK(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  fromSDKJSON(object: any): ApiSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => Method.fromSDKJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDKJSON(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      source_context: isSet(object.source_context) ? SourceContext.fromSDKJSON(object.source_context) : undefined,
      mixins: Array.isArray(object?.mixins) ? object.mixins.map((e: any) => Mixin.fromSDKJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toSDK(message: Api): ApiSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toSDK(e) : undefined);
    } else {
      obj.methods = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    obj.version = message.version;
    message.sourceContext !== undefined && (obj.source_context = message.sourceContext ? SourceContext.toSDK(message.sourceContext) : undefined);
    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toSDK(e) : undefined);
    } else {
      obj.mixins = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromAmino(object: ApiAmino): Api {
    const message = createBaseApi();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.methods = object.methods?.map(e => Method.fromAmino(e)) || [];
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.source_context !== undefined && object.source_context !== null) {
      message.sourceContext = SourceContext.fromAmino(object.source_context);
    }
    message.mixins = object.mixins?.map(e => Mixin.fromAmino(e)) || [];
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Api): ApiAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toAmino(e) : undefined);
    } else {
      obj.methods = message.methods;
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.version = message.version === "" ? undefined : message.version;
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext) : undefined;
    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toAmino(e) : undefined);
    } else {
      obj.mixins = message.mixins;
    }
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: ApiAminoMsg): Api {
    return Api.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiProtoMsg): Api {
    return Api.decode(message.value);
  },
  toProto(message: Api): Uint8Array {
    return Api.encode(message).finish();
  },
  toProtoMsg(message: Api): ApiProtoMsg {
    return {
      typeUrl: "/google.protobuf.Api",
      value: Api.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Method.registerTypeUrl();
    Option.registerTypeUrl();
    SourceContext.registerTypeUrl();
    Mixin.registerTypeUrl();
  }
};
function createBaseMethod(): Method {
  return {
    name: "",
    requestTypeUrl: "",
    requestStreaming: false,
    responseTypeUrl: "",
    responseStreaming: false,
    options: [],
    syntax: 0
  };
}
export const Method = {
  typeUrl: "/google.protobuf.Method",
  is(o: any): o is Method {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.requestTypeUrl === "string" && typeof o.requestStreaming === "boolean" && typeof o.responseTypeUrl === "string" && typeof o.responseStreaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.is(o.options[0])) && isSet(o.syntax));
  },
  isSDK(o: any): o is MethodSDKType {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.request_type_url === "string" && typeof o.request_streaming === "boolean" && typeof o.response_type_url === "string" && typeof o.response_streaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.isSDK(o.options[0])) && isSet(o.syntax));
  },
  isAmino(o: any): o is MethodAmino {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.request_type_url === "string" && typeof o.request_streaming === "boolean" && typeof o.response_type_url === "string" && typeof o.response_streaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.isAmino(o.options[0])) && isSet(o.syntax));
  },
  encode(message: Method, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.requestTypeUrl !== undefined) {
      writer.uint32(18).string(message.requestTypeUrl);
    }
    if (message.requestStreaming !== undefined) {
      writer.uint32(24).bool(message.requestStreaming);
    }
    if (message.responseTypeUrl !== undefined) {
      writer.uint32(34).string(message.responseTypeUrl);
    }
    if (message.responseStreaming !== undefined) {
      writer.uint32(40).bool(message.responseStreaming);
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Method {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requestTypeUrl = reader.string();
          break;
        case 3:
          message.requestStreaming = reader.bool();
          break;
        case 4:
          message.responseTypeUrl = reader.string();
          break;
        case 5:
          message.responseStreaming = reader.bool();
          break;
        case 6:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        case 7:
          message.syntax = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Method {
    const obj = createBaseMethod();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.requestTypeUrl)) obj.requestTypeUrl = String(object.requestTypeUrl);
    if (isSet(object.requestStreaming)) obj.requestStreaming = Boolean(object.requestStreaming);
    if (isSet(object.responseTypeUrl)) obj.responseTypeUrl = String(object.responseTypeUrl);
    if (isSet(object.responseStreaming)) obj.responseStreaming = Boolean(object.responseStreaming);
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    if (isSet(object.syntax)) obj.syntax = syntaxFromJSON(object.syntax);
    return obj;
  },
  toJSON(message: Method): JsonSafe<Method> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requestTypeUrl !== undefined && (obj.requestTypeUrl = message.requestTypeUrl);
    message.requestStreaming !== undefined && (obj.requestStreaming = message.requestStreaming);
    message.responseTypeUrl !== undefined && (obj.responseTypeUrl = message.responseTypeUrl);
    message.responseStreaming !== undefined && (obj.responseStreaming = message.responseStreaming);
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromPartial(object: DeepPartial<Method>): Method {
    const message = createBaseMethod();
    message.name = object.name ?? "";
    message.requestTypeUrl = object.requestTypeUrl ?? "";
    message.requestStreaming = object.requestStreaming ?? false;
    message.responseTypeUrl = object.responseTypeUrl ?? "";
    message.responseStreaming = object.responseStreaming ?? false;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromSDK(object: MethodSDKType): Method {
    return {
      name: object?.name,
      requestTypeUrl: object?.request_type_url,
      requestStreaming: object?.request_streaming,
      responseTypeUrl: object?.response_type_url,
      responseStreaming: object?.response_streaming,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  fromSDKJSON(object: any): MethodSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      request_type_url: isSet(object.request_type_url) ? String(object.request_type_url) : "",
      request_streaming: isSet(object.request_streaming) ? Boolean(object.request_streaming) : false,
      response_type_url: isSet(object.response_type_url) ? String(object.response_type_url) : "",
      response_streaming: isSet(object.response_streaming) ? Boolean(object.response_streaming) : false,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDKJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toSDK(message: Method): MethodSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.request_type_url = message.requestTypeUrl;
    obj.request_streaming = message.requestStreaming;
    obj.response_type_url = message.responseTypeUrl;
    obj.response_streaming = message.responseStreaming;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromAmino(object: MethodAmino): Method {
    const message = createBaseMethod();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.request_type_url !== undefined && object.request_type_url !== null) {
      message.requestTypeUrl = object.request_type_url;
    }
    if (object.request_streaming !== undefined && object.request_streaming !== null) {
      message.requestStreaming = object.request_streaming;
    }
    if (object.response_type_url !== undefined && object.response_type_url !== null) {
      message.responseTypeUrl = object.response_type_url;
    }
    if (object.response_streaming !== undefined && object.response_streaming !== null) {
      message.responseStreaming = object.response_streaming;
    }
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Method): MethodAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.request_type_url = message.requestTypeUrl === "" ? undefined : message.requestTypeUrl;
    obj.request_streaming = message.requestStreaming === false ? undefined : message.requestStreaming;
    obj.response_type_url = message.responseTypeUrl === "" ? undefined : message.responseTypeUrl;
    obj.response_streaming = message.responseStreaming === false ? undefined : message.responseStreaming;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: MethodAminoMsg): Method {
    return Method.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodProtoMsg): Method {
    return Method.decode(message.value);
  },
  toProto(message: Method): Uint8Array {
    return Method.encode(message).finish();
  },
  toProtoMsg(message: Method): MethodProtoMsg {
    return {
      typeUrl: "/google.protobuf.Method",
      value: Method.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Option.registerTypeUrl();
  }
};
function createBaseMixin(): Mixin {
  return {
    name: "",
    root: ""
  };
}
export const Mixin = {
  typeUrl: "/google.protobuf.Mixin",
  is(o: any): o is Mixin {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  isSDK(o: any): o is MixinSDKType {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  isAmino(o: any): o is MixinAmino {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  encode(message: Mixin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.root !== undefined) {
      writer.uint32(18).string(message.root);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Mixin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.root = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Mixin {
    const obj = createBaseMixin();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.root)) obj.root = String(object.root);
    return obj;
  },
  toJSON(message: Mixin): JsonSafe<Mixin> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.root !== undefined && (obj.root = message.root);
    return obj;
  },
  fromPartial(object: DeepPartial<Mixin>): Mixin {
    const message = createBaseMixin();
    message.name = object.name ?? "";
    message.root = object.root ?? "";
    return message;
  },
  fromSDK(object: MixinSDKType): Mixin {
    return {
      name: object?.name,
      root: object?.root
    };
  },
  fromSDKJSON(object: any): MixinSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      root: isSet(object.root) ? String(object.root) : ""
    };
  },
  toSDK(message: Mixin): MixinSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.root = message.root;
    return obj;
  },
  fromAmino(object: MixinAmino): Mixin {
    const message = createBaseMixin();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = object.root;
    }
    return message;
  },
  toAmino(message: Mixin): MixinAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.root = message.root === "" ? undefined : message.root;
    return obj;
  },
  fromAminoMsg(object: MixinAminoMsg): Mixin {
    return Mixin.fromAmino(object.value);
  },
  fromProtoMsg(message: MixinProtoMsg): Mixin {
    return Mixin.decode(message.value);
  },
  toProto(message: Mixin): Uint8Array {
    return Mixin.encode(message).finish();
  },
  toProtoMsg(message: Mixin): MixinProtoMsg {
    return {
      typeUrl: "/google.protobuf.Mixin",
      value: Mixin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};