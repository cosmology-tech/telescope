import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token: Coin;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Height;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
}
export declare const MsgTransfer: {
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer;
    fromJSON(object: any): MsgTransfer;
    toJSON(message: MsgTransfer): unknown;
    fromPartial<I extends {
        sourcePort?: string;
        sourceChannel?: string;
        token?: {
            denom?: string;
            amount?: string;
        };
        sender?: string;
        receiver?: string;
        timeoutHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
        timeoutTimestamp?: any;
    } & {
        sourcePort?: string;
        sourceChannel?: string;
        token?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["token"], keyof Coin>, never>;
        sender?: string;
        receiver?: string;
        timeoutHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["timeoutHeight"], keyof Height>, never>;
        timeoutTimestamp?: any;
    } & Record<Exclude<keyof I, keyof MsgTransfer>, never>>(object: I): MsgTransfer;
};
export declare const MsgTransferResponse: {
    encode(_: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse;
    fromJSON(_: any): MsgTransferResponse;
    toJSON(_: MsgTransferResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgTransferResponse;
};
