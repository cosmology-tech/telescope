import { IdentifiedConnection, ConnectionPaths, Params } from "./connection";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: Long;
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
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        }[];
        clientConnectionPaths?: {
            clientId?: string;
            paths?: string[];
        }[];
        nextConnectionSequence?: any;
        params?: {
            maxExpectedTimePerBlock?: any;
        };
    } & {
        connections?: {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        }[] & ({
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
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
            } & Record<Exclude<keyof I["connections"][number]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connections"][number]["versions"], keyof {
                identifier?: string;
                features?: string[];
            }[]>, never>;
            state?: import("./connection").State;
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
            } & Record<Exclude<keyof I["connections"][number]["counterparty"], keyof import("./connection").Counterparty>, never>;
            delayPeriod?: any;
        } & Record<Exclude<keyof I["connections"][number], keyof IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connections"], keyof {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
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
        nextConnectionSequence?: any;
        params?: {
            maxExpectedTimePerBlock?: any;
        } & {
            maxExpectedTimePerBlock?: any;
        } & Record<Exclude<keyof I["params"], "maxExpectedTimePerBlock">, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
