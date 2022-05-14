import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface BitArray {
    bits: Long;
    elems: Long[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BitArray;
    fromJSON(object: any): BitArray;
    toJSON(message: BitArray): unknown;
    fromPartial<I extends {
        bits?: any;
        elems?: any[];
    } & {
        bits?: any;
        elems?: any[] & any[] & Record<Exclude<keyof I["elems"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof BitArray>, never>>(object: I): BitArray;
};
