import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface SeedConfig {
  masterCert: string;
  encryptedKey: string;
}
export interface RegistrationNodeInfo {
  certificate: Uint8Array;
  encryptedSeed: Uint8Array;
}

function createBaseSeedConfig(): SeedConfig {
  return {
    masterCert: "",
    encryptedKey: ""
  };
}

export const SeedConfig = {
  encode(message: SeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterCert !== "") {
      writer.uint32(10).string(message.masterCert);
    }

    if (message.encryptedKey !== "") {
      writer.uint32(18).string(message.encryptedKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeedConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.masterCert = reader.string();
          break;

        case 2:
          message.encryptedKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SeedConfig {
    return {
      masterCert: isSet(object.masterCert) ? String(object.masterCert) : "",
      encryptedKey: isSet(object.encryptedKey) ? String(object.encryptedKey) : ""
    };
  },

  toJSON(message: SeedConfig): unknown {
    const obj: any = {};
    message.masterCert !== undefined && (obj.masterCert = message.masterCert);
    message.encryptedKey !== undefined && (obj.encryptedKey = message.encryptedKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SeedConfig>, I>>(object: I): SeedConfig {
    const message = createBaseSeedConfig();
    message.masterCert = object.masterCert ?? "";
    message.encryptedKey = object.encryptedKey ?? "";
    return message;
  }

};

function createBaseRegistrationNodeInfo(): RegistrationNodeInfo {
  return {
    certificate: new Uint8Array(),
    encryptedSeed: new Uint8Array()
  };
}

export const RegistrationNodeInfo = {
  encode(message: RegistrationNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate.length !== 0) {
      writer.uint32(10).bytes(message.certificate);
    }

    if (message.encryptedSeed.length !== 0) {
      writer.uint32(18).bytes(message.encryptedSeed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationNodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.certificate = reader.bytes();
          break;

        case 2:
          message.encryptedSeed = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegistrationNodeInfo {
    return {
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array(),
      encryptedSeed: isSet(object.encryptedSeed) ? bytesFromBase64(object.encryptedSeed) : new Uint8Array()
    };
  },

  toJSON(message: RegistrationNodeInfo): unknown {
    const obj: any = {};
    message.certificate !== undefined && (obj.certificate = base64FromBytes(message.certificate !== undefined ? message.certificate : new Uint8Array()));
    message.encryptedSeed !== undefined && (obj.encryptedSeed = base64FromBytes(message.encryptedSeed !== undefined ? message.encryptedSeed : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationNodeInfo>, I>>(object: I): RegistrationNodeInfo {
    const message = createBaseRegistrationNodeInfo();
    message.certificate = object.certificate ?? new Uint8Array();
    message.encryptedSeed = object.encryptedSeed ?? new Uint8Array();
    return message;
  }

};