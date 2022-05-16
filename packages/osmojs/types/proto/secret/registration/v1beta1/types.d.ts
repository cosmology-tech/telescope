import * as _m0 from "protobufjs/minimal";
export interface SeedConfig {
    masterCert: string;
    encryptedKey: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encryptedSeed: Uint8Array;
}
export declare const SeedConfig: {
    encode(message: SeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig;
    fromJSON(object: any): SeedConfig;
    toJSON(message: SeedConfig): unknown;
    fromPartial<I extends {
        masterCert?: string;
        encryptedKey?: string;
    } & {
        masterCert?: string;
        encryptedKey?: string;
    } & Record<Exclude<keyof I, keyof SeedConfig>, never>>(object: I): SeedConfig;
};
export declare const RegistrationNodeInfo: {
    encode(message: RegistrationNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo;
    fromJSON(object: any): RegistrationNodeInfo;
    toJSON(message: RegistrationNodeInfo): unknown;
    fromPartial<I extends {
        certificate?: Uint8Array;
        encryptedSeed?: Uint8Array;
    } & {
        certificate?: Uint8Array;
        encryptedSeed?: Uint8Array;
    } & Record<Exclude<keyof I, keyof RegistrationNodeInfo>, never>>(object: I): RegistrationNodeInfo;
};
