import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the incentives module */
export interface Params {
    /** distribution epoch identifier */
    distrEpochIdentifier: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        distrEpochIdentifier?: string;
    } & {
        distrEpochIdentifier?: string;
    } & Record<Exclude<keyof I, "distrEpochIdentifier">, never>>(object: I): Params;
};
