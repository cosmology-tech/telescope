import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import * as _m0 from "protobufjs/minimal";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial<I extends {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgSend>, never>>(object: I): MsgSend;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSendResponse;
};
export declare const MsgMultiSend: {
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial<I extends {
        inputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        outputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        inputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["inputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["inputs"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["inputs"][number], keyof Input>, never>)[] & Record<Exclude<keyof I["inputs"], keyof {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        outputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["outputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["outputs"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["outputs"][number], keyof Output>, never>)[] & Record<Exclude<keyof I["outputs"], keyof {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgMultiSend>, never>>(object: I): MsgMultiSend;
};
export declare const MsgMultiSendResponse: {
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMultiSendResponse;
};
