import * as _m0 from "protobufjs/minimal";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
export declare const MsgUnjail: {
    encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    fromPartial<I extends {
        validatorAddr?: string;
    } & {
        validatorAddr?: string;
    } & Record<Exclude<keyof I, "validatorAddr">, never>>(object: I): MsgUnjail;
};
export declare const MsgUnjailResponse: {
    encode(_: MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse;
    fromJSON(_: any): MsgUnjailResponse;
    toJSON(_: MsgUnjailResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUnjailResponse;
};
