import { Params } from "./auth";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            maxMemoCharacters?: any;
            txSigLimit?: any;
            txSizeCostPerByte?: any;
            sigVerifyCostEd25519?: any;
            sigVerifyCostSecp256k1?: any;
        };
        accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        params?: {
            maxMemoCharacters?: any;
            txSigLimit?: any;
            txSizeCostPerByte?: any;
            sigVerifyCostEd25519?: any;
            sigVerifyCostSecp256k1?: any;
        } & {
            maxMemoCharacters?: any;
            txSigLimit?: any;
            txSizeCostPerByte?: any;
            sigVerifyCostEd25519?: any;
            sigVerifyCostSecp256k1?: any;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["accounts"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
