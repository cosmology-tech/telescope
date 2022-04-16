import * as _m0 from "protobufjs/minimal";
import { PublicKey } from "../../tendermint/crypto/keys";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator;
    totalVotingPower: string;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: string;
    proposerPriority: string;
}
export interface SimpleValidator {
    pubKey: PublicKey;
    votingPower: string;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial<I extends {
        validators?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        }[];
        proposer?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        };
        totalVotingPower?: string;
    } & {
        validators?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        }[] & ({
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        } & {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>;
            votingPower?: string;
            proposerPriority?: string;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        }[]>, never>;
        proposer?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: string;
            proposerPriority?: string;
        } & {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof PublicKey>, never>;
            votingPower?: string;
            proposerPriority?: string;
        } & Record<Exclude<keyof I["proposer"], keyof Validator>, never>;
        totalVotingPower?: string;
    } & Record<Exclude<keyof I, keyof ValidatorSet>, never>>(object: I): ValidatorSet;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        };
        votingPower?: string;
        proposerPriority?: string;
    } & {
        address?: Uint8Array;
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>;
        votingPower?: string;
        proposerPriority?: string;
    } & Record<Exclude<keyof I, keyof Validator>, never>>(object: I): Validator;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator;
    fromJSON(object: any): SimpleValidator;
    toJSON(message: SimpleValidator): unknown;
    fromPartial<I extends {
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        };
        votingPower?: string;
    } & {
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>;
        votingPower?: string;
    } & Record<Exclude<keyof I, keyof SimpleValidator>, never>>(object: I): SimpleValidator;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
