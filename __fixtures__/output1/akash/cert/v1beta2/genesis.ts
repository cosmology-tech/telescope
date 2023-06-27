import { Certificate, CertificateSDKType } from "./cert";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.cert.v1beta2";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
  owner: string;
  certificate: Certificate;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateSDKType {
  owner: string;
  certificate: CertificateSDKType;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
  certificates: GenesisCertificate[];
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateSDKType {
  certificates: GenesisCertificateSDKType[];
}
function createBaseGenesisCertificate(): GenesisCertificate {
  return {
    owner: "",
    certificate: Certificate.fromPartial({})
  };
}
export const GenesisCertificate = {
  encode(message: GenesisCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisCertificate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined
    };
  },
  toJSON(message: GenesisCertificate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisCertificate>, I>>(object: I): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
  },
  fromSDK(object: GenesisCertificateSDKType): GenesisCertificate {
    return {
      owner: object?.owner,
      certificate: object.certificate ? Certificate.fromSDK(object.certificate) : undefined
    };
  },
  toSDK(message: GenesisCertificate): GenesisCertificateSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toSDK(message.certificate) : undefined);
    return obj;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    certificates: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(GenesisCertificate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toJSON(e) : undefined);
    } else {
      obj.certificates = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toSDK(e) : undefined);
    } else {
      obj.certificates = [];
    }
    return obj;
  }
};