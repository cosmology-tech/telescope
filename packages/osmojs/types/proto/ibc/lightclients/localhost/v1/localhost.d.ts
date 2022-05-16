import { Height } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
    /** self chain ID */
    chainId: string;
    /** self latest block height */
    height: Height;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        chainId?: string;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        chainId?: string;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
};
