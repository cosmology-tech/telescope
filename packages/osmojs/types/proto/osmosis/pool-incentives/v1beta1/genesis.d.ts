import { Params, DistrInfo } from "./incentives";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    lockableDurations: string[];
    distrInfo?: DistrInfo;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            mintedDenom?: string;
        };
        lockableDurations?: string[];
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[];
        };
    } & {
        params?: {
            mintedDenom?: string;
        } & {
            mintedDenom?: string;
        } & Record<Exclude<keyof I["params"], "mintedDenom">, never>;
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[];
        } & {
            totalWeight?: string;
            records?: {
                gaugeId?: any;
                weight?: string;
            }[] & ({
                gaugeId?: any;
                weight?: string;
            } & {
                gaugeId?: any;
                weight?: string;
            } & Record<Exclude<keyof I["distrInfo"]["records"][number], keyof import("./incentives").DistrRecord>, never>)[] & Record<Exclude<keyof I["distrInfo"]["records"], keyof {
                gaugeId?: any;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["distrInfo"], keyof DistrInfo>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
