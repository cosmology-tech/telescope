import { ExprValue, ExprValueAmino, ExprValueSDKType, IdRef, IdRefAmino, IdRefSDKType } from "../google/api/expr/v1alpha1/eval";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../google/protobuf/duration";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial, isObject, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
import { toUtf8, fromBase64, fromUtf8, toBase64 } from "@cosmjs/encoding";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
export const protobufPackage = "misc";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface EvalRequest_BindingsEntry {
  key: string;
  value?: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntryAmino {
  key: string;
  value?: ExprValueAmino;
}
export interface EvalRequest_BindingsEntryAminoMsg {
  type: string;
  value: EvalRequest_BindingsEntryAmino;
}
export interface EvalRequest_BindingsEntrySDKType {
  key: string;
  value?: ExprValueSDKType;
}
export interface EvalRequest_RefsEntry {
  key: string;
  value?: IdRef;
}
export interface EvalRequest_RefsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_RefsEntryAmino {
  key: string;
  value?: IdRefAmino;
}
export interface EvalRequest_RefsEntryAminoMsg {
  type: string;
  value: EvalRequest_RefsEntryAmino;
}
export interface EvalRequest_RefsEntrySDKType {
  key: string;
  value?: IdRefSDKType;
}
export interface EvalRequest {
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings: {
    [key: string]: ExprValue;
  };
  refs: {
    [key: string]: IdRef;
  };
  testNum: number;
  testString: string;
  testBool: boolean;
  instantiatePermission?: AccessConfig;
  /** [(gogoproto.nullable) = false] wouldn't work in this case */
  id?: string;
  name?: string;
  testArray: string[];
}
export interface EvalRequestProtoMsg {
  typeUrl: "/misc.EvalRequest";
  value: Uint8Array;
}
export interface EvalRequestAmino {
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings: {
    [key: string]: ExprValueAmino;
  };
  refs: {
    [key: string]: IdRefAmino;
  };
  test_num: number;
  test_string: string;
  test_bool: boolean;
  instantiate_permission?: AccessConfigAmino;
  /** [(gogoproto.nullable) = false] wouldn't work in this case */
  id?: string;
  name?: string;
  test_array: string[];
}
export interface EvalRequestAminoMsg {
  type: "/misc.EvalRequest";
  value: EvalRequestAmino;
}
export interface EvalRequestSDKType {
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  refs: {
    [key: string]: IdRefSDKType;
  };
  test_num: number;
  test_string: string;
  test_bool: boolean;
  instantiate_permission?: AccessConfigSDKType;
  id?: string;
  name?: string;
  test_array: string[];
}
export interface AccessConfig {
  sender: string;
}
export interface AccessConfigProtoMsg {
  typeUrl: "/misc.AccessConfig";
  value: Uint8Array;
}
export interface AccessConfigAmino {
  sender: string;
}
export interface AccessConfigAminoMsg {
  type: "/misc.AccessConfig";
  value: AccessConfigAmino;
}
export interface AccessConfigSDKType {
  sender: string;
}
export interface GenericAuthorization {
  $typeUrl?: "/misc.GenericAuthorization";
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/misc.GenericAuthorization";
  value: Uint8Array;
}
export interface GenericAuthorizationAmino {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
export interface GenericAuthorizationAminoMsg {
  type: "/misc.GenericAuthorization";
  value: GenericAuthorizationAmino;
}
export interface GenericAuthorizationSDKType {
  $typeUrl?: "/misc.GenericAuthorization";
  msg: string;
}
export interface AminoEncodingTest {
  /** scalar */
  str: string;
  dOStr: string;
  b: boolean;
  dOB: boolean;
  num: number;
  dONum: number;
  /** bigint */
  big: bigint;
  dOBig: bigint;
  /** protoType */
  proto?: AccessConfig;
  dOProto: AccessConfig;
  /** anyType */
  auth?: GenericAuthorization | Any | undefined;
  dOAuth: GenericAuthorization | Any | undefined;
  /** bytes */
  salt: Uint8Array;
  dOSalt: Uint8Array;
  /** raw bytes */
  raw: Uint8Array;
  dORaw: Uint8Array;
  /** wasm bytes */
  wasm: Uint8Array;
  dOWasm: Uint8Array;
  /** enum */
  opt: VoteOption;
  dOOpt: VoteOption;
  /** duration */
  period?: Duration;
  dOPeriod: Duration;
  /** timestamp */
  date?: Date;
  dODate: Date;
  /** pubkey */
  pubkey?: Any | undefined;
  dOPubkey: Any | undefined;
  /** array scalar */
  nums: number[];
  dONums: number[];
  /** array bigint */
  bigs: bigint[];
  dOBigs: bigint[];
  /** array bytes */
  salts: Uint8Array[];
  dOSalts: Uint8Array[];
  /** array raw bytes */
  raws: Uint8Array[];
  dORaws: Uint8Array[];
  /** array wasm bytes */
  wasms: Uint8Array[];
  dOWasms: Uint8Array[];
  /** array enum */
  opts: VoteOption[];
  dOOpts: VoteOption[];
  /** array duration */
  periods: Duration[];
  dOPeriods: Duration[];
  /** array protoType */
  protos: AccessConfig[];
  dOProtos: AccessConfig[];
  /** array anyType */
  auths: (GenericAuthorization | Any)[] | Any[];
  dOAuths: (GenericAuthorization | Any)[] | Any[];
}
export interface AminoEncodingTestProtoMsg {
  typeUrl: "/misc.AminoEncodingTest";
  value: Uint8Array;
}
export type AminoEncodingTestEncoded = Omit<AminoEncodingTest, "auth" | "dOAuth" | "pubkey" | "dOPubkey" | "auths" | "dOAuths"> & {
  /** anyType */auth?: GenericAuthorizationProtoMsg | AnyProtoMsg | undefined;
  dOAuth?: GenericAuthorizationProtoMsg | AnyProtoMsg | undefined;
  /** pubkey */pubkey?: AnyProtoMsg | undefined;
  dOPubkey?: AnyProtoMsg | undefined;
  /** array anyType */auths: (GenericAuthorizationProtoMsg | AnyProtoMsg)[];
  dOAuths: (GenericAuthorizationProtoMsg | AnyProtoMsg)[];
};
export interface AminoEncodingTestAmino {
  /** scalar */
  str: string;
  d_o_str: string;
  b: boolean;
  d_o_b: boolean;
  num: number;
  d_o_num: number;
  /** bigint */
  big: string;
  d_o_big: string;
  /** protoType */
  proto?: AccessConfigAmino;
  d_o_proto: AccessConfigAmino;
  /** anyType */
  auth?: AnyAmino;
  d_o_auth: AnyAmino;
  /** bytes */
  salt: string;
  d_o_salt: string;
  /** raw bytes */
  raw: any;
  d_o_raw: any;
  /** wasm bytes */
  wasm: string;
  d_o_wasm: string;
  /** enum */
  opt: VoteOption;
  d_o_opt: VoteOption;
  /** duration */
  period?: DurationAmino;
  d_o_period: DurationAmino;
  /** timestamp */
  date?: string;
  d_o_date: string;
  /** pubkey */
  pubkey?: AnyAmino;
  d_o_pubkey: AnyAmino;
  /** array scalar */
  nums: number[];
  d_o_nums: number[];
  /** array bigint */
  bigs: string[];
  d_o_bigs: string[];
  /** array bytes */
  salts: string[];
  d_o_salts: string[];
  /** array raw bytes */
  raws: any[];
  d_o_raws: any[];
  /** array wasm bytes */
  wasms: string[];
  d_o_wasms: string[];
  /** array enum */
  opts: VoteOption[];
  d_o_opts: VoteOption[];
  /** array duration */
  periods: DurationAmino[];
  d_o_periods: DurationAmino[];
  /** array protoType */
  protos: AccessConfigAmino[];
  d_o_protos: AccessConfigAmino[];
  /** array anyType */
  auths: AnyAmino[];
  d_o_auths: AnyAmino[];
}
export interface AminoEncodingTestAminoMsg {
  type: "/misc.AminoEncodingTest";
  value: AminoEncodingTestAmino;
}
export interface AminoEncodingTestSDKType {
  str: string;
  d_o_str: string;
  b: boolean;
  d_o_b: boolean;
  num: number;
  d_o_num: number;
  big: bigint;
  d_o_big: bigint;
  proto?: AccessConfigSDKType;
  d_o_proto: AccessConfigSDKType;
  auth?: GenericAuthorizationSDKType | AnySDKType | undefined;
  d_o_auth: GenericAuthorizationSDKType | AnySDKType | undefined;
  salt: Uint8Array;
  d_o_salt: Uint8Array;
  raw: Uint8Array;
  d_o_raw: Uint8Array;
  wasm: Uint8Array;
  d_o_wasm: Uint8Array;
  opt: VoteOption;
  d_o_opt: VoteOption;
  period?: DurationSDKType;
  d_o_period: DurationSDKType;
  date?: Date;
  d_o_date: Date;
  pubkey?: AnySDKType | undefined;
  d_o_pubkey: AnySDKType | undefined;
  nums: number[];
  d_o_nums: number[];
  bigs: bigint[];
  d_o_bigs: bigint[];
  salts: Uint8Array[];
  d_o_salts: Uint8Array[];
  raws: Uint8Array[];
  d_o_raws: Uint8Array[];
  wasms: Uint8Array[];
  d_o_wasms: Uint8Array[];
  opts: VoteOption[];
  d_o_opts: VoteOption[];
  periods: DurationSDKType[];
  d_o_periods: DurationSDKType[];
  protos: AccessConfigSDKType[];
  d_o_protos: AccessConfigSDKType[];
  auths: (GenericAuthorizationSDKType | AnySDKType)[];
  d_o_auths: (GenericAuthorizationSDKType | AnySDKType)[];
}
function createBaseEvalRequest_BindingsEntry(): EvalRequest_BindingsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const EvalRequest_BindingsEntry = {
  encode(message: EvalRequest_BindingsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ExprValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest_BindingsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_BindingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ExprValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest_BindingsEntry {
    const obj = createBaseEvalRequest_BindingsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = ExprValue.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_BindingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ExprValue.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_BindingsEntry>): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = ExprValue.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: EvalRequest_BindingsEntrySDKType): EvalRequest_BindingsEntry {
    return {
      key: object?.key,
      value: object.value ? ExprValue.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequest_BindingsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ExprValue.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? ExprValue.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: EvalRequest_BindingsEntryAmino): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExprValue.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? ExprValue.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvalRequest_BindingsEntryAminoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequest_BindingsEntryProtoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_BindingsEntry): Uint8Array {
    return EvalRequest_BindingsEntry.encode(message).finish();
  }
};
function createBaseEvalRequest_RefsEntry(): EvalRequest_RefsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const EvalRequest_RefsEntry = {
  encode(message: EvalRequest_RefsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      IdRef.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest_RefsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_RefsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = IdRef.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest_RefsEntry {
    const obj = createBaseEvalRequest_RefsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = IdRef.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_RefsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? IdRef.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_RefsEntry>): EvalRequest_RefsEntry {
    const message = createBaseEvalRequest_RefsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = IdRef.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: EvalRequest_RefsEntrySDKType): EvalRequest_RefsEntry {
    return {
      key: object?.key,
      value: object.value ? IdRef.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequest_RefsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? IdRef.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_RefsEntry): EvalRequest_RefsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? IdRef.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: EvalRequest_RefsEntryAmino): EvalRequest_RefsEntry {
    const message = createBaseEvalRequest_RefsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = IdRef.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: EvalRequest_RefsEntry): EvalRequest_RefsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? IdRef.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvalRequest_RefsEntryAminoMsg): EvalRequest_RefsEntry {
    return EvalRequest_RefsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequest_RefsEntryProtoMsg): EvalRequest_RefsEntry {
    return EvalRequest_RefsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_RefsEntry): Uint8Array {
    return EvalRequest_RefsEntry.encode(message).finish();
  }
};
function createBaseEvalRequest(): EvalRequest {
  return {
    bindings: {},
    refs: {},
    testNum: 0,
    testString: "",
    testBool: false,
    instantiatePermission: undefined,
    id: undefined,
    name: undefined,
    testArray: []
  };
}
export const EvalRequest = {
  typeUrl: "/misc.EvalRequest",
  is(o: any): o is EvalRequest {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && isSet(o.refs) && typeof o.testNum === "number" && typeof o.testString === "string" && typeof o.testBool === "boolean" && Array.isArray(o.testArray) && (!o.testArray.length || typeof o.testArray[0] === "string"));
  },
  isSDK(o: any): o is EvalRequestSDKType {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && isSet(o.refs) && typeof o.test_num === "number" && typeof o.test_string === "string" && typeof o.test_bool === "boolean" && Array.isArray(o.test_array) && (!o.test_array.length || typeof o.test_array[0] === "string"));
  },
  isAmino(o: any): o is EvalRequestAmino {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && isSet(o.refs) && typeof o.test_num === "number" && typeof o.test_string === "string" && typeof o.test_bool === "boolean" && Array.isArray(o.test_array) && (!o.test_array.length || typeof o.test_array[0] === "string"));
  },
  encode(message: EvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.bindings).forEach(([key, value]) => {
      EvalRequest_BindingsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.refs).forEach(([key, value]) => {
      EvalRequest_RefsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.testNum !== 0) {
      writer.uint32(24).uint32(message.testNum);
    }
    if (message.testString !== "") {
      writer.uint32(34).string(message.testString);
    }
    if (message.testBool === true) {
      writer.uint32(40).bool(message.testBool);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(66).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(98).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(106).string(message.name);
    }
    for (const v of message.testArray) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = EvalRequest_BindingsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.bindings[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = EvalRequest_RefsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.refs[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.testNum = reader.uint32();
          break;
        case 4:
          message.testString = reader.string();
          break;
        case 5:
          message.testBool = reader.bool();
          break;
        case 8:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 12:
          message.id = reader.string();
          break;
        case 13:
          message.name = reader.string();
          break;
        case 14:
          message.testArray.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest {
    const obj = createBaseEvalRequest();
    if (isObject(object.bindings)) obj.bindings = Object.entries(object.bindings).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      acc[key] = ExprValue.fromJSON(value);
      return acc;
    }, {});
    if (isObject(object.refs)) obj.refs = Object.entries(object.refs).reduce<{
      [key: string]: IdRef;
    }>((acc, [key, value]) => {
      acc[key] = IdRef.fromJSON(value);
      return acc;
    }, {});
    if (isSet(object.testNum)) obj.testNum = Number(object.testNum);
    if (isSet(object.testString)) obj.testString = String(object.testString);
    if (isSet(object.testBool)) obj.testBool = Boolean(object.testBool);
    if (isSet(object.instantiatePermission)) obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.testArray)) obj.testArray = object.testArray.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EvalRequest): unknown {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toJSON(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toJSON(v);
      });
    }
    message.testNum !== undefined && (obj.testNum = Math.round(message.testNum));
    message.testString !== undefined && (obj.testString = message.testString);
    message.testBool !== undefined && (obj.testBool = message.testBool);
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.testArray) {
      obj.testArray = message.testArray.map(e => e);
    } else {
      obj.testArray = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest>): EvalRequest {
    const message = createBaseEvalRequest();
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromPartial(value);
      }
      return acc;
    }, {});
    message.refs = Object.entries(object.refs ?? {}).reduce<{
      [key: string]: IdRef;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = IdRef.fromPartial(value);
      }
      return acc;
    }, {});
    message.testNum = object.testNum ?? 0;
    message.testString = object.testString ?? "";
    message.testBool = object.testBool ?? false;
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.testArray = object.testArray?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EvalRequestSDKType): EvalRequest {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDK(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromSDK(value);
        return acc;
      }, {}) : {},
      testNum: object?.test_num,
      testString: object?.test_string,
      testBool: object?.test_bool,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined,
      id: object?.id,
      name: object?.name,
      testArray: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): EvalRequestSDKType {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      test_num: isSet(object.test_num) ? Number(object.test_num) : 0,
      test_string: isSet(object.test_string) ? String(object.test_string) : "",
      test_bool: isSet(object.test_bool) ? Boolean(object.test_bool) : false,
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromSDKJSON(object.instantiate_permission) : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      test_array: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: EvalRequest): EvalRequestSDKType {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toSDK(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toSDK(v);
      });
    }
    obj.test_num = message.testNum;
    obj.test_string = message.testString;
    obj.test_bool = message.testBool;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    obj.id = message.id;
    obj.name = message.name;
    if (message.testArray) {
      obj.test_array = message.testArray.map(e => e);
    } else {
      obj.test_array = [];
    }
    return obj;
  },
  fromAmino(object: EvalRequestAmino): EvalRequest {
    const message = createBaseEvalRequest();
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromAmino(value);
      }
      return acc;
    }, {});
    message.refs = Object.entries(object.refs ?? {}).reduce<{
      [key: string]: IdRef;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = IdRef.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.test_num !== undefined && object.test_num !== null) {
      message.testNum = object.test_num;
    }
    if (object.test_string !== undefined && object.test_string !== null) {
      message.testString = object.test_string;
    }
    if (object.test_bool !== undefined && object.test_bool !== null) {
      message.testBool = object.test_bool;
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.testArray = object.test_array?.map(e => e) || [];
    return message;
  },
  toAmino(message: EvalRequest): EvalRequestAmino {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toAmino(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toAmino(v);
      });
    }
    obj.test_num = message.testNum;
    obj.test_string = message.testString;
    obj.test_bool = message.testBool;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    obj.id = message.id;
    obj.name = message.name;
    if (message.testArray) {
      obj.test_array = message.testArray.map(e => e);
    } else {
      obj.test_array = [];
    }
    return obj;
  },
  fromAminoMsg(object: EvalRequestAminoMsg): EvalRequest {
    return EvalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequestProtoMsg): EvalRequest {
    return EvalRequest.decode(message.value);
  },
  toProto(message: EvalRequest): Uint8Array {
    return EvalRequest.encode(message).finish();
  },
  toProtoMsg(message: EvalRequest): EvalRequestProtoMsg {
    return {
      typeUrl: "/misc.EvalRequest",
      value: EvalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EvalRequest.typeUrl, EvalRequest);
function createBaseAccessConfig(): AccessConfig {
  return {
    sender: ""
  };
}
export const AccessConfig = {
  typeUrl: "/misc.AccessConfig",
  is(o: any): o is AccessConfig {
    return o && (o.$typeUrl === AccessConfig.typeUrl || typeof o.sender === "string");
  },
  isSDK(o: any): o is AccessConfigSDKType {
    return o && (o.$typeUrl === AccessConfig.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is AccessConfigAmino {
    return o && (o.$typeUrl === AccessConfig.typeUrl || typeof o.sender === "string");
  },
  encode(message: AccessConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessConfig {
    const obj = createBaseAccessConfig();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: AccessConfig): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: AccessConfigSDKType): AccessConfig {
    return {
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): AccessConfigSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: AccessConfig): AccessConfigSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: AccessConfigAmino): AccessConfig {
    const message = createBaseAccessConfig();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: AccessConfig): AccessConfigAmino {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: AccessConfigAminoMsg): AccessConfig {
    return AccessConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig {
    return AccessConfig.decode(message.value);
  },
  toProto(message: AccessConfig): Uint8Array {
    return AccessConfig.encode(message).finish();
  },
  toProtoMsg(message: AccessConfig): AccessConfigProtoMsg {
    return {
      typeUrl: "/misc.AccessConfig",
      value: AccessConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessConfig.typeUrl, AccessConfig);
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    $typeUrl: "/misc.GenericAuthorization",
    msg: ""
  };
}
export const GenericAuthorization = {
  typeUrl: "/misc.GenericAuthorization",
  is(o: any): o is GenericAuthorization {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isSDK(o: any): o is GenericAuthorizationSDKType {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isAmino(o: any): o is GenericAuthorizationAmino {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    const obj = createBaseGenericAuthorization();
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg
    };
  },
  fromSDKJSON(object: any): GenericAuthorizationSDKType {
    return {
      msg: isSet(object.msg) ? String(object.msg) : ""
    };
  },
  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization {
    return GenericAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/misc.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenericAuthorization.typeUrl, GenericAuthorization);
function createBaseAminoEncodingTest(): AminoEncodingTest {
  return {
    str: "",
    dOStr: "",
    b: false,
    dOB: false,
    num: 0,
    dONum: 0,
    big: BigInt(0),
    dOBig: BigInt(0),
    proto: undefined,
    dOProto: AccessConfig.fromPartial({}),
    auth: undefined,
    dOAuth: Any.fromPartial({}),
    salt: new Uint8Array(),
    dOSalt: new Uint8Array(),
    raw: new Uint8Array(),
    dORaw: new Uint8Array(),
    wasm: new Uint8Array(),
    dOWasm: new Uint8Array(),
    opt: 0,
    dOOpt: 0,
    period: undefined,
    dOPeriod: Duration.fromPartial({}),
    date: undefined,
    dODate: new Date(),
    pubkey: undefined,
    dOPubkey: Any.fromPartial({}),
    nums: [],
    dONums: [],
    bigs: [],
    dOBigs: [],
    salts: [],
    dOSalts: [],
    raws: [],
    dORaws: [],
    wasms: [],
    dOWasms: [],
    opts: [],
    dOOpts: [],
    periods: [],
    dOPeriods: [],
    protos: [],
    dOProtos: [],
    auths: [],
    dOAuths: []
  };
}
export const AminoEncodingTest = {
  typeUrl: "/misc.AminoEncodingTest",
  is(o: any): o is AminoEncodingTest {
    return o && (o.$typeUrl === AminoEncodingTest.typeUrl || typeof o.str === "string" && typeof o.dOStr === "string" && typeof o.b === "boolean" && typeof o.dOB === "boolean" && typeof o.num === "number" && typeof o.dONum === "number" && typeof o.big === "bigint" && typeof o.dOBig === "bigint" && AccessConfig.is(o.dOProto) && (GenericAuthorization.is(o.dOAuth) || Any.is(o.dOAuth)) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && (o.dOSalt instanceof Uint8Array || typeof o.dOSalt === "string") && (o.raw instanceof Uint8Array || typeof o.raw === "string") && (o.dORaw instanceof Uint8Array || typeof o.dORaw === "string") && (o.wasm instanceof Uint8Array || typeof o.wasm === "string") && (o.dOWasm instanceof Uint8Array || typeof o.dOWasm === "string") && isSet(o.opt) && isSet(o.dOOpt) && Duration.is(o.dOPeriod) && Timestamp.is(o.dODate) && Any.is(o.dOPubkey) && Array.isArray(o.nums) && (!o.nums.length || typeof o.nums[0] === "number") && Array.isArray(o.dONums) && (!o.dONums.length || typeof o.dONums[0] === "number") && Array.isArray(o.bigs) && (!o.bigs.length || typeof o.bigs[0] === "bigint") && Array.isArray(o.dOBigs) && (!o.dOBigs.length || typeof o.dOBigs[0] === "bigint") && Array.isArray(o.salts) && (!o.salts.length || o.salts[0] instanceof Uint8Array || typeof o.salts[0] === "string") && Array.isArray(o.dOSalts) && (!o.dOSalts.length || o.dOSalts[0] instanceof Uint8Array || typeof o.dOSalts[0] === "string") && Array.isArray(o.raws) && (!o.raws.length || o.raws[0] instanceof Uint8Array || typeof o.raws[0] === "string") && Array.isArray(o.dORaws) && (!o.dORaws.length || o.dORaws[0] instanceof Uint8Array || typeof o.dORaws[0] === "string") && Array.isArray(o.wasms) && (!o.wasms.length || o.wasms[0] instanceof Uint8Array || typeof o.wasms[0] === "string") && Array.isArray(o.dOWasms) && (!o.dOWasms.length || o.dOWasms[0] instanceof Uint8Array || typeof o.dOWasms[0] === "string") && Array.isArray(o.opts) && Array.isArray(o.dOOpts) && Array.isArray(o.periods) && (!o.periods.length || Duration.is(o.periods[0])) && Array.isArray(o.dOPeriods) && (!o.dOPeriods.length || Duration.is(o.dOPeriods[0])) && Array.isArray(o.protos) && (!o.protos.length || AccessConfig.is(o.protos[0])) && Array.isArray(o.dOProtos) && (!o.dOProtos.length || AccessConfig.is(o.dOProtos[0])) && Array.isArray(o.auths) && (!o.auths.length || GenericAuthorization.is(o.auths[0]) || Any.is(o.auths[0])) && Array.isArray(o.dOAuths) && (!o.dOAuths.length || GenericAuthorization.is(o.dOAuths[0]) || Any.is(o.dOAuths[0])));
  },
  isSDK(o: any): o is AminoEncodingTestSDKType {
    return o && (o.$typeUrl === AminoEncodingTest.typeUrl || typeof o.str === "string" && typeof o.d_o_str === "string" && typeof o.b === "boolean" && typeof o.d_o_b === "boolean" && typeof o.num === "number" && typeof o.d_o_num === "number" && typeof o.big === "bigint" && typeof o.d_o_big === "bigint" && AccessConfig.isSDK(o.d_o_proto) && (GenericAuthorization.isSDK(o.d_o_auth) || Any.isSDK(o.d_o_auth)) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && (o.d_o_salt instanceof Uint8Array || typeof o.d_o_salt === "string") && (o.raw instanceof Uint8Array || typeof o.raw === "string") && (o.d_o_raw instanceof Uint8Array || typeof o.d_o_raw === "string") && (o.wasm instanceof Uint8Array || typeof o.wasm === "string") && (o.d_o_wasm instanceof Uint8Array || typeof o.d_o_wasm === "string") && isSet(o.opt) && isSet(o.d_o_opt) && Duration.isSDK(o.d_o_period) && Timestamp.isSDK(o.d_o_date) && Any.isSDK(o.d_o_pubkey) && Array.isArray(o.nums) && (!o.nums.length || typeof o.nums[0] === "number") && Array.isArray(o.d_o_nums) && (!o.d_o_nums.length || typeof o.d_o_nums[0] === "number") && Array.isArray(o.bigs) && (!o.bigs.length || typeof o.bigs[0] === "bigint") && Array.isArray(o.d_o_bigs) && (!o.d_o_bigs.length || typeof o.d_o_bigs[0] === "bigint") && Array.isArray(o.salts) && (!o.salts.length || o.salts[0] instanceof Uint8Array || typeof o.salts[0] === "string") && Array.isArray(o.d_o_salts) && (!o.d_o_salts.length || o.d_o_salts[0] instanceof Uint8Array || typeof o.d_o_salts[0] === "string") && Array.isArray(o.raws) && (!o.raws.length || o.raws[0] instanceof Uint8Array || typeof o.raws[0] === "string") && Array.isArray(o.d_o_raws) && (!o.d_o_raws.length || o.d_o_raws[0] instanceof Uint8Array || typeof o.d_o_raws[0] === "string") && Array.isArray(o.wasms) && (!o.wasms.length || o.wasms[0] instanceof Uint8Array || typeof o.wasms[0] === "string") && Array.isArray(o.d_o_wasms) && (!o.d_o_wasms.length || o.d_o_wasms[0] instanceof Uint8Array || typeof o.d_o_wasms[0] === "string") && Array.isArray(o.opts) && Array.isArray(o.d_o_opts) && Array.isArray(o.periods) && (!o.periods.length || Duration.isSDK(o.periods[0])) && Array.isArray(o.d_o_periods) && (!o.d_o_periods.length || Duration.isSDK(o.d_o_periods[0])) && Array.isArray(o.protos) && (!o.protos.length || AccessConfig.isSDK(o.protos[0])) && Array.isArray(o.d_o_protos) && (!o.d_o_protos.length || AccessConfig.isSDK(o.d_o_protos[0])) && Array.isArray(o.auths) && (!o.auths.length || GenericAuthorization.isSDK(o.auths[0]) || Any.isSDK(o.auths[0])) && Array.isArray(o.d_o_auths) && (!o.d_o_auths.length || GenericAuthorization.isSDK(o.d_o_auths[0]) || Any.isSDK(o.d_o_auths[0])));
  },
  isAmino(o: any): o is AminoEncodingTestAmino {
    return o && (o.$typeUrl === AminoEncodingTest.typeUrl || typeof o.str === "string" && typeof o.d_o_str === "string" && typeof o.b === "boolean" && typeof o.d_o_b === "boolean" && typeof o.num === "number" && typeof o.d_o_num === "number" && typeof o.big === "bigint" && typeof o.d_o_big === "bigint" && AccessConfig.isAmino(o.d_o_proto) && (GenericAuthorization.isAmino(o.d_o_auth) || Any.isAmino(o.d_o_auth)) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && (o.d_o_salt instanceof Uint8Array || typeof o.d_o_salt === "string") && (o.raw instanceof Uint8Array || typeof o.raw === "string") && (o.d_o_raw instanceof Uint8Array || typeof o.d_o_raw === "string") && (o.wasm instanceof Uint8Array || typeof o.wasm === "string") && (o.d_o_wasm instanceof Uint8Array || typeof o.d_o_wasm === "string") && isSet(o.opt) && isSet(o.d_o_opt) && Duration.isAmino(o.d_o_period) && Timestamp.isAmino(o.d_o_date) && Any.isAmino(o.d_o_pubkey) && Array.isArray(o.nums) && (!o.nums.length || typeof o.nums[0] === "number") && Array.isArray(o.d_o_nums) && (!o.d_o_nums.length || typeof o.d_o_nums[0] === "number") && Array.isArray(o.bigs) && (!o.bigs.length || typeof o.bigs[0] === "bigint") && Array.isArray(o.d_o_bigs) && (!o.d_o_bigs.length || typeof o.d_o_bigs[0] === "bigint") && Array.isArray(o.salts) && (!o.salts.length || o.salts[0] instanceof Uint8Array || typeof o.salts[0] === "string") && Array.isArray(o.d_o_salts) && (!o.d_o_salts.length || o.d_o_salts[0] instanceof Uint8Array || typeof o.d_o_salts[0] === "string") && Array.isArray(o.raws) && (!o.raws.length || o.raws[0] instanceof Uint8Array || typeof o.raws[0] === "string") && Array.isArray(o.d_o_raws) && (!o.d_o_raws.length || o.d_o_raws[0] instanceof Uint8Array || typeof o.d_o_raws[0] === "string") && Array.isArray(o.wasms) && (!o.wasms.length || o.wasms[0] instanceof Uint8Array || typeof o.wasms[0] === "string") && Array.isArray(o.d_o_wasms) && (!o.d_o_wasms.length || o.d_o_wasms[0] instanceof Uint8Array || typeof o.d_o_wasms[0] === "string") && Array.isArray(o.opts) && Array.isArray(o.d_o_opts) && Array.isArray(o.periods) && (!o.periods.length || Duration.isAmino(o.periods[0])) && Array.isArray(o.d_o_periods) && (!o.d_o_periods.length || Duration.isAmino(o.d_o_periods[0])) && Array.isArray(o.protos) && (!o.protos.length || AccessConfig.isAmino(o.protos[0])) && Array.isArray(o.d_o_protos) && (!o.d_o_protos.length || AccessConfig.isAmino(o.d_o_protos[0])) && Array.isArray(o.auths) && (!o.auths.length || GenericAuthorization.isAmino(o.auths[0]) || Any.isAmino(o.auths[0])) && Array.isArray(o.d_o_auths) && (!o.d_o_auths.length || GenericAuthorization.isAmino(o.d_o_auths[0]) || Any.isAmino(o.d_o_auths[0])));
  },
  encode(message: AminoEncodingTest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.str !== "") {
      writer.uint32(10).string(message.str);
    }
    if (message.dOStr !== "") {
      writer.uint32(18).string(message.dOStr);
    }
    if (message.b === true) {
      writer.uint32(24).bool(message.b);
    }
    if (message.dOB === true) {
      writer.uint32(32).bool(message.dOB);
    }
    if (message.num !== 0) {
      writer.uint32(40).int32(message.num);
    }
    if (message.dONum !== 0) {
      writer.uint32(48).int32(message.dONum);
    }
    if (message.big !== BigInt(0)) {
      writer.uint32(56).int64(message.big);
    }
    if (message.dOBig !== BigInt(0)) {
      writer.uint32(64).int64(message.dOBig);
    }
    if (message.proto !== undefined) {
      AccessConfig.encode(message.proto, writer.uint32(74).fork()).ldelim();
    }
    if (message.dOProto !== undefined) {
      AccessConfig.encode(message.dOProto, writer.uint32(82).fork()).ldelim();
    }
    if (message.auth !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.auth), writer.uint32(90).fork()).ldelim();
    }
    if (message.dOAuth !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.dOAuth), writer.uint32(98).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(106).bytes(message.salt);
    }
    if (message.dOSalt.length !== 0) {
      writer.uint32(114).bytes(message.dOSalt);
    }
    if (message.raw.length !== 0) {
      writer.uint32(122).bytes(message.raw);
    }
    if (message.dORaw.length !== 0) {
      writer.uint32(130).bytes(message.dORaw);
    }
    if (message.wasm.length !== 0) {
      writer.uint32(138).bytes(message.wasm);
    }
    if (message.dOWasm.length !== 0) {
      writer.uint32(146).bytes(message.dOWasm);
    }
    if (message.opt !== 0) {
      writer.uint32(152).int32(message.opt);
    }
    if (message.dOOpt !== 0) {
      writer.uint32(160).int32(message.dOOpt);
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(170).fork()).ldelim();
    }
    if (message.dOPeriod !== undefined) {
      Duration.encode(message.dOPeriod, writer.uint32(178).fork()).ldelim();
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(186).fork()).ldelim();
    }
    if (message.dODate !== undefined) {
      Timestamp.encode(toTimestamp(message.dODate), writer.uint32(194).fork()).ldelim();
    }
    if (message.pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(202).fork()).ldelim();
    }
    if (message.dOPubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.dOPubkey), writer.uint32(210).fork()).ldelim();
    }
    writer.uint32(218).fork();
    for (const v of message.nums) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(226).fork();
    for (const v of message.dONums) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(234).fork();
    for (const v of message.bigs) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(242).fork();
    for (const v of message.dOBigs) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.salts) {
      writer.uint32(250).bytes(v!);
    }
    for (const v of message.dOSalts) {
      writer.uint32(258).bytes(v!);
    }
    for (const v of message.raws) {
      writer.uint32(266).bytes(v!);
    }
    for (const v of message.dORaws) {
      writer.uint32(274).bytes(v!);
    }
    for (const v of message.wasms) {
      writer.uint32(282).bytes(v!);
    }
    for (const v of message.dOWasms) {
      writer.uint32(290).bytes(v!);
    }
    writer.uint32(298).fork();
    for (const v of message.opts) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.dOOpts) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.periods) {
      Duration.encode(v!, writer.uint32(314).fork()).ldelim();
    }
    for (const v of message.dOPeriods) {
      Duration.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    for (const v of message.protos) {
      AccessConfig.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    for (const v of message.dOProtos) {
      AccessConfig.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.auths) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.dOAuths) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(370).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AminoEncodingTest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAminoEncodingTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.str = reader.string();
          break;
        case 2:
          message.dOStr = reader.string();
          break;
        case 3:
          message.b = reader.bool();
          break;
        case 4:
          message.dOB = reader.bool();
          break;
        case 5:
          message.num = reader.int32();
          break;
        case 6:
          message.dONum = reader.int32();
          break;
        case 7:
          message.big = reader.int64();
          break;
        case 8:
          message.dOBig = reader.int64();
          break;
        case 9:
          message.proto = AccessConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.dOProto = AccessConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.auth = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 12:
          message.dOAuth = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 13:
          message.salt = reader.bytes();
          break;
        case 14:
          message.dOSalt = reader.bytes();
          break;
        case 15:
          message.raw = reader.bytes();
          break;
        case 16:
          message.dORaw = reader.bytes();
          break;
        case 17:
          message.wasm = reader.bytes();
          break;
        case 18:
          message.dOWasm = reader.bytes();
          break;
        case 19:
          message.opt = (reader.int32() as any);
          break;
        case 20:
          message.dOOpt = (reader.int32() as any);
          break;
        case 21:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 22:
          message.dOPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 23:
          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 24:
          message.dODate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 25:
          message.pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 26:
          message.dOPubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 27:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nums.push(reader.int32());
            }
          } else {
            message.nums.push(reader.int32());
          }
          break;
        case 28:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dONums.push(reader.int32());
            }
          } else {
            message.dONums.push(reader.int32());
          }
          break;
        case 29:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bigs.push(reader.int64());
            }
          } else {
            message.bigs.push(reader.int64());
          }
          break;
        case 30:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dOBigs.push(reader.int64());
            }
          } else {
            message.dOBigs.push(reader.int64());
          }
          break;
        case 31:
          message.salts.push(reader.bytes());
          break;
        case 32:
          message.dOSalts.push(reader.bytes());
          break;
        case 33:
          message.raws.push(reader.bytes());
          break;
        case 34:
          message.dORaws.push(reader.bytes());
          break;
        case 35:
          message.wasms.push(reader.bytes());
          break;
        case 36:
          message.dOWasms.push(reader.bytes());
          break;
        case 37:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.opts.push((reader.int32() as any));
            }
          } else {
            message.opts.push((reader.int32() as any));
          }
          break;
        case 38:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dOOpts.push((reader.int32() as any));
            }
          } else {
            message.dOOpts.push((reader.int32() as any));
          }
          break;
        case 39:
          message.periods.push(Duration.decode(reader, reader.uint32()));
          break;
        case 40:
          message.dOPeriods.push(Duration.decode(reader, reader.uint32()));
          break;
        case 43:
          message.protos.push(AccessConfig.decode(reader, reader.uint32()));
          break;
        case 44:
          message.dOProtos.push(AccessConfig.decode(reader, reader.uint32()));
          break;
        case 45:
          message.auths.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 46:
          message.dOAuths.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AminoEncodingTest {
    const obj = createBaseAminoEncodingTest();
    if (isSet(object.str)) obj.str = String(object.str);
    if (isSet(object.dOStr)) obj.dOStr = String(object.dOStr);
    if (isSet(object.b)) obj.b = Boolean(object.b);
    if (isSet(object.dOB)) obj.dOB = Boolean(object.dOB);
    if (isSet(object.num)) obj.num = Number(object.num);
    if (isSet(object.dONum)) obj.dONum = Number(object.dONum);
    if (isSet(object.big)) obj.big = BigInt(object.big.toString());
    if (isSet(object.dOBig)) obj.dOBig = BigInt(object.dOBig.toString());
    if (isSet(object.proto)) obj.proto = AccessConfig.fromJSON(object.proto);
    if (isSet(object.dOProto)) obj.dOProto = AccessConfig.fromJSON(object.dOProto);
    if (isSet(object.auth)) obj.auth = GlobalDecoderRegistry.fromJSON(object.auth);
    if (isSet(object.dOAuth)) obj.dOAuth = GlobalDecoderRegistry.fromJSON(object.dOAuth);
    if (isSet(object.salt)) obj.salt = bytesFromBase64(object.salt);
    if (isSet(object.dOSalt)) obj.dOSalt = bytesFromBase64(object.dOSalt);
    if (isSet(object.raw)) obj.raw = bytesFromBase64(object.raw);
    if (isSet(object.dORaw)) obj.dORaw = bytesFromBase64(object.dORaw);
    if (isSet(object.wasm)) obj.wasm = bytesFromBase64(object.wasm);
    if (isSet(object.dOWasm)) obj.dOWasm = bytesFromBase64(object.dOWasm);
    if (isSet(object.opt)) obj.opt = voteOptionFromJSON(object.opt);
    if (isSet(object.dOOpt)) obj.dOOpt = voteOptionFromJSON(object.dOOpt);
    if (isSet(object.period)) obj.period = Duration.fromJSON(object.period);
    if (isSet(object.dOPeriod)) obj.dOPeriod = Duration.fromJSON(object.dOPeriod);
    if (isSet(object.date)) obj.date = new Date(object.date);
    if (isSet(object.dODate)) obj.dODate = new Date(object.dODate);
    if (isSet(object.pubkey)) obj.pubkey = GlobalDecoderRegistry.fromJSON(object.pubkey);
    if (isSet(object.dOPubkey)) obj.dOPubkey = GlobalDecoderRegistry.fromJSON(object.dOPubkey);
    if (Array.isArray(object?.nums)) obj.nums = object.nums.map((e: any) => Number(e));
    if (Array.isArray(object?.dONums)) obj.dONums = object.dONums.map((e: any) => Number(e));
    if (Array.isArray(object?.bigs)) obj.bigs = object.bigs.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.dOBigs)) obj.dOBigs = object.dOBigs.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.salts)) obj.salts = object.salts.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.dOSalts)) obj.dOSalts = object.dOSalts.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.raws)) obj.raws = object.raws.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.dORaws)) obj.dORaws = object.dORaws.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.wasms)) obj.wasms = object.wasms.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.dOWasms)) obj.dOWasms = object.dOWasms.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.opts)) obj.opts = object.opts.map((e: any) => voteOptionFromJSON(e));
    if (Array.isArray(object?.dOOpts)) obj.dOOpts = object.dOOpts.map((e: any) => voteOptionFromJSON(e));
    if (Array.isArray(object?.periods)) obj.periods = object.periods.map((e: any) => Duration.fromJSON(e));
    if (Array.isArray(object?.dOPeriods)) obj.dOPeriods = object.dOPeriods.map((e: any) => Duration.fromJSON(e));
    if (Array.isArray(object?.protos)) obj.protos = object.protos.map((e: any) => AccessConfig.fromJSON(e));
    if (Array.isArray(object?.dOProtos)) obj.dOProtos = object.dOProtos.map((e: any) => AccessConfig.fromJSON(e));
    if (Array.isArray(object?.auths)) obj.auths = object.auths.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    if (Array.isArray(object?.dOAuths)) obj.dOAuths = object.dOAuths.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    return obj;
  },
  toJSON(message: AminoEncodingTest): unknown {
    const obj: any = {};
    message.str !== undefined && (obj.str = message.str);
    message.dOStr !== undefined && (obj.dOStr = message.dOStr);
    message.b !== undefined && (obj.b = message.b);
    message.dOB !== undefined && (obj.dOB = message.dOB);
    message.num !== undefined && (obj.num = Math.round(message.num));
    message.dONum !== undefined && (obj.dONum = Math.round(message.dONum));
    message.big !== undefined && (obj.big = (message.big || BigInt(0)).toString());
    message.dOBig !== undefined && (obj.dOBig = (message.dOBig || BigInt(0)).toString());
    message.proto !== undefined && (obj.proto = message.proto ? AccessConfig.toJSON(message.proto) : undefined);
    message.dOProto !== undefined && (obj.dOProto = message.dOProto ? AccessConfig.toJSON(message.dOProto) : undefined);
    message.auth !== undefined && (obj.auth = message.auth ? GlobalDecoderRegistry.toJSON(message.auth) : undefined);
    message.dOAuth !== undefined && (obj.dOAuth = message.dOAuth ? GlobalDecoderRegistry.toJSON(message.dOAuth) : undefined);
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.dOSalt !== undefined && (obj.dOSalt = base64FromBytes(message.dOSalt !== undefined ? message.dOSalt : new Uint8Array()));
    message.raw !== undefined && (obj.raw = base64FromBytes(message.raw !== undefined ? message.raw : new Uint8Array()));
    message.dORaw !== undefined && (obj.dORaw = base64FromBytes(message.dORaw !== undefined ? message.dORaw : new Uint8Array()));
    message.wasm !== undefined && (obj.wasm = base64FromBytes(message.wasm !== undefined ? message.wasm : new Uint8Array()));
    message.dOWasm !== undefined && (obj.dOWasm = base64FromBytes(message.dOWasm !== undefined ? message.dOWasm : new Uint8Array()));
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.dOOpt !== undefined && (obj.dOOpt = voteOptionToJSON(message.dOOpt));
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    message.dOPeriod !== undefined && (obj.dOPeriod = message.dOPeriod ? Duration.toJSON(message.dOPeriod) : undefined);
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.dODate !== undefined && (obj.dODate = message.dODate.toISOString());
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? GlobalDecoderRegistry.toJSON(message.pubkey) : undefined);
    message.dOPubkey !== undefined && (obj.dOPubkey = message.dOPubkey ? GlobalDecoderRegistry.toJSON(message.dOPubkey) : undefined);
    if (message.nums) {
      obj.nums = message.nums.map(e => Math.round(e));
    } else {
      obj.nums = [];
    }
    if (message.dONums) {
      obj.dONums = message.dONums.map(e => Math.round(e));
    } else {
      obj.dONums = [];
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.bigs = [];
    }
    if (message.dOBigs) {
      obj.dOBigs = message.dOBigs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.dOBigs = [];
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.salts = [];
    }
    if (message.dOSalts) {
      obj.dOSalts = message.dOSalts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.dOSalts = [];
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.raws = [];
    }
    if (message.dORaws) {
      obj.dORaws = message.dORaws.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.dORaws = [];
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.wasms = [];
    }
    if (message.dOWasms) {
      obj.dOWasms = message.dOWasms.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.dOWasms = [];
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => voteOptionToJSON(e));
    } else {
      obj.opts = [];
    }
    if (message.dOOpts) {
      obj.dOOpts = message.dOOpts.map(e => voteOptionToJSON(e));
    } else {
      obj.dOOpts = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }
    if (message.dOPeriods) {
      obj.dOPeriods = message.dOPeriods.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.dOPeriods = [];
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toJSON(e) : undefined);
    } else {
      obj.protos = [];
    }
    if (message.dOProtos) {
      obj.dOProtos = message.dOProtos.map(e => e ? AccessConfig.toJSON(e) : undefined);
    } else {
      obj.dOProtos = [];
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.dOAuths) {
      obj.dOAuths = message.dOAuths.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.dOAuths = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AminoEncodingTest>): AminoEncodingTest {
    const message = createBaseAminoEncodingTest();
    message.str = object.str ?? "";
    message.dOStr = object.dOStr ?? "";
    message.b = object.b ?? false;
    message.dOB = object.dOB ?? false;
    message.num = object.num ?? 0;
    message.dONum = object.dONum ?? 0;
    if (object.big !== undefined && object.big !== null) {
      message.big = BigInt(object.big.toString());
    }
    if (object.dOBig !== undefined && object.dOBig !== null) {
      message.dOBig = BigInt(object.dOBig.toString());
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = AccessConfig.fromPartial(object.proto);
    }
    if (object.dOProto !== undefined && object.dOProto !== null) {
      message.dOProto = AccessConfig.fromPartial(object.dOProto);
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = GlobalDecoderRegistry.fromPartial(object.auth);
    }
    if (object.dOAuth !== undefined && object.dOAuth !== null) {
      message.dOAuth = GlobalDecoderRegistry.fromPartial(object.dOAuth);
    }
    message.salt = object.salt ?? new Uint8Array();
    message.dOSalt = object.dOSalt ?? new Uint8Array();
    message.raw = object.raw ?? new Uint8Array();
    message.dORaw = object.dORaw ?? new Uint8Array();
    message.wasm = object.wasm ?? new Uint8Array();
    message.dOWasm = object.dOWasm ?? new Uint8Array();
    message.opt = object.opt ?? 0;
    message.dOOpt = object.dOOpt ?? 0;
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromPartial(object.period);
    }
    if (object.dOPeriod !== undefined && object.dOPeriod !== null) {
      message.dOPeriod = Duration.fromPartial(object.dOPeriod);
    }
    message.date = object.date ?? undefined;
    message.dODate = object.dODate ?? undefined;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = GlobalDecoderRegistry.fromPartial(object.pubkey);
    }
    if (object.dOPubkey !== undefined && object.dOPubkey !== null) {
      message.dOPubkey = GlobalDecoderRegistry.fromPartial(object.dOPubkey);
    }
    message.nums = object.nums?.map(e => e) || [];
    message.dONums = object.dONums?.map(e => e) || [];
    message.bigs = object.bigs?.map(e => BigInt(e.toString())) || [];
    message.dOBigs = object.dOBigs?.map(e => BigInt(e.toString())) || [];
    message.salts = object.salts?.map(e => e) || [];
    message.dOSalts = object.dOSalts?.map(e => e) || [];
    message.raws = object.raws?.map(e => e) || [];
    message.dORaws = object.dORaws?.map(e => e) || [];
    message.wasms = object.wasms?.map(e => e) || [];
    message.dOWasms = object.dOWasms?.map(e => e) || [];
    message.opts = object.opts?.map(e => e) || [];
    message.dOOpts = object.dOOpts?.map(e => e) || [];
    message.periods = object.periods?.map(e => Duration.fromPartial(e)) || [];
    message.dOPeriods = object.dOPeriods?.map(e => Duration.fromPartial(e)) || [];
    message.protos = object.protos?.map(e => AccessConfig.fromPartial(e)) || [];
    message.dOProtos = object.dOProtos?.map(e => AccessConfig.fromPartial(e)) || [];
    message.auths = object.auths?.map(e => (Any.fromPartial(e) as any)) || [];
    message.dOAuths = object.dOAuths?.map(e => (Any.fromPartial(e) as any)) || [];
    return message;
  },
  fromSDK(object: AminoEncodingTestSDKType): AminoEncodingTest {
    return {
      str: object?.str,
      dOStr: object?.d_o_str,
      b: object?.b,
      dOB: object?.d_o_b,
      num: object?.num,
      dONum: object?.d_o_num,
      big: object?.big,
      dOBig: object?.d_o_big,
      proto: object.proto ? AccessConfig.fromSDK(object.proto) : undefined,
      dOProto: object.d_o_proto ? AccessConfig.fromSDK(object.d_o_proto) : undefined,
      auth: object.auth ? GlobalDecoderRegistry.fromSDK(object.auth) : undefined,
      dOAuth: object.d_o_auth ? GlobalDecoderRegistry.fromSDK(object.d_o_auth) : undefined,
      salt: object?.salt,
      dOSalt: object?.d_o_salt,
      raw: object?.raw,
      dORaw: object?.d_o_raw,
      wasm: object?.wasm,
      dOWasm: object?.d_o_wasm,
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      dOOpt: isSet(object.d_o_opt) ? voteOptionFromJSON(object.d_o_opt) : -1,
      period: object.period ? Duration.fromSDK(object.period) : undefined,
      dOPeriod: object.d_o_period ? Duration.fromSDK(object.d_o_period) : undefined,
      date: object.date ?? undefined,
      dODate: object.d_o_date ?? undefined,
      pubkey: object.pubkey ? GlobalDecoderRegistry.fromSDK(object.pubkey) : undefined,
      dOPubkey: object.d_o_pubkey ? GlobalDecoderRegistry.fromSDK(object.d_o_pubkey) : undefined,
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => e) : [],
      dONums: Array.isArray(object?.d_o_nums) ? object.d_o_nums.map((e: any) => e) : [],
      bigs: Array.isArray(object?.bigs) ? object.bigs.map((e: any) => e) : [],
      dOBigs: Array.isArray(object?.d_o_bigs) ? object.d_o_bigs.map((e: any) => e) : [],
      salts: Array.isArray(object?.salts) ? object.salts.map((e: any) => e) : [],
      dOSalts: Array.isArray(object?.d_o_salts) ? object.d_o_salts.map((e: any) => e) : [],
      raws: Array.isArray(object?.raws) ? object.raws.map((e: any) => e) : [],
      dORaws: Array.isArray(object?.d_o_raws) ? object.d_o_raws.map((e: any) => e) : [],
      wasms: Array.isArray(object?.wasms) ? object.wasms.map((e: any) => e) : [],
      dOWasms: Array.isArray(object?.d_o_wasms) ? object.d_o_wasms.map((e: any) => e) : [],
      opts: Array.isArray(object?.opts) ? object.opts.map((e: any) => voteOptionFromJSON(e)) : [],
      dOOpts: Array.isArray(object?.d_o_opts) ? object.d_o_opts.map((e: any) => voteOptionFromJSON(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Duration.fromSDK(e)) : [],
      dOPeriods: Array.isArray(object?.d_o_periods) ? object.d_o_periods.map((e: any) => Duration.fromSDK(e)) : [],
      protos: Array.isArray(object?.protos) ? object.protos.map((e: any) => AccessConfig.fromSDK(e)) : [],
      dOProtos: Array.isArray(object?.d_o_protos) ? object.d_o_protos.map((e: any) => AccessConfig.fromSDK(e)) : [],
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : [],
      dOAuths: Array.isArray(object?.d_o_auths) ? object.d_o_auths.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AminoEncodingTestSDKType {
    return {
      str: isSet(object.str) ? String(object.str) : "",
      d_o_str: isSet(object.d_o_str) ? String(object.d_o_str) : "",
      b: isSet(object.b) ? Boolean(object.b) : false,
      d_o_b: isSet(object.d_o_b) ? Boolean(object.d_o_b) : false,
      num: isSet(object.num) ? Number(object.num) : 0,
      d_o_num: isSet(object.d_o_num) ? Number(object.d_o_num) : 0,
      big: isSet(object.big) ? BigInt(object.big.toString()) : BigInt(0),
      d_o_big: isSet(object.d_o_big) ? BigInt(object.d_o_big.toString()) : BigInt(0),
      proto: isSet(object.proto) ? AccessConfig.fromSDKJSON(object.proto) : undefined,
      d_o_proto: isSet(object.d_o_proto) ? AccessConfig.fromSDKJSON(object.d_o_proto) : undefined,
      auth: isSet(object.auth) ? GlobalDecoderRegistry.fromSDKJSON(object.auth) : undefined,
      d_o_auth: isSet(object.d_o_auth) ? GlobalDecoderRegistry.fromSDKJSON(object.d_o_auth) : undefined,
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      d_o_salt: isSet(object.d_o_salt) ? bytesFromBase64(object.d_o_salt) : new Uint8Array(),
      raw: isSet(object.raw) ? bytesFromBase64(object.raw) : new Uint8Array(),
      d_o_raw: isSet(object.d_o_raw) ? bytesFromBase64(object.d_o_raw) : new Uint8Array(),
      wasm: isSet(object.wasm) ? bytesFromBase64(object.wasm) : new Uint8Array(),
      d_o_wasm: isSet(object.d_o_wasm) ? bytesFromBase64(object.d_o_wasm) : new Uint8Array(),
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      d_o_opt: isSet(object.d_o_opt) ? voteOptionFromJSON(object.d_o_opt) : -1,
      period: isSet(object.period) ? Duration.fromSDKJSON(object.period) : undefined,
      d_o_period: isSet(object.d_o_period) ? Duration.fromSDKJSON(object.d_o_period) : undefined,
      date: isSet(object.date) ? new Date(object.date) : undefined,
      d_o_date: isSet(object.d_o_date) ? new Date(object.d_o_date) : undefined,
      pubkey: isSet(object.pubkey) ? GlobalDecoderRegistry.fromSDKJSON(object.pubkey) : undefined,
      d_o_pubkey: isSet(object.d_o_pubkey) ? GlobalDecoderRegistry.fromSDKJSON(object.d_o_pubkey) : undefined,
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => Number(e)) : [],
      d_o_nums: Array.isArray(object?.d_o_nums) ? object.d_o_nums.map((e: any) => Number(e)) : [],
      bigs: Array.isArray(object?.bigs) ? object.bigs.map((e: any) => BigInt(e.toString())) : [],
      d_o_bigs: Array.isArray(object?.d_o_bigs) ? object.d_o_bigs.map((e: any) => BigInt(e.toString())) : [],
      salts: Array.isArray(object?.salts) ? object.salts.map((e: any) => bytesFromBase64(e)) : [],
      d_o_salts: Array.isArray(object?.d_o_salts) ? object.d_o_salts.map((e: any) => bytesFromBase64(e)) : [],
      raws: Array.isArray(object?.raws) ? object.raws.map((e: any) => bytesFromBase64(e)) : [],
      d_o_raws: Array.isArray(object?.d_o_raws) ? object.d_o_raws.map((e: any) => bytesFromBase64(e)) : [],
      wasms: Array.isArray(object?.wasms) ? object.wasms.map((e: any) => bytesFromBase64(e)) : [],
      d_o_wasms: Array.isArray(object?.d_o_wasms) ? object.d_o_wasms.map((e: any) => bytesFromBase64(e)) : [],
      opts: Array.isArray(object?.opts) ? object.opts.map((e: any) => voteOptionFromJSON(e)) : [],
      d_o_opts: Array.isArray(object?.d_o_opts) ? object.d_o_opts.map((e: any) => voteOptionFromJSON(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Duration.fromSDKJSON(e)) : [],
      d_o_periods: Array.isArray(object?.d_o_periods) ? object.d_o_periods.map((e: any) => Duration.fromSDKJSON(e)) : [],
      protos: Array.isArray(object?.protos) ? object.protos.map((e: any) => AccessConfig.fromSDKJSON(e)) : [],
      d_o_protos: Array.isArray(object?.d_o_protos) ? object.d_o_protos.map((e: any) => AccessConfig.fromSDKJSON(e)) : [],
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => GlobalDecoderRegistry.fromSDKJSON(e)) : [],
      d_o_auths: Array.isArray(object?.d_o_auths) ? object.d_o_auths.map((e: any) => GlobalDecoderRegistry.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AminoEncodingTest): AminoEncodingTestSDKType {
    const obj: any = {};
    obj.str = message.str;
    obj.d_o_str = message.dOStr;
    obj.b = message.b;
    obj.d_o_b = message.dOB;
    obj.num = message.num;
    obj.d_o_num = message.dONum;
    obj.big = message.big;
    obj.d_o_big = message.dOBig;
    message.proto !== undefined && (obj.proto = message.proto ? AccessConfig.toSDK(message.proto) : undefined);
    message.dOProto !== undefined && (obj.d_o_proto = message.dOProto ? AccessConfig.toSDK(message.dOProto) : undefined);
    message.auth !== undefined && (obj.auth = message.auth ? GlobalDecoderRegistry.toSDK(message.auth) : undefined);
    message.dOAuth !== undefined && (obj.d_o_auth = message.dOAuth ? GlobalDecoderRegistry.toSDK(message.dOAuth) : undefined);
    obj.salt = message.salt;
    obj.d_o_salt = message.dOSalt;
    obj.raw = message.raw;
    obj.d_o_raw = message.dORaw;
    obj.wasm = message.wasm;
    obj.d_o_wasm = message.dOWasm;
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.dOOpt !== undefined && (obj.d_o_opt = voteOptionToJSON(message.dOOpt));
    message.period !== undefined && (obj.period = message.period ? Duration.toSDK(message.period) : undefined);
    message.dOPeriod !== undefined && (obj.d_o_period = message.dOPeriod ? Duration.toSDK(message.dOPeriod) : undefined);
    message.date !== undefined && (obj.date = message.date ?? undefined);
    message.dODate !== undefined && (obj.d_o_date = message.dODate ?? undefined);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? GlobalDecoderRegistry.toSDK(message.pubkey) : undefined);
    message.dOPubkey !== undefined && (obj.d_o_pubkey = message.dOPubkey ? GlobalDecoderRegistry.toSDK(message.dOPubkey) : undefined);
    if (message.nums) {
      obj.nums = message.nums.map(e => e);
    } else {
      obj.nums = [];
    }
    if (message.dONums) {
      obj.d_o_nums = message.dONums.map(e => e);
    } else {
      obj.d_o_nums = [];
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => e);
    } else {
      obj.bigs = [];
    }
    if (message.dOBigs) {
      obj.d_o_bigs = message.dOBigs.map(e => e);
    } else {
      obj.d_o_bigs = [];
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => e);
    } else {
      obj.salts = [];
    }
    if (message.dOSalts) {
      obj.d_o_salts = message.dOSalts.map(e => e);
    } else {
      obj.d_o_salts = [];
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => e);
    } else {
      obj.raws = [];
    }
    if (message.dORaws) {
      obj.d_o_raws = message.dORaws.map(e => e);
    } else {
      obj.d_o_raws = [];
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => e);
    } else {
      obj.wasms = [];
    }
    if (message.dOWasms) {
      obj.d_o_wasms = message.dOWasms.map(e => e);
    } else {
      obj.d_o_wasms = [];
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => voteOptionToJSON(e));
    } else {
      obj.opts = [];
    }
    if (message.dOOpts) {
      obj.d_o_opts = message.dOOpts.map(e => voteOptionToJSON(e));
    } else {
      obj.d_o_opts = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.periods = [];
    }
    if (message.dOPeriods) {
      obj.d_o_periods = message.dOPeriods.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.d_o_periods = [];
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toSDK(e) : undefined);
    } else {
      obj.protos = [];
    }
    if (message.dOProtos) {
      obj.d_o_protos = message.dOProtos.map(e => e ? AccessConfig.toSDK(e) : undefined);
    } else {
      obj.d_o_protos = [];
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.dOAuths) {
      obj.d_o_auths = message.dOAuths.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.d_o_auths = [];
    }
    return obj;
  },
  fromAmino(object: AminoEncodingTestAmino): AminoEncodingTest {
    const message = createBaseAminoEncodingTest();
    if (object.str !== undefined && object.str !== null) {
      message.str = object.str;
    }
    if (object.d_o_str !== undefined && object.d_o_str !== null) {
      message.dOStr = object.d_o_str;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = object.b;
    }
    if (object.d_o_b !== undefined && object.d_o_b !== null) {
      message.dOB = object.d_o_b;
    }
    if (object.num !== undefined && object.num !== null) {
      message.num = object.num;
    }
    if (object.d_o_num !== undefined && object.d_o_num !== null) {
      message.dONum = object.d_o_num;
    }
    if (object.big !== undefined && object.big !== null) {
      message.big = BigInt(object.big);
    }
    if (object.d_o_big !== undefined && object.d_o_big !== null) {
      message.dOBig = BigInt(object.d_o_big);
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = AccessConfig.fromAmino(object.proto);
    }
    if (object.d_o_proto !== undefined && object.d_o_proto !== null) {
      message.dOProto = AccessConfig.fromAmino(object.d_o_proto);
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = GlobalDecoderRegistry.fromAminoMsg(object.auth);
    }
    if (object.d_o_auth !== undefined && object.d_o_auth !== null) {
      message.dOAuth = GlobalDecoderRegistry.fromAminoMsg(object.d_o_auth);
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.d_o_salt !== undefined && object.d_o_salt !== null) {
      message.dOSalt = bytesFromBase64(object.d_o_salt);
    }
    if (object.raw !== undefined && object.raw !== null) {
      message.raw = toUtf8(JSON.stringify(object.raw));
    }
    if (object.d_o_raw !== undefined && object.d_o_raw !== null) {
      message.dORaw = toUtf8(JSON.stringify(object.d_o_raw));
    }
    if (object.wasm !== undefined && object.wasm !== null) {
      message.wasm = fromBase64(object.wasm);
    }
    if (object.d_o_wasm !== undefined && object.d_o_wasm !== null) {
      message.dOWasm = fromBase64(object.d_o_wasm);
    }
    if (object.opt !== undefined && object.opt !== null) {
      message.opt = voteOptionFromJSON(object.opt);
    }
    if (object.d_o_opt !== undefined && object.d_o_opt !== null) {
      message.dOOpt = voteOptionFromJSON(object.d_o_opt);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromAmino(object.period);
    }
    if (object.d_o_period !== undefined && object.d_o_period !== null) {
      message.dOPeriod = Duration.fromAmino(object.d_o_period);
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = fromTimestamp(Timestamp.fromAmino(object.date));
    }
    if (object.d_o_date !== undefined && object.d_o_date !== null) {
      message.dODate = fromTimestamp(Timestamp.fromAmino(object.d_o_date));
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.d_o_pubkey !== undefined && object.d_o_pubkey !== null) {
      message.dOPubkey = encodePubkey(object.d_o_pubkey);
    }
    message.nums = object.nums?.map(e => e) || [];
    message.dONums = object.d_o_nums?.map(e => e) || [];
    message.bigs = object.bigs?.map(e => BigInt(e)) || [];
    message.dOBigs = object.d_o_bigs?.map(e => BigInt(e)) || [];
    message.salts = object.salts?.map(e => bytesFromBase64(e)) || [];
    message.dOSalts = object.d_o_salts?.map(e => bytesFromBase64(e)) || [];
    message.raws = object.raws?.map(e => toUtf8(JSON.stringify(e))) || [];
    message.dORaws = object.d_o_raws?.map(e => toUtf8(JSON.stringify(e))) || [];
    message.wasms = object.wasms?.map(e => fromBase64(e)) || [];
    message.dOWasms = object.d_o_wasms?.map(e => fromBase64(e)) || [];
    message.opts = object.opts?.map(e => voteOptionFromJSON(e)) || [];
    message.dOOpts = object.d_o_opts?.map(e => voteOptionFromJSON(e)) || [];
    message.periods = object.periods?.map(e => Duration.fromAmino(e)) || [];
    message.dOPeriods = object.d_o_periods?.map(e => Duration.fromAmino(e)) || [];
    message.protos = object.protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.dOProtos = object.d_o_protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.auths = object.auths?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    message.dOAuths = object.d_o_auths?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: AminoEncodingTest): AminoEncodingTestAmino {
    const obj: any = {};
    obj.str = message.str;
    obj.d_o_str = message.dOStr ?? "";
    obj.b = message.b;
    obj.d_o_b = message.dOB ?? false;
    obj.num = message.num;
    obj.d_o_num = message.dONum ?? 0;
    obj.big = message.big ? message.big.toString() : undefined;
    obj.d_o_big = message.dOBig ? message.dOBig.toString() : "0";
    obj.proto = message.proto ? AccessConfig.toAmino(message.proto) : undefined;
    obj.d_o_proto = message.dOProto ? AccessConfig.toAmino(message.dOProto) : AccessConfig.fromPartial({});
    obj.auth = message.auth ? GlobalDecoderRegistry.toAminoMsg(message.auth) : undefined;
    obj.d_o_auth = message.dOAuth ? GlobalDecoderRegistry.toAminoMsg(message.dOAuth) : {
      type: "",
      value: {}
    };
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.d_o_salt = message.dOSalt ? base64FromBytes(message.dOSalt) : "";
    obj.raw = message.raw ? JSON.parse(fromUtf8(message.raw)) : undefined;
    obj.d_o_raw = message.dORaw ? JSON.parse(fromUtf8(message.dORaw)) : {};
    obj.wasm = message.wasm ? toBase64(message.wasm) : undefined;
    obj.d_o_wasm = message.dOWasm ? toBase64(message.dOWasm) : "";
    obj.opt = voteOptionToJSON(message.opt);
    obj.d_o_opt = voteOptionToJSON(message.dOOpt);
    obj.period = message.period ? Duration.toAmino(message.period) : undefined;
    obj.d_o_period = message.dOPeriod ? Duration.toAmino(message.dOPeriod) : Duration.fromPartial({});
    obj.date = message.date ? Timestamp.toAmino(toTimestamp(message.date)) : undefined;
    obj.d_o_date = message.dODate ? Timestamp.toAmino(toTimestamp(message.dODate)) : new Date();
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.d_o_pubkey = message.dOPubkey ? decodePubkey(message.dOPubkey) : Any.fromPartial({});
    if (message.nums) {
      obj.nums = message.nums.map(e => e);
    } else {
      obj.nums = [];
    }
    if (message.dONums) {
      obj.d_o_nums = message.dONums.map(e => e);
    } else {
      obj.d_o_nums = [];
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => e.toString());
    } else {
      obj.bigs = [];
    }
    if (message.dOBigs) {
      obj.d_o_bigs = message.dOBigs.map(e => e.toString());
    } else {
      obj.d_o_bigs = [];
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => base64FromBytes(e));
    } else {
      obj.salts = [];
    }
    if (message.dOSalts) {
      obj.d_o_salts = message.dOSalts.map(e => base64FromBytes(e));
    } else {
      obj.d_o_salts = [];
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.raws = [];
    }
    if (message.dORaws) {
      obj.d_o_raws = message.dORaws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.d_o_raws = [];
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => toBase64(e));
    } else {
      obj.wasms = [];
    }
    if (message.dOWasms) {
      obj.d_o_wasms = message.dOWasms.map(e => toBase64(e));
    } else {
      obj.d_o_wasms = [];
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => voteOptionToJSON(e));
    } else {
      obj.opts = [];
    }
    if (message.dOOpts) {
      obj.d_o_opts = message.dOOpts.map(e => voteOptionToJSON(e));
    } else {
      obj.d_o_opts = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.periods = [];
    }
    if (message.dOPeriods) {
      obj.d_o_periods = message.dOPeriods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.d_o_periods = [];
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.protos = [];
    }
    if (message.dOProtos) {
      obj.d_o_protos = message.dOProtos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.d_o_protos = [];
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.dOAuths) {
      obj.d_o_auths = message.dOAuths.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.d_o_auths = [];
    }
    return obj;
  },
  fromAminoMsg(object: AminoEncodingTestAminoMsg): AminoEncodingTest {
    return AminoEncodingTest.fromAmino(object.value);
  },
  fromProtoMsg(message: AminoEncodingTestProtoMsg): AminoEncodingTest {
    return AminoEncodingTest.decode(message.value);
  },
  toProto(message: AminoEncodingTest): Uint8Array {
    return AminoEncodingTest.encode(message).finish();
  },
  toProtoMsg(message: AminoEncodingTest): AminoEncodingTestProtoMsg {
    return {
      typeUrl: "/misc.AminoEncodingTest",
      value: AminoEncodingTest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AminoEncodingTest.typeUrl, AminoEncodingTest);