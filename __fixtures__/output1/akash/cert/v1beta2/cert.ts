import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
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

/** State is an enum which refers to state of deployment */
export enum Certificate_StateSDKType {
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

/** CertificateID stores owner and sequence number */
export interface CertificateIDSDKType {
  owner: string;
  serial: string;
}

/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** Certificate stores state, certificate and it's public key */
export interface CertificateSDKType {
  state: Certificate_StateSDKType;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}

/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterSDKType {
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

/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateSDKType {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}

/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseSDKType {}

/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  id: CertificateID;
}

/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateSDKType {
  id: CertificateIDSDKType;
}

/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}

/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseSDKType {}

function createBaseCertificateID(): CertificateID {
  return {
    owner: "",
    serial: ""
  };
}

export const CertificateID = {
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

  fromPartial<I extends Exact<DeepPartial<CertificateID>, I>>(object: I): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  },

  fromSDK(object: CertificateIDSDKType): CertificateID {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      serial: isSet(object.serial) ? object.serial : undefined
    };
  },

  toSDK(message: CertificateID): CertificateIDSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
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
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : 0,
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

  fromPartial<I extends Exact<DeepPartial<Certificate>, I>>(object: I): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },

  fromSDK(object: CertificateSDKType): Certificate {
    return {
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : 0,
      cert: isSet(object.cert) ? object.cert : undefined,
      pubkey: isSet(object.pubkey) ? object.pubkey : undefined
    };
  },

  toSDK(message: Certificate): CertificateSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = certificate_StateToJSON(message.state));
    message.cert !== undefined && (obj.cert = message.cert);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
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

  fromPartial<I extends Exact<DeepPartial<CertificateFilter>, I>>(object: I): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  },

  fromSDK(object: CertificateFilterSDKType): CertificateFilter {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      serial: isSet(object.serial) ? object.serial : undefined,
      state: isSet(object.state) ? object.state : undefined
    };
  },

  toSDK(message: CertificateFilter): CertificateFilterSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    message.state !== undefined && (obj.state = message.state);
    return obj;
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateCertificate>, I>>(object: I): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgCreateCertificateSDKType): MsgCreateCertificate {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      cert: isSet(object.cert) ? object.cert : undefined,
      pubkey: isSet(object.pubkey) ? object.pubkey : undefined
    };
  },

  toSDK(message: MsgCreateCertificate): MsgCreateCertificateSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.cert !== undefined && (obj.cert = message.cert);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  }

};

function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}

export const MsgCreateCertificateResponse = {
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateCertificateResponse>, I>>(_: I): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },

  fromSDK(_: MsgCreateCertificateResponseSDKType): MsgCreateCertificateResponse {
    return {};
  },

  toSDK(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: undefined
  };
}

export const MsgRevokeCertificate = {
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

  fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificate>, I>>(object: I): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? CertificateID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgRevokeCertificateSDKType): MsgRevokeCertificate {
    return {
      id: isSet(object.id) ? CertificateID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: MsgRevokeCertificate): MsgRevokeCertificateSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? CertificateID.toSDK(message.id) : undefined);
    return obj;
  }

};

function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}

export const MsgRevokeCertificateResponse = {
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

  fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificateResponse>, I>>(_: I): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },

  fromSDK(_: MsgRevokeCertificateResponseSDKType): MsgRevokeCertificateResponse {
    return {};
  },

  toSDK(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseSDKType {
    const obj: any = {};
    return obj;
  }

};