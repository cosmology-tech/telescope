import { AccessConfig, AccessConfigSDKType, VoteOption, VoteOptionSDKType, voteOptionFromJSON, voteOptionToJSON } from "./eval_request";
import { Any, AnySDKType } from "../google/protobuf/any";
import { Duration, DurationSDKType } from "../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { toTimestamp, fromTimestamp, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../helpers";
import { Decimal } from "@cosmjs/math";
import { JsonSafe } from "../json-safe";
import { toUtf8, fromBase64, fromUtf8, toBase64 } from "@cosmjs/encoding";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
export const protobufPackage = "misc";
export interface EncodingTestForDontOmit {
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
  auth?: Any;
  dOAuth: Any;
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
  pubkey?: Any;
  dOPubkey: Any;
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
  auths: Any[];
  dOAuths: Any[];
  /** dec */
  dec: string;
  dODec: string;
  /** array dec */
  decs: string[];
  dODecs: string[];
}
export interface EncodingTestForDontOmitProtoMsg {
  typeUrl: "/misc.EncodingTestForDontOmit";
  value: Uint8Array;
}
export interface EncodingTestForDontOmitSDKType {
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
  auth?: AnySDKType;
  d_o_auth: AnySDKType;
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
  pubkey?: AnySDKType;
  d_o_pubkey: AnySDKType;
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
  auths: AnySDKType[];
  d_o_auths: AnySDKType[];
  dec: string;
  d_o_dec: string;
  decs: string[];
  d_o_decs: string[];
}
export interface EncodingTestForOmit {
  /** scalar */
  str: string;
  oStr: string;
  b: boolean;
  oB: boolean;
  num: number;
  oNum: number;
  /** bigint */
  big: bigint;
  oBig: bigint;
  /** protoType */
  proto?: AccessConfig;
  oProto: AccessConfig;
  /** anyType */
  auth?: Any;
  oAuth: Any;
  /** bytes */
  salt: Uint8Array;
  oSalt: Uint8Array;
  /** raw bytes */
  raw: Uint8Array;
  oRaw: Uint8Array;
  /** wasm bytes */
  wasm: Uint8Array;
  oWasm: Uint8Array;
  /** enum */
  opt: VoteOption;
  oOpt: VoteOption;
  /** duration */
  period?: Duration;
  oPeriod: Duration;
  /** timestamp */
  date?: Date;
  oDate: Date;
  /** pubkey */
  pubkey?: Any;
  oPubkey: Any;
  /** array scalar */
  nums: number[];
  oNums: number[];
  /** array bigint */
  bigs: bigint[];
  oBigs: bigint[];
  /** array bytes */
  salts: Uint8Array[];
  oSalts: Uint8Array[];
  /** array raw bytes */
  raws: Uint8Array[];
  oRaws: Uint8Array[];
  /** array wasm bytes */
  wasms: Uint8Array[];
  oWasms: Uint8Array[];
  /** array enum */
  opts: VoteOption[];
  oOpts: VoteOption[];
  /** array duration */
  periods: Duration[];
  oPeriods: Duration[];
  /** array protoType */
  protos: AccessConfig[];
  oProtos: AccessConfig[];
  /** array anyType */
  auths: Any[];
  oAuths: Any[];
  /** dec */
  dec: string;
  oDec: string;
  /** array dec */
  decs: string[];
  oDecs: string[];
}
export interface EncodingTestForOmitProtoMsg {
  typeUrl: "/misc.EncodingTestForOmit";
  value: Uint8Array;
}
export interface EncodingTestForOmitSDKType {
  str: string;
  o_str: string;
  b: boolean;
  o_b: boolean;
  num: number;
  o_num: number;
  big: bigint;
  o_big: bigint;
  proto?: AccessConfigSDKType;
  o_proto: AccessConfigSDKType;
  auth?: AnySDKType;
  o_auth: AnySDKType;
  salt: Uint8Array;
  o_salt: Uint8Array;
  raw: Uint8Array;
  o_raw: Uint8Array;
  wasm: Uint8Array;
  o_wasm: Uint8Array;
  opt: VoteOption;
  o_opt: VoteOption;
  period?: DurationSDKType;
  o_period: DurationSDKType;
  date?: Date;
  o_date: Date;
  pubkey?: AnySDKType;
  o_pubkey: AnySDKType;
  nums: number[];
  o_nums: number[];
  bigs: bigint[];
  o_bigs: bigint[];
  salts: Uint8Array[];
  o_salts: Uint8Array[];
  raws: Uint8Array[];
  o_raws: Uint8Array[];
  wasms: Uint8Array[];
  o_wasms: Uint8Array[];
  opts: VoteOption[];
  o_opts: VoteOption[];
  periods: DurationSDKType[];
  o_periods: DurationSDKType[];
  protos: AccessConfigSDKType[];
  o_protos: AccessConfigSDKType[];
  auths: AnySDKType[];
  o_auths: AnySDKType[];
  dec: string;
  o_dec: string;
  decs: string[];
  o_decs: string[];
}
function createBaseEncodingTestForDontOmit(): EncodingTestForDontOmit {
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
    dOAuths: [],
    dec: "",
    dODec: "",
    decs: [],
    dODecs: []
  };
}
export const EncodingTestForDontOmit = {
  typeUrl: "/misc.EncodingTestForDontOmit",
  encode(message: EncodingTestForDontOmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      Any.encode(message.auth, writer.uint32(90).fork()).ldelim();
    }
    if (message.dOAuth !== undefined) {
      Any.encode(message.dOAuth, writer.uint32(98).fork()).ldelim();
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
      Any.encode(message.pubkey, writer.uint32(202).fork()).ldelim();
    }
    if (message.dOPubkey !== undefined) {
      Any.encode(message.dOPubkey, writer.uint32(210).fork()).ldelim();
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
      Any.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.dOAuths) {
      Any.encode(v!, writer.uint32(370).fork()).ldelim();
    }
    if (message.dec !== "") {
      writer.uint32(378).string(Decimal.fromUserInput(message.dec, 18).atomics);
    }
    if (message.dODec !== "") {
      writer.uint32(386).string(Decimal.fromUserInput(message.dODec, 18).atomics);
    }
    for (const v of message.decs) {
      writer.uint32(394).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    for (const v of message.dODecs) {
      writer.uint32(402).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EncodingTestForDontOmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncodingTestForDontOmit();
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
          message.auth = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.dOAuth = Any.decode(reader, reader.uint32());
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
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 26:
          message.dOPubkey = Any.decode(reader, reader.uint32());
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
          message.auths.push(Any.decode(reader, reader.uint32()));
          break;
        case 46:
          message.dOAuths.push(Any.decode(reader, reader.uint32()));
          break;
        case 47:
          message.dec = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 48:
          message.dODec = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 49:
          message.decs.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        case 50:
          message.dODecs.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EncodingTestForDontOmit {
    const obj = createBaseEncodingTestForDontOmit();
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
    if (isSet(object.auth)) obj.auth = Any.fromJSON(object.auth);
    if (isSet(object.dOAuth)) obj.dOAuth = Any.fromJSON(object.dOAuth);
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
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.dOPubkey)) obj.dOPubkey = Any.fromJSON(object.dOPubkey);
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
    if (Array.isArray(object?.auths)) obj.auths = object.auths.map((e: any) => Any.fromJSON(e));
    if (Array.isArray(object?.dOAuths)) obj.dOAuths = object.dOAuths.map((e: any) => Any.fromJSON(e));
    if (isSet(object.dec)) obj.dec = String(object.dec);
    if (isSet(object.dODec)) obj.dODec = String(object.dODec);
    if (Array.isArray(object?.decs)) obj.decs = object.decs.map((e: any) => String(e));
    if (Array.isArray(object?.dODecs)) obj.dODecs = object.dODecs.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EncodingTestForDontOmit): JsonSafe<EncodingTestForDontOmit> {
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
    message.auth !== undefined && (obj.auth = message.auth ? Any.toJSON(message.auth) : undefined);
    message.dOAuth !== undefined && (obj.dOAuth = message.dOAuth ? Any.toJSON(message.dOAuth) : undefined);
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
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.dOPubkey !== undefined && (obj.dOPubkey = message.dOPubkey ? Any.toJSON(message.dOPubkey) : undefined);
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
      obj.auths = message.auths.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.dOAuths) {
      obj.dOAuths = message.dOAuths.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.dOAuths = [];
    }
    message.dec !== undefined && (obj.dec = message.dec);
    message.dODec !== undefined && (obj.dODec = message.dODec);
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = [];
    }
    if (message.dODecs) {
      obj.dODecs = message.dODecs.map(e => e);
    } else {
      obj.dODecs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EncodingTestForDontOmit>): EncodingTestForDontOmit {
    const message = createBaseEncodingTestForDontOmit();
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
      message.auth = Any.fromPartial(object.auth);
    }
    if (object.dOAuth !== undefined && object.dOAuth !== null) {
      message.dOAuth = Any.fromPartial(object.dOAuth);
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
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    if (object.dOPubkey !== undefined && object.dOPubkey !== null) {
      message.dOPubkey = Any.fromPartial(object.dOPubkey);
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
    message.auths = object.auths?.map(e => Any.fromPartial(e)) || [];
    message.dOAuths = object.dOAuths?.map(e => Any.fromPartial(e)) || [];
    message.dec = object.dec ?? "";
    message.dODec = object.dODec ?? "";
    message.decs = object.decs?.map(e => e) || [];
    message.dODecs = object.dODecs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EncodingTestForDontOmitSDKType): EncodingTestForDontOmit {
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
      auth: object.auth ? Any.fromSDK(object.auth) : undefined,
      dOAuth: object.d_o_auth ? Any.fromSDK(object.d_o_auth) : undefined,
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
      pubkey: object.pubkey ? Any.fromSDK(object.pubkey) : undefined,
      dOPubkey: object.d_o_pubkey ? Any.fromSDK(object.d_o_pubkey) : undefined,
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
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => Any.fromSDK(e)) : [],
      dOAuths: Array.isArray(object?.d_o_auths) ? object.d_o_auths.map((e: any) => Any.fromSDK(e)) : [],
      dec: object?.dec,
      dODec: object?.d_o_dec,
      decs: Array.isArray(object?.decs) ? object.decs.map((e: any) => e) : [],
      dODecs: Array.isArray(object?.d_o_decs) ? object.d_o_decs.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): EncodingTestForDontOmitSDKType {
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
      auth: isSet(object.auth) ? Any.fromSDKJSON(object.auth) : undefined,
      d_o_auth: isSet(object.d_o_auth) ? Any.fromSDKJSON(object.d_o_auth) : undefined,
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
      pubkey: isSet(object.pubkey) ? Any.fromSDKJSON(object.pubkey) : undefined,
      d_o_pubkey: isSet(object.d_o_pubkey) ? Any.fromSDKJSON(object.d_o_pubkey) : undefined,
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
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => Any.fromSDKJSON(e)) : [],
      d_o_auths: Array.isArray(object?.d_o_auths) ? object.d_o_auths.map((e: any) => Any.fromSDKJSON(e)) : [],
      dec: isSet(object.dec) ? String(object.dec) : "",
      d_o_dec: isSet(object.d_o_dec) ? String(object.d_o_dec) : "",
      decs: Array.isArray(object?.decs) ? object.decs.map((e: any) => String(e)) : [],
      d_o_decs: Array.isArray(object?.d_o_decs) ? object.d_o_decs.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: EncodingTestForDontOmit): EncodingTestForDontOmitSDKType {
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
    message.auth !== undefined && (obj.auth = message.auth ? Any.toSDK(message.auth) : undefined);
    message.dOAuth !== undefined && (obj.d_o_auth = message.dOAuth ? Any.toSDK(message.dOAuth) : undefined);
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
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toSDK(message.pubkey) : undefined);
    message.dOPubkey !== undefined && (obj.d_o_pubkey = message.dOPubkey ? Any.toSDK(message.dOPubkey) : undefined);
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
      obj.auths = message.auths.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.dOAuths) {
      obj.d_o_auths = message.dOAuths.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.d_o_auths = [];
    }
    obj.dec = message.dec;
    obj.d_o_dec = message.dODec;
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = [];
    }
    if (message.dODecs) {
      obj.d_o_decs = message.dODecs.map(e => e);
    } else {
      obj.d_o_decs = [];
    }
    return obj;
  },
  fromAmino(object: EncodingTestForDontOmitAmino): EncodingTestForDontOmit {
    const message = createBaseEncodingTestForDontOmit();
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
      message.auth = Any.fromAmino(object.auth);
    }
    if (object.d_o_auth !== undefined && object.d_o_auth !== null) {
      message.dOAuth = Any.fromAmino(object.d_o_auth);
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
      message.opt = object.opt;
    }
    if (object.d_o_opt !== undefined && object.d_o_opt !== null) {
      message.dOOpt = object.d_o_opt;
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
    message.opts = object.opts?.map(e => e) || [];
    message.dOOpts = object.d_o_opts?.map(e => e) || [];
    message.periods = object.periods?.map(e => Duration.fromAmino(e)) || [];
    message.dOPeriods = object.d_o_periods?.map(e => Duration.fromAmino(e)) || [];
    message.protos = object.protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.dOProtos = object.d_o_protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.auths = object.auths?.map(e => Any.fromAmino(e)) || [];
    message.dOAuths = object.d_o_auths?.map(e => Any.fromAmino(e)) || [];
    if (object.dec !== undefined && object.dec !== null) {
      message.dec = object.dec;
    }
    if (object.d_o_dec !== undefined && object.d_o_dec !== null) {
      message.dODec = object.d_o_dec;
    }
    message.decs = object.decs?.map(e => e) || [];
    message.dODecs = object.d_o_decs?.map(e => e) || [];
    return message;
  },
  toAmino(message: EncodingTestForDontOmit): EncodingTestForDontOmitAmino {
    const obj: any = {};
    obj.str = message.str === "" ? undefined : message.str;
    obj.d_o_str = message.dOStr ?? "";
    obj.b = message.b === false ? undefined : message.b;
    obj.d_o_b = message.dOB ?? false;
    obj.num = message.num === 0 ? undefined : message.num;
    obj.d_o_num = message.dONum ?? 0;
    obj.big = message.big !== BigInt(0) ? message.big.toString() : undefined;
    obj.d_o_big = message.dOBig ? message.dOBig.toString() : "0";
    obj.proto = message.proto ? AccessConfig.toAmino(message.proto) : undefined;
    obj.d_o_proto = message.dOProto ? AccessConfig.toAmino(message.dOProto) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    obj.auth = message.auth ? Any.toAmino(message.auth) : undefined;
    obj.d_o_auth = message.dOAuth ? Any.toAmino(message.dOAuth) : Any.toAmino(Any.fromPartial({}));
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.d_o_salt = message.dOSalt ? base64FromBytes(message.dOSalt) : "";
    obj.raw = message.raw ? JSON.parse(fromUtf8(message.raw)) : undefined;
    obj.d_o_raw = message.dORaw ? JSON.parse(fromUtf8(message.dORaw)) : {};
    obj.wasm = message.wasm ? toBase64(message.wasm) : undefined;
    obj.d_o_wasm = message.dOWasm ? toBase64(message.dOWasm) : "";
    obj.opt = message.opt === 0 ? undefined : message.opt;
    obj.d_o_opt = message.dOOpt ?? 0;
    obj.period = message.period ? Duration.toAmino(message.period) : undefined;
    obj.d_o_period = message.dOPeriod ? Duration.toAmino(message.dOPeriod) : Duration.toAmino(Duration.fromPartial({}));
    obj.date = message.date ? Timestamp.toAmino(toTimestamp(message.date)) : undefined;
    obj.d_o_date = message.dODate ? Timestamp.toAmino(toTimestamp(message.dODate)) : new Date();
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.d_o_pubkey = message.dOPubkey ? decodePubkey(message.dOPubkey) : Any.fromPartial({});
    if (message.nums) {
      obj.nums = message.nums.map(e => e);
    } else {
      obj.nums = message.nums;
    }
    if (message.dONums) {
      obj.d_o_nums = message.dONums.map(e => e);
    } else {
      obj.d_o_nums = message.dONums;
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => e.toString());
    } else {
      obj.bigs = message.bigs;
    }
    if (message.dOBigs) {
      obj.d_o_bigs = message.dOBigs.map(e => e.toString());
    } else {
      obj.d_o_bigs = message.dOBigs;
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => base64FromBytes(e));
    } else {
      obj.salts = message.salts;
    }
    if (message.dOSalts) {
      obj.d_o_salts = message.dOSalts.map(e => base64FromBytes(e));
    } else {
      obj.d_o_salts = message.dOSalts;
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.raws = message.raws;
    }
    if (message.dORaws) {
      obj.d_o_raws = message.dORaws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.d_o_raws = message.dORaws;
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => toBase64(e));
    } else {
      obj.wasms = message.wasms;
    }
    if (message.dOWasms) {
      obj.d_o_wasms = message.dOWasms.map(e => toBase64(e));
    } else {
      obj.d_o_wasms = message.dOWasms;
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => e);
    } else {
      obj.opts = message.opts;
    }
    if (message.dOOpts) {
      obj.d_o_opts = message.dOOpts.map(e => e);
    } else {
      obj.d_o_opts = message.dOOpts;
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.periods = message.periods;
    }
    if (message.dOPeriods) {
      obj.d_o_periods = message.dOPeriods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.d_o_periods = message.dOPeriods;
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.protos = message.protos;
    }
    if (message.dOProtos) {
      obj.d_o_protos = message.dOProtos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.d_o_protos = message.dOProtos;
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.auths = message.auths;
    }
    if (message.dOAuths) {
      obj.d_o_auths = message.dOAuths.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.d_o_auths = message.dOAuths;
    }
    obj.dec = message.dec === "" ? undefined : message.dec;
    obj.d_o_dec = message.dODec ?? "";
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = message.decs;
    }
    if (message.dODecs) {
      obj.d_o_decs = message.dODecs.map(e => e);
    } else {
      obj.d_o_decs = message.dODecs;
    }
    return obj;
  },
  fromAminoMsg(object: EncodingTestForDontOmitAminoMsg): EncodingTestForDontOmit {
    return EncodingTestForDontOmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EncodingTestForDontOmitProtoMsg): EncodingTestForDontOmit {
    return EncodingTestForDontOmit.decode(message.value);
  },
  toProto(message: EncodingTestForDontOmit): Uint8Array {
    return EncodingTestForDontOmit.encode(message).finish();
  },
  toProtoMsg(message: EncodingTestForDontOmit): EncodingTestForDontOmitProtoMsg {
    return {
      typeUrl: "/misc.EncodingTestForDontOmit",
      value: EncodingTestForDontOmit.encode(message).finish()
    };
  }
};
function createBaseEncodingTestForOmit(): EncodingTestForOmit {
  return {
    str: "",
    oStr: "",
    b: false,
    oB: false,
    num: 0,
    oNum: 0,
    big: BigInt(0),
    oBig: BigInt(0),
    proto: undefined,
    oProto: AccessConfig.fromPartial({}),
    auth: undefined,
    oAuth: Any.fromPartial({}),
    salt: new Uint8Array(),
    oSalt: new Uint8Array(),
    raw: new Uint8Array(),
    oRaw: new Uint8Array(),
    wasm: new Uint8Array(),
    oWasm: new Uint8Array(),
    opt: 0,
    oOpt: 0,
    period: undefined,
    oPeriod: Duration.fromPartial({}),
    date: undefined,
    oDate: new Date(),
    pubkey: undefined,
    oPubkey: Any.fromPartial({}),
    nums: [],
    oNums: [],
    bigs: [],
    oBigs: [],
    salts: [],
    oSalts: [],
    raws: [],
    oRaws: [],
    wasms: [],
    oWasms: [],
    opts: [],
    oOpts: [],
    periods: [],
    oPeriods: [],
    protos: [],
    oProtos: [],
    auths: [],
    oAuths: [],
    dec: "",
    oDec: "",
    decs: [],
    oDecs: []
  };
}
export const EncodingTestForOmit = {
  typeUrl: "/misc.EncodingTestForOmit",
  encode(message: EncodingTestForOmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.str !== "") {
      writer.uint32(10).string(message.str);
    }
    if (message.oStr !== "") {
      writer.uint32(18).string(message.oStr);
    }
    if (message.b === true) {
      writer.uint32(24).bool(message.b);
    }
    if (message.oB === true) {
      writer.uint32(32).bool(message.oB);
    }
    if (message.num !== 0) {
      writer.uint32(40).int32(message.num);
    }
    if (message.oNum !== 0) {
      writer.uint32(48).int32(message.oNum);
    }
    if (message.big !== BigInt(0)) {
      writer.uint32(56).int64(message.big);
    }
    if (message.oBig !== BigInt(0)) {
      writer.uint32(64).int64(message.oBig);
    }
    if (message.proto !== undefined) {
      AccessConfig.encode(message.proto, writer.uint32(74).fork()).ldelim();
    }
    if (message.oProto !== undefined) {
      AccessConfig.encode(message.oProto, writer.uint32(82).fork()).ldelim();
    }
    if (message.auth !== undefined) {
      Any.encode(message.auth, writer.uint32(90).fork()).ldelim();
    }
    if (message.oAuth !== undefined) {
      Any.encode(message.oAuth, writer.uint32(98).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(106).bytes(message.salt);
    }
    if (message.oSalt.length !== 0) {
      writer.uint32(114).bytes(message.oSalt);
    }
    if (message.raw.length !== 0) {
      writer.uint32(122).bytes(message.raw);
    }
    if (message.oRaw.length !== 0) {
      writer.uint32(130).bytes(message.oRaw);
    }
    if (message.wasm.length !== 0) {
      writer.uint32(138).bytes(message.wasm);
    }
    if (message.oWasm.length !== 0) {
      writer.uint32(146).bytes(message.oWasm);
    }
    if (message.opt !== 0) {
      writer.uint32(152).int32(message.opt);
    }
    if (message.oOpt !== 0) {
      writer.uint32(160).int32(message.oOpt);
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(170).fork()).ldelim();
    }
    if (message.oPeriod !== undefined) {
      Duration.encode(message.oPeriod, writer.uint32(178).fork()).ldelim();
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(186).fork()).ldelim();
    }
    if (message.oDate !== undefined) {
      Timestamp.encode(toTimestamp(message.oDate), writer.uint32(194).fork()).ldelim();
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(202).fork()).ldelim();
    }
    if (message.oPubkey !== undefined) {
      Any.encode(message.oPubkey, writer.uint32(210).fork()).ldelim();
    }
    writer.uint32(218).fork();
    for (const v of message.nums) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(226).fork();
    for (const v of message.oNums) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(234).fork();
    for (const v of message.bigs) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(242).fork();
    for (const v of message.oBigs) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.salts) {
      writer.uint32(250).bytes(v!);
    }
    for (const v of message.oSalts) {
      writer.uint32(258).bytes(v!);
    }
    for (const v of message.raws) {
      writer.uint32(266).bytes(v!);
    }
    for (const v of message.oRaws) {
      writer.uint32(274).bytes(v!);
    }
    for (const v of message.wasms) {
      writer.uint32(282).bytes(v!);
    }
    for (const v of message.oWasms) {
      writer.uint32(290).bytes(v!);
    }
    writer.uint32(298).fork();
    for (const v of message.opts) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.oOpts) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.periods) {
      Duration.encode(v!, writer.uint32(314).fork()).ldelim();
    }
    for (const v of message.oPeriods) {
      Duration.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    for (const v of message.protos) {
      AccessConfig.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    for (const v of message.oProtos) {
      AccessConfig.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.auths) {
      Any.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.oAuths) {
      Any.encode(v!, writer.uint32(370).fork()).ldelim();
    }
    if (message.dec !== "") {
      writer.uint32(378).string(Decimal.fromUserInput(message.dec, 18).atomics);
    }
    if (message.oDec !== "") {
      writer.uint32(386).string(Decimal.fromUserInput(message.oDec, 18).atomics);
    }
    for (const v of message.decs) {
      writer.uint32(394).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    for (const v of message.oDecs) {
      writer.uint32(402).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EncodingTestForOmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncodingTestForOmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.str = reader.string();
          break;
        case 2:
          message.oStr = reader.string();
          break;
        case 3:
          message.b = reader.bool();
          break;
        case 4:
          message.oB = reader.bool();
          break;
        case 5:
          message.num = reader.int32();
          break;
        case 6:
          message.oNum = reader.int32();
          break;
        case 7:
          message.big = reader.int64();
          break;
        case 8:
          message.oBig = reader.int64();
          break;
        case 9:
          message.proto = AccessConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.oProto = AccessConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.auth = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.oAuth = Any.decode(reader, reader.uint32());
          break;
        case 13:
          message.salt = reader.bytes();
          break;
        case 14:
          message.oSalt = reader.bytes();
          break;
        case 15:
          message.raw = reader.bytes();
          break;
        case 16:
          message.oRaw = reader.bytes();
          break;
        case 17:
          message.wasm = reader.bytes();
          break;
        case 18:
          message.oWasm = reader.bytes();
          break;
        case 19:
          message.opt = (reader.int32() as any);
          break;
        case 20:
          message.oOpt = (reader.int32() as any);
          break;
        case 21:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 22:
          message.oPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 23:
          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 24:
          message.oDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 25:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 26:
          message.oPubkey = Any.decode(reader, reader.uint32());
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
              message.oNums.push(reader.int32());
            }
          } else {
            message.oNums.push(reader.int32());
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
              message.oBigs.push(reader.int64());
            }
          } else {
            message.oBigs.push(reader.int64());
          }
          break;
        case 31:
          message.salts.push(reader.bytes());
          break;
        case 32:
          message.oSalts.push(reader.bytes());
          break;
        case 33:
          message.raws.push(reader.bytes());
          break;
        case 34:
          message.oRaws.push(reader.bytes());
          break;
        case 35:
          message.wasms.push(reader.bytes());
          break;
        case 36:
          message.oWasms.push(reader.bytes());
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
              message.oOpts.push((reader.int32() as any));
            }
          } else {
            message.oOpts.push((reader.int32() as any));
          }
          break;
        case 39:
          message.periods.push(Duration.decode(reader, reader.uint32()));
          break;
        case 40:
          message.oPeriods.push(Duration.decode(reader, reader.uint32()));
          break;
        case 43:
          message.protos.push(AccessConfig.decode(reader, reader.uint32()));
          break;
        case 44:
          message.oProtos.push(AccessConfig.decode(reader, reader.uint32()));
          break;
        case 45:
          message.auths.push(Any.decode(reader, reader.uint32()));
          break;
        case 46:
          message.oAuths.push(Any.decode(reader, reader.uint32()));
          break;
        case 47:
          message.dec = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 48:
          message.oDec = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 49:
          message.decs.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        case 50:
          message.oDecs.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EncodingTestForOmit {
    const obj = createBaseEncodingTestForOmit();
    if (isSet(object.str)) obj.str = String(object.str);
    if (isSet(object.oStr)) obj.oStr = String(object.oStr);
    if (isSet(object.b)) obj.b = Boolean(object.b);
    if (isSet(object.oB)) obj.oB = Boolean(object.oB);
    if (isSet(object.num)) obj.num = Number(object.num);
    if (isSet(object.oNum)) obj.oNum = Number(object.oNum);
    if (isSet(object.big)) obj.big = BigInt(object.big.toString());
    if (isSet(object.oBig)) obj.oBig = BigInt(object.oBig.toString());
    if (isSet(object.proto)) obj.proto = AccessConfig.fromJSON(object.proto);
    if (isSet(object.oProto)) obj.oProto = AccessConfig.fromJSON(object.oProto);
    if (isSet(object.auth)) obj.auth = Any.fromJSON(object.auth);
    if (isSet(object.oAuth)) obj.oAuth = Any.fromJSON(object.oAuth);
    if (isSet(object.salt)) obj.salt = bytesFromBase64(object.salt);
    if (isSet(object.oSalt)) obj.oSalt = bytesFromBase64(object.oSalt);
    if (isSet(object.raw)) obj.raw = bytesFromBase64(object.raw);
    if (isSet(object.oRaw)) obj.oRaw = bytesFromBase64(object.oRaw);
    if (isSet(object.wasm)) obj.wasm = bytesFromBase64(object.wasm);
    if (isSet(object.oWasm)) obj.oWasm = bytesFromBase64(object.oWasm);
    if (isSet(object.opt)) obj.opt = voteOptionFromJSON(object.opt);
    if (isSet(object.oOpt)) obj.oOpt = voteOptionFromJSON(object.oOpt);
    if (isSet(object.period)) obj.period = Duration.fromJSON(object.period);
    if (isSet(object.oPeriod)) obj.oPeriod = Duration.fromJSON(object.oPeriod);
    if (isSet(object.date)) obj.date = new Date(object.date);
    if (isSet(object.oDate)) obj.oDate = new Date(object.oDate);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.oPubkey)) obj.oPubkey = Any.fromJSON(object.oPubkey);
    if (Array.isArray(object?.nums)) obj.nums = object.nums.map((e: any) => Number(e));
    if (Array.isArray(object?.oNums)) obj.oNums = object.oNums.map((e: any) => Number(e));
    if (Array.isArray(object?.bigs)) obj.bigs = object.bigs.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.oBigs)) obj.oBigs = object.oBigs.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.salts)) obj.salts = object.salts.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.oSalts)) obj.oSalts = object.oSalts.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.raws)) obj.raws = object.raws.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.oRaws)) obj.oRaws = object.oRaws.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.wasms)) obj.wasms = object.wasms.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.oWasms)) obj.oWasms = object.oWasms.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.opts)) obj.opts = object.opts.map((e: any) => voteOptionFromJSON(e));
    if (Array.isArray(object?.oOpts)) obj.oOpts = object.oOpts.map((e: any) => voteOptionFromJSON(e));
    if (Array.isArray(object?.periods)) obj.periods = object.periods.map((e: any) => Duration.fromJSON(e));
    if (Array.isArray(object?.oPeriods)) obj.oPeriods = object.oPeriods.map((e: any) => Duration.fromJSON(e));
    if (Array.isArray(object?.protos)) obj.protos = object.protos.map((e: any) => AccessConfig.fromJSON(e));
    if (Array.isArray(object?.oProtos)) obj.oProtos = object.oProtos.map((e: any) => AccessConfig.fromJSON(e));
    if (Array.isArray(object?.auths)) obj.auths = object.auths.map((e: any) => Any.fromJSON(e));
    if (Array.isArray(object?.oAuths)) obj.oAuths = object.oAuths.map((e: any) => Any.fromJSON(e));
    if (isSet(object.dec)) obj.dec = String(object.dec);
    if (isSet(object.oDec)) obj.oDec = String(object.oDec);
    if (Array.isArray(object?.decs)) obj.decs = object.decs.map((e: any) => String(e));
    if (Array.isArray(object?.oDecs)) obj.oDecs = object.oDecs.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EncodingTestForOmit): JsonSafe<EncodingTestForOmit> {
    const obj: any = {};
    message.str !== undefined && (obj.str = message.str);
    message.oStr !== undefined && (obj.oStr = message.oStr);
    message.b !== undefined && (obj.b = message.b);
    message.oB !== undefined && (obj.oB = message.oB);
    message.num !== undefined && (obj.num = Math.round(message.num));
    message.oNum !== undefined && (obj.oNum = Math.round(message.oNum));
    message.big !== undefined && (obj.big = (message.big || BigInt(0)).toString());
    message.oBig !== undefined && (obj.oBig = (message.oBig || BigInt(0)).toString());
    message.proto !== undefined && (obj.proto = message.proto ? AccessConfig.toJSON(message.proto) : undefined);
    message.oProto !== undefined && (obj.oProto = message.oProto ? AccessConfig.toJSON(message.oProto) : undefined);
    message.auth !== undefined && (obj.auth = message.auth ? Any.toJSON(message.auth) : undefined);
    message.oAuth !== undefined && (obj.oAuth = message.oAuth ? Any.toJSON(message.oAuth) : undefined);
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.oSalt !== undefined && (obj.oSalt = base64FromBytes(message.oSalt !== undefined ? message.oSalt : new Uint8Array()));
    message.raw !== undefined && (obj.raw = base64FromBytes(message.raw !== undefined ? message.raw : new Uint8Array()));
    message.oRaw !== undefined && (obj.oRaw = base64FromBytes(message.oRaw !== undefined ? message.oRaw : new Uint8Array()));
    message.wasm !== undefined && (obj.wasm = base64FromBytes(message.wasm !== undefined ? message.wasm : new Uint8Array()));
    message.oWasm !== undefined && (obj.oWasm = base64FromBytes(message.oWasm !== undefined ? message.oWasm : new Uint8Array()));
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.oOpt !== undefined && (obj.oOpt = voteOptionToJSON(message.oOpt));
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    message.oPeriod !== undefined && (obj.oPeriod = message.oPeriod ? Duration.toJSON(message.oPeriod) : undefined);
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.oDate !== undefined && (obj.oDate = message.oDate.toISOString());
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.oPubkey !== undefined && (obj.oPubkey = message.oPubkey ? Any.toJSON(message.oPubkey) : undefined);
    if (message.nums) {
      obj.nums = message.nums.map(e => Math.round(e));
    } else {
      obj.nums = [];
    }
    if (message.oNums) {
      obj.oNums = message.oNums.map(e => Math.round(e));
    } else {
      obj.oNums = [];
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.bigs = [];
    }
    if (message.oBigs) {
      obj.oBigs = message.oBigs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.oBigs = [];
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.salts = [];
    }
    if (message.oSalts) {
      obj.oSalts = message.oSalts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oSalts = [];
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.raws = [];
    }
    if (message.oRaws) {
      obj.oRaws = message.oRaws.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oRaws = [];
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.wasms = [];
    }
    if (message.oWasms) {
      obj.oWasms = message.oWasms.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oWasms = [];
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => voteOptionToJSON(e));
    } else {
      obj.opts = [];
    }
    if (message.oOpts) {
      obj.oOpts = message.oOpts.map(e => voteOptionToJSON(e));
    } else {
      obj.oOpts = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }
    if (message.oPeriods) {
      obj.oPeriods = message.oPeriods.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.oPeriods = [];
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toJSON(e) : undefined);
    } else {
      obj.protos = [];
    }
    if (message.oProtos) {
      obj.oProtos = message.oProtos.map(e => e ? AccessConfig.toJSON(e) : undefined);
    } else {
      obj.oProtos = [];
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.oAuths) {
      obj.oAuths = message.oAuths.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.oAuths = [];
    }
    message.dec !== undefined && (obj.dec = message.dec);
    message.oDec !== undefined && (obj.oDec = message.oDec);
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = [];
    }
    if (message.oDecs) {
      obj.oDecs = message.oDecs.map(e => e);
    } else {
      obj.oDecs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EncodingTestForOmit>): EncodingTestForOmit {
    const message = createBaseEncodingTestForOmit();
    message.str = object.str ?? "";
    message.oStr = object.oStr ?? "";
    message.b = object.b ?? false;
    message.oB = object.oB ?? false;
    message.num = object.num ?? 0;
    message.oNum = object.oNum ?? 0;
    if (object.big !== undefined && object.big !== null) {
      message.big = BigInt(object.big.toString());
    }
    if (object.oBig !== undefined && object.oBig !== null) {
      message.oBig = BigInt(object.oBig.toString());
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = AccessConfig.fromPartial(object.proto);
    }
    if (object.oProto !== undefined && object.oProto !== null) {
      message.oProto = AccessConfig.fromPartial(object.oProto);
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = Any.fromPartial(object.auth);
    }
    if (object.oAuth !== undefined && object.oAuth !== null) {
      message.oAuth = Any.fromPartial(object.oAuth);
    }
    message.salt = object.salt ?? new Uint8Array();
    message.oSalt = object.oSalt ?? new Uint8Array();
    message.raw = object.raw ?? new Uint8Array();
    message.oRaw = object.oRaw ?? new Uint8Array();
    message.wasm = object.wasm ?? new Uint8Array();
    message.oWasm = object.oWasm ?? new Uint8Array();
    message.opt = object.opt ?? 0;
    message.oOpt = object.oOpt ?? 0;
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromPartial(object.period);
    }
    if (object.oPeriod !== undefined && object.oPeriod !== null) {
      message.oPeriod = Duration.fromPartial(object.oPeriod);
    }
    message.date = object.date ?? undefined;
    message.oDate = object.oDate ?? undefined;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    if (object.oPubkey !== undefined && object.oPubkey !== null) {
      message.oPubkey = Any.fromPartial(object.oPubkey);
    }
    message.nums = object.nums?.map(e => e) || [];
    message.oNums = object.oNums?.map(e => e) || [];
    message.bigs = object.bigs?.map(e => BigInt(e.toString())) || [];
    message.oBigs = object.oBigs?.map(e => BigInt(e.toString())) || [];
    message.salts = object.salts?.map(e => e) || [];
    message.oSalts = object.oSalts?.map(e => e) || [];
    message.raws = object.raws?.map(e => e) || [];
    message.oRaws = object.oRaws?.map(e => e) || [];
    message.wasms = object.wasms?.map(e => e) || [];
    message.oWasms = object.oWasms?.map(e => e) || [];
    message.opts = object.opts?.map(e => e) || [];
    message.oOpts = object.oOpts?.map(e => e) || [];
    message.periods = object.periods?.map(e => Duration.fromPartial(e)) || [];
    message.oPeriods = object.oPeriods?.map(e => Duration.fromPartial(e)) || [];
    message.protos = object.protos?.map(e => AccessConfig.fromPartial(e)) || [];
    message.oProtos = object.oProtos?.map(e => AccessConfig.fromPartial(e)) || [];
    message.auths = object.auths?.map(e => Any.fromPartial(e)) || [];
    message.oAuths = object.oAuths?.map(e => Any.fromPartial(e)) || [];
    message.dec = object.dec ?? "";
    message.oDec = object.oDec ?? "";
    message.decs = object.decs?.map(e => e) || [];
    message.oDecs = object.oDecs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EncodingTestForOmitSDKType): EncodingTestForOmit {
    return {
      str: object?.str,
      oStr: object?.o_str,
      b: object?.b,
      oB: object?.o_b,
      num: object?.num,
      oNum: object?.o_num,
      big: object?.big,
      oBig: object?.o_big,
      proto: object.proto ? AccessConfig.fromSDK(object.proto) : undefined,
      oProto: object.o_proto ? AccessConfig.fromSDK(object.o_proto) : undefined,
      auth: object.auth ? Any.fromSDK(object.auth) : undefined,
      oAuth: object.o_auth ? Any.fromSDK(object.o_auth) : undefined,
      salt: object?.salt,
      oSalt: object?.o_salt,
      raw: object?.raw,
      oRaw: object?.o_raw,
      wasm: object?.wasm,
      oWasm: object?.o_wasm,
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      oOpt: isSet(object.o_opt) ? voteOptionFromJSON(object.o_opt) : -1,
      period: object.period ? Duration.fromSDK(object.period) : undefined,
      oPeriod: object.o_period ? Duration.fromSDK(object.o_period) : undefined,
      date: object.date ?? undefined,
      oDate: object.o_date ?? undefined,
      pubkey: object.pubkey ? Any.fromSDK(object.pubkey) : undefined,
      oPubkey: object.o_pubkey ? Any.fromSDK(object.o_pubkey) : undefined,
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => e) : [],
      oNums: Array.isArray(object?.o_nums) ? object.o_nums.map((e: any) => e) : [],
      bigs: Array.isArray(object?.bigs) ? object.bigs.map((e: any) => e) : [],
      oBigs: Array.isArray(object?.o_bigs) ? object.o_bigs.map((e: any) => e) : [],
      salts: Array.isArray(object?.salts) ? object.salts.map((e: any) => e) : [],
      oSalts: Array.isArray(object?.o_salts) ? object.o_salts.map((e: any) => e) : [],
      raws: Array.isArray(object?.raws) ? object.raws.map((e: any) => e) : [],
      oRaws: Array.isArray(object?.o_raws) ? object.o_raws.map((e: any) => e) : [],
      wasms: Array.isArray(object?.wasms) ? object.wasms.map((e: any) => e) : [],
      oWasms: Array.isArray(object?.o_wasms) ? object.o_wasms.map((e: any) => e) : [],
      opts: Array.isArray(object?.opts) ? object.opts.map((e: any) => voteOptionFromJSON(e)) : [],
      oOpts: Array.isArray(object?.o_opts) ? object.o_opts.map((e: any) => voteOptionFromJSON(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Duration.fromSDK(e)) : [],
      oPeriods: Array.isArray(object?.o_periods) ? object.o_periods.map((e: any) => Duration.fromSDK(e)) : [],
      protos: Array.isArray(object?.protos) ? object.protos.map((e: any) => AccessConfig.fromSDK(e)) : [],
      oProtos: Array.isArray(object?.o_protos) ? object.o_protos.map((e: any) => AccessConfig.fromSDK(e)) : [],
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => Any.fromSDK(e)) : [],
      oAuths: Array.isArray(object?.o_auths) ? object.o_auths.map((e: any) => Any.fromSDK(e)) : [],
      dec: object?.dec,
      oDec: object?.o_dec,
      decs: Array.isArray(object?.decs) ? object.decs.map((e: any) => e) : [],
      oDecs: Array.isArray(object?.o_decs) ? object.o_decs.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): EncodingTestForOmitSDKType {
    return {
      str: isSet(object.str) ? String(object.str) : "",
      o_str: isSet(object.o_str) ? String(object.o_str) : "",
      b: isSet(object.b) ? Boolean(object.b) : false,
      o_b: isSet(object.o_b) ? Boolean(object.o_b) : false,
      num: isSet(object.num) ? Number(object.num) : 0,
      o_num: isSet(object.o_num) ? Number(object.o_num) : 0,
      big: isSet(object.big) ? BigInt(object.big.toString()) : BigInt(0),
      o_big: isSet(object.o_big) ? BigInt(object.o_big.toString()) : BigInt(0),
      proto: isSet(object.proto) ? AccessConfig.fromSDKJSON(object.proto) : undefined,
      o_proto: isSet(object.o_proto) ? AccessConfig.fromSDKJSON(object.o_proto) : undefined,
      auth: isSet(object.auth) ? Any.fromSDKJSON(object.auth) : undefined,
      o_auth: isSet(object.o_auth) ? Any.fromSDKJSON(object.o_auth) : undefined,
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      o_salt: isSet(object.o_salt) ? bytesFromBase64(object.o_salt) : new Uint8Array(),
      raw: isSet(object.raw) ? bytesFromBase64(object.raw) : new Uint8Array(),
      o_raw: isSet(object.o_raw) ? bytesFromBase64(object.o_raw) : new Uint8Array(),
      wasm: isSet(object.wasm) ? bytesFromBase64(object.wasm) : new Uint8Array(),
      o_wasm: isSet(object.o_wasm) ? bytesFromBase64(object.o_wasm) : new Uint8Array(),
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      o_opt: isSet(object.o_opt) ? voteOptionFromJSON(object.o_opt) : -1,
      period: isSet(object.period) ? Duration.fromSDKJSON(object.period) : undefined,
      o_period: isSet(object.o_period) ? Duration.fromSDKJSON(object.o_period) : undefined,
      date: isSet(object.date) ? new Date(object.date) : undefined,
      o_date: isSet(object.o_date) ? new Date(object.o_date) : undefined,
      pubkey: isSet(object.pubkey) ? Any.fromSDKJSON(object.pubkey) : undefined,
      o_pubkey: isSet(object.o_pubkey) ? Any.fromSDKJSON(object.o_pubkey) : undefined,
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => Number(e)) : [],
      o_nums: Array.isArray(object?.o_nums) ? object.o_nums.map((e: any) => Number(e)) : [],
      bigs: Array.isArray(object?.bigs) ? object.bigs.map((e: any) => BigInt(e.toString())) : [],
      o_bigs: Array.isArray(object?.o_bigs) ? object.o_bigs.map((e: any) => BigInt(e.toString())) : [],
      salts: Array.isArray(object?.salts) ? object.salts.map((e: any) => bytesFromBase64(e)) : [],
      o_salts: Array.isArray(object?.o_salts) ? object.o_salts.map((e: any) => bytesFromBase64(e)) : [],
      raws: Array.isArray(object?.raws) ? object.raws.map((e: any) => bytesFromBase64(e)) : [],
      o_raws: Array.isArray(object?.o_raws) ? object.o_raws.map((e: any) => bytesFromBase64(e)) : [],
      wasms: Array.isArray(object?.wasms) ? object.wasms.map((e: any) => bytesFromBase64(e)) : [],
      o_wasms: Array.isArray(object?.o_wasms) ? object.o_wasms.map((e: any) => bytesFromBase64(e)) : [],
      opts: Array.isArray(object?.opts) ? object.opts.map((e: any) => voteOptionFromJSON(e)) : [],
      o_opts: Array.isArray(object?.o_opts) ? object.o_opts.map((e: any) => voteOptionFromJSON(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Duration.fromSDKJSON(e)) : [],
      o_periods: Array.isArray(object?.o_periods) ? object.o_periods.map((e: any) => Duration.fromSDKJSON(e)) : [],
      protos: Array.isArray(object?.protos) ? object.protos.map((e: any) => AccessConfig.fromSDKJSON(e)) : [],
      o_protos: Array.isArray(object?.o_protos) ? object.o_protos.map((e: any) => AccessConfig.fromSDKJSON(e)) : [],
      auths: Array.isArray(object?.auths) ? object.auths.map((e: any) => Any.fromSDKJSON(e)) : [],
      o_auths: Array.isArray(object?.o_auths) ? object.o_auths.map((e: any) => Any.fromSDKJSON(e)) : [],
      dec: isSet(object.dec) ? String(object.dec) : "",
      o_dec: isSet(object.o_dec) ? String(object.o_dec) : "",
      decs: Array.isArray(object?.decs) ? object.decs.map((e: any) => String(e)) : [],
      o_decs: Array.isArray(object?.o_decs) ? object.o_decs.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: EncodingTestForOmit): EncodingTestForOmitSDKType {
    const obj: any = {};
    obj.str = message.str;
    obj.o_str = message.oStr;
    obj.b = message.b;
    obj.o_b = message.oB;
    obj.num = message.num;
    obj.o_num = message.oNum;
    obj.big = message.big;
    obj.o_big = message.oBig;
    message.proto !== undefined && (obj.proto = message.proto ? AccessConfig.toSDK(message.proto) : undefined);
    message.oProto !== undefined && (obj.o_proto = message.oProto ? AccessConfig.toSDK(message.oProto) : undefined);
    message.auth !== undefined && (obj.auth = message.auth ? Any.toSDK(message.auth) : undefined);
    message.oAuth !== undefined && (obj.o_auth = message.oAuth ? Any.toSDK(message.oAuth) : undefined);
    obj.salt = message.salt;
    obj.o_salt = message.oSalt;
    obj.raw = message.raw;
    obj.o_raw = message.oRaw;
    obj.wasm = message.wasm;
    obj.o_wasm = message.oWasm;
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.oOpt !== undefined && (obj.o_opt = voteOptionToJSON(message.oOpt));
    message.period !== undefined && (obj.period = message.period ? Duration.toSDK(message.period) : undefined);
    message.oPeriod !== undefined && (obj.o_period = message.oPeriod ? Duration.toSDK(message.oPeriod) : undefined);
    message.date !== undefined && (obj.date = message.date ?? undefined);
    message.oDate !== undefined && (obj.o_date = message.oDate ?? undefined);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toSDK(message.pubkey) : undefined);
    message.oPubkey !== undefined && (obj.o_pubkey = message.oPubkey ? Any.toSDK(message.oPubkey) : undefined);
    if (message.nums) {
      obj.nums = message.nums.map(e => e);
    } else {
      obj.nums = [];
    }
    if (message.oNums) {
      obj.o_nums = message.oNums.map(e => e);
    } else {
      obj.o_nums = [];
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => e);
    } else {
      obj.bigs = [];
    }
    if (message.oBigs) {
      obj.o_bigs = message.oBigs.map(e => e);
    } else {
      obj.o_bigs = [];
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => e);
    } else {
      obj.salts = [];
    }
    if (message.oSalts) {
      obj.o_salts = message.oSalts.map(e => e);
    } else {
      obj.o_salts = [];
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => e);
    } else {
      obj.raws = [];
    }
    if (message.oRaws) {
      obj.o_raws = message.oRaws.map(e => e);
    } else {
      obj.o_raws = [];
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => e);
    } else {
      obj.wasms = [];
    }
    if (message.oWasms) {
      obj.o_wasms = message.oWasms.map(e => e);
    } else {
      obj.o_wasms = [];
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => voteOptionToJSON(e));
    } else {
      obj.opts = [];
    }
    if (message.oOpts) {
      obj.o_opts = message.oOpts.map(e => voteOptionToJSON(e));
    } else {
      obj.o_opts = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.periods = [];
    }
    if (message.oPeriods) {
      obj.o_periods = message.oPeriods.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.o_periods = [];
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toSDK(e) : undefined);
    } else {
      obj.protos = [];
    }
    if (message.oProtos) {
      obj.o_protos = message.oProtos.map(e => e ? AccessConfig.toSDK(e) : undefined);
    } else {
      obj.o_protos = [];
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.auths = [];
    }
    if (message.oAuths) {
      obj.o_auths = message.oAuths.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.o_auths = [];
    }
    obj.dec = message.dec;
    obj.o_dec = message.oDec;
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = [];
    }
    if (message.oDecs) {
      obj.o_decs = message.oDecs.map(e => e);
    } else {
      obj.o_decs = [];
    }
    return obj;
  },
  fromAmino(object: EncodingTestForOmitAmino): EncodingTestForOmit {
    const message = createBaseEncodingTestForOmit();
    if (object.str !== undefined && object.str !== null) {
      message.str = object.str;
    }
    if (object.o_str !== undefined && object.o_str !== null) {
      message.oStr = object.o_str;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = object.b;
    }
    if (object.o_b !== undefined && object.o_b !== null) {
      message.oB = object.o_b;
    }
    if (object.num !== undefined && object.num !== null) {
      message.num = object.num;
    }
    if (object.o_num !== undefined && object.o_num !== null) {
      message.oNum = object.o_num;
    }
    if (object.big !== undefined && object.big !== null) {
      message.big = BigInt(object.big);
    }
    if (object.o_big !== undefined && object.o_big !== null) {
      message.oBig = BigInt(object.o_big);
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = AccessConfig.fromAmino(object.proto);
    }
    if (object.o_proto !== undefined && object.o_proto !== null) {
      message.oProto = AccessConfig.fromAmino(object.o_proto);
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = Any.fromAmino(object.auth);
    }
    if (object.o_auth !== undefined && object.o_auth !== null) {
      message.oAuth = Any.fromAmino(object.o_auth);
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.o_salt !== undefined && object.o_salt !== null) {
      message.oSalt = bytesFromBase64(object.o_salt);
    }
    if (object.raw !== undefined && object.raw !== null) {
      message.raw = toUtf8(JSON.stringify(object.raw));
    }
    if (object.o_raw !== undefined && object.o_raw !== null) {
      message.oRaw = toUtf8(JSON.stringify(object.o_raw));
    }
    if (object.wasm !== undefined && object.wasm !== null) {
      message.wasm = fromBase64(object.wasm);
    }
    if (object.o_wasm !== undefined && object.o_wasm !== null) {
      message.oWasm = fromBase64(object.o_wasm);
    }
    if (object.opt !== undefined && object.opt !== null) {
      message.opt = object.opt;
    }
    if (object.o_opt !== undefined && object.o_opt !== null) {
      message.oOpt = object.o_opt;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromAmino(object.period);
    }
    if (object.o_period !== undefined && object.o_period !== null) {
      message.oPeriod = Duration.fromAmino(object.o_period);
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = fromTimestamp(Timestamp.fromAmino(object.date));
    }
    if (object.o_date !== undefined && object.o_date !== null) {
      message.oDate = fromTimestamp(Timestamp.fromAmino(object.o_date));
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.o_pubkey !== undefined && object.o_pubkey !== null) {
      message.oPubkey = encodePubkey(object.o_pubkey);
    }
    message.nums = object.nums?.map(e => e) || [];
    message.oNums = object.o_nums?.map(e => e) || [];
    message.bigs = object.bigs?.map(e => BigInt(e)) || [];
    message.oBigs = object.o_bigs?.map(e => BigInt(e)) || [];
    message.salts = object.salts?.map(e => bytesFromBase64(e)) || [];
    message.oSalts = object.o_salts?.map(e => bytesFromBase64(e)) || [];
    message.raws = object.raws?.map(e => toUtf8(JSON.stringify(e))) || [];
    message.oRaws = object.o_raws?.map(e => toUtf8(JSON.stringify(e))) || [];
    message.wasms = object.wasms?.map(e => fromBase64(e)) || [];
    message.oWasms = object.o_wasms?.map(e => fromBase64(e)) || [];
    message.opts = object.opts?.map(e => e) || [];
    message.oOpts = object.o_opts?.map(e => e) || [];
    message.periods = object.periods?.map(e => Duration.fromAmino(e)) || [];
    message.oPeriods = object.o_periods?.map(e => Duration.fromAmino(e)) || [];
    message.protos = object.protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.oProtos = object.o_protos?.map(e => AccessConfig.fromAmino(e)) || [];
    message.auths = object.auths?.map(e => Any.fromAmino(e)) || [];
    message.oAuths = object.o_auths?.map(e => Any.fromAmino(e)) || [];
    if (object.dec !== undefined && object.dec !== null) {
      message.dec = object.dec;
    }
    if (object.o_dec !== undefined && object.o_dec !== null) {
      message.oDec = object.o_dec;
    }
    message.decs = object.decs?.map(e => e) || [];
    message.oDecs = object.o_decs?.map(e => e) || [];
    return message;
  },
  toAmino(message: EncodingTestForOmit): EncodingTestForOmitAmino {
    const obj: any = {};
    obj.str = message.str ?? "";
    obj.o_str = message.oStr === "" ? undefined : message.oStr;
    obj.b = message.b ?? false;
    obj.o_b = message.oB === false ? undefined : message.oB;
    obj.num = message.num ?? 0;
    obj.o_num = message.oNum === 0 ? undefined : message.oNum;
    obj.big = message.big ? message.big.toString() : "0";
    obj.o_big = message.oBig !== BigInt(0) ? message.oBig.toString() : undefined;
    obj.proto = message.proto ? AccessConfig.toAmino(message.proto) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    obj.o_proto = message.oProto ? AccessConfig.toAmino(message.oProto) : undefined;
    obj.auth = message.auth ? Any.toAmino(message.auth) : Any.toAmino(Any.fromPartial({}));
    obj.o_auth = message.oAuth ? Any.toAmino(message.oAuth) : undefined;
    obj.salt = message.salt ? base64FromBytes(message.salt) : "";
    obj.o_salt = message.oSalt ? base64FromBytes(message.oSalt) : undefined;
    obj.raw = message.raw ? JSON.parse(fromUtf8(message.raw)) : {};
    obj.o_raw = message.oRaw ? JSON.parse(fromUtf8(message.oRaw)) : undefined;
    obj.wasm = message.wasm ? toBase64(message.wasm) : "";
    obj.o_wasm = message.oWasm ? toBase64(message.oWasm) : undefined;
    obj.opt = message.opt ?? 0;
    obj.o_opt = message.oOpt === 0 ? undefined : message.oOpt;
    obj.period = message.period ? Duration.toAmino(message.period) : Duration.toAmino(Duration.fromPartial({}));
    obj.o_period = message.oPeriod ? Duration.toAmino(message.oPeriod) : undefined;
    obj.date = message.date ? Timestamp.toAmino(toTimestamp(message.date)) : null;
    obj.o_date = message.oDate ? Timestamp.toAmino(toTimestamp(message.oDate)) : undefined;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : null;
    obj.o_pubkey = message.oPubkey ? decodePubkey(message.oPubkey) : undefined;
    if (message.nums) {
      obj.nums = message.nums.map(e => e);
    } else {
      obj.nums = message.nums;
    }
    if (message.oNums) {
      obj.o_nums = message.oNums.map(e => e);
    } else {
      obj.o_nums = message.oNums;
    }
    if (message.bigs) {
      obj.bigs = message.bigs.map(e => e.toString());
    } else {
      obj.bigs = message.bigs;
    }
    if (message.oBigs) {
      obj.o_bigs = message.oBigs.map(e => e.toString());
    } else {
      obj.o_bigs = message.oBigs;
    }
    if (message.salts) {
      obj.salts = message.salts.map(e => base64FromBytes(e));
    } else {
      obj.salts = message.salts;
    }
    if (message.oSalts) {
      obj.o_salts = message.oSalts.map(e => base64FromBytes(e));
    } else {
      obj.o_salts = message.oSalts;
    }
    if (message.raws) {
      obj.raws = message.raws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.raws = message.raws;
    }
    if (message.oRaws) {
      obj.o_raws = message.oRaws.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.o_raws = message.oRaws;
    }
    if (message.wasms) {
      obj.wasms = message.wasms.map(e => toBase64(e));
    } else {
      obj.wasms = message.wasms;
    }
    if (message.oWasms) {
      obj.o_wasms = message.oWasms.map(e => toBase64(e));
    } else {
      obj.o_wasms = message.oWasms;
    }
    if (message.opts) {
      obj.opts = message.opts.map(e => e);
    } else {
      obj.opts = message.opts;
    }
    if (message.oOpts) {
      obj.o_opts = message.oOpts.map(e => e);
    } else {
      obj.o_opts = message.oOpts;
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.periods = message.periods;
    }
    if (message.oPeriods) {
      obj.o_periods = message.oPeriods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.o_periods = message.oPeriods;
    }
    if (message.protos) {
      obj.protos = message.protos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.protos = message.protos;
    }
    if (message.oProtos) {
      obj.o_protos = message.oProtos.map(e => e ? AccessConfig.toAmino(e) : undefined);
    } else {
      obj.o_protos = message.oProtos;
    }
    if (message.auths) {
      obj.auths = message.auths.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.auths = message.auths;
    }
    if (message.oAuths) {
      obj.o_auths = message.oAuths.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.o_auths = message.oAuths;
    }
    obj.dec = message.dec ?? "";
    obj.o_dec = message.oDec === "" ? undefined : message.oDec;
    if (message.decs) {
      obj.decs = message.decs.map(e => e);
    } else {
      obj.decs = message.decs;
    }
    if (message.oDecs) {
      obj.o_decs = message.oDecs.map(e => e);
    } else {
      obj.o_decs = message.oDecs;
    }
    return obj;
  },
  fromAminoMsg(object: EncodingTestForOmitAminoMsg): EncodingTestForOmit {
    return EncodingTestForOmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EncodingTestForOmitProtoMsg): EncodingTestForOmit {
    return EncodingTestForOmit.decode(message.value);
  },
  toProto(message: EncodingTestForOmit): Uint8Array {
    return EncodingTestForOmit.encode(message).finish();
  },
  toProtoMsg(message: EncodingTestForOmit): EncodingTestForOmitProtoMsg {
    return {
      typeUrl: "/misc.EncodingTestForOmit",
      value: EncodingTestForOmit.encode(message).finish()
    };
  }
};