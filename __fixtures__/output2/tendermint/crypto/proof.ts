//@ts-nocheck
/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "tendermint.crypto";
export interface Proof {
  total: Long;
  index: Long;
  leafHash: Uint8Array;
  aunts: Uint8Array[];
}
export interface ValueOp {
  /** Encoded in ProofOp.Key. */
  key: Uint8Array;
  /** To encode in ProofOp.Data */
  proof: Proof;
}
export interface DominoOp {
  key: string;
  input: string;
  output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
  ops: ProofOp[];
}
function createBaseProof(): Proof {
  return {
    total: Long.ZERO,
    index: Long.ZERO,
    leafHash: new Uint8Array(),
    aunts: []
  };
}
export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.total.isZero()) {
      writer.uint32(8).int64(message.total);
    }
    if (!message.index.isZero()) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = (reader.int64() as Long);
          break;
        case 2:
          message.index = (reader.int64() as Long);
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proof {
    const obj = createBaseProof();
    if (isSet(object.total)) obj.total = Long.fromValue(object.total);
    if (isSet(object.index)) obj.index = Long.fromValue(object.index);
    if (isSet(object.leafHash)) obj.leafHash = bytesFromBase64(object.leafHash);
    if (Array.isArray(object?.aunts)) object.aunts.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || Long.ZERO).toString());
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.leafHash !== undefined && (obj.leafHash = base64FromBytes(message.leafHash !== undefined ? message.leafHash : new Uint8Array()));
    if (message.aunts) {
      obj.aunts = message.aunts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    if (object.total !== undefined && object.total !== null) {
      message.total = Long.fromValue(object.total);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromValue(object.index);
    }
    message.leafHash = object.leafHash ?? new Uint8Array();
    message.aunts = object.aunts?.map(e => e) || [];
    return message;
  }
};
function createBaseValueOp(): ValueOp {
  return {
    key: new Uint8Array(),
    proof: Proof.fromPartial({})
  };
}
export const ValueOp = {
  encode(message: ValueOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValueOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValueOp {
    const obj = createBaseValueOp();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.proof)) obj.proof = Proof.fromJSON(object.proof);
    return obj;
  },
  toJSON(message: ValueOp): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValueOp>): ValueOp {
    const message = createBaseValueOp();
    message.key = object.key ?? new Uint8Array();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    return message;
  }
};
function createBaseDominoOp(): DominoOp {
  return {
    key: "",
    input: "",
    output: ""
  };
}
export const DominoOp = {
  encode(message: DominoOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DominoOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DominoOp {
    const obj = createBaseDominoOp();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.input)) obj.input = String(object.input);
    if (isSet(object.output)) obj.output = String(object.output);
    return obj;
  },
  toJSON(message: DominoOp): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object: DeepPartial<DominoOp>): DominoOp {
    const message = createBaseDominoOp();
    message.key = object.key ?? "";
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  }
};
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const ProofOp = {
  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOp {
    const obj = createBaseProofOp();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseProofOps(): ProofOps {
  return {
    ops: []
  };
}
export const ProofOps = {
  encode(message: ProofOps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOps {
    const obj = createBaseProofOps();
    if (Array.isArray(object?.ops)) object.ops.map((e: any) => ProofOp.fromJSON(e));
    return obj;
  },
  toJSON(message: ProofOps): unknown {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toJSON(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
    return message;
  }
};