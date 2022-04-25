import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { GroupSpec } from "../../../akash/deployment/v1beta2/groupspec";
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
    orderId: OrderID;
    state: Order_State;
    spec: GroupSpec;
    createdAt: Long;
}
/** State is an enum which refers to state of order */
export declare enum Order_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - OrderOpen denotes state for order open */
    open = 1,
    /** active - OrderMatched denotes state for order matched */
    active = 2,
    /** closed - OrderClosed denotes state for order lost */
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    fromPartial<I extends unknown>(object: I): OrderID;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial<I extends unknown>(object: I): Order;
};
export declare const OrderFilters: {
    encode(message: OrderFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderFilters;
    fromJSON(object: any): OrderFilters;
    toJSON(message: OrderFilters): unknown;
    fromPartial<I extends unknown>(object: I): OrderFilters;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
