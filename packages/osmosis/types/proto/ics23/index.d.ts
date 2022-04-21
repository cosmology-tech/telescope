import * as _418 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _418.HashOp;
    hashOpToJSON(object: _418.HashOp): string;
    lengthOpFromJSON(object: any): _418.LengthOp;
    lengthOpToJSON(object: _418.LengthOp): string;
    HashOp: typeof _418.HashOp;
    LengthOp: typeof _418.LengthOp;
    ExistenceProof: {
        encode(message: _418.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.ExistenceProof;
        fromJSON(object: any): _418.ExistenceProof;
        toJSON(message: _418.ExistenceProof): unknown;
        fromPartial<I extends unknown>(object: I): _418.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _418.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.NonExistenceProof;
        fromJSON(object: any): _418.NonExistenceProof;
        toJSON(message: _418.NonExistenceProof): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _418.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _418.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.CommitmentProof;
        fromJSON(object: any): _418.CommitmentProof;
        toJSON(message: _418.CommitmentProof): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): _418.CommitmentProof;
    };
    LeafOp: {
        encode(message: _418.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.LeafOp;
        fromJSON(object: any): _418.LeafOp;
        toJSON(message: _418.LeafOp): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): _418.LeafOp;
    };
    InnerOp: {
        encode(message: _418.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.InnerOp;
        fromJSON(object: any): _418.InnerOp;
        toJSON(message: _418.InnerOp): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): _418.InnerOp;
    };
    ProofSpec: {
        encode(message: _418.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.ProofSpec;
        fromJSON(object: any): _418.ProofSpec;
        toJSON(message: _418.ProofSpec): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): _418.ProofSpec;
    };
    InnerSpec: {
        encode(message: _418.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.InnerSpec;
        fromJSON(object: any): _418.InnerSpec;
        toJSON(message: _418.InnerSpec): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): _418.InnerSpec;
    };
    BatchProof: {
        encode(message: _418.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.BatchProof;
        fromJSON(object: any): _418.BatchProof;
        toJSON(message: _418.BatchProof): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): _418.BatchProof;
    };
    BatchEntry: {
        encode(message: _418.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.BatchEntry;
        fromJSON(object: any): _418.BatchEntry;
        toJSON(message: _418.BatchEntry): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): _418.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _418.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.CompressedBatchProof;
        fromJSON(object: any): _418.CompressedBatchProof;
        toJSON(message: _418.CompressedBatchProof): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): _418.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _418.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.CompressedBatchEntry;
        fromJSON(object: any): _418.CompressedBatchEntry;
        toJSON(message: _418.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends unknown>(object: I_10): _418.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _418.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.CompressedExistenceProof;
        fromJSON(object: any): _418.CompressedExistenceProof;
        toJSON(message: _418.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends unknown>(object: I_11): _418.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _418.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.CompressedNonExistenceProof;
        fromJSON(object: any): _418.CompressedNonExistenceProof;
        toJSON(message: _418.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends unknown>(object: I_12): _418.CompressedNonExistenceProof;
    };
};
