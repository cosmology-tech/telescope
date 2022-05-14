import * as _m0 from "protobufjs/minimal";
export interface QueryEncryptedSeedRequest {
    pubKey: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
    /** [(gogoproto.nullable) = false]; */
    encryptedSeed: Uint8Array;
}
export declare const QueryEncryptedSeedRequest: {
    encode(message: QueryEncryptedSeedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptedSeedRequest;
    fromJSON(object: any): QueryEncryptedSeedRequest;
    toJSON(message: QueryEncryptedSeedRequest): unknown;
    fromPartial<I extends {
        pubKey?: Uint8Array;
    } & {
        pubKey?: Uint8Array;
    } & Record<Exclude<keyof I, "pubKey">, never>>(object: I): QueryEncryptedSeedRequest;
};
export declare const QueryEncryptedSeedResponse: {
    encode(message: QueryEncryptedSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptedSeedResponse;
    fromJSON(object: any): QueryEncryptedSeedResponse;
    toJSON(message: QueryEncryptedSeedResponse): unknown;
    fromPartial<I extends {
        encryptedSeed?: Uint8Array;
    } & {
        encryptedSeed?: Uint8Array;
    } & Record<Exclude<keyof I, "encryptedSeed">, never>>(object: I): QueryEncryptedSeedResponse;
};
