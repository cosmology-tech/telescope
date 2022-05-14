import { Grant } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
    allowances: Grant[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
    } & {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["allowances"][number]["allowance"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["allowances"][number], keyof Grant>, never>)[] & Record<Exclude<keyof I["allowances"], keyof {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "allowances">, never>>(object: I): GenesisState;
};
