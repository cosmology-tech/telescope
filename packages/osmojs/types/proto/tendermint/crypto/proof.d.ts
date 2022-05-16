import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial<I extends {
        total?: any;
        index?: any;
        leafHash?: Uint8Array;
        aunts?: Uint8Array[];
    } & {
        total?: any;
        index?: any;
        leafHash?: Uint8Array;
        aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, keyof Proof>, never>>(object: I): Proof;
};
export declare const ValueOp: {
    encode(message: ValueOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValueOp;
    fromJSON(object: any): ValueOp;
    toJSON(message: ValueOp): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        proof?: {
            total?: any;
            index?: any;
            leafHash?: Uint8Array;
            aunts?: Uint8Array[];
        };
    } & {
        key?: Uint8Array;
        proof?: {
            total?: any;
            index?: any;
            leafHash?: Uint8Array;
            aunts?: Uint8Array[];
        } & {
            total?: any;
            index?: any;
            leafHash?: Uint8Array;
            aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>;
    } & Record<Exclude<keyof I, keyof ValueOp>, never>>(object: I): ValueOp;
};
export declare const DominoOp: {
    encode(message: DominoOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DominoOp;
    fromJSON(object: any): DominoOp;
    toJSON(message: DominoOp): unknown;
    fromPartial<I extends {
        key?: string;
        input?: string;
        output?: string;
    } & {
        key?: string;
        input?: string;
        output?: string;
    } & Record<Exclude<keyof I, keyof DominoOp>, never>>(object: I): DominoOp;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial<I extends {
        type?: string;
        key?: Uint8Array;
        data?: Uint8Array;
    } & {
        type?: string;
        key?: Uint8Array;
        data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ProofOp>, never>>(object: I): ProofOp;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    fromPartial<I extends {
        ops?: {
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
        }[];
    } & {
        ops?: {
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
        }[] & ({
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
        } & {
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["ops"][number], keyof ProofOp>, never>)[] & Record<Exclude<keyof I["ops"], keyof {
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, "ops">, never>>(object: I): ProofOps;
};
