import * as _606 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _606.HashOp;
    hashOpToJSON(object: _606.HashOp): string;
    lengthOpFromJSON(object: any): _606.LengthOp;
    lengthOpToJSON(object: _606.LengthOp): string;
    HashOp: typeof _606.HashOp;
    LengthOp: typeof _606.LengthOp;
    ExistenceProof: {
        encode(message: _606.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.ExistenceProof;
        fromJSON(object: any): _606.ExistenceProof;
        toJSON(message: _606.ExistenceProof): unknown;
        fromPartial<I extends unknown>(object: I): _606.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _606.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.NonExistenceProof;
        fromJSON(object: any): _606.NonExistenceProof;
        toJSON(message: _606.NonExistenceProof): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _606.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _606.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CommitmentProof;
        fromJSON(object: any): _606.CommitmentProof;
        toJSON(message: _606.CommitmentProof): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): _606.CommitmentProof;
    };
    LeafOp: {
        encode(message: _606.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.LeafOp;
        fromJSON(object: any): _606.LeafOp;
        toJSON(message: _606.LeafOp): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): _606.LeafOp;
    };
    InnerOp: {
        encode(message: _606.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.InnerOp;
        fromJSON(object: any): _606.InnerOp;
        toJSON(message: _606.InnerOp): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): _606.InnerOp;
    };
    ProofSpec: {
        encode(message: _606.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.ProofSpec;
        fromJSON(object: any): _606.ProofSpec;
        toJSON(message: _606.ProofSpec): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): _606.ProofSpec;
    };
    InnerSpec: {
        encode(message: _606.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.InnerSpec;
        fromJSON(object: any): _606.InnerSpec;
        toJSON(message: _606.InnerSpec): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): _606.InnerSpec;
    };
    BatchProof: {
        encode(message: _606.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.BatchProof;
        fromJSON(object: any): _606.BatchProof;
        toJSON(message: _606.BatchProof): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): _606.BatchProof;
    };
    BatchEntry: {
        encode(message: _606.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.BatchEntry;
        fromJSON(object: any): _606.BatchEntry;
        toJSON(message: _606.BatchEntry): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): _606.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _606.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedBatchProof;
        fromJSON(object: any): _606.CompressedBatchProof;
        toJSON(message: _606.CompressedBatchProof): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): _606.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _606.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedBatchEntry;
        fromJSON(object: any): _606.CompressedBatchEntry;
        toJSON(message: _606.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends unknown>(object: I_10): _606.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _606.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedExistenceProof;
        fromJSON(object: any): _606.CompressedExistenceProof;
        toJSON(message: _606.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends unknown>(object: I_11): _606.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _606.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.CompressedNonExistenceProof;
        fromJSON(object: any): _606.CompressedNonExistenceProof;
        toJSON(message: _606.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends unknown>(object: I_12): _606.CompressedNonExistenceProof;
    };
};
