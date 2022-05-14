import { FeeToken } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
    basedenom: string;
    feetokens: FeeToken[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        basedenom?: string;
        feetokens?: {
            denom?: string;
            poolID?: any;
        }[];
    } & {
        basedenom?: string;
        feetokens?: {
            denom?: string;
            poolID?: any;
        }[] & ({
            denom?: string;
            poolID?: any;
        } & {
            denom?: string;
            poolID?: any;
        } & Record<Exclude<keyof I["feetokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feetokens"], keyof {
            denom?: string;
            poolID?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
