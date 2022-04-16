import * as _m0 from "protobufjs/minimal";
import { Class, NFT } from "../../../cosmos/nft/v1beta1/nft";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        entries?: {
            owner?: string;
            nfts?: {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[];
    } & {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["classes"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["classes"][number], keyof Class>, never>)[] & Record<Exclude<keyof I["classes"], keyof {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        entries?: {
            owner?: string;
            nfts?: {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[] & ({
            owner?: string;
            nfts?: {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        } & {
            owner?: string;
            nfts?: {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["entries"][number]["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["entries"][number]["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["entries"][number]["nfts"], keyof {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["entries"][number], keyof Entry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            owner?: string;
            nfts?: {
                classId?: string;
                id?: string;
                uri?: string;
                uriHash?: string;
                data?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    fromPartial<I extends {
        owner?: string;
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
    } & {
        owner?: string;
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["nfts"], keyof {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Entry>, never>>(object: I): Entry;
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
