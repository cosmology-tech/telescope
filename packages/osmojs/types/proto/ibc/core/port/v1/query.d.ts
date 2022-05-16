import { Order, Counterparty } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
    /** port unique identifier */
    portId: string;
    /** connection unique identifier */
    connectionId: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty: Counterparty;
    /** proposed version */
    proposedVersion: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
    /** port id associated with the request identifiers */
    portId: string;
    /** supported app version */
    version: string;
}
export declare const QueryAppVersionRequest: {
    encode(message: QueryAppVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionRequest;
    fromJSON(object: any): QueryAppVersionRequest;
    toJSON(message: QueryAppVersionRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        connectionId?: string;
        ordering?: Order;
        counterparty?: {
            portId?: string;
            channelId?: string;
        };
        proposedVersion?: string;
    } & {
        portId?: string;
        connectionId?: string;
        ordering?: Order;
        counterparty?: {
            portId?: string;
            channelId?: string;
        } & {
            portId?: string;
            channelId?: string;
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>;
        proposedVersion?: string;
    } & Record<Exclude<keyof I, keyof QueryAppVersionRequest>, never>>(object: I): QueryAppVersionRequest;
};
export declare const QueryAppVersionResponse: {
    encode(message: QueryAppVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionResponse;
    fromJSON(object: any): QueryAppVersionResponse;
    toJSON(message: QueryAppVersionResponse): unknown;
    fromPartial<I extends {
        portId?: string;
        version?: string;
    } & {
        portId?: string;
        version?: string;
    } & Record<Exclude<keyof I, keyof QueryAppVersionResponse>, never>>(object: I): QueryAppVersionResponse;
};
