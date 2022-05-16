import * as _m0 from "protobufjs/minimal";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export declare const PublicKey: {
    encode(message: PublicKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicKey;
    fromJSON(object: any): PublicKey;
    toJSON(message: PublicKey): unknown;
    fromPartial<I extends {
        ed25519?: Uint8Array;
        secp256k1?: Uint8Array;
    } & {
        ed25519?: Uint8Array;
        secp256k1?: Uint8Array;
    } & Record<Exclude<keyof I, keyof PublicKey>, never>>(object: I): PublicKey;
};
