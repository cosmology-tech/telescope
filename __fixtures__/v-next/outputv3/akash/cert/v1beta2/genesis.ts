import { Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.cert.v1beta2";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
  owner: string;
  certificate: Certificate;
}
export interface GenesisCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta2.GenesisCertificate";
  value: Uint8Array;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateAmino {
  owner?: string;
  certificate?: CertificateAmino;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.cert.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateAmino {
  certificates?: GenesisCertificateAmino[];
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
  typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
  encode(message: GenesisCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.certificate = Certificate.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisCertificate {
    const obj = createBaseGenesisCertificate();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.certificate)) obj.certificate = Certificate.fromJSON(object.certificate);
    return obj;
  },
  toJSON(message: GenesisCertificate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisCertificate>): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    }
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
  },
  fromAmino(object: GenesisCertificateAmino): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromAmino(object.certificate);
    }
    return message;
  },
  toAmino(message: GenesisCertificate, useInterfaces: boolean = true): GenesisCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate, useInterfaces) : Certificate.fromPartial({});
    return obj;
  },
  fromProtoMsg(message: GenesisCertificateProtoMsg, useInterfaces: boolean = true): GenesisCertificate {
    return GenesisCertificate.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisCertificate): Uint8Array {
    return GenesisCertificate.encode(message).finish();
  },
  toProtoMsg(message: GenesisCertificate): GenesisCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
      value: GenesisCertificate.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    certificates: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.cert.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certificates) {
      GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(GenesisCertificate.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.certificates)) obj.certificates = object.certificates.map((e: any) => GenesisCertificate.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    return obj;
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};