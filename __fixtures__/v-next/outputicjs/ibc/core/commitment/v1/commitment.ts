import { CommitmentProof } from "../../../../confio/proofs";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
  hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
  keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
  keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
  proofs: CommitmentProof[];
}
function createBaseMerkleRoot(): MerkleRoot {
  return {
    hash: new Uint8Array()
  };
}
export const MerkleRoot = {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
  aminoType: "cosmos-sdk/MerkleRoot",
  encode(message: MerkleRoot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleRoot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseMerklePrefix(): MerklePrefix {
  return {
    keyPrefix: new Uint8Array()
  };
}
export const MerklePrefix = {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
  aminoType: "cosmos-sdk/MerklePrefix",
  encode(message: MerklePrefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerklePrefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix {
    const message = createBaseMerklePrefix();
    message.keyPrefix = object.keyPrefix ?? new Uint8Array();
    return message;
  }
};
function createBaseMerklePath(): MerklePath {
  return {
    keyPath: []
  };
}
export const MerklePath = {
  typeUrl: "/ibc.core.commitment.v1.MerklePath",
  aminoType: "cosmos-sdk/MerklePath",
  encode(message: MerklePath, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map(e => e) || [];
    return message;
  }
};
function createBaseMerkleProof(): MerkleProof {
  return {
    proofs: []
  };
}
export const MerkleProof = {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof",
  aminoType: "cosmos-sdk/MerkleProof",
  encode(message: MerkleProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proofs) {
      CommitmentProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
    return message;
  }
};