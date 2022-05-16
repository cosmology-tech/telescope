import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    height: Long;
    time: Date;
    power: Long;
    consensusAddress: string;
}
export declare const Equivocation: {
    encode(message: Equivocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation;
    fromJSON(object: any): Equivocation;
    toJSON(message: Equivocation): unknown;
    fromPartial<I extends {
        height?: any;
        time?: Date;
        power?: any;
        consensusAddress?: string;
    } & {
        height?: any;
        time?: Date;
        power?: any;
        consensusAddress?: string;
    } & Record<Exclude<keyof I, keyof Equivocation>, never>>(object: I): Equivocation;
};
