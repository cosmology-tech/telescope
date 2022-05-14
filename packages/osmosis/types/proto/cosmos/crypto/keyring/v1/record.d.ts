import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger;
    /** Multi does not store any information. */
    multi?: Record_Multi;
    /** Offline does not store any information. */
    offline?: Record_Offline;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey: Any;
    privKeyType: string;
}
/** Ledger item */
export interface Record_Ledger {
    path: BIP44Params;
}
/** Multi item */
export interface Record_Multi {
}
/** Offline item */
export interface Record_Offline {
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial<I extends {
        name?: string;
        pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        local?: {
            privKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            privKeyType?: string;
        };
        ledger?: {
            path?: {
                purpose?: number;
                coinType?: number;
                account?: number;
                change?: boolean;
                addressIndex?: number;
            };
        };
        multi?: {};
        offline?: {};
    } & {
        name?: string;
        pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & globalThis.Record<Exclude<keyof I["pubKey"], keyof Any>, never>;
        local?: {
            privKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            privKeyType?: string;
        } & {
            privKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & globalThis.Record<Exclude<keyof I["local"]["privKey"], keyof Any>, never>;
            privKeyType?: string;
        } & globalThis.Record<Exclude<keyof I["local"], keyof Record_Local>, never>;
        ledger?: {
            path?: {
                purpose?: number;
                coinType?: number;
                account?: number;
                change?: boolean;
                addressIndex?: number;
            };
        } & {
            path?: {
                purpose?: number;
                coinType?: number;
                account?: number;
                change?: boolean;
                addressIndex?: number;
            } & {
                purpose?: number;
                coinType?: number;
                account?: number;
                change?: boolean;
                addressIndex?: number;
            } & globalThis.Record<Exclude<keyof I["ledger"]["path"], keyof BIP44Params>, never>;
        } & globalThis.Record<Exclude<keyof I["ledger"], "path">, never>;
        multi?: {} & {} & globalThis.Record<Exclude<keyof I["multi"], never>, never>;
        offline?: {} & {} & globalThis.Record<Exclude<keyof I["offline"], never>, never>;
    } & globalThis.Record<Exclude<keyof I, keyof Record>, never>>(object: I): Record;
};
export declare const Record_Local: {
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromJSON(object: any): Record_Local;
    toJSON(message: Record_Local): unknown;
    fromPartial<I extends {
        privKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        privKeyType?: string;
    } & {
        privKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & globalThis.Record<Exclude<keyof I["privKey"], keyof Any>, never>;
        privKeyType?: string;
    } & globalThis.Record<Exclude<keyof I, keyof Record_Local>, never>>(object: I): Record_Local;
};
export declare const Record_Ledger: {
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromJSON(object: any): Record_Ledger;
    toJSON(message: Record_Ledger): unknown;
    fromPartial<I extends {
        path?: {
            purpose?: number;
            coinType?: number;
            account?: number;
            change?: boolean;
            addressIndex?: number;
        };
    } & {
        path?: {
            purpose?: number;
            coinType?: number;
            account?: number;
            change?: boolean;
            addressIndex?: number;
        } & {
            purpose?: number;
            coinType?: number;
            account?: number;
            change?: boolean;
            addressIndex?: number;
        } & globalThis.Record<Exclude<keyof I["path"], keyof BIP44Params>, never>;
    } & globalThis.Record<Exclude<keyof I, "path">, never>>(object: I): Record_Ledger;
};
export declare const Record_Multi: {
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromJSON(_: any): Record_Multi;
    toJSON(_: Record_Multi): unknown;
    fromPartial<I extends {} & {} & globalThis.Record<Exclude<keyof I, never>, never>>(_: I): Record_Multi;
};
export declare const Record_Offline: {
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromJSON(_: any): Record_Offline;
    toJSON(_: Record_Offline): unknown;
    fromPartial<I extends {} & {} & globalThis.Record<Exclude<keyof I, never>, never>>(_: I): Record_Offline;
};
