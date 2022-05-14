import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the superfluid module */
export interface Params {
    /**
     * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%
     */
    minimumRiskFactor: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        minimumRiskFactor?: string;
    } & {
        minimumRiskFactor?: string;
    } & Record<Exclude<keyof I, "minimumRiskFactor">, never>>(object: I): Params;
};
