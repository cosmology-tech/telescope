import { Certificate, CertificateAmino } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
  owner: string;
  certificate: CertificateAmino;
}
export interface GenesisCertificateAminoMsg {
  type: "/akash.cert.v1beta2.GenesisCertificate";
  value: GenesisCertificateAmino;
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
  certificates: GenesisCertificateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.cert.v1beta2.GenesisState";
  value: GenesisStateAmino;
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisCertificate {
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
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisCertificate>): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
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
  toAmino(message: GenesisCertificate): GenesisCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisCertificateAminoMsg): GenesisCertificate {
    return GenesisCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisCertificateProtoMsg): GenesisCertificate {
    return GenesisCertificate.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
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