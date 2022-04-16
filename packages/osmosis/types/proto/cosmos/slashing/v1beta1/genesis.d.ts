import * as _m0 from "protobufjs/minimal";
import { Params, ValidatorSigningInfo } from "../../../cosmos/slashing/v1beta1/slashing";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlocks[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validatorSigningInfo: ValidatorSigningInfo;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
    /** address is the validator address. */
    address: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missedBlocks: MissedBlock[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
    /** index is the height at which the block was missed. */
    index: string;
    /** missed is the missed status. */
    missed: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            signedBlocksWindow?: string;
            minSignedPerWindow?: Uint8Array;
            downtimeJailDuration?: string;
            slashFractionDoubleSign?: Uint8Array;
            slashFractionDowntime?: Uint8Array;
        };
        signingInfos?: {
            address?: string;
            validatorSigningInfo?: {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            };
        }[];
        missedBlocks?: {
            address?: string;
            missedBlocks?: {
                index?: string;
                missed?: boolean;
            }[];
        }[];
    } & {
        params?: {
            signedBlocksWindow?: string;
            minSignedPerWindow?: Uint8Array;
            downtimeJailDuration?: string;
            slashFractionDoubleSign?: Uint8Array;
            slashFractionDowntime?: Uint8Array;
        } & {
            signedBlocksWindow?: string;
            minSignedPerWindow?: Uint8Array;
            downtimeJailDuration?: string;
            slashFractionDoubleSign?: Uint8Array;
            slashFractionDowntime?: Uint8Array;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        signingInfos?: {
            address?: string;
            validatorSigningInfo?: {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            };
        }[] & ({
            address?: string;
            validatorSigningInfo?: {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            };
        } & {
            address?: string;
            validatorSigningInfo?: {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            } & {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            } & Record<Exclude<keyof I["signingInfos"][number]["validatorSigningInfo"], keyof ValidatorSigningInfo>, never>;
        } & Record<Exclude<keyof I["signingInfos"][number], keyof SigningInfo>, never>)[] & Record<Exclude<keyof I["signingInfos"], keyof {
            address?: string;
            validatorSigningInfo?: {
                address?: string;
                startHeight?: string;
                indexOffset?: string;
                jailedUntil?: Date;
                tombstoned?: boolean;
                missedBlocksCounter?: string;
            };
        }[]>, never>;
        missedBlocks?: {
            address?: string;
            missedBlocks?: {
                index?: string;
                missed?: boolean;
            }[];
        }[] & ({
            address?: string;
            missedBlocks?: {
                index?: string;
                missed?: boolean;
            }[];
        } & {
            address?: string;
            missedBlocks?: {
                index?: string;
                missed?: boolean;
            }[] & ({
                index?: string;
                missed?: boolean;
            } & {
                index?: string;
                missed?: boolean;
            } & Record<Exclude<keyof I["missedBlocks"][number]["missedBlocks"][number], keyof MissedBlock>, never>)[] & Record<Exclude<keyof I["missedBlocks"][number]["missedBlocks"], keyof {
                index?: string;
                missed?: boolean;
            }[]>, never>;
        } & Record<Exclude<keyof I["missedBlocks"][number], keyof ValidatorMissedBlocks>, never>)[] & Record<Exclude<keyof I["missedBlocks"], keyof {
            address?: string;
            missedBlocks?: {
                index?: string;
                missed?: boolean;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const SigningInfo: {
    encode(message: SigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo;
    fromJSON(object: any): SigningInfo;
    toJSON(message: SigningInfo): unknown;
    fromPartial<I extends {
        address?: string;
        validatorSigningInfo?: {
            address?: string;
            startHeight?: string;
            indexOffset?: string;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: string;
        };
    } & {
        address?: string;
        validatorSigningInfo?: {
            address?: string;
            startHeight?: string;
            indexOffset?: string;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: string;
        } & {
            address?: string;
            startHeight?: string;
            indexOffset?: string;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: string;
        } & Record<Exclude<keyof I["validatorSigningInfo"], keyof ValidatorSigningInfo>, never>;
    } & Record<Exclude<keyof I, keyof SigningInfo>, never>>(object: I): SigningInfo;
};
export declare const ValidatorMissedBlocks: {
    encode(message: ValidatorMissedBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks;
    fromJSON(object: any): ValidatorMissedBlocks;
    toJSON(message: ValidatorMissedBlocks): unknown;
    fromPartial<I extends {
        address?: string;
        missedBlocks?: {
            index?: string;
            missed?: boolean;
        }[];
    } & {
        address?: string;
        missedBlocks?: {
            index?: string;
            missed?: boolean;
        }[] & ({
            index?: string;
            missed?: boolean;
        } & {
            index?: string;
            missed?: boolean;
        } & Record<Exclude<keyof I["missedBlocks"][number], keyof MissedBlock>, never>)[] & Record<Exclude<keyof I["missedBlocks"], keyof {
            index?: string;
            missed?: boolean;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ValidatorMissedBlocks>, never>>(object: I): ValidatorMissedBlocks;
};
export declare const MissedBlock: {
    encode(message: MissedBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock;
    fromJSON(object: any): MissedBlock;
    toJSON(message: MissedBlock): unknown;
    fromPartial<I extends {
        index?: string;
        missed?: boolean;
    } & {
        index?: string;
        missed?: boolean;
    } & Record<Exclude<keyof I, keyof MissedBlock>, never>>(object: I): MissedBlock;
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
