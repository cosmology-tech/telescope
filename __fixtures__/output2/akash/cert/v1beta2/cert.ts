//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "akash.cert.v1beta2";
/** State is an enum which refers to state of deployment */
export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}
export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case "invalid":
      return Certificate_State.invalid;
    case 1:
    case "valid":
      return Certificate_State.valid;
    case 2:
    case "revoked":
      return Certificate_State.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}
export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return "invalid";
    case Certificate_State.valid:
      return "valid";
    case Certificate_State.revoked:
      return "revoked";
    case Certificate_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CertificateID stores owner and sequence number */
export interface CertificateID {
  owner: string;
  serial: string;
}
/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  id: CertificateID;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}
function createBaseCertificateID(): CertificateID {
  return {
    owner: "",
    serial: ""
  };
}
export const CertificateID = {
  typeUrl: "/akash.cert.v1beta2.CertificateID",
  encode(message: CertificateID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CertificateID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },
  toJSON(message: CertificateID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
  },
  fromPartial(object: Partial<CertificateID>): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  },
  fromAmino(object: CertificateIDAmino): CertificateID {
    return {
      owner: object.owner,
      serial: object.serial
    };
  },
  toAmino(message: CertificateID): CertificateIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.serial = message.serial;
    return obj;
  },
  fromAminoMsg(object: CertificateIDAminoMsg): CertificateID {
    return CertificateID.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateIDProtoMsg): CertificateID {
    return CertificateID.decode(message.value);
  },
  toProto(message: CertificateID): Uint8Array {
    return CertificateID.encode(message).finish();
  },
  toProtoMsg(message: CertificateID): CertificateIDProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.CertificateID",
      value: CertificateID.encode(message).finish()
    };
  }
};
function createBaseCertificate(): Certificate {
  return {
    state: 0,
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const Certificate = {
  typeUrl: "/akash.cert.v1beta2.Certificate",
  encode(message: Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.cert = reader.bytes();
          break;
        case 4:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Certificate {
    return {
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : -1,
      cert: isSet(object.cert) ? bytesFromBase64(object.cert) : new Uint8Array(),
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array()
    };
  },
  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = certificate_StateToJSON(message.state));
    message.cert !== undefined && (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
    message.pubkey !== undefined && (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CertificateAmino): Certificate {
    return {
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : -1,
      cert: object.cert,
      pubkey: object.pubkey
    };
  },
  toAmino(message: Certificate): CertificateAmino {
    const obj: any = {};
    obj.state = message.state;
    obj.cert = message.cert;
    obj.pubkey = message.pubkey;
    return obj;
  },
  fromAminoMsg(object: CertificateAminoMsg): Certificate {
    return Certificate.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateProtoMsg): Certificate {
    return Certificate.decode(message.value);
  },
  toProto(message: Certificate): Uint8Array {
    return Certificate.encode(message).finish();
  },
  toProtoMsg(message: Certificate): CertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.Certificate",
      value: Certificate.encode(message).finish()
    };
  }
};
function createBaseCertificateFilter(): CertificateFilter {
  return {
    owner: "",
    serial: "",
    state: ""
  };
}
export const CertificateFilter = {
  typeUrl: "/akash.cert.v1beta2.CertificateFilter",
  encode(message: CertificateFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CertificateFilter {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      serial: isSet(object.serial) ? String(object.serial) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toJSON(message: CertificateFilter): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial(object: Partial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: CertificateFilterAmino): CertificateFilter {
    return {
      owner: object.owner,
      serial: object.serial,
      state: object.state
    };
  },
  toAmino(message: CertificateFilter): CertificateFilterAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.serial = message.serial;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: CertificateFilterAminoMsg): CertificateFilter {
    return CertificateFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateFilterProtoMsg): CertificateFilter {
    return CertificateFilter.decode(message.value);
  },
  toProto(message: CertificateFilter): Uint8Array {
    return CertificateFilter.encode(message).finish();
  },
  toProtoMsg(message: CertificateFilter): CertificateFilterProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.CertificateFilter",
      value: CertificateFilter.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    owner: "",
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const MsgCreateCertificate = {
  typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
  encode(message: MsgCreateCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.cert = reader.bytes();
          break;
        case 3:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateCertificate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      cert: isSet(object.cert) ? bytesFromBase64(object.cert) : new Uint8Array(),
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array()
    };
  },
  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.cert !== undefined && (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
    message.pubkey !== undefined && (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateCertificateAmino): MsgCreateCertificate {
    return {
      owner: object.owner,
      cert: object.cert,
      pubkey: object.pubkey
    };
  },
  toAmino(message: MsgCreateCertificate): MsgCreateCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.cert = message.cert;
    obj.pubkey = message.pubkey;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateAminoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateProtoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.decode(message.value);
  },
  toProto(message: MsgCreateCertificate): Uint8Array {
    return MsgCreateCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificate): MsgCreateCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: MsgCreateCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}
export const MsgCreateCertificateResponse = {
  typeUrl: "/akash.cert.v1beta2.MsgCreateCertificateResponse",
  encode(_: MsgCreateCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
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
  fromJSON(_: any): MsgCreateCertificateResponse {
    return {};
  },
  toJSON(_: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  fromAmino(_: MsgCreateCertificateResponseAmino): MsgCreateCertificateResponse {
    return {};
  },
  toAmino(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateResponseAminoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateResponseProtoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.decode(message.value);
  },
  toProto(message: MsgCreateCertificateResponse): Uint8Array {
    return MsgCreateCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificateResponse): MsgCreateCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificateResponse",
      value: MsgCreateCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: CertificateID.fromPartial({})
  };
}
export const MsgRevokeCertificate = {
  typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
  encode(message: MsgRevokeCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = CertificateID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeCertificate {
    return {
      id: isSet(object.id) ? CertificateID.fromJSON(object.id) : undefined
    };
  },
  toJSON(message: MsgRevokeCertificate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? CertificateID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? CertificateID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate {
    return {
      id: object?.id ? CertificateID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino {
    const obj: any = {};
    obj.id = message.id ? CertificateID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.decode(message.value);
  },
  toProto(message: MsgRevokeCertificate): Uint8Array {
    return MsgRevokeCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}
export const MsgRevokeCertificateResponse = {
  typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificateResponse",
  encode(_: MsgRevokeCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();
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
  fromJSON(_: any): MsgRevokeCertificateResponse {
    return {};
  },
  toJSON(_: MsgRevokeCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse {
    return {};
  },
  toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.decode(message.value);
  },
  toProto(message: MsgRevokeCertificateResponse): Uint8Array {
    return MsgRevokeCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificateResponse",
      value: MsgRevokeCertificateResponse.encode(message).finish()
    };
  }
};
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCertificate = this.CreateCertificate.bind(this);
    this.RevokeCertificate = this.RevokeCertificate.bind(this);
  }
  CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
    return promise.then(data => MsgCreateCertificateResponse.decode(new _m0.Reader(data)));
  }
  RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse> {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
    return promise.then(data => MsgRevokeCertificateResponse.decode(new _m0.Reader(data)));
  }
}