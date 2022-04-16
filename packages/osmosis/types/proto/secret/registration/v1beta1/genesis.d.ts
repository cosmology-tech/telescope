import * as _m0 from "protobufjs/minimal";
import { MasterCertificate } from "../../../secret/registration/v1beta1/msg";
import { RegistrationNodeInfo } from "../../../secret/registration/v1beta1/types";
export interface GenesisState {
    registration: RegistrationNodeInfo[];
    nodeExchMasterCertificate: MasterCertificate;
    ioMasterCertificate: MasterCertificate;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        registration?: {
            certificate?: Uint8Array;
            encryptedSeed?: Uint8Array;
        }[];
        nodeExchMasterCertificate?: {
            bytes?: Uint8Array;
        };
        ioMasterCertificate?: {
            bytes?: Uint8Array;
        };
    } & {
        registration?: {
            certificate?: Uint8Array;
            encryptedSeed?: Uint8Array;
        }[] & ({
            certificate?: Uint8Array;
            encryptedSeed?: Uint8Array;
        } & {
            certificate?: Uint8Array;
            encryptedSeed?: Uint8Array;
        } & Record<Exclude<keyof I["registration"][number], keyof RegistrationNodeInfo>, never>)[] & Record<Exclude<keyof I["registration"], keyof {
            certificate?: Uint8Array;
            encryptedSeed?: Uint8Array;
        }[]>, never>;
        nodeExchMasterCertificate?: {
            bytes?: Uint8Array;
        } & {
            bytes?: Uint8Array;
        } & Record<Exclude<keyof I["nodeExchMasterCertificate"], "bytes">, never>;
        ioMasterCertificate?: {
            bytes?: Uint8Array;
        } & {
            bytes?: Uint8Array;
        } & Record<Exclude<keyof I["ioMasterCertificate"], "bytes">, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
