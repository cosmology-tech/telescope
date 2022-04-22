import * as _691 from "./applications/transfer/v1/genesis";
import * as _692 from "./applications/transfer/v1/query";
import * as _693 from "./applications/transfer/v1/transfer";
import * as _694 from "./applications/transfer/v1/tx";
import * as _703 from "./applications/transfer/v2/packet";
import * as _704 from "./core/channel/v1/channel";
import * as _705 from "./core/channel/v1/genesis";
import * as _706 from "./core/channel/v1/query";
import * as _707 from "./core/channel/v1/tx";
import * as _716 from "./core/client/v1/client";
import * as _717 from "./core/client/v1/genesis";
import * as _718 from "./core/client/v1/query";
import * as _719 from "./core/client/v1/tx";
import * as _728 from "./core/commitment/v1/commitment";
import * as _729 from "./core/connection/v1/connection";
import * as _730 from "./core/connection/v1/genesis";
import * as _731 from "./core/connection/v1/query";
import * as _732 from "./core/connection/v1/tx";
import * as _741 from "./core/port/v1/query";
import * as _742 from "./core/types/v1/genesis";
import * as _743 from "./lightclients/localhost/v1/localhost";
import * as _744 from "./lightclients/solomachine/v1/solomachine";
import * as _745 from "./lightclients/solomachine/v2/solomachine";
import * as _746 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _694.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgTransfer;
                    fromJSON(object: any): _694.MsgTransfer;
                    toJSON(message: _694.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _694.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _694.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgTransferResponse;
                    fromJSON(_: any): _694.MsgTransferResponse;
                    toJSON(_: _694.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _694.MsgTransferResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _694.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _694.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _694.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _694.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _694.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _694.MsgTransfer): {
                        typeUrl: string;
                        value: _694.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _694.MsgTransfer): {
                        typeUrl: string;
                        value: _694.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _693.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.DenomTrace;
                    fromJSON(object: any): _693.DenomTrace;
                    toJSON(message: _693.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _693.DenomTrace;
                };
                Params: {
                    encode(message: _693.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.Params;
                    fromJSON(object: any): _693.Params;
                    toJSON(message: _693.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _693.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _692.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryDenomTraceRequest;
                    fromJSON(object: any): _692.QueryDenomTraceRequest;
                    toJSON(message: _692.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _692.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _692.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryDenomTraceResponse;
                    fromJSON(object: any): _692.QueryDenomTraceResponse;
                    toJSON(message: _692.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _692.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _692.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryDenomTracesRequest;
                    fromJSON(object: any): _692.QueryDenomTracesRequest;
                    toJSON(message: _692.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _692.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _692.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryDenomTracesResponse;
                    fromJSON(object: any): _692.QueryDenomTracesResponse;
                    toJSON(message: _692.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _692.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _692.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryParamsRequest;
                    fromJSON(_: any): _692.QueryParamsRequest;
                    toJSON(_: _692.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _692.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _692.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.QueryParamsResponse;
                    fromJSON(object: any): _692.QueryParamsResponse;
                    toJSON(message: _692.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _692.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _691.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.GenesisState;
                    fromJSON(object: any): _691.GenesisState;
                    toJSON(message: _691.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _691.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _703.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.FungibleTokenPacketData;
                    fromJSON(object: any): _703.FungibleTokenPacketData;
                    toJSON(message: _703.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _703.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _707.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenInit;
                    fromJSON(object: any): _707.MsgChannelOpenInit;
                    toJSON(message: _707.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _707.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _707.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _707.MsgChannelOpenInitResponse;
                    toJSON(_: _707.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _707.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _707.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenTry;
                    fromJSON(object: any): _707.MsgChannelOpenTry;
                    toJSON(message: _707.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _707.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _707.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _707.MsgChannelOpenTryResponse;
                    toJSON(_: _707.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _707.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _707.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenAck;
                    fromJSON(object: any): _707.MsgChannelOpenAck;
                    toJSON(message: _707.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _707.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _707.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _707.MsgChannelOpenAckResponse;
                    toJSON(_: _707.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _707.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _707.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenConfirm;
                    fromJSON(object: any): _707.MsgChannelOpenConfirm;
                    toJSON(message: _707.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _707.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _707.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _707.MsgChannelOpenConfirmResponse;
                    toJSON(_: _707.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _707.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _707.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelCloseInit;
                    fromJSON(object: any): _707.MsgChannelCloseInit;
                    toJSON(message: _707.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _707.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _707.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _707.MsgChannelCloseInitResponse;
                    toJSON(_: _707.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _707.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _707.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelCloseConfirm;
                    fromJSON(object: any): _707.MsgChannelCloseConfirm;
                    toJSON(message: _707.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _707.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _707.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _707.MsgChannelCloseConfirmResponse;
                    toJSON(_: _707.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _707.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _707.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgRecvPacket;
                    fromJSON(object: any): _707.MsgRecvPacket;
                    toJSON(message: _707.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _707.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _707.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgRecvPacketResponse;
                    fromJSON(_: any): _707.MsgRecvPacketResponse;
                    toJSON(_: _707.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _707.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _707.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgTimeout;
                    fromJSON(object: any): _707.MsgTimeout;
                    toJSON(message: _707.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _707.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _707.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgTimeoutResponse;
                    fromJSON(_: any): _707.MsgTimeoutResponse;
                    toJSON(_: _707.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _707.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _707.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgTimeoutOnClose;
                    fromJSON(object: any): _707.MsgTimeoutOnClose;
                    toJSON(message: _707.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _707.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _707.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _707.MsgTimeoutOnCloseResponse;
                    toJSON(_: _707.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _707.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _707.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgAcknowledgement;
                    fromJSON(object: any): _707.MsgAcknowledgement;
                    toJSON(message: _707.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _707.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _707.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.MsgAcknowledgementResponse;
                    fromJSON(_: any): _707.MsgAcknowledgementResponse;
                    toJSON(_: _707.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _707.MsgAcknowledgementResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _707.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _707.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _707.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _707.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _707.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _707.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _707.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _707.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _707.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _707.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _707.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _707.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _707.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _707.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _707.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _707.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _707.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _707.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _707.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _707.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _707.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _707.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _707.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _707.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _707.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _707.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _707.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _707.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _707.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _707.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _707.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _707.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _707.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _707.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _707.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _707.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _707.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _707.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _707.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _707.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _707.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _707.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _707.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _707.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _707.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _707.MsgRecvPacket): {
                        typeUrl: string;
                        value: _707.MsgRecvPacket;
                    };
                    timeout(value: _707.MsgTimeout): {
                        typeUrl: string;
                        value: _707.MsgTimeout;
                    };
                    timeoutOnClose(value: _707.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _707.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _707.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _707.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _707.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _707.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _707.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _707.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _707.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _707.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _707.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _707.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _707.MsgRecvPacket): {
                        typeUrl: string;
                        value: _707.MsgRecvPacket;
                    };
                    timeout(value: _707.MsgTimeout): {
                        typeUrl: string;
                        value: _707.MsgTimeout;
                    };
                    timeoutOnClose(value: _707.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _707.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _707.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _707.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _706.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelRequest;
                    fromJSON(object: any): _706.QueryChannelRequest;
                    toJSON(message: _706.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _706.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _706.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelResponse;
                    fromJSON(object: any): _706.QueryChannelResponse;
                    toJSON(message: _706.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _706.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _706.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelsRequest;
                    fromJSON(object: any): _706.QueryChannelsRequest;
                    toJSON(message: _706.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _706.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _706.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelsResponse;
                    fromJSON(object: any): _706.QueryChannelsResponse;
                    toJSON(message: _706.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _706.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _706.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _706.QueryConnectionChannelsRequest;
                    toJSON(message: _706.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _706.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _706.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _706.QueryConnectionChannelsResponse;
                    toJSON(message: _706.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _706.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _706.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelClientStateRequest;
                    fromJSON(object: any): _706.QueryChannelClientStateRequest;
                    toJSON(message: _706.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _706.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _706.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelClientStateResponse;
                    fromJSON(object: any): _706.QueryChannelClientStateResponse;
                    toJSON(message: _706.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _706.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _706.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _706.QueryChannelConsensusStateRequest;
                    toJSON(message: _706.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _706.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _706.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _706.QueryChannelConsensusStateResponse;
                    toJSON(message: _706.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _706.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _706.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _706.QueryPacketCommitmentRequest;
                    toJSON(message: _706.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _706.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _706.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _706.QueryPacketCommitmentResponse;
                    toJSON(message: _706.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _706.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _706.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _706.QueryPacketCommitmentsRequest;
                    toJSON(message: _706.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _706.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _706.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _706.QueryPacketCommitmentsResponse;
                    toJSON(message: _706.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _706.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _706.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketReceiptRequest;
                    fromJSON(object: any): _706.QueryPacketReceiptRequest;
                    toJSON(message: _706.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _706.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _706.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketReceiptResponse;
                    fromJSON(object: any): _706.QueryPacketReceiptResponse;
                    toJSON(message: _706.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _706.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _706.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _706.QueryPacketAcknowledgementRequest;
                    toJSON(message: _706.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _706.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _706.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _706.QueryPacketAcknowledgementResponse;
                    toJSON(message: _706.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _706.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _706.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _706.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _706.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _706.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _706.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _706.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _706.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _706.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _706.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _706.QueryUnreceivedPacketsRequest;
                    toJSON(message: _706.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _706.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _706.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _706.QueryUnreceivedPacketsResponse;
                    toJSON(message: _706.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _706.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _706.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _706.QueryUnreceivedAcksRequest;
                    toJSON(message: _706.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _706.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _706.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _706.QueryUnreceivedAcksResponse;
                    toJSON(message: _706.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _706.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _706.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _706.QueryNextSequenceReceiveRequest;
                    toJSON(message: _706.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _706.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _706.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _706.QueryNextSequenceReceiveResponse;
                    toJSON(message: _706.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _706.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _705.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _705.GenesisState;
                    fromJSON(object: any): _705.GenesisState;
                    toJSON(message: _705.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _705.GenesisState;
                };
                PacketSequence: {
                    encode(message: _705.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _705.PacketSequence;
                    fromJSON(object: any): _705.PacketSequence;
                    toJSON(message: _705.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _705.PacketSequence;
                };
                stateFromJSON(object: any): _704.State;
                stateToJSON(object: _704.State): string;
                orderFromJSON(object: any): _704.Order;
                orderToJSON(object: _704.Order): string;
                State: typeof _704.State;
                Order: typeof _704.Order;
                Channel: {
                    encode(message: _704.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.Channel;
                    fromJSON(object: any): _704.Channel;
                    toJSON(message: _704.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _704.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _704.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.IdentifiedChannel;
                    fromJSON(object: any): _704.IdentifiedChannel;
                    toJSON(message: _704.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _704.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _704.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.Counterparty;
                    fromJSON(object: any): _704.Counterparty;
                    toJSON(message: _704.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _704.Counterparty;
                };
                Packet: {
                    encode(message: _704.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.Packet;
                    fromJSON(object: any): _704.Packet;
                    toJSON(message: _704.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _704.Packet;
                };
                PacketState: {
                    encode(message: _704.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.PacketState;
                    fromJSON(object: any): _704.PacketState;
                    toJSON(message: _704.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _704.PacketState;
                };
                Acknowledgement: {
                    encode(message: _704.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.Acknowledgement;
                    fromJSON(object: any): _704.Acknowledgement;
                    toJSON(message: _704.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _704.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _719.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgCreateClient;
                    fromJSON(object: any): _719.MsgCreateClient;
                    toJSON(message: _719.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _719.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _719.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgCreateClientResponse;
                    fromJSON(_: any): _719.MsgCreateClientResponse;
                    toJSON(_: _719.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _719.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _719.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgUpdateClient;
                    fromJSON(object: any): _719.MsgUpdateClient;
                    toJSON(message: _719.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _719.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _719.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgUpdateClientResponse;
                    fromJSON(_: any): _719.MsgUpdateClientResponse;
                    toJSON(_: _719.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _719.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _719.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgUpgradeClient;
                    fromJSON(object: any): _719.MsgUpgradeClient;
                    toJSON(message: _719.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _719.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _719.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgUpgradeClientResponse;
                    fromJSON(_: any): _719.MsgUpgradeClientResponse;
                    toJSON(_: _719.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _719.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _719.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _719.MsgSubmitMisbehaviour;
                    toJSON(message: _719.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _719.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _719.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _719.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _719.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _719.MsgSubmitMisbehaviourResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _719.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _719.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _719.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _719.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _719.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _719.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _719.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _719.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _719.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _719.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _719.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _719.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _719.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _719.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _719.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _719.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _719.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _719.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _719.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _719.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _719.MsgCreateClient): {
                        typeUrl: string;
                        value: _719.MsgCreateClient;
                    };
                    updateClient(value: _719.MsgUpdateClient): {
                        typeUrl: string;
                        value: _719.MsgUpdateClient;
                    };
                    upgradeClient(value: _719.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _719.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _719.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _719.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _719.MsgCreateClient): {
                        typeUrl: string;
                        value: _719.MsgCreateClient;
                    };
                    updateClient(value: _719.MsgUpdateClient): {
                        typeUrl: string;
                        value: _719.MsgUpdateClient;
                    };
                    upgradeClient(value: _719.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _719.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _719.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _719.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _718.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStateRequest;
                    fromJSON(object: any): _718.QueryClientStateRequest;
                    toJSON(message: _718.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _718.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _718.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStateResponse;
                    fromJSON(object: any): _718.QueryClientStateResponse;
                    toJSON(message: _718.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _718.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _718.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStatesRequest;
                    fromJSON(object: any): _718.QueryClientStatesRequest;
                    toJSON(message: _718.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _718.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _718.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStatesResponse;
                    fromJSON(object: any): _718.QueryClientStatesResponse;
                    toJSON(message: _718.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _718.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _718.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryConsensusStateRequest;
                    fromJSON(object: any): _718.QueryConsensusStateRequest;
                    toJSON(message: _718.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _718.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _718.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryConsensusStateResponse;
                    fromJSON(object: any): _718.QueryConsensusStateResponse;
                    toJSON(message: _718.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _718.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _718.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryConsensusStatesRequest;
                    fromJSON(object: any): _718.QueryConsensusStatesRequest;
                    toJSON(message: _718.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _718.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _718.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryConsensusStatesResponse;
                    fromJSON(object: any): _718.QueryConsensusStatesResponse;
                    toJSON(message: _718.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _718.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _718.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStatusRequest;
                    fromJSON(object: any): _718.QueryClientStatusRequest;
                    toJSON(message: _718.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _718.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _718.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientStatusResponse;
                    fromJSON(object: any): _718.QueryClientStatusResponse;
                    toJSON(message: _718.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _718.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _718.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientParamsRequest;
                    fromJSON(_: any): _718.QueryClientParamsRequest;
                    toJSON(_: _718.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _718.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _718.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryClientParamsResponse;
                    fromJSON(object: any): _718.QueryClientParamsResponse;
                    toJSON(message: _718.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _718.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _718.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _718.QueryUpgradedClientStateRequest;
                    toJSON(_: _718.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _718.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _718.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _718.QueryUpgradedClientStateResponse;
                    toJSON(message: _718.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _718.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _718.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _718.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _718.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _718.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _718.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _718.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _718.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _718.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _717.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.GenesisState;
                    fromJSON(object: any): _717.GenesisState;
                    toJSON(message: _717.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _717.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _717.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.GenesisMetadata;
                    fromJSON(object: any): _717.GenesisMetadata;
                    toJSON(message: _717.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _717.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _717.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _717.IdentifiedGenesisMetadata;
                    toJSON(message: _717.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _717.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _716.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.IdentifiedClientState;
                    fromJSON(object: any): _716.IdentifiedClientState;
                    toJSON(message: _716.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _716.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _716.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.ConsensusStateWithHeight;
                    fromJSON(object: any): _716.ConsensusStateWithHeight;
                    toJSON(message: _716.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _716.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _716.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.ClientConsensusStates;
                    fromJSON(object: any): _716.ClientConsensusStates;
                    toJSON(message: _716.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _716.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _716.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.ClientUpdateProposal;
                    fromJSON(object: any): _716.ClientUpdateProposal;
                    toJSON(message: _716.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _716.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _716.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.UpgradeProposal;
                    fromJSON(object: any): _716.UpgradeProposal;
                    toJSON(message: _716.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _716.UpgradeProposal;
                };
                Height: {
                    encode(message: _716.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.Height;
                    fromJSON(object: any): _716.Height;
                    toJSON(message: _716.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _716.Height;
                };
                Params: {
                    encode(message: _716.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.Params;
                    fromJSON(object: any): _716.Params;
                    toJSON(message: _716.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _716.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _728.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.MerkleRoot;
                    fromJSON(object: any): _728.MerkleRoot;
                    toJSON(message: _728.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _728.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _728.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.MerklePrefix;
                    fromJSON(object: any): _728.MerklePrefix;
                    toJSON(message: _728.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _728.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _728.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.MerklePath;
                    fromJSON(object: any): _728.MerklePath;
                    toJSON(message: _728.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _728.MerklePath;
                };
                MerkleProof: {
                    encode(message: _728.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.MerkleProof;
                    fromJSON(object: any): _728.MerkleProof;
                    toJSON(message: _728.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _728.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _732.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenInit;
                    fromJSON(object: any): _732.MsgConnectionOpenInit;
                    toJSON(message: _732.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _732.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _732.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _732.MsgConnectionOpenInitResponse;
                    toJSON(_: _732.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _732.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _732.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenTry;
                    fromJSON(object: any): _732.MsgConnectionOpenTry;
                    toJSON(message: _732.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _732.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _732.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _732.MsgConnectionOpenTryResponse;
                    toJSON(_: _732.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _732.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _732.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenAck;
                    fromJSON(object: any): _732.MsgConnectionOpenAck;
                    toJSON(message: _732.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _732.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _732.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _732.MsgConnectionOpenAckResponse;
                    toJSON(_: _732.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _732.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _732.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _732.MsgConnectionOpenConfirm;
                    toJSON(message: _732.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _732.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _732.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _732.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _732.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _732.MsgConnectionOpenConfirmResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _732.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _732.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _732.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _732.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _732.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _732.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _732.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../amino.helpers").AminoHeight;
                            signer: string;
                        }) => _732.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _732.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _732.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _732.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _732.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _732.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _732.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _732.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _732.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _732.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _732.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _732.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _732.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _732.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _732.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _732.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _732.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _732.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _731.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionRequest;
                    fromJSON(object: any): _731.QueryConnectionRequest;
                    toJSON(message: _731.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _731.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _731.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionResponse;
                    fromJSON(object: any): _731.QueryConnectionResponse;
                    toJSON(message: _731.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _731.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _731.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionsRequest;
                    fromJSON(object: any): _731.QueryConnectionsRequest;
                    toJSON(message: _731.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _731.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _731.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionsResponse;
                    fromJSON(object: any): _731.QueryConnectionsResponse;
                    toJSON(message: _731.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _731.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _731.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryClientConnectionsRequest;
                    fromJSON(object: any): _731.QueryClientConnectionsRequest;
                    toJSON(message: _731.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _731.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _731.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryClientConnectionsResponse;
                    fromJSON(object: any): _731.QueryClientConnectionsResponse;
                    toJSON(message: _731.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _731.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _731.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _731.QueryConnectionClientStateRequest;
                    toJSON(message: _731.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _731.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _731.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _731.QueryConnectionClientStateResponse;
                    toJSON(message: _731.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _731.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _731.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _731.QueryConnectionConsensusStateRequest;
                    toJSON(message: _731.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _731.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _731.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _731.QueryConnectionConsensusStateResponse;
                    toJSON(message: _731.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _731.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _730.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.GenesisState;
                    fromJSON(object: any): _730.GenesisState;
                    toJSON(message: _730.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _730.GenesisState;
                };
                stateFromJSON(object: any): _729.State;
                stateToJSON(object: _729.State): string;
                State: typeof _729.State;
                ConnectionEnd: {
                    encode(message: _729.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.ConnectionEnd;
                    fromJSON(object: any): _729.ConnectionEnd;
                    toJSON(message: _729.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _729.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _729.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.IdentifiedConnection;
                    fromJSON(object: any): _729.IdentifiedConnection;
                    toJSON(message: _729.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _729.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _729.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.Counterparty;
                    fromJSON(object: any): _729.Counterparty;
                    toJSON(message: _729.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _729.Counterparty;
                };
                ClientPaths: {
                    encode(message: _729.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.ClientPaths;
                    fromJSON(object: any): _729.ClientPaths;
                    toJSON(message: _729.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _729.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _729.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.ConnectionPaths;
                    fromJSON(object: any): _729.ConnectionPaths;
                    toJSON(message: _729.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _729.ConnectionPaths;
                };
                Version: {
                    encode(message: _729.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.Version;
                    fromJSON(object: any): _729.Version;
                    toJSON(message: _729.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _729.Version;
                };
                Params: {
                    encode(message: _729.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.Params;
                    fromJSON(object: any): _729.Params;
                    toJSON(message: _729.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _729.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _741.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.QueryAppVersionRequest;
                    fromJSON(object: any): _741.QueryAppVersionRequest;
                    toJSON(message: _741.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _741.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _741.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.QueryAppVersionResponse;
                    fromJSON(object: any): _741.QueryAppVersionResponse;
                    toJSON(message: _741.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _741.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _742.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.GenesisState;
                    fromJSON(object: any): _742.GenesisState;
                    toJSON(message: _742.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _742.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _743.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _743.ClientState;
                    fromJSON(object: any): _743.ClientState;
                    toJSON(message: _743.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _743.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _744.DataType;
                dataTypeToJSON(object: _744.DataType): string;
                DataType: typeof _744.DataType;
                ClientState: {
                    encode(message: _744.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ClientState;
                    fromJSON(object: any): _744.ClientState;
                    toJSON(message: _744.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _744.ClientState;
                };
                ConsensusState: {
                    encode(message: _744.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ConsensusState;
                    fromJSON(object: any): _744.ConsensusState;
                    toJSON(message: _744.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _744.ConsensusState;
                };
                Header: {
                    encode(message: _744.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.Header;
                    fromJSON(object: any): _744.Header;
                    toJSON(message: _744.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _744.Header;
                };
                Misbehaviour: {
                    encode(message: _744.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.Misbehaviour;
                    fromJSON(object: any): _744.Misbehaviour;
                    toJSON(message: _744.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _744.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _744.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.SignatureAndData;
                    fromJSON(object: any): _744.SignatureAndData;
                    toJSON(message: _744.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _744.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _744.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.TimestampedSignatureData;
                    fromJSON(object: any): _744.TimestampedSignatureData;
                    toJSON(message: _744.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _744.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _744.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.SignBytes;
                    fromJSON(object: any): _744.SignBytes;
                    toJSON(message: _744.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _744.SignBytes;
                };
                HeaderData: {
                    encode(message: _744.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.HeaderData;
                    fromJSON(object: any): _744.HeaderData;
                    toJSON(message: _744.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _744.HeaderData;
                };
                ClientStateData: {
                    encode(message: _744.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ClientStateData;
                    fromJSON(object: any): _744.ClientStateData;
                    toJSON(message: _744.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _744.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _744.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ConsensusStateData;
                    fromJSON(object: any): _744.ConsensusStateData;
                    toJSON(message: _744.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _744.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _744.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ConnectionStateData;
                    fromJSON(object: any): _744.ConnectionStateData;
                    toJSON(message: _744.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _744.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _744.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.ChannelStateData;
                    fromJSON(object: any): _744.ChannelStateData;
                    toJSON(message: _744.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _744.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _744.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.PacketCommitmentData;
                    fromJSON(object: any): _744.PacketCommitmentData;
                    toJSON(message: _744.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _744.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _744.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.PacketAcknowledgementData;
                    fromJSON(object: any): _744.PacketAcknowledgementData;
                    toJSON(message: _744.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _744.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _744.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.PacketReceiptAbsenceData;
                    fromJSON(object: any): _744.PacketReceiptAbsenceData;
                    toJSON(message: _744.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _744.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _744.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.NextSequenceRecvData;
                    fromJSON(object: any): _744.NextSequenceRecvData;
                    toJSON(message: _744.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _744.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _745.DataType;
                dataTypeToJSON(object: _745.DataType): string;
                DataType: typeof _745.DataType;
                ClientState: {
                    encode(message: _745.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ClientState;
                    fromJSON(object: any): _745.ClientState;
                    toJSON(message: _745.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _745.ClientState;
                };
                ConsensusState: {
                    encode(message: _745.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ConsensusState;
                    fromJSON(object: any): _745.ConsensusState;
                    toJSON(message: _745.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _745.ConsensusState;
                };
                Header: {
                    encode(message: _745.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.Header;
                    fromJSON(object: any): _745.Header;
                    toJSON(message: _745.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _745.Header;
                };
                Misbehaviour: {
                    encode(message: _745.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.Misbehaviour;
                    fromJSON(object: any): _745.Misbehaviour;
                    toJSON(message: _745.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _745.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _745.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.SignatureAndData;
                    fromJSON(object: any): _745.SignatureAndData;
                    toJSON(message: _745.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _745.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _745.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.TimestampedSignatureData;
                    fromJSON(object: any): _745.TimestampedSignatureData;
                    toJSON(message: _745.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _745.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _745.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.SignBytes;
                    fromJSON(object: any): _745.SignBytes;
                    toJSON(message: _745.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _745.SignBytes;
                };
                HeaderData: {
                    encode(message: _745.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.HeaderData;
                    fromJSON(object: any): _745.HeaderData;
                    toJSON(message: _745.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _745.HeaderData;
                };
                ClientStateData: {
                    encode(message: _745.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ClientStateData;
                    fromJSON(object: any): _745.ClientStateData;
                    toJSON(message: _745.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _745.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _745.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ConsensusStateData;
                    fromJSON(object: any): _745.ConsensusStateData;
                    toJSON(message: _745.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _745.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _745.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ConnectionStateData;
                    fromJSON(object: any): _745.ConnectionStateData;
                    toJSON(message: _745.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _745.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _745.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.ChannelStateData;
                    fromJSON(object: any): _745.ChannelStateData;
                    toJSON(message: _745.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _745.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _745.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.PacketCommitmentData;
                    fromJSON(object: any): _745.PacketCommitmentData;
                    toJSON(message: _745.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _745.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _745.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.PacketAcknowledgementData;
                    fromJSON(object: any): _745.PacketAcknowledgementData;
                    toJSON(message: _745.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _745.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _745.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.PacketReceiptAbsenceData;
                    fromJSON(object: any): _745.PacketReceiptAbsenceData;
                    toJSON(message: _745.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _745.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _745.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.NextSequenceRecvData;
                    fromJSON(object: any): _745.NextSequenceRecvData;
                    toJSON(message: _745.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _745.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _746.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.ClientState;
                    fromJSON(object: any): _746.ClientState;
                    toJSON(message: _746.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _746.ClientState;
                };
                ConsensusState: {
                    encode(message: _746.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.ConsensusState;
                    fromJSON(object: any): _746.ConsensusState;
                    toJSON(message: _746.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _746.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _746.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Misbehaviour;
                    fromJSON(object: any): _746.Misbehaviour;
                    toJSON(message: _746.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _746.Misbehaviour;
                };
                Header: {
                    encode(message: _746.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Header;
                    fromJSON(object: any): _746.Header;
                    toJSON(message: _746.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _746.Header;
                };
                Fraction: {
                    encode(message: _746.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Fraction;
                    fromJSON(object: any): _746.Fraction;
                    toJSON(message: _746.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _746.Fraction;
                };
            };
        }
    }
}
