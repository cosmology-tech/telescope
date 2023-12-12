import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "google.protobuf";
export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */
  TYPE_GROUP = 10,
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /**
   * SPEED - Generate complete code for parsing, serialization,
   * etc.
   */
  SPEED = 1,
  /** CODE_SIZE - Use ReflectionOps to implement these methods. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}
export const FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_CTypeSDKType = FieldOptions_CType;
export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_JSTypeSDKType = FieldOptions_JSType;
export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}
export const MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetSDKType {
  file: FileDescriptorProtoSDKType[];
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  publicDependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency: number[];
  /** All top-level definitions in this file. */
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo?: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax: string;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoSDKType {
  name: string;
  package: string;
  dependency: string[];
  public_dependency: number[];
  weak_dependency: number[];
  message_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  service: ServiceDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  options?: FileOptionsSDKType;
  source_code_info?: SourceCodeInfoSDKType;
  syntax: string;
}
/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options?: MessageOptions;
  reservedRange: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName: string[];
}
/** Describes a message type. */
export interface DescriptorProtoSDKType {
  name: string;
  field: FieldDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  nested_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  extension_range: DescriptorProto_ExtensionRangeSDKType[];
  oneof_decl: OneofDescriptorProtoSDKType[];
  options?: MessageOptionsSDKType;
  reserved_range: DescriptorProto_ReservedRangeSDKType[];
  reserved_name: string[];
}
export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptions;
}
export interface DescriptorProto_ExtensionRangeSDKType {
  start: number;
  end: number;
  options?: ExtensionRangeOptionsSDKType;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeSDKType {
  start: number;
  end: number;
}
export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface ExtensionRangeOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  defaultValue: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName: string;
  options?: FieldOptions;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoSDKType {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  type: FieldDescriptorProto_Type;
  type_name: string;
  extendee: string;
  default_value: string;
  oneof_index: number;
  json_name: string;
  options?: FieldOptionsSDKType;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoSDKType {
  name: string;
  options?: OneofOptionsSDKType;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reservedName: string[];
}
/** Describes an enum type. */
export interface EnumDescriptorProtoSDKType {
  name: string;
  value: EnumValueDescriptorProtoSDKType[];
  options?: EnumOptionsSDKType;
  reserved_range: EnumDescriptorProto_EnumReservedRangeSDKType[];
  reserved_name: string[];
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeSDKType {
  start: number;
  end: number;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoSDKType {
  name: string;
  number: number;
  options?: EnumValueOptionsSDKType;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}
/** Describes a service. */
export interface ServiceDescriptorProtoSDKType {
  name: string;
  method: MethodDescriptorProtoSDKType[];
  options?: ServiceOptionsSDKType;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType: string;
  outputType: string;
  options?: MethodOptions;
  /** Identifies if client streams multiple client messages */
  clientStreaming: boolean;
  /** Identifies if server streams multiple server messages */
  serverStreaming: boolean;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoSDKType {
  name: string;
  input_type: string;
  output_type: string;
  options?: MethodOptionsSDKType;
  client_streaming: boolean;
  server_streaming: boolean;
}
export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  javaPackage: string;
  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  javaOuterClassname: string;
  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  javaMultipleFiles: boolean;
  /** This option does nothing. */
  /** @deprecated */
  javaGenerateEqualsAndHash: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  goPackage: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  phpGenericServices: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  ccEnableArenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objcClassPrefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharpNamespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swiftPrefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  phpClassPrefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  phpNamespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  phpMetadataNamespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  rubyPackage: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpretedOption: UninterpretedOption[];
}
export interface FileOptionsSDKType {
  java_package: string;
  java_outer_classname: string;
  java_multiple_files: boolean;
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  go_package: string;
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  php_generic_services: boolean;
  deprecated: boolean;
  cc_enable_arenas: boolean;
  objc_class_prefix: string;
  csharp_namespace: string;
  swift_prefix: string;
  php_class_prefix: string;
  php_namespace: string;
  php_metadata_namespace: string;
  ruby_package: string;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  messageSetWireFormat: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  noStandardDescriptorAccessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  mapEntry: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface MessageOptionsSDKType {
  message_set_wire_format: boolean;
  no_standard_descriptor_accessor: boolean;
  deprecated: boolean;
  map_entry: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * 
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptionsSDKType {
  ctype: FieldOptions_CType;
  packed: boolean;
  jstype: FieldOptions_JSType;
  lazy: boolean;
  deprecated: boolean;
  weak: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface OneofOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface OneofOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allowAlias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumOptionsSDKType {
  allow_alias: boolean;
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumValueOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface ServiceOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface MethodOptionsSDKType {
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue: string;
  positiveIntValue: bigint;
  negativeIntValue: bigint;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionSDKType {
  name: UninterpretedOption_NamePartSDKType[];
  identifier_value: string;
  positive_int_value: bigint;
  negative_int_value: bigint;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePartSDKType {
  name_part: string;
  is_extension: boolean;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoSDKType {
  location: SourceCodeInfo_LocationSDKType[];
}
export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}
export interface SourceCodeInfo_LocationSDKType {
  path: number[];
  span: number[];
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoSDKType {
  annotation: GeneratedCodeInfo_AnnotationSDKType[];
}
export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  sourceFile: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}
export interface GeneratedCodeInfo_AnnotationSDKType {
  path: number[];
  source_file: string;
  begin: number;
  end: number;
}
function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {
    file: []
  };
}
export const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode(message: FileDescriptorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorSet {
    const obj = createBaseFileDescriptorSet();
    if (Array.isArray(object?.file)) obj.file = object.file.map((e: any) => FileDescriptorProto.fromJSON(e));
    return obj;
  },
  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FileDescriptorSetSDKType): FileDescriptorSet {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): FileDescriptorSetSDKType {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: FileDescriptorSet): FileDescriptorSetSDKType {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  }
};
function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: ""
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode(message: FileDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorProto {
    const obj = createBaseFileDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.package)) obj.package = String(object.package);
    if (Array.isArray(object?.dependency)) obj.dependency = object.dependency.map((e: any) => String(e));
    if (Array.isArray(object?.publicDependency)) obj.publicDependency = object.publicDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.weakDependency)) obj.weakDependency = object.weakDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.messageType)) obj.messageType = object.messageType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType)) obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.service)) obj.service = object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension)) obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = FileOptions.fromJSON(object.options);
    if (isSet(object.sourceCodeInfo)) obj.sourceCodeInfo = SourceCodeInfo.fromJSON(object.sourceCodeInfo);
    if (isSet(object.syntax)) obj.syntax = String(object.syntax);
    return obj;
  },
  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.publicDependency = message.publicDependency.map(e => Math.round(e));
    } else {
      obj.publicDependency = [];
    }
    if (message.weakDependency) {
      obj.weakDependency = message.weakDependency.map(e => Math.round(e));
    } else {
      obj.weakDependency = [];
    }
    if (message.messageType) {
      obj.messageType = message.messageType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.messageType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.sourceCodeInfo !== undefined && (obj.sourceCodeInfo = message.sourceCodeInfo ? SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map(e => e) || [];
    message.publicDependency = object.publicDependency?.map(e => e) || [];
    message.weakDependency = object.weakDependency?.map(e => e) || [];
    message.messageType = object.messageType?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = FileOptions.fromPartial(object.options);
    }
    if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
      message.sourceCodeInfo = SourceCodeInfo.fromPartial(object.sourceCodeInfo);
    }
    message.syntax = object.syntax ?? "";
    return message;
  },
  fromSDK(object: FileDescriptorProtoSDKType): FileDescriptorProto {
    return {
      name: object?.name,
      package: object?.package,
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => e) : [],
      publicDependency: Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => e) : [],
      weakDependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => e) : [],
      messageType: Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromSDK(e)) : [],
      enumType: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDK(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromSDK(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      options: object.options ? FileOptions.fromSDK(object.options) : undefined,
      sourceCodeInfo: object.source_code_info ? SourceCodeInfo.fromSDK(object.source_code_info) : undefined,
      syntax: object?.syntax
    };
  },
  fromSDKJSON(object: any): FileDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      package: isSet(object.package) ? String(object.package) : "",
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => String(e)) : [],
      public_dependency: Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => Number(e)) : [],
      weak_dependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => Number(e)) : [],
      message_type: Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromSDKJSON(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDKJSON(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromSDKJSON(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? FileOptions.fromSDKJSON(object.options) : undefined,
      source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromSDKJSON(object.source_code_info) : undefined,
      syntax: isSet(object.syntax) ? String(object.syntax) : ""
    };
  },
  toSDK(message: FileDescriptorProto): FileDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.package = message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map(e => e);
    } else {
      obj.public_dependency = [];
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map(e => e);
    } else {
      obj.weak_dependency = [];
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map(e => e ? DescriptorProto.toSDK(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toSDK(message.options) : undefined);
    message.sourceCodeInfo !== undefined && (obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toSDK(message.sourceCodeInfo) : undefined);
    obj.syntax = message.syntax;
    return obj;
  }
};
function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode(message: DescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto {
    const obj = createBaseDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.field)) obj.field = object.field.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension)) obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.nestedType)) obj.nestedType = object.nestedType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType)) obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extensionRange)) obj.extensionRange = object.extensionRange.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e));
    if (Array.isArray(object?.oneofDecl)) obj.oneofDecl = object.oneofDecl.map((e: any) => OneofDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = MessageOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange)) obj.reservedRange = object.reservedRange.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e));
    if (Array.isArray(object?.reservedName)) obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nestedType = message.nestedType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.nestedType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.extensionRange) {
      obj.extensionRange = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined);
    } else {
      obj.extensionRange = [];
    }
    if (message.oneofDecl) {
      obj.oneofDecl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.oneofDecl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.nestedType = object.nestedType?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.extensionRange = object.extensionRange?.map(e => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneofDecl = object.oneofDecl?.map(e => OneofDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = MessageOptions.fromPartial(object.options);
    }
    message.reservedRange = object.reservedRange?.map(e => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map(e => e) || [];
    return message;
  },
  fromSDK(object: DescriptorProtoSDKType): DescriptorProto {
    return {
      name: object?.name,
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      nestedType: Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromSDK(e)) : [],
      enumType: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDK(e)) : [],
      extensionRange: Array.isArray(object?.extension_range) ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromSDK(e)) : [],
      oneofDecl: Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromSDK(e)) : [],
      options: object.options ? MessageOptions.fromSDK(object.options) : undefined,
      reservedRange: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromSDK(e)) : [],
      reservedName: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): DescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromSDKJSON(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDKJSON(e)) : [],
      nested_type: Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromSDKJSON(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDKJSON(e)) : [],
      extension_range: Array.isArray(object?.extension_range) ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromSDKJSON(e)) : [],
      oneof_decl: Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? MessageOptions.fromSDKJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromSDKJSON(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: DescriptorProto): DescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map(e => e ? DescriptorProto.toSDK(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toSDK(e) : undefined);
    } else {
      obj.extension_range = [];
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toSDK(message.options) : undefined);
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toSDK(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  }
};
function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: undefined
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode(message: DescriptorProto_ExtensionRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ExtensionRange {
    const obj = createBaseDescriptorProto_ExtensionRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    if (isSet(object.options)) obj.options = ExtensionRangeOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = ExtensionRangeOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: DescriptorProto_ExtensionRangeSDKType): DescriptorProto_ExtensionRange {
    return {
      start: object?.start,
      end: object?.end,
      options: object.options ? ExtensionRangeOptions.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): DescriptorProto_ExtensionRangeSDKType {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      options: isSet(object.options) ? ExtensionRangeOptions.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toSDK(message.options) : undefined);
    return obj;
  }
};
function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode(message: DescriptorProto_ReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ReservedRange {
    const obj = createBaseDescriptorProto_ReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: DescriptorProto_ReservedRangeSDKType): DescriptorProto_ReservedRange {
    return {
      start: object?.start,
      end: object?.end
    };
  },
  fromSDKJSON(object: any): DescriptorProto_ReservedRangeSDKType {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toSDK(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  }
};
function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {
    uninterpretedOption: []
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode(message: ExtensionRangeOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRangeOptions {
    const obj = createBaseExtensionRangeOptions();
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: ExtensionRangeOptions): unknown {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExtensionRangeOptionsSDKType): ExtensionRangeOptions {
    return {
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ExtensionRangeOptionsSDKType {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ExtensionRangeOptions): ExtensionRangeOptionsSDKType {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode(message: FieldDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = (reader.int32() as any);
          break;
        case 5:
          message.type = (reader.int32() as any);
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldDescriptorProto {
    const obj = createBaseFieldDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.label)) obj.label = fieldDescriptorProto_LabelFromJSON(object.label);
    if (isSet(object.type)) obj.type = fieldDescriptorProto_TypeFromJSON(object.type);
    if (isSet(object.typeName)) obj.typeName = String(object.typeName);
    if (isSet(object.extendee)) obj.extendee = String(object.extendee);
    if (isSet(object.defaultValue)) obj.defaultValue = String(object.defaultValue);
    if (isSet(object.oneofIndex)) obj.oneofIndex = Number(object.oneofIndex);
    if (isSet(object.jsonName)) obj.jsonName = String(object.jsonName);
    if (isSet(object.options)) obj.options = FieldOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.typeName = object.typeName ?? "";
    message.extendee = object.extendee ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.jsonName = object.jsonName ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = FieldOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: FieldDescriptorProtoSDKType): FieldDescriptorProto {
    return {
      name: object?.name,
      number: object?.number,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      typeName: object?.type_name,
      extendee: object?.extendee,
      defaultValue: object?.default_value,
      oneofIndex: object?.oneof_index,
      jsonName: object?.json_name,
      options: object.options ? FieldOptions.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): FieldDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      type_name: isSet(object.type_name) ? String(object.type_name) : "",
      extendee: isSet(object.extendee) ? String(object.extendee) : "",
      default_value: isSet(object.default_value) ? String(object.default_value) : "",
      oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : 0,
      json_name: isSet(object.json_name) ? String(object.json_name) : "",
      options: isSet(object.options) ? FieldOptions.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: FieldDescriptorProto): FieldDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    obj.type_name = message.typeName;
    obj.extendee = message.extendee;
    obj.default_value = message.defaultValue;
    obj.oneof_index = message.oneofIndex;
    obj.json_name = message.jsonName;
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toSDK(message.options) : undefined);
    return obj;
  }
};
function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {
    name: "",
    options: undefined
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode(message: OneofDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofDescriptorProto {
    const obj = createBaseOneofDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.options)) obj.options = OneofOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = OneofOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: OneofDescriptorProtoSDKType): OneofDescriptorProto {
    return {
      name: object?.name,
      options: object.options ? OneofOptions.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): OneofDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      options: isSet(object.options) ? OneofOptions.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: OneofDescriptorProto): OneofDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toSDK(message.options) : undefined);
    return obj;
  }
};
function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {
    name: "",
    value: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode(message: EnumDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto {
    const obj = createBaseEnumDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.value)) obj.value = object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = EnumOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange)) obj.reservedRange = object.reservedRange.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromJSON(e));
    if (Array.isArray(object?.reservedName)) obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumOptions.fromPartial(object.options);
    }
    message.reservedRange = object.reservedRange?.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EnumDescriptorProtoSDKType): EnumDescriptorProto {
    return {
      name: object?.name,
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromSDK(e)) : [],
      options: object.options ? EnumOptions.fromSDK(object.options) : undefined,
      reservedRange: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromSDK(e)) : [],
      reservedName: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): EnumDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? EnumOptions.fromSDKJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromSDKJSON(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: EnumDescriptorProto): EnumDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toSDK(message.options) : undefined);
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toSDK(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    const obj = createBaseEnumDescriptorProto_EnumReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: EnumDescriptorProto_EnumReservedRangeSDKType): EnumDescriptorProto_EnumReservedRange {
    return {
      start: object?.start,
      end: object?.end
    };
  },
  fromSDKJSON(object: any): EnumDescriptorProto_EnumReservedRangeSDKType {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toSDK(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  }
};
function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {
    name: "",
    number: 0,
    options: undefined
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode(message: EnumValueDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueDescriptorProto {
    const obj = createBaseEnumValueDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.options)) obj.options = EnumValueOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumValueOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: EnumValueDescriptorProtoSDKType): EnumValueDescriptorProto {
    return {
      name: object?.name,
      number: object?.number,
      options: object.options ? EnumValueOptions.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): EnumValueDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      options: isSet(object.options) ? EnumValueOptions.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: EnumValueDescriptorProto): EnumValueDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toSDK(message.options) : undefined);
    return obj;
  }
};
function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {
    name: "",
    method: [],
    options: undefined
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode(message: ServiceDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceDescriptorProto {
    const obj = createBaseServiceDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.method)) obj.method = object.method.map((e: any) => MethodDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = ServiceOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map(e => MethodDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = ServiceOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: ServiceDescriptorProtoSDKType): ServiceDescriptorProto {
    return {
      name: object?.name,
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromSDK(e)) : [],
      options: object.options ? ServiceOptions.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): ServiceDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? ServiceOptions.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: ServiceDescriptorProto): ServiceDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toSDK(message.options) : undefined);
    return obj;
  }
};
function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode(message: MethodDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodDescriptorProto {
    const obj = createBaseMethodDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.inputType)) obj.inputType = String(object.inputType);
    if (isSet(object.outputType)) obj.outputType = String(object.outputType);
    if (isSet(object.options)) obj.options = MethodOptions.fromJSON(object.options);
    if (isSet(object.clientStreaming)) obj.clientStreaming = Boolean(object.clientStreaming);
    if (isSet(object.serverStreaming)) obj.serverStreaming = Boolean(object.serverStreaming);
    return obj;
  },
  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.outputType !== undefined && (obj.outputType = message.outputType);
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
    message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
    return obj;
  },
  fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.inputType = object.inputType ?? "";
    message.outputType = object.outputType ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = MethodOptions.fromPartial(object.options);
    }
    message.clientStreaming = object.clientStreaming ?? false;
    message.serverStreaming = object.serverStreaming ?? false;
    return message;
  },
  fromSDK(object: MethodDescriptorProtoSDKType): MethodDescriptorProto {
    return {
      name: object?.name,
      inputType: object?.input_type,
      outputType: object?.output_type,
      options: object.options ? MethodOptions.fromSDK(object.options) : undefined,
      clientStreaming: object?.client_streaming,
      serverStreaming: object?.server_streaming
    };
  },
  fromSDKJSON(object: any): MethodDescriptorProtoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      input_type: isSet(object.input_type) ? String(object.input_type) : "",
      output_type: isSet(object.output_type) ? String(object.output_type) : "",
      options: isSet(object.options) ? MethodOptions.fromSDKJSON(object.options) : undefined,
      client_streaming: isSet(object.client_streaming) ? Boolean(object.client_streaming) : false,
      server_streaming: isSet(object.server_streaming) ? Boolean(object.server_streaming) : false
    };
  },
  toSDK(message: MethodDescriptorProto): MethodDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.input_type = message.inputType;
    obj.output_type = message.outputType;
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toSDK(message.options) : undefined);
    obj.client_streaming = message.clientStreaming;
    obj.server_streaming = message.serverStreaming;
    return obj;
  }
};
function createBaseFileOptions(): FileOptions {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: []
  };
}
export const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  encode(message: FileOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices === true) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = (reader.int32() as any);
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 42:
          message.phpGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileOptions {
    const obj = createBaseFileOptions();
    if (isSet(object.javaPackage)) obj.javaPackage = String(object.javaPackage);
    if (isSet(object.javaOuterClassname)) obj.javaOuterClassname = String(object.javaOuterClassname);
    if (isSet(object.javaMultipleFiles)) obj.javaMultipleFiles = Boolean(object.javaMultipleFiles);
    if (isSet(object.javaGenerateEqualsAndHash)) obj.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
    if (isSet(object.javaStringCheckUtf8)) obj.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
    if (isSet(object.optimizeFor)) obj.optimizeFor = fileOptions_OptimizeModeFromJSON(object.optimizeFor);
    if (isSet(object.goPackage)) obj.goPackage = String(object.goPackage);
    if (isSet(object.ccGenericServices)) obj.ccGenericServices = Boolean(object.ccGenericServices);
    if (isSet(object.javaGenericServices)) obj.javaGenericServices = Boolean(object.javaGenericServices);
    if (isSet(object.pyGenericServices)) obj.pyGenericServices = Boolean(object.pyGenericServices);
    if (isSet(object.phpGenericServices)) obj.phpGenericServices = Boolean(object.phpGenericServices);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.ccEnableArenas)) obj.ccEnableArenas = Boolean(object.ccEnableArenas);
    if (isSet(object.objcClassPrefix)) obj.objcClassPrefix = String(object.objcClassPrefix);
    if (isSet(object.csharpNamespace)) obj.csharpNamespace = String(object.csharpNamespace);
    if (isSet(object.swiftPrefix)) obj.swiftPrefix = String(object.swiftPrefix);
    if (isSet(object.phpClassPrefix)) obj.phpClassPrefix = String(object.phpClassPrefix);
    if (isSet(object.phpNamespace)) obj.phpNamespace = String(object.phpNamespace);
    if (isSet(object.phpMetadataNamespace)) obj.phpMetadataNamespace = String(object.phpMetadataNamespace);
    if (isSet(object.rubyPackage)) obj.rubyPackage = String(object.rubyPackage);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
    message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
    message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
    message.javaGenerateEqualsAndHash !== undefined && (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
    message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
    message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    message.goPackage !== undefined && (obj.goPackage = message.goPackage);
    message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
    message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
    message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
    message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
    message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
    message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
    message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
    message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
    message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
    message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
    message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = createBaseFileOptions();
    message.javaPackage = object.javaPackage ?? "";
    message.javaOuterClassname = object.javaOuterClassname ?? "";
    message.javaMultipleFiles = object.javaMultipleFiles ?? false;
    message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
    message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
    message.optimizeFor = object.optimizeFor ?? 1;
    message.goPackage = object.goPackage ?? "";
    message.ccGenericServices = object.ccGenericServices ?? false;
    message.javaGenericServices = object.javaGenericServices ?? false;
    message.pyGenericServices = object.pyGenericServices ?? false;
    message.phpGenericServices = object.phpGenericServices ?? false;
    message.deprecated = object.deprecated ?? false;
    message.ccEnableArenas = object.ccEnableArenas ?? false;
    message.objcClassPrefix = object.objcClassPrefix ?? "";
    message.csharpNamespace = object.csharpNamespace ?? "";
    message.swiftPrefix = object.swiftPrefix ?? "";
    message.phpClassPrefix = object.phpClassPrefix ?? "";
    message.phpNamespace = object.phpNamespace ?? "";
    message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
    message.rubyPackage = object.rubyPackage ?? "";
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FileOptionsSDKType): FileOptions {
    return {
      javaPackage: object?.java_package,
      javaOuterClassname: object?.java_outer_classname,
      javaMultipleFiles: object?.java_multiple_files,
      javaGenerateEqualsAndHash: object?.java_generate_equals_and_hash,
      javaStringCheckUtf8: object?.java_string_check_utf8,
      optimizeFor: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      goPackage: object?.go_package,
      ccGenericServices: object?.cc_generic_services,
      javaGenericServices: object?.java_generic_services,
      pyGenericServices: object?.py_generic_services,
      phpGenericServices: object?.php_generic_services,
      deprecated: object?.deprecated,
      ccEnableArenas: object?.cc_enable_arenas,
      objcClassPrefix: object?.objc_class_prefix,
      csharpNamespace: object?.csharp_namespace,
      swiftPrefix: object?.swift_prefix,
      phpClassPrefix: object?.php_class_prefix,
      phpNamespace: object?.php_namespace,
      phpMetadataNamespace: object?.php_metadata_namespace,
      rubyPackage: object?.ruby_package,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): FileOptionsSDKType {
    return {
      java_package: isSet(object.java_package) ? String(object.java_package) : "",
      java_outer_classname: isSet(object.java_outer_classname) ? String(object.java_outer_classname) : "",
      java_multiple_files: isSet(object.java_multiple_files) ? Boolean(object.java_multiple_files) : false,
      java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash) ? Boolean(object.java_generate_equals_and_hash) : false,
      java_string_check_utf8: isSet(object.java_string_check_utf8) ? Boolean(object.java_string_check_utf8) : false,
      optimize_for: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      go_package: isSet(object.go_package) ? String(object.go_package) : "",
      cc_generic_services: isSet(object.cc_generic_services) ? Boolean(object.cc_generic_services) : false,
      java_generic_services: isSet(object.java_generic_services) ? Boolean(object.java_generic_services) : false,
      py_generic_services: isSet(object.py_generic_services) ? Boolean(object.py_generic_services) : false,
      php_generic_services: isSet(object.php_generic_services) ? Boolean(object.php_generic_services) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      cc_enable_arenas: isSet(object.cc_enable_arenas) ? Boolean(object.cc_enable_arenas) : false,
      objc_class_prefix: isSet(object.objc_class_prefix) ? String(object.objc_class_prefix) : "",
      csharp_namespace: isSet(object.csharp_namespace) ? String(object.csharp_namespace) : "",
      swift_prefix: isSet(object.swift_prefix) ? String(object.swift_prefix) : "",
      php_class_prefix: isSet(object.php_class_prefix) ? String(object.php_class_prefix) : "",
      php_namespace: isSet(object.php_namespace) ? String(object.php_namespace) : "",
      php_metadata_namespace: isSet(object.php_metadata_namespace) ? String(object.php_metadata_namespace) : "",
      ruby_package: isSet(object.ruby_package) ? String(object.ruby_package) : "",
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: FileOptions): FileOptionsSDKType {
    const obj: any = {};
    obj.java_package = message.javaPackage;
    obj.java_outer_classname = message.javaOuterClassname;
    obj.java_multiple_files = message.javaMultipleFiles;
    obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash;
    obj.java_string_check_utf8 = message.javaStringCheckUtf8;
    message.optimizeFor !== undefined && (obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    obj.go_package = message.goPackage;
    obj.cc_generic_services = message.ccGenericServices;
    obj.java_generic_services = message.javaGenericServices;
    obj.py_generic_services = message.pyGenericServices;
    obj.php_generic_services = message.phpGenericServices;
    obj.deprecated = message.deprecated;
    obj.cc_enable_arenas = message.ccEnableArenas;
    obj.objc_class_prefix = message.objcClassPrefix;
    obj.csharp_namespace = message.csharpNamespace;
    obj.swift_prefix = message.swiftPrefix;
    obj.php_class_prefix = message.phpClassPrefix;
    obj.php_namespace = message.phpNamespace;
    obj.php_metadata_namespace = message.phpMetadataNamespace;
    obj.ruby_package = message.rubyPackage;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseMessageOptions(): MessageOptions {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
export const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  encode(message: MessageOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MessageOptions {
    const obj = createBaseMessageOptions();
    if (isSet(object.messageSetWireFormat)) obj.messageSetWireFormat = Boolean(object.messageSetWireFormat);
    if (isSet(object.noStandardDescriptorAccessor)) obj.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.mapEntry)) obj.mapEntry = Boolean(object.mapEntry);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
    message.noStandardDescriptorAccessor !== undefined && (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = object.messageSetWireFormat ?? false;
    message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.mapEntry = object.mapEntry ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MessageOptionsSDKType): MessageOptions {
    return {
      messageSetWireFormat: object?.message_set_wire_format,
      noStandardDescriptorAccessor: object?.no_standard_descriptor_accessor,
      deprecated: object?.deprecated,
      mapEntry: object?.map_entry,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MessageOptionsSDKType {
    return {
      message_set_wire_format: isSet(object.message_set_wire_format) ? Boolean(object.message_set_wire_format) : false,
      no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor) ? Boolean(object.no_standard_descriptor_accessor) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      map_entry: isSet(object.map_entry) ? Boolean(object.map_entry) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MessageOptions): MessageOptionsSDKType {
    const obj: any = {};
    obj.message_set_wire_format = message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated;
    obj.map_entry = message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpretedOption: []
  };
}
export const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  encode(message: FieldOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = (reader.int32() as any);
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = (reader.int32() as any);
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions {
    const obj = createBaseFieldOptions();
    if (isSet(object.ctype)) obj.ctype = fieldOptions_CTypeFromJSON(object.ctype);
    if (isSet(object.packed)) obj.packed = Boolean(object.packed);
    if (isSet(object.jstype)) obj.jstype = fieldOptions_JSTypeFromJSON(object.jstype);
    if (isSet(object.lazy)) obj.lazy = Boolean(object.lazy);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.weak)) obj.weak = Boolean(object.weak);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FieldOptionsSDKType): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: object?.packed,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: object?.lazy,
      deprecated: object?.deprecated,
      weak: object?.weak,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): FieldOptionsSDKType {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: isSet(object.packed) ? Boolean(object.packed) : false,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      weak: isSet(object.weak) ? Boolean(object.weak) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: FieldOptions): FieldOptionsSDKType {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    obj.packed = message.packed;
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    obj.lazy = message.lazy;
    obj.deprecated = message.deprecated;
    obj.weak = message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseOneofOptions(): OneofOptions {
  return {
    uninterpretedOption: []
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode(message: OneofOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofOptions {
    const obj = createBaseOneofOptions();
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OneofOptions>): OneofOptions {
    const message = createBaseOneofOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: OneofOptionsSDKType): OneofOptions {
    return {
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): OneofOptionsSDKType {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: OneofOptions): OneofOptionsSDKType {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseEnumOptions(): EnumOptions {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  encode(message: EnumOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumOptions {
    const obj = createBaseEnumOptions();
    if (isSet(object.allowAlias)) obj.allowAlias = Boolean(object.allowAlias);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = createBaseEnumOptions();
    message.allowAlias = object.allowAlias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EnumOptionsSDKType): EnumOptions {
    return {
      allowAlias: object?.allow_alias,
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): EnumOptionsSDKType {
    return {
      allow_alias: isSet(object.allow_alias) ? Boolean(object.allow_alias) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: EnumOptions): EnumOptionsSDKType {
    const obj: any = {};
    obj.allow_alias = message.allowAlias;
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseEnumValueOptions(): EnumValueOptions {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode(message: EnumValueOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueOptions {
    const obj = createBaseEnumValueOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EnumValueOptionsSDKType): EnumValueOptions {
    return {
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): EnumValueOptionsSDKType {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: EnumValueOptions): EnumValueOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseServiceOptions(): ServiceOptions {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode(message: ServiceOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceOptions {
    const obj = createBaseServiceOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = createBaseServiceOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ServiceOptionsSDKType): ServiceOptions {
    return {
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ServiceOptionsSDKType {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ServiceOptions): ServiceOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseMethodOptions(): MethodOptions {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
export const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  encode(message: MethodOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = (reader.int32() as any);
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodOptions {
    const obj = createBaseMethodOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.idempotencyLevel)) obj.idempotencyLevel = methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotencyLevel !== undefined && (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotencyLevel = object.idempotencyLevel ?? 1;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MethodOptionsSDKType): MethodOptions {
    return {
      deprecated: object?.deprecated,
      idempotencyLevel: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MethodOptionsSDKType {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      idempotency_level: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MethodOptions): MethodOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    message.idempotencyLevel !== undefined && (obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  }
};
function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: BigInt(0),
    negativeIntValue: BigInt(0),
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode(message: UninterpretedOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== BigInt(0)) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption {
    const obj = createBaseUninterpretedOption();
    if (Array.isArray(object?.name)) obj.name = object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e));
    if (isSet(object.identifierValue)) obj.identifierValue = String(object.identifierValue);
    if (isSet(object.positiveIntValue)) obj.positiveIntValue = BigInt(object.positiveIntValue.toString());
    if (isSet(object.negativeIntValue)) obj.negativeIntValue = BigInt(object.negativeIntValue.toString());
    if (isSet(object.doubleValue)) obj.doubleValue = Number(object.doubleValue);
    if (isSet(object.stringValue)) obj.stringValue = bytesFromBase64(object.stringValue);
    if (isSet(object.aggregateValue)) obj.aggregateValue = String(object.aggregateValue);
    return obj;
  },
  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toJSON(e) : undefined);
    } else {
      obj.name = [];
    }
    message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
    message.positiveIntValue !== undefined && (obj.positiveIntValue = (message.positiveIntValue || BigInt(0)).toString());
    message.negativeIntValue !== undefined && (obj.negativeIntValue = (message.negativeIntValue || BigInt(0)).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = base64FromBytes(message.stringValue !== undefined ? message.stringValue : new Uint8Array()));
    message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifierValue = object.identifierValue ?? "";
    if (object.positiveIntValue !== undefined && object.positiveIntValue !== null) {
      message.positiveIntValue = BigInt(object.positiveIntValue.toString());
    }
    if (object.negativeIntValue !== undefined && object.negativeIntValue !== null) {
      message.negativeIntValue = BigInt(object.negativeIntValue.toString());
    }
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? new Uint8Array();
    message.aggregateValue = object.aggregateValue ?? "";
    return message;
  },
  fromSDK(object: UninterpretedOptionSDKType): UninterpretedOption {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromSDK(e)) : [],
      identifierValue: object?.identifier_value,
      positiveIntValue: object?.positive_int_value,
      negativeIntValue: object?.negative_int_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      aggregateValue: object?.aggregate_value
    };
  },
  fromSDKJSON(object: any): UninterpretedOptionSDKType {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromSDKJSON(e)) : [],
      identifier_value: isSet(object.identifier_value) ? String(object.identifier_value) : "",
      positive_int_value: isSet(object.positive_int_value) ? BigInt(object.positive_int_value.toString()) : BigInt(0),
      negative_int_value: isSet(object.negative_int_value) ? BigInt(object.negative_int_value.toString()) : BigInt(0),
      double_value: isSet(object.double_value) ? Number(object.double_value) : 0,
      string_value: isSet(object.string_value) ? bytesFromBase64(object.string_value) : new Uint8Array(),
      aggregate_value: isSet(object.aggregate_value) ? String(object.aggregate_value) : ""
    };
  },
  toSDK(message: UninterpretedOption): UninterpretedOptionSDKType {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toSDK(e) : undefined);
    } else {
      obj.name = [];
    }
    obj.identifier_value = message.identifierValue;
    obj.positive_int_value = message.positiveIntValue;
    obj.negative_int_value = message.negativeIntValue;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.aggregate_value = message.aggregateValue;
    return obj;
  }
};
function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {
    namePart: "",
    isExtension: false
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode(message: UninterpretedOption_NamePart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption_NamePart {
    const obj = createBaseUninterpretedOption_NamePart();
    if (isSet(object.namePart)) obj.namePart = String(object.namePart);
    if (isSet(object.isExtension)) obj.isExtension = Boolean(object.isExtension);
    return obj;
  },
  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    message.namePart !== undefined && (obj.namePart = message.namePart);
    message.isExtension !== undefined && (obj.isExtension = message.isExtension);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = object.namePart ?? "";
    message.isExtension = object.isExtension ?? false;
    return message;
  },
  fromSDK(object: UninterpretedOption_NamePartSDKType): UninterpretedOption_NamePart {
    return {
      namePart: object?.name_part,
      isExtension: object?.is_extension
    };
  },
  fromSDKJSON(object: any): UninterpretedOption_NamePartSDKType {
    return {
      name_part: isSet(object.name_part) ? String(object.name_part) : "",
      is_extension: isSet(object.is_extension) ? Boolean(object.is_extension) : false
    };
  },
  toSDK(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartSDKType {
    const obj: any = {};
    obj.name_part = message.namePart;
    obj.is_extension = message.isExtension;
    return obj;
  }
};
function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode(message: SourceCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo {
    const obj = createBaseSourceCodeInfo();
    if (Array.isArray(object?.location)) obj.location = object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toJSON(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SourceCodeInfoSDKType): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfo_Location.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): SourceCodeInfoSDKType {
    return {
      location: Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfo_Location.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: SourceCodeInfo): SourceCodeInfoSDKType {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toSDK(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  }
};
function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
export const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  encode(message: SourceCodeInfo_Location, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo_Location {
    const obj = createBaseSourceCodeInfo_Location();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (Array.isArray(object?.span)) obj.span = object.span.map((e: any) => Number(e));
    if (isSet(object.leadingComments)) obj.leadingComments = String(object.leadingComments);
    if (isSet(object.trailingComments)) obj.trailingComments = String(object.trailingComments);
    if (Array.isArray(object?.leadingDetachedComments)) obj.leadingDetachedComments = object.leadingDetachedComments.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
    message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
    if (message.leadingDetachedComments) {
      obj.leadingDetachedComments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leadingDetachedComments = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    message.leadingComments = object.leadingComments ?? "";
    message.trailingComments = object.trailingComments ?? "";
    message.leadingDetachedComments = object.leadingDetachedComments?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SourceCodeInfo_LocationSDKType): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => e) : [],
      leadingComments: object?.leading_comments,
      trailingComments: object?.trailing_comments,
      leadingDetachedComments: Array.isArray(object?.leading_detached_comments) ? object.leading_detached_comments.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): SourceCodeInfo_LocationSDKType {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => Number(e)) : [],
      leading_comments: isSet(object.leading_comments) ? String(object.leading_comments) : "",
      trailing_comments: isSet(object.trailing_comments) ? String(object.trailing_comments) : "",
      leading_detached_comments: Array.isArray(object?.leading_detached_comments) ? object.leading_detached_comments.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: SourceCodeInfo_Location): SourceCodeInfo_LocationSDKType {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = [];
    }
    obj.leading_comments = message.leadingComments;
    obj.trailing_comments = message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  }
};
function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode(message: GeneratedCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo {
    const obj = createBaseGeneratedCodeInfo();
    if (Array.isArray(object?.annotation)) obj.annotation = object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e));
    return obj;
  },
  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GeneratedCodeInfoSDKType): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GeneratedCodeInfoSDKType {
    return {
      annotation: Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GeneratedCodeInfo): GeneratedCodeInfoSDKType {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toSDK(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  }
};
function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
export const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  encode(message: GeneratedCodeInfo_Annotation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    const obj = createBaseGeneratedCodeInfo_Annotation();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (isSet(object.sourceFile)) obj.sourceFile = String(object.sourceFile);
    if (isSet(object.begin)) obj.begin = Number(object.begin);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    message.sourceFile = object.sourceFile ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: GeneratedCodeInfo_AnnotationSDKType): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      sourceFile: object?.source_file,
      begin: object?.begin,
      end: object?.end
    };
  },
  fromSDKJSON(object: any): GeneratedCodeInfo_AnnotationSDKType {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      source_file: isSet(object.source_file) ? String(object.source_file) : "",
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toSDK(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationSDKType {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    obj.source_file = message.sourceFile;
    obj.begin = message.begin;
    obj.end = message.end;
    return obj;
  }
};