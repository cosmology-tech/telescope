import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export declare enum DataType {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DATA_TYPE_CLIENT_STATE = 1,
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DATA_TYPE_CONSENSUS_STATE = 2,
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DATA_TYPE_CONNECTION_STATE = 3,
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DATA_TYPE_CHANNEL_STATE = 4,
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DATA_TYPE_PACKET_COMMITMENT = 5,
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
    /** DATA_TYPE_HEADER - Data type for header verification */
    DATA_TYPE_HEADER = 9,
    UNRECOGNIZED = -1
}
export declare function dataTypeFromJSON(object: any): DataType;
export declare function dataTypeToJSON(object: DataType): string;
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
    /** latest sequence of the client state */
    sequence: Long;
    /** frozen sequence of the solo machine */
    frozenSequence: Long;
    consensusState: ConsensusState;
    /**
     * when set to true, will allow governance to update a solo machine client.
     * The client will be unfrozen if it is frozen.
     */
    allowUpdateAfterProposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
    /** public key of the solo machine */
    publicKey: Any;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: Long;
}
/** Header defines a solo machine consensus header */
export interface Header {
    /** sequence to update solo machine public key at */
    sequence: Long;
    timestamp: Long;
    signature: Uint8Array;
    newPublicKey: Any;
    newDiversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
    clientId: string;
    sequence: Long;
    signatureOne: SignatureAndData;
    signatureTwo: SignatureAndData;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
    signature: Uint8Array;
    dataType: DataType;
    data: Uint8Array;
    timestamp: Long;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
    signatureData: Uint8Array;
    timestamp: Long;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
    sequence: Long;
    timestamp: Long;
    diversifier: string;
    /** type of the data used */
    dataType: DataType;
    /** marshaled data */
    data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
    /** header public key */
    newPubKey: Any;
    /** header diversifier */
    newDiversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
    path: Uint8Array;
    clientState: Any;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
    path: Uint8Array;
    consensusState: Any;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
    path: Uint8Array;
    connection: ConnectionEnd;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
    path: Uint8Array;
    channel: Channel;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
    path: Uint8Array;
    commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
    path: Uint8Array;
    acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
    path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
    path: Uint8Array;
    nextSeqRecv: Long;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        sequence?: any;
        frozenSequence?: any;
        consensusState?: {
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            diversifier?: string;
            timestamp?: any;
        };
        allowUpdateAfterProposal?: boolean;
    } & {
        sequence?: any;
        frozenSequence?: any;
        consensusState?: {
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            diversifier?: string;
            timestamp?: any;
        } & {
            publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof Any>, never>;
            diversifier?: string;
            timestamp?: any;
        } & Record<Exclude<keyof I["consensusState"], keyof ConsensusState>, never>;
        allowUpdateAfterProposal?: boolean;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial<I extends {
        publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        diversifier?: string;
        timestamp?: any;
    } & {
        publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["publicKey"], keyof Any>, never>;
        diversifier?: string;
        timestamp?: any;
    } & Record<Exclude<keyof I, keyof ConsensusState>, never>>(object: I): ConsensusState;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
        sequence?: any;
        timestamp?: any;
        signature?: Uint8Array;
        newPublicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        newDiversifier?: string;
    } & {
        sequence?: any;
        timestamp?: any;
        signature?: Uint8Array;
        newPublicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["newPublicKey"], keyof Any>, never>;
        newDiversifier?: string;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial<I extends {
        clientId?: string;
        sequence?: any;
        signatureOne?: {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        };
        signatureTwo?: {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        };
    } & {
        clientId?: string;
        sequence?: any;
        signatureOne?: {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        } & {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        } & Record<Exclude<keyof I["signatureOne"], keyof SignatureAndData>, never>;
        signatureTwo?: {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        } & {
            signature?: Uint8Array;
            dataType?: DataType;
            data?: Uint8Array;
            timestamp?: any;
        } & Record<Exclude<keyof I["signatureTwo"], keyof SignatureAndData>, never>;
    } & Record<Exclude<keyof I, keyof Misbehaviour>, never>>(object: I): Misbehaviour;
};
export declare const SignatureAndData: {
    encode(message: SignatureAndData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData;
    fromJSON(object: any): SignatureAndData;
    toJSON(message: SignatureAndData): unknown;
    fromPartial<I extends {
        signature?: Uint8Array;
        dataType?: DataType;
        data?: Uint8Array;
        timestamp?: any;
    } & {
        signature?: Uint8Array;
        dataType?: DataType;
        data?: Uint8Array;
        timestamp?: any;
    } & Record<Exclude<keyof I, keyof SignatureAndData>, never>>(object: I): SignatureAndData;
};
export declare const TimestampedSignatureData: {
    encode(message: TimestampedSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData;
    fromJSON(object: any): TimestampedSignatureData;
    toJSON(message: TimestampedSignatureData): unknown;
    fromPartial<I extends {
        signatureData?: Uint8Array;
        timestamp?: any;
    } & {
        signatureData?: Uint8Array;
        timestamp?: any;
    } & Record<Exclude<keyof I, keyof TimestampedSignatureData>, never>>(object: I): TimestampedSignatureData;
};
export declare const SignBytes: {
    encode(message: SignBytes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes;
    fromJSON(object: any): SignBytes;
    toJSON(message: SignBytes): unknown;
    fromPartial<I extends {
        sequence?: any;
        timestamp?: any;
        diversifier?: string;
        dataType?: DataType;
        data?: Uint8Array;
    } & {
        sequence?: any;
        timestamp?: any;
        diversifier?: string;
        dataType?: DataType;
        data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof SignBytes>, never>>(object: I): SignBytes;
};
export declare const HeaderData: {
    encode(message: HeaderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData;
    fromJSON(object: any): HeaderData;
    toJSON(message: HeaderData): unknown;
    fromPartial<I extends {
        newPubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        newDiversifier?: string;
    } & {
        newPubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["newPubKey"], keyof Any>, never>;
        newDiversifier?: string;
    } & Record<Exclude<keyof I, keyof HeaderData>, never>>(object: I): HeaderData;
};
export declare const ClientStateData: {
    encode(message: ClientStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientStateData;
    fromJSON(object: any): ClientStateData;
    toJSON(message: ClientStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        clientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        path?: Uint8Array;
        clientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof ClientStateData>, never>>(object: I): ClientStateData;
};
export declare const ConsensusStateData: {
    encode(message: ConsensusStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateData;
    fromJSON(object: any): ConsensusStateData;
    toJSON(message: ConsensusStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        path?: Uint8Array;
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["consensusState"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof ConsensusStateData>, never>>(object: I): ConsensusStateData;
};
export declare const ConnectionStateData: {
    encode(message: ConnectionStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStateData;
    fromJSON(object: any): ConnectionStateData;
    toJSON(message: ConnectionStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        connection?: {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        };
    } & {
        path?: Uint8Array;
        connection?: {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("../../../core/connection/v1/connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        } & {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[] & ({
                identifier?: string;
                features?: string[];
            } & {
                identifier?: string;
                features?: string[] & string[] & Record<Exclude<keyof I["connection"]["versions"][number]["features"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["connection"]["versions"][number], keyof import("../../../core/connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connection"]["versions"], keyof {
                identifier?: string;
                features?: string[];
            }[]>, never>;
            state?: import("../../../core/connection/v1/connection").State;
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
                } & Record<Exclude<keyof I["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
            } & Record<Exclude<keyof I["connection"]["counterparty"], keyof import("../../../core/connection/v1/connection").Counterparty>, never>;
            delayPeriod?: any;
        } & Record<Exclude<keyof I["connection"], keyof ConnectionEnd>, never>;
    } & Record<Exclude<keyof I, keyof ConnectionStateData>, never>>(object: I): ConnectionStateData;
};
export declare const ChannelStateData: {
    encode(message: ChannelStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelStateData;
    fromJSON(object: any): ChannelStateData;
    toJSON(message: ChannelStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        channel?: {
            state?: import("../../../core/channel/v1/channel").State;
            ordering?: import("../../../core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
        };
    } & {
        path?: Uint8Array;
        channel?: {
            state?: import("../../../core/channel/v1/channel").State;
            ordering?: import("../../../core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
        } & {
            state?: import("../../../core/channel/v1/channel").State;
            ordering?: import("../../../core/channel/v1/channel").Order;
            counterparty?: {
                portId?: string;
                channelId?: string;
            } & {
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof import("../../../core/channel/v1/channel").Counterparty>, never>;
            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
            version?: string;
        } & Record<Exclude<keyof I["channel"], keyof Channel>, never>;
    } & Record<Exclude<keyof I, keyof ChannelStateData>, never>>(object: I): ChannelStateData;
};
export declare const PacketCommitmentData: {
    encode(message: PacketCommitmentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketCommitmentData;
    fromJSON(object: any): PacketCommitmentData;
    toJSON(message: PacketCommitmentData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        commitment?: Uint8Array;
    } & {
        path?: Uint8Array;
        commitment?: Uint8Array;
    } & Record<Exclude<keyof I, keyof PacketCommitmentData>, never>>(object: I): PacketCommitmentData;
};
export declare const PacketAcknowledgementData: {
    encode(message: PacketAcknowledgementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketAcknowledgementData;
    fromJSON(object: any): PacketAcknowledgementData;
    toJSON(message: PacketAcknowledgementData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        acknowledgement?: Uint8Array;
    } & {
        path?: Uint8Array;
        acknowledgement?: Uint8Array;
    } & Record<Exclude<keyof I, keyof PacketAcknowledgementData>, never>>(object: I): PacketAcknowledgementData;
};
export declare const PacketReceiptAbsenceData: {
    encode(message: PacketReceiptAbsenceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketReceiptAbsenceData;
    fromJSON(object: any): PacketReceiptAbsenceData;
    toJSON(message: PacketReceiptAbsenceData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
    } & {
        path?: Uint8Array;
    } & Record<Exclude<keyof I, "path">, never>>(object: I): PacketReceiptAbsenceData;
};
export declare const NextSequenceRecvData: {
    encode(message: NextSequenceRecvData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextSequenceRecvData;
    fromJSON(object: any): NextSequenceRecvData;
    toJSON(message: NextSequenceRecvData): unknown;
    fromPartial<I extends {
        path?: Uint8Array;
        nextSeqRecv?: any;
    } & {
        path?: Uint8Array;
        nextSeqRecv?: any;
    } & Record<Exclude<keyof I, keyof NextSequenceRecvData>, never>>(object: I): NextSequenceRecvData;
};
