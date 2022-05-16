import * as _m0 from "protobufjs/minimal";
/** Params defines the claim module's parameters. */
export interface Params {
    airdropStartTime: Date;
    durationUntilDecay: string;
    durationOfDecay: string;
    /** denom of claimable asset */
    claimDenom: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        airdropStartTime?: Date;
        durationUntilDecay?: string;
        durationOfDecay?: string;
        claimDenom?: string;
    } & {
        airdropStartTime?: Date;
        durationUntilDecay?: string;
        durationOfDecay?: string;
        claimDenom?: string;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
