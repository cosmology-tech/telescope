import { RegistrationNodeInfo } from "./types";
import { MasterCertificate } from "./msg";
import * as _m0 from "protobufjs/minimal";
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
