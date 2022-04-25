import * as _652 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _652.HashOp;
    hashOpToJSON(object: _652.HashOp): string;
    lengthOpFromJSON(object: any): _652.LengthOp;
    lengthOpToJSON(object: _652.LengthOp): string;
    HashOp: typeof _652.HashOp;
    LengthOp: typeof _652.LengthOp;
    ExistenceProof: {
        encode(message: _652.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.ExistenceProof;
        fromJSON(object: any): _652.ExistenceProof;
        toJSON(message: _652.ExistenceProof): unknown;
        fromPartial<I extends unknown>(object: I): _652.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _652.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.NonExistenceProof;
        fromJSON(object: any): _652.NonExistenceProof;
        toJSON(message: _652.NonExistenceProof): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _652.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _652.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.CommitmentProof;
        fromJSON(object: any): _652.CommitmentProof;
        toJSON(message: _652.CommitmentProof): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): _652.CommitmentProof;
    };
    LeafOp: {
        encode(message: _652.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.LeafOp;
        fromJSON(object: any): _652.LeafOp;
        toJSON(message: _652.LeafOp): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): _652.LeafOp;
    };
    InnerOp: {
        encode(message: _652.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.InnerOp;
        fromJSON(object: any): _652.InnerOp;
        toJSON(message: _652.InnerOp): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): _652.InnerOp;
    };
    ProofSpec: {
        encode(message: _652.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.ProofSpec;
        fromJSON(object: any): _652.ProofSpec;
        toJSON(message: _652.ProofSpec): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): _652.ProofSpec;
    };
    InnerSpec: {
        encode(message: _652.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.InnerSpec;
        fromJSON(object: any): _652.InnerSpec;
        toJSON(message: _652.InnerSpec): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): _652.InnerSpec;
    };
    BatchProof: {
        encode(message: _652.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BatchProof;
        fromJSON(object: any): _652.BatchProof;
        toJSON(message: _652.BatchProof): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): _652.BatchProof;
    };
    BatchEntry: {
        encode(message: _652.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BatchEntry;
        fromJSON(object: any): _652.BatchEntry;
        toJSON(message: _652.BatchEntry): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): _652.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _652.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.CompressedBatchProof;
        fromJSON(object: any): _652.CompressedBatchProof;
        toJSON(message: _652.CompressedBatchProof): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): _652.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _652.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.CompressedBatchEntry;
        fromJSON(object: any): _652.CompressedBatchEntry;
        toJSON(message: _652.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends unknown>(object: I_10): _652.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _652.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.CompressedExistenceProof;
        fromJSON(object: any): _652.CompressedExistenceProof;
        toJSON(message: _652.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends unknown>(object: I_11): _652.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _652.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.CompressedNonExistenceProof;
        fromJSON(object: any): _652.CompressedNonExistenceProof;
        toJSON(message: _652.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends unknown>(object: I_12): _652.CompressedNonExistenceProof;
    };
};
