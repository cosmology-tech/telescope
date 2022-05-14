import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** Class defines the class of the nft type. */
export interface Class {
    /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
    id: string;
    /** name defines the human-readable name of the NFT classification. Optional */
    name: string;
    /** symbol is an abbreviated name for nft classification. Optional */
    symbol: string;
    /** description is a brief description of nft classification. Optional */
    description: string;
    /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri. Optional */
    uriHash: string;
    /** data is the app specific metadata of the NFT class. Optional */
    data: Any;
}
/** NFT defines the NFT. */
export interface NFT {
    /** class_id associated with the NFT, similar to the contract address of ERC721 */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
    /** uri for the NFT metadata stored off chain */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri */
    uriHash: string;
    /** data is an app specific data of the NFT. Optional */
    data: Any;
}
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["data"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof Class>, never>>(object: I): Class;
};
export declare const NFT: {
    encode(message: NFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFT;
    fromJSON(object: any): NFT;
    toJSON(message: NFT): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["data"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof NFT>, never>>(object: I): NFT;
};
