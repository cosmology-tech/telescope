import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
    threshold: number;
    publicKeys: Any[];
}
export declare const LegacyAminoPubKey: {
    encode(message: LegacyAminoPubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAminoPubKey;
    fromJSON(object: any): LegacyAminoPubKey;
    toJSON(message: LegacyAminoPubKey): unknown;
    fromPartial<I extends {
        threshold?: number;
        publicKeys?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        threshold?: number;
        publicKeys?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["publicKeys"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["publicKeys"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof LegacyAminoPubKey>, never>>(object: I): LegacyAminoPubKey;
};
