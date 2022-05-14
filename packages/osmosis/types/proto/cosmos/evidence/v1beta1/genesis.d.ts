import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
    /** evidence defines all the evidence at genesis. */
    evidence: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["evidence"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["evidence"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, "evidence">, never>>(object: I): GenesisState;
};
