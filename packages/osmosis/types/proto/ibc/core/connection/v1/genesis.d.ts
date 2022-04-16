import * as _m0 from "protobufjs/minimal";
import { Params, IdentifiedConnection, ConnectionPaths } from "../../../../ibc/core/connection/v1/connection";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: string;
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        connections?: {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../../ibc/core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: string;
        }[];
        clientConnectionPaths?: {
            clientId?: string;
            paths?: string[];
        }[];
        nextConnectionSequence?: string;
        params?: {
            maxExpectedTimePerBlock?: string;
        };
    } & {
        connections?: {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../../ibc/core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: string;
        }[] & ({
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../../ibc/core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: string;
        } & {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[] & ({
                identifier?: string;
                features?: string[];
            } & {
                identifier?: string;
                features?: string[] & string[] & Record<Exclude<keyof I["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["connections"][number]["versions"][number], keyof import("../../../../ibc/core/connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connections"][number]["versions"], keyof {
                identifier?: string;
                features?: string[];
            }[]>, never>;
            state?: import("../../../../ibc/core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            } & {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                } & {
                    keyPrefix?: Uint8Array;
                } & Record<Exclude<keyof I["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
            } & Record<Exclude<keyof I["connections"][number]["counterparty"], keyof import("../../../../ibc/core/connection/v1/connection").Counterparty>, never>;
            delayPeriod?: string;
        } & Record<Exclude<keyof I["connections"][number], keyof IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connections"], keyof {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../../ibc/core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: string;
        }[]>, never>;
        clientConnectionPaths?: {
            clientId?: string;
            paths?: string[];
        }[] & ({
            clientId?: string;
            paths?: string[];
        } & {
            clientId?: string;
            paths?: string[] & string[] & Record<Exclude<keyof I["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["clientConnectionPaths"][number], keyof ConnectionPaths>, never>)[] & Record<Exclude<keyof I["clientConnectionPaths"], keyof {
            clientId?: string;
            paths?: string[];
        }[]>, never>;
        nextConnectionSequence?: string;
        params?: {
            maxExpectedTimePerBlock?: string;
        } & {
            maxExpectedTimePerBlock?: string;
        } & Record<Exclude<keyof I["params"], "maxExpectedTimePerBlock">, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
