import { GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        authorization?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[];
    } & {
        authorization?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[] & ({
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        } & {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["authorization"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>;
            expiration?: Date;
        } & Record<Exclude<keyof I["authorization"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["authorization"], keyof {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[]>, never>;
    } & Record<Exclude<keyof I, "authorization">, never>>(object: I): GenesisState;
};
