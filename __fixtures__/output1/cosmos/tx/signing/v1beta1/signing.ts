import { CompactBitArray } from "../../../crypto/multisig/v1beta1/multisig";
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, Long, isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export enum SignMode {
  /*SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
  rejected.*/
  SIGN_MODE_UNSPECIFIED = 0,

  /*SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
  verified with raw bytes from Tx.*/
  SIGN_MODE_DIRECT = 1,

  /*SIGN_MODE_TEXTUAL is a future signing mode that will verify some
  human-readable textual representation on top of the binary representation
  from SIGN_MODE_DIRECT. It is currently not supported.*/
  SIGN_MODE_TEXTUAL = 2,

  /*SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
  SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
  require signers signing over other signers' `signer_info`. It also allows
  for adding Tips in transactions.
  
  Since: cosmos-sdk 0.46*/
  SIGN_MODE_DIRECT_AUX = 3,

  /*SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
  Amino JSON and will be removed in the future.*/
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  UNRECOGNIZED = -1,
}
export function signModeFromJSON(object: any): SignMode {
  switch (object) {
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;

    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;

    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;

    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;

    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
export function signModeToJSON(object: SignMode): string {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";

    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";

    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";

    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";

    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";

    default:
      return "UNKNOWN";
  }
}
export interface SignatureDescriptors {
  signatures: SignatureDescriptor[];
}

function createBaseSignatureDescriptors(): SignatureDescriptors {
  return {
    signatures: []
  };
}

export const SignatureDescriptors = {
  encode(message: SignatureDescriptors, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptors {
    return {
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: SignatureDescriptors): unknown {
    const obj: any = {};

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignatureDescriptors>, I>>(object: I): SignatureDescriptors {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map(e => SignatureDescriptor.fromPartial(e)) || [];
    return message;
  }

};
export interface SignatureDescriptor {
  publicKey: Any;
  data: Data;
  sequence: Long;
}

function createBaseSignatureDescriptor(): SignatureDescriptor {
  return {
    publicKey: undefined,
    data: undefined,
    sequence: Long.UZERO
  };
}

export const SignatureDescriptor = {
  encode(message: SignatureDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.data !== undefined) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor {
    return {
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      data: isSet(object.data) ? SignatureDescriptor_Data.fromJSON(object.data) : undefined,
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: SignatureDescriptor): unknown {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.data !== undefined && (obj.data = message.data ? SignatureDescriptor_Data.toJSON(message.data) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignatureDescriptor>, I>>(object: I): SignatureDescriptor {
    const message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};
export interface SignatureDescriptor_Data {
  single?: Single;
  multi?: Multi;
}

function createBaseSignatureDescriptor_Data(): SignatureDescriptor_Data {
  return {
    single: undefined,
    multi: undefined
  };
}

export const SignatureDescriptor_Data = {
  encode(message: SignatureDescriptor_Data, writer = _m0.Writer.create()): _m0.Writer {
    if (message.single !== undefined) {
      Data_SignatureDescriptor_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }

    if (message.multi !== undefined) {
      Data_SignatureDescriptor_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.single = Data_SignatureDescriptor_Single.decode(reader, reader.uint32());
          break;

        case 2:
          message.multi = Data_SignatureDescriptor_Multi.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor_Data {
    return {
      single: isSet(object.single) ? Data_SignatureDescriptor_Single.fromJSON(object.single) : undefined,
      multi: isSet(object.multi) ? Data_SignatureDescriptor_Multi.fromJSON(object.multi) : undefined
    };
  },

  toJSON(message: SignatureDescriptor_Data): unknown {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single ? Data_SignatureDescriptor_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? Data_SignatureDescriptor_Multi.toJSON(message.multi) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignatureDescriptor_Data>, I>>(object: I): SignatureDescriptor_Data {
    const message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== undefined && object.single !== null ? Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? Multi.fromPartial(object.multi) : undefined;
    return message;
  }

};
export interface Single {
  mode: SignMode;
  signature: Uint8Array;
}

function createBaseSingle(): Single {
  return {
    mode: undefined,
    signature: new Uint8Array()
  };
}

export const Single = {
  encode(message: Single, writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }

    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Single {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mode = (reader.int32() as any);
          break;

        case 2:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Single {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: Single): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Single>, I>>(object: I): Single {
    const message = createBaseSingle();
    message.mode = object.mode ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }

};
export interface Multi {
  bitarray: CompactBitArray;
  signatures: Data[];
}

function createBaseMulti(): Multi {
  return {
    bitarray: undefined,
    signatures: []
  };
}

export const Multi = {
  encode(message: Multi, writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Multi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMulti();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;

        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Multi {
    return {
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor_Data.fromJSON(e)) : []
    };
  },

  toJSON(message: Multi): unknown {
    const obj: any = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Multi>, I>>(object: I): Multi {
    const message = createBaseMulti();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.signatures = object.signatures?.map(e => Data.fromPartial(e)) || [];
    return message;
  }

};