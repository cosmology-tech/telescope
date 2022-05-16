import { DenomTrace, Params } from "./transfer";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        portId?: string;
        denomTraces?: {
            path?: string;
            baseDenom?: string;
        }[];
        params?: {
            sendEnabled?: boolean;
            receiveEnabled?: boolean;
        };
    } & {
        portId?: string;
        denomTraces?: {
            path?: string;
            baseDenom?: string;
        }[] & ({
            path?: string;
            baseDenom?: string;
        } & {
            path?: string;
            baseDenom?: string;
        } & Record<Exclude<keyof I["denomTraces"][number], keyof DenomTrace>, never>)[] & Record<Exclude<keyof I["denomTraces"], keyof {
            path?: string;
            baseDenom?: string;
        }[]>, never>;
        params?: {
            sendEnabled?: boolean;
            receiveEnabled?: boolean;
        } & {
            sendEnabled?: boolean;
            receiveEnabled?: boolean;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
