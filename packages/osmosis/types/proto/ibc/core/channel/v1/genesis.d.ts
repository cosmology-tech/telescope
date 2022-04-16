import * as _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "../../../../ibc/core/channel/v1/channel";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
    channels: IdentifiedChannel[];
    acknowledgements: PacketState[];
    commitments: PacketState[];
    receipts: PacketState[];
    sendSequences: PacketSequence[];
    recvSequences: PacketSequence[];
    ackSequences: PacketSequence[];
    /** the sequence for the next generated channel identifier */
    nextChannelSequence: string;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
    portId: string;
    channelId: string;
    sequence: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("../../../../ibc/core/channel/v1/channel").State;
            ordering?: import("../../../../ibc/core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[];
        acknowledgements?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[];
        commitments?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[];
        receipts?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[];
        sendSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[];
        recvSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[];
        ackSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[];
        nextChannelSequence?: string;
    } & {
        channels?: {
            state?: import("../../../../ibc/core/channel/v1/channel").State;
            ordering?: import("../../../../ibc/core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[] & ({
            state?: import("../../../../ibc/core/channel/v1/channel").State;
            ordering?: import("../../../../ibc/core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        } & {
            state?: import("../../../../ibc/core/channel/v1/channel").State;
            ordering?: import("../../../../ibc/core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            } & {
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("../../../../ibc/core/channel/v1/channel").Counterparty>, never>;
            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channels"][number]["connectionHops"], keyof string[]>, never>;
            version?: string;
            portId?: string;
            channelId?: string;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("../../../../ibc/core/channel/v1/channel").State;
            ordering?: import("../../../../ibc/core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[]>, never>;
        acknowledgements?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["acknowledgements"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["acknowledgements"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[]>, never>;
        commitments?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["commitments"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["commitments"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[]>, never>;
        receipts?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["receipts"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["receipts"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
            data?: Uint8Array;
        }[]>, never>;
        sendSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & Record<Exclude<keyof I["sendSequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["sendSequences"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[]>, never>;
        recvSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & Record<Exclude<keyof I["recvSequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["recvSequences"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[]>, never>;
        ackSequences?: {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: string;
        } & Record<Exclude<keyof I["ackSequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["ackSequences"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: string;
        }[]>, never>;
        nextChannelSequence?: string;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const PacketSequence: {
    encode(message: PacketSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence;
    fromJSON(object: any): PacketSequence;
    toJSON(message: PacketSequence): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        sequence?: string;
    } & {
        portId?: string;
        channelId?: string;
        sequence?: string;
    } & Record<Exclude<keyof I, keyof PacketSequence>, never>>(object: I): PacketSequence;
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
