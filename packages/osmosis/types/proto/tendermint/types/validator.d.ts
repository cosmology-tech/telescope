import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator;
    totalVotingPower: Long;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: Long;
    proposerPriority: Long;
}
export interface SimpleValidator {
    pubKey: PublicKey;
    votingPower: Long;
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
            votingPower?: any;
            proposerPriority?: any;
        }[];
        proposer?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
        };
        totalVotingPower?: any;
    } & {
        validators?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
        }[] & ({
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
        } & {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>;
            votingPower?: any;
            proposerPriority?: any;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
        }[]>, never>;
        proposer?: {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
        } & {
            address?: Uint8Array;
            pubKey?: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof PublicKey>, never>;
            votingPower?: any;
            proposerPriority?: any;
        } & Record<Exclude<keyof I["proposer"], keyof Validator>, never>;
        totalVotingPower?: any;
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
        votingPower?: any;
        proposerPriority?: any;
    } & {
        address?: Uint8Array;
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>;
        votingPower?: any;
        proposerPriority?: any;
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
        votingPower?: any;
    } & {
        pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>;
        votingPower?: any;
    } & Record<Exclude<keyof I, keyof SimpleValidator>, never>>(object: I): SimpleValidator;
};
