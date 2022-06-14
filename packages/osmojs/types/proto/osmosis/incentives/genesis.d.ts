import { Params } from "./params";
import { Gauge } from "./gauge";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module */
    params: Params;
    gauges: Gauge[];
    lockableDurations: string[];
    lastGaugeId: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
