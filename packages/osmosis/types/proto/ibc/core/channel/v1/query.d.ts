import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel: Channel;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination: PageRequest;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination: PageRequest;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** revision number of the consensus state */
    revisionNumber: Long;
    /** revision height of the consensus state */
    revisionHeight: Long;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState: Any;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination: PageRequest;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination: PageRequest;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: Long[];
    /** query block height */
    height: Height;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of acknowledgement sequences */
    packetAckSequences: Long[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: Long[];
    /** query block height */
    height: Height;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    nextSequenceReceive: Long;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export declare const QueryChannelRequest: {
    encode(message: QueryChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest;
    fromJSON(object: any): QueryChannelRequest;
    toJSON(message: QueryChannelRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
    } & {
        portId?: string;
        channelId?: string;
    } & Record<Exclude<keyof I, keyof QueryChannelRequest>, never>>(object: I): QueryChannelRequest;
};
export declare const QueryChannelResponse: {
    encode(message: QueryChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse;
    fromJSON(object: any): QueryChannelResponse;
    toJSON(message: QueryChannelResponse): unknown;
    fromPartial<I extends {
        channel?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
        };
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        channel?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
        } & {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            } & {
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof import("./channel").Counterparty>, never>;
            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
            version?: string;
        } & Record<Exclude<keyof I["channel"], keyof Channel>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryChannelResponse>, never>>(object: I): QueryChannelResponse;
};
export declare const QueryChannelsRequest: {
    encode(message: QueryChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest;
    fromJSON(object: any): QueryChannelsRequest;
    toJSON(message: QueryChannelsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryChannelsRequest;
};
export declare const QueryChannelsResponse: {
    encode(message: QueryChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse;
    fromJSON(object: any): QueryChannelsResponse;
    toJSON(message: QueryChannelsResponse): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        channels?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[] & ({
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        } & {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            } & {
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("./channel").Counterparty>, never>;
            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channels"][number]["connectionHops"], keyof string[]>, never>;
            version?: string;
            portId?: string;
            channelId?: string;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryChannelsResponse>, never>>(object: I): QueryChannelsResponse;
};
export declare const QueryConnectionChannelsRequest: {
    encode(message: QueryConnectionChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest;
    fromJSON(object: any): QueryConnectionChannelsRequest;
    toJSON(message: QueryConnectionChannelsRequest): unknown;
    fromPartial<I extends {
        connection?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        connection?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionChannelsRequest>, never>>(object: I): QueryConnectionChannelsRequest;
};
export declare const QueryConnectionChannelsResponse: {
    encode(message: QueryConnectionChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse;
    fromJSON(object: any): QueryConnectionChannelsResponse;
    toJSON(message: QueryConnectionChannelsResponse): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        channels?: {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[] & ({
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        } & {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            } & {
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("./channel").Counterparty>, never>;
            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channels"][number]["connectionHops"], keyof string[]>, never>;
            version?: string;
            portId?: string;
            channelId?: string;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("./channel").State;
            ordering?: import("./channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionChannelsResponse>, never>>(object: I): QueryConnectionChannelsResponse;
};
export declare const QueryChannelClientStateRequest: {
    encode(message: QueryChannelClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest;
    fromJSON(object: any): QueryChannelClientStateRequest;
    toJSON(message: QueryChannelClientStateRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
    } & {
        portId?: string;
        channelId?: string;
    } & Record<Exclude<keyof I, keyof QueryChannelClientStateRequest>, never>>(object: I): QueryChannelClientStateRequest;
};
export declare const QueryChannelClientStateResponse: {
    encode(message: QueryChannelClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse;
    fromJSON(object: any): QueryChannelClientStateResponse;
    toJSON(message: QueryChannelClientStateResponse): unknown;
    fromPartial<I extends {
        identifiedClientState?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        identifiedClientState?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["identifiedClientState"]["clientState"], keyof Any>, never>;
        } & Record<Exclude<keyof I["identifiedClientState"], keyof IdentifiedClientState>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryChannelClientStateResponse>, never>>(object: I): QueryChannelClientStateResponse;
};
export declare const QueryChannelConsensusStateRequest: {
    encode(message: QueryChannelConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest;
    fromJSON(object: any): QueryChannelConsensusStateRequest;
    toJSON(message: QueryChannelConsensusStateRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
    } & {
        portId?: string;
        channelId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
    } & Record<Exclude<keyof I, keyof QueryChannelConsensusStateRequest>, never>>(object: I): QueryChannelConsensusStateRequest;
};
export declare const QueryChannelConsensusStateResponse: {
    encode(message: QueryChannelConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse;
    fromJSON(object: any): QueryChannelConsensusStateResponse;
    toJSON(message: QueryChannelConsensusStateResponse): unknown;
    fromPartial<I extends {
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        clientId?: string;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["consensusState"], keyof Any>, never>;
        clientId?: string;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryChannelConsensusStateResponse>, never>>(object: I): QueryChannelConsensusStateResponse;
};
export declare const QueryPacketCommitmentRequest: {
    encode(message: QueryPacketCommitmentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest;
    fromJSON(object: any): QueryPacketCommitmentRequest;
    toJSON(message: QueryPacketCommitmentRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentRequest>, never>>(object: I): QueryPacketCommitmentRequest;
};
export declare const QueryPacketCommitmentResponse: {
    encode(message: QueryPacketCommitmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse;
    fromJSON(object: any): QueryPacketCommitmentResponse;
    toJSON(message: QueryPacketCommitmentResponse): unknown;
    fromPartial<I extends {
        commitment?: Uint8Array;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        commitment?: Uint8Array;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentResponse>, never>>(object: I): QueryPacketCommitmentResponse;
};
export declare const QueryPacketCommitmentsRequest: {
    encode(message: QueryPacketCommitmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest;
    fromJSON(object: any): QueryPacketCommitmentsRequest;
    toJSON(message: QueryPacketCommitmentsRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        portId?: string;
        channelId?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentsRequest>, never>>(object: I): QueryPacketCommitmentsRequest;
};
export declare const QueryPacketCommitmentsResponse: {
    encode(message: QueryPacketCommitmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse;
    fromJSON(object: any): QueryPacketCommitmentsResponse;
    toJSON(message: QueryPacketCommitmentsResponse): unknown;
    fromPartial<I extends {
        commitments?: {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        commitments?: {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["commitments"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["commitments"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentsResponse>, never>>(object: I): QueryPacketCommitmentsResponse;
};
export declare const QueryPacketReceiptRequest: {
    encode(message: QueryPacketReceiptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest;
    fromJSON(object: any): QueryPacketReceiptRequest;
    toJSON(message: QueryPacketReceiptRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & Record<Exclude<keyof I, keyof QueryPacketReceiptRequest>, never>>(object: I): QueryPacketReceiptRequest;
};
export declare const QueryPacketReceiptResponse: {
    encode(message: QueryPacketReceiptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse;
    fromJSON(object: any): QueryPacketReceiptResponse;
    toJSON(message: QueryPacketReceiptResponse): unknown;
    fromPartial<I extends {
        received?: boolean;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        received?: boolean;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketReceiptResponse>, never>>(object: I): QueryPacketReceiptResponse;
};
export declare const QueryPacketAcknowledgementRequest: {
    encode(message: QueryPacketAcknowledgementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest;
    fromJSON(object: any): QueryPacketAcknowledgementRequest;
    toJSON(message: QueryPacketAcknowledgementRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & {
        portId?: string;
        channelId?: string;
        sequence?: any;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementRequest>, never>>(object: I): QueryPacketAcknowledgementRequest;
};
export declare const QueryPacketAcknowledgementResponse: {
    encode(message: QueryPacketAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse;
    fromJSON(object: any): QueryPacketAcknowledgementResponse;
    toJSON(message: QueryPacketAcknowledgementResponse): unknown;
    fromPartial<I extends {
        acknowledgement?: Uint8Array;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        acknowledgement?: Uint8Array;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementResponse>, never>>(object: I): QueryPacketAcknowledgementResponse;
};
export declare const QueryPacketAcknowledgementsRequest: {
    encode(message: QueryPacketAcknowledgementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest;
    fromJSON(object: any): QueryPacketAcknowledgementsRequest;
    toJSON(message: QueryPacketAcknowledgementsRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
        packetCommitmentSequences?: any[];
    } & {
        portId?: string;
        channelId?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I["packetCommitmentSequences"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementsRequest>, never>>(object: I): QueryPacketAcknowledgementsRequest;
};
export declare const QueryPacketAcknowledgementsResponse: {
    encode(message: QueryPacketAcknowledgementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse;
    fromJSON(object: any): QueryPacketAcknowledgementsResponse;
    toJSON(message: QueryPacketAcknowledgementsResponse): unknown;
    fromPartial<I extends {
        acknowledgements?: {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        acknowledgements?: {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[] & ({
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        } & {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        } & Record<Exclude<keyof I["acknowledgements"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["acknowledgements"], keyof {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementsResponse>, never>>(object: I): QueryPacketAcknowledgementsResponse;
};
export declare const QueryUnreceivedPacketsRequest: {
    encode(message: QueryUnreceivedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest;
    fromJSON(object: any): QueryUnreceivedPacketsRequest;
    toJSON(message: QueryUnreceivedPacketsRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        packetCommitmentSequences?: any[];
    } & {
        portId?: string;
        channelId?: string;
        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I["packetCommitmentSequences"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedPacketsRequest>, never>>(object: I): QueryUnreceivedPacketsRequest;
};
export declare const QueryUnreceivedPacketsResponse: {
    encode(message: QueryUnreceivedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse;
    fromJSON(object: any): QueryUnreceivedPacketsResponse;
    toJSON(message: QueryUnreceivedPacketsResponse): unknown;
    fromPartial<I extends {
        sequences?: any[];
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        sequences?: any[] & any[] & Record<Exclude<keyof I["sequences"], keyof any[]>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedPacketsResponse>, never>>(object: I): QueryUnreceivedPacketsResponse;
};
export declare const QueryUnreceivedAcksRequest: {
    encode(message: QueryUnreceivedAcksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest;
    fromJSON(object: any): QueryUnreceivedAcksRequest;
    toJSON(message: QueryUnreceivedAcksRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
        packetAckSequences?: any[];
    } & {
        portId?: string;
        channelId?: string;
        packetAckSequences?: any[] & any[] & Record<Exclude<keyof I["packetAckSequences"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedAcksRequest>, never>>(object: I): QueryUnreceivedAcksRequest;
};
export declare const QueryUnreceivedAcksResponse: {
    encode(message: QueryUnreceivedAcksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse;
    fromJSON(object: any): QueryUnreceivedAcksResponse;
    toJSON(message: QueryUnreceivedAcksResponse): unknown;
    fromPartial<I extends {
        sequences?: any[];
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        sequences?: any[] & any[] & Record<Exclude<keyof I["sequences"], keyof any[]>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedAcksResponse>, never>>(object: I): QueryUnreceivedAcksResponse;
};
export declare const QueryNextSequenceReceiveRequest: {
    encode(message: QueryNextSequenceReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest;
    fromJSON(object: any): QueryNextSequenceReceiveRequest;
    toJSON(message: QueryNextSequenceReceiveRequest): unknown;
    fromPartial<I extends {
        portId?: string;
        channelId?: string;
    } & {
        portId?: string;
        channelId?: string;
    } & Record<Exclude<keyof I, keyof QueryNextSequenceReceiveRequest>, never>>(object: I): QueryNextSequenceReceiveRequest;
};
export declare const QueryNextSequenceReceiveResponse: {
    encode(message: QueryNextSequenceReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse;
    fromJSON(object: any): QueryNextSequenceReceiveResponse;
    toJSON(message: QueryNextSequenceReceiveResponse): unknown;
    fromPartial<I extends {
        nextSequenceReceive?: any;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        nextSequenceReceive?: any;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryNextSequenceReceiveResponse>, never>>(object: I): QueryNextSequenceReceiveResponse;
};
