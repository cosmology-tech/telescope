import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export interface RaAuthenticate {
  sender: Uint8Array;
  certificate: Uint8Array;
}

function createBaseRaAuthenticate(): RaAuthenticate {
  return {
    sender: new Uint8Array(),
    certificate: new Uint8Array()
  };
}

export const RaAuthenticate = {
  encode(message: RaAuthenticate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.certificate.length !== 0) {
      writer.uint32(18).bytes(message.certificate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaAuthenticate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.certificate = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RaAuthenticate {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array()
    };
  },

  toJSON(message: RaAuthenticate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.certificate !== undefined && (obj.certificate = base64FromBytes(message.certificate !== undefined ? message.certificate : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RaAuthenticate>, I>>(object: I): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    message.sender = object.sender ?? new Uint8Array();
    message.certificate = object.certificate ?? new Uint8Array();
    return message;
  }

};
export interface MasterCertificate {
  bytes: Uint8Array;
}

function createBaseMasterCertificate(): MasterCertificate {
  return {
    bytes: new Uint8Array()
  };
}

export const MasterCertificate = {
  encode(message: MasterCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytes.length !== 0) {
      writer.uint32(10).bytes(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MasterCertificate {
    return {
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array()
    };
  },

  toJSON(message: MasterCertificate): unknown {
    const obj: any = {};
    message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterCertificate>, I>>(object: I): MasterCertificate {
    const message = createBaseMasterCertificate();
    message.bytes = object.bytes ?? new Uint8Array();
    return message;
  }

};
export interface Key {
  key: Uint8Array;
}

function createBaseKey(): Key {
  return {
    key: new Uint8Array()
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Key {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = createBaseKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }

};