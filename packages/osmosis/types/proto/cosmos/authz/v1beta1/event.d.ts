import * as _m0 from "protobufjs/minimal";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGrant;
    fromJSON(object: any): EventGrant;
    toJSON(message: EventGrant): unknown;
    fromPartial<I extends {
        msgTypeUrl?: string;
        granter?: string;
        grantee?: string;
    } & {
        msgTypeUrl?: string;
        granter?: string;
        grantee?: string;
    } & Record<Exclude<keyof I, keyof EventGrant>, never>>(object: I): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRevoke;
    fromJSON(object: any): EventRevoke;
    toJSON(message: EventRevoke): unknown;
    fromPartial<I extends {
        msgTypeUrl?: string;
        granter?: string;
        grantee?: string;
    } & {
        msgTypeUrl?: string;
        granter?: string;
        grantee?: string;
    } & Record<Exclude<keyof I, keyof EventRevoke>, never>>(object: I): EventRevoke;
};
