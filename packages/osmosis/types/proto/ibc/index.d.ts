import * as _1002 from "./applications/transfer/v1/genesis";
import * as _1004 from "./applications/transfer/v1/query";
import * as _1006 from "./applications/transfer/v1/transfer";
import * as _1008 from "./applications/transfer/v1/tx";
import * as _1016 from "./applications/transfer/v2/packet";
import * as _1018 from "./core/channel/v1/channel";
import * as _1020 from "./core/channel/v1/genesis";
import * as _1022 from "./core/channel/v1/query";
import * as _1024 from "./core/channel/v1/tx";
import * as _1032 from "./core/client/v1/client";
import * as _1034 from "./core/client/v1/genesis";
import * as _1036 from "./core/client/v1/query";
import * as _1038 from "./core/client/v1/tx";
import * as _1046 from "./core/commitment/v1/commitment";
import * as _1048 from "./core/connection/v1/connection";
import * as _1050 from "./core/connection/v1/genesis";
import * as _1052 from "./core/connection/v1/query";
import * as _1054 from "./core/connection/v1/tx";
import * as _1062 from "./core/port/v1/query";
import * as _1064 from "./core/types/v1/genesis";
import * as _1066 from "./lightclients/localhost/v1/localhost";
import * as _1068 from "./lightclients/solomachine/v1/solomachine";
import * as _1070 from "./lightclients/solomachine/v2/solomachine";
import * as _1072 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _1008.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1008.MsgTransfer;
                    fromJSON(object: any): _1008.MsgTransfer;
                    toJSON(message: _1008.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _1008.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _1008.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1008.MsgTransferResponse;
                    fromJSON(_: any): _1008.MsgTransferResponse;
                    toJSON(_: _1008.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _1008.MsgTransferResponse;
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _1008.MsgTransfer) => {
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
                        }) => _1008.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _1008.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _1008.MsgTransfer): {
                        typeUrl: string;
                        value: _1008.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _1006.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1006.DenomTrace;
                    fromJSON(object: any): _1006.DenomTrace;
                    toJSON(message: _1006.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1006.DenomTrace;
                };
                Params: {
                    encode(message: _1006.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1006.Params;
                    fromJSON(object: any): _1006.Params;
                    toJSON(message: _1006.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1006.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _1004.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTraceRequest;
                    fromJSON(object: any): _1004.QueryDenomTraceRequest;
                    toJSON(message: _1004.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1004.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _1004.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTraceResponse;
                    fromJSON(object: any): _1004.QueryDenomTraceResponse;
                    toJSON(message: _1004.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _1004.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _1004.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTracesRequest;
                    fromJSON(object: any): _1004.QueryDenomTracesRequest;
                    toJSON(message: _1004.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1004.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _1004.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryDenomTracesResponse;
                    fromJSON(object: any): _1004.QueryDenomTracesResponse;
                    toJSON(message: _1004.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _1004.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _1004.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryParamsRequest;
                    fromJSON(_: any): _1004.QueryParamsRequest;
                    toJSON(_: _1004.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _1004.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _1004.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.QueryParamsResponse;
                    fromJSON(object: any): _1004.QueryParamsResponse;
                    toJSON(message: _1004.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _1004.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _1002.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1002.GenesisState;
                    fromJSON(object: any): _1002.GenesisState;
                    toJSON(message: _1002.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1002.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _1016.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.FungibleTokenPacketData;
                    fromJSON(object: any): _1016.FungibleTokenPacketData;
                    toJSON(message: _1016.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _1016.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _1024.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenInit;
                    fromJSON(object: any): _1024.MsgChannelOpenInit;
                    toJSON(message: _1024.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _1024.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _1024.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenInitResponse;
                    toJSON(_: _1024.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _1024.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _1024.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenTry;
                    fromJSON(object: any): _1024.MsgChannelOpenTry;
                    toJSON(message: _1024.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1024.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _1024.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenTryResponse;
                    toJSON(_: _1024.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _1024.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _1024.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenAck;
                    fromJSON(object: any): _1024.MsgChannelOpenAck;
                    toJSON(message: _1024.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1024.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _1024.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenAckResponse;
                    toJSON(_: _1024.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _1024.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _1024.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenConfirm;
                    fromJSON(object: any): _1024.MsgChannelOpenConfirm;
                    toJSON(message: _1024.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1024.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _1024.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _1024.MsgChannelOpenConfirmResponse;
                    toJSON(_: _1024.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _1024.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _1024.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseInit;
                    fromJSON(object: any): _1024.MsgChannelCloseInit;
                    toJSON(message: _1024.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _1024.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _1024.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _1024.MsgChannelCloseInitResponse;
                    toJSON(_: _1024.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _1024.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _1024.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseConfirm;
                    fromJSON(object: any): _1024.MsgChannelCloseConfirm;
                    toJSON(message: _1024.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1024.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _1024.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _1024.MsgChannelCloseConfirmResponse;
                    toJSON(_: _1024.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _1024.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _1024.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgRecvPacket;
                    fromJSON(object: any): _1024.MsgRecvPacket;
                    toJSON(message: _1024.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _1024.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _1024.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgRecvPacketResponse;
                    fromJSON(_: any): _1024.MsgRecvPacketResponse;
                    toJSON(_: _1024.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _1024.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _1024.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeout;
                    fromJSON(object: any): _1024.MsgTimeout;
                    toJSON(message: _1024.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _1024.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _1024.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutResponse;
                    fromJSON(_: any): _1024.MsgTimeoutResponse;
                    toJSON(_: _1024.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _1024.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _1024.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutOnClose;
                    fromJSON(object: any): _1024.MsgTimeoutOnClose;
                    toJSON(message: _1024.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _1024.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _1024.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _1024.MsgTimeoutOnCloseResponse;
                    toJSON(_: _1024.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _1024.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _1024.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgAcknowledgement;
                    fromJSON(object: any): _1024.MsgAcknowledgement;
                    toJSON(message: _1024.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _1024.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _1024.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1024.MsgAcknowledgementResponse;
                    fromJSON(_: any): _1024.MsgAcknowledgementResponse;
                    toJSON(_: _1024.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _1024.MsgAcknowledgementResponse;
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _1024.MsgChannelOpenInit) => {
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
                        }) => _1024.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _1024.MsgChannelOpenTry) => {
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
                        }) => _1024.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _1024.MsgChannelOpenAck) => {
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
                        }) => _1024.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _1024.MsgChannelOpenConfirm) => {
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
                        }) => _1024.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _1024.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _1024.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _1024.MsgChannelCloseConfirm) => {
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
                        }) => _1024.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _1024.MsgRecvPacket) => {
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
                        }) => _1024.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _1024.MsgTimeout) => {
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
                        }) => _1024.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _1024.MsgTimeoutOnClose) => {
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
                        }) => _1024.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _1024.MsgAcknowledgement) => {
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
                        }) => _1024.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _1024.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _1024.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _1024.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _1024.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _1024.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _1024.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _1024.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _1024.MsgRecvPacket): {
                        typeUrl: string;
                        value: _1024.MsgRecvPacket;
                    };
                    timeout(value: _1024.MsgTimeout): {
                        typeUrl: string;
                        value: _1024.MsgTimeout;
                    };
                    timeoutOnClose(value: _1024.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _1024.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _1024.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _1024.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _1022.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelRequest;
                    fromJSON(object: any): _1022.QueryChannelRequest;
                    toJSON(message: _1022.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _1022.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _1022.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelResponse;
                    fromJSON(object: any): _1022.QueryChannelResponse;
                    toJSON(message: _1022.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _1022.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _1022.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelsRequest;
                    fromJSON(object: any): _1022.QueryChannelsRequest;
                    toJSON(message: _1022.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _1022.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _1022.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelsResponse;
                    fromJSON(object: any): _1022.QueryChannelsResponse;
                    toJSON(message: _1022.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _1022.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _1022.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _1022.QueryConnectionChannelsRequest;
                    toJSON(message: _1022.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _1022.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _1022.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _1022.QueryConnectionChannelsResponse;
                    toJSON(message: _1022.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _1022.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _1022.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelClientStateRequest;
                    fromJSON(object: any): _1022.QueryChannelClientStateRequest;
                    toJSON(message: _1022.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _1022.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _1022.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelClientStateResponse;
                    fromJSON(object: any): _1022.QueryChannelClientStateResponse;
                    toJSON(message: _1022.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _1022.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _1022.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _1022.QueryChannelConsensusStateRequest;
                    toJSON(message: _1022.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _1022.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _1022.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _1022.QueryChannelConsensusStateResponse;
                    toJSON(message: _1022.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _1022.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _1022.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _1022.QueryPacketCommitmentRequest;
                    toJSON(message: _1022.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _1022.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _1022.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _1022.QueryPacketCommitmentResponse;
                    toJSON(message: _1022.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _1022.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _1022.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _1022.QueryPacketCommitmentsRequest;
                    toJSON(message: _1022.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _1022.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _1022.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _1022.QueryPacketCommitmentsResponse;
                    toJSON(message: _1022.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _1022.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _1022.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketReceiptRequest;
                    fromJSON(object: any): _1022.QueryPacketReceiptRequest;
                    toJSON(message: _1022.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _1022.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _1022.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketReceiptResponse;
                    fromJSON(object: any): _1022.QueryPacketReceiptResponse;
                    toJSON(message: _1022.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _1022.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _1022.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementRequest;
                    toJSON(message: _1022.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _1022.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _1022.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementResponse;
                    toJSON(message: _1022.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _1022.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _1022.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _1022.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _1022.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _1022.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _1022.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _1022.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _1022.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _1022.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _1022.QueryUnreceivedPacketsRequest;
                    toJSON(message: _1022.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _1022.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _1022.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _1022.QueryUnreceivedPacketsResponse;
                    toJSON(message: _1022.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _1022.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _1022.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _1022.QueryUnreceivedAcksRequest;
                    toJSON(message: _1022.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _1022.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _1022.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _1022.QueryUnreceivedAcksResponse;
                    toJSON(message: _1022.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _1022.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _1022.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _1022.QueryNextSequenceReceiveRequest;
                    toJSON(message: _1022.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _1022.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _1022.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1022.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _1022.QueryNextSequenceReceiveResponse;
                    toJSON(message: _1022.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _1022.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _1020.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1020.GenesisState;
                    fromJSON(object: any): _1020.GenesisState;
                    toJSON(message: _1020.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _1020.GenesisState;
                };
                PacketSequence: {
                    encode(message: _1020.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1020.PacketSequence;
                    fromJSON(object: any): _1020.PacketSequence;
                    toJSON(message: _1020.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _1020.PacketSequence;
                };
                stateFromJSON(object: any): _1018.State;
                stateToJSON(object: _1018.State): string;
                orderFromJSON(object: any): _1018.Order;
                orderToJSON(object: _1018.Order): string;
                State: typeof _1018.State;
                Order: typeof _1018.Order;
                Channel: {
                    encode(message: _1018.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Channel;
                    fromJSON(object: any): _1018.Channel;
                    toJSON(message: _1018.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _1018.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _1018.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.IdentifiedChannel;
                    fromJSON(object: any): _1018.IdentifiedChannel;
                    toJSON(message: _1018.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _1018.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _1018.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Counterparty;
                    fromJSON(object: any): _1018.Counterparty;
                    toJSON(message: _1018.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _1018.Counterparty;
                };
                Packet: {
                    encode(message: _1018.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Packet;
                    fromJSON(object: any): _1018.Packet;
                    toJSON(message: _1018.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _1018.Packet;
                };
                PacketState: {
                    encode(message: _1018.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.PacketState;
                    fromJSON(object: any): _1018.PacketState;
                    toJSON(message: _1018.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _1018.PacketState;
                };
                Acknowledgement: {
                    encode(message: _1018.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1018.Acknowledgement;
                    fromJSON(object: any): _1018.Acknowledgement;
                    toJSON(message: _1018.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _1018.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _1038.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgCreateClient;
                    fromJSON(object: any): _1038.MsgCreateClient;
                    toJSON(message: _1038.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _1038.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _1038.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgCreateClientResponse;
                    fromJSON(_: any): _1038.MsgCreateClientResponse;
                    toJSON(_: _1038.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _1038.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _1038.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpdateClient;
                    fromJSON(object: any): _1038.MsgUpdateClient;
                    toJSON(message: _1038.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1038.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _1038.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpdateClientResponse;
                    fromJSON(_: any): _1038.MsgUpdateClientResponse;
                    toJSON(_: _1038.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _1038.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _1038.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpgradeClient;
                    fromJSON(object: any): _1038.MsgUpgradeClient;
                    toJSON(message: _1038.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1038.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _1038.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgUpgradeClientResponse;
                    fromJSON(_: any): _1038.MsgUpgradeClientResponse;
                    toJSON(_: _1038.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _1038.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _1038.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _1038.MsgSubmitMisbehaviour;
                    toJSON(message: _1038.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1038.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _1038.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1038.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _1038.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _1038.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _1038.MsgSubmitMisbehaviourResponse;
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _1038.MsgCreateClient) => {
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
                        }) => _1038.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _1038.MsgUpdateClient) => {
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
                        }) => _1038.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _1038.MsgUpgradeClient) => {
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
                        }) => _1038.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _1038.MsgSubmitMisbehaviour) => {
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
                        }) => _1038.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _1038.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _1038.MsgCreateClient): {
                        typeUrl: string;
                        value: _1038.MsgCreateClient;
                    };
                    updateClient(value: _1038.MsgUpdateClient): {
                        typeUrl: string;
                        value: _1038.MsgUpdateClient;
                    };
                    upgradeClient(value: _1038.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _1038.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _1038.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _1038.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _1036.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStateRequest;
                    fromJSON(object: any): _1036.QueryClientStateRequest;
                    toJSON(message: _1036.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _1036.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _1036.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStateResponse;
                    fromJSON(object: any): _1036.QueryClientStateResponse;
                    toJSON(message: _1036.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _1036.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _1036.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatesRequest;
                    fromJSON(object: any): _1036.QueryClientStatesRequest;
                    toJSON(message: _1036.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1036.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _1036.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatesResponse;
                    fromJSON(object: any): _1036.QueryClientStatesResponse;
                    toJSON(message: _1036.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _1036.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _1036.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStateRequest;
                    fromJSON(object: any): _1036.QueryConsensusStateRequest;
                    toJSON(message: _1036.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _1036.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _1036.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStateResponse;
                    fromJSON(object: any): _1036.QueryConsensusStateResponse;
                    toJSON(message: _1036.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _1036.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _1036.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStatesRequest;
                    fromJSON(object: any): _1036.QueryConsensusStatesRequest;
                    toJSON(message: _1036.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _1036.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _1036.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryConsensusStatesResponse;
                    fromJSON(object: any): _1036.QueryConsensusStatesResponse;
                    toJSON(message: _1036.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _1036.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _1036.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatusRequest;
                    fromJSON(object: any): _1036.QueryClientStatusRequest;
                    toJSON(message: _1036.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _1036.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _1036.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientStatusResponse;
                    fromJSON(object: any): _1036.QueryClientStatusResponse;
                    toJSON(message: _1036.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _1036.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _1036.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientParamsRequest;
                    fromJSON(_: any): _1036.QueryClientParamsRequest;
                    toJSON(_: _1036.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _1036.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _1036.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryClientParamsResponse;
                    fromJSON(object: any): _1036.QueryClientParamsResponse;
                    toJSON(message: _1036.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _1036.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _1036.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _1036.QueryUpgradedClientStateRequest;
                    toJSON(_: _1036.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _1036.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _1036.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _1036.QueryUpgradedClientStateResponse;
                    toJSON(message: _1036.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _1036.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _1036.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _1036.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _1036.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _1036.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _1036.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _1036.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _1036.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _1036.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _1034.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.GenesisState;
                    fromJSON(object: any): _1034.GenesisState;
                    toJSON(message: _1034.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _1034.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _1034.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.GenesisMetadata;
                    fromJSON(object: any): _1034.GenesisMetadata;
                    toJSON(message: _1034.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _1034.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _1034.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _1034.IdentifiedGenesisMetadata;
                    toJSON(message: _1034.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _1034.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _1032.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.IdentifiedClientState;
                    fromJSON(object: any): _1032.IdentifiedClientState;
                    toJSON(message: _1032.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _1032.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _1032.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ConsensusStateWithHeight;
                    fromJSON(object: any): _1032.ConsensusStateWithHeight;
                    toJSON(message: _1032.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _1032.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _1032.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ClientConsensusStates;
                    fromJSON(object: any): _1032.ClientConsensusStates;
                    toJSON(message: _1032.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _1032.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _1032.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.ClientUpdateProposal;
                    fromJSON(object: any): _1032.ClientUpdateProposal;
                    toJSON(message: _1032.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _1032.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _1032.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.UpgradeProposal;
                    fromJSON(object: any): _1032.UpgradeProposal;
                    toJSON(message: _1032.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _1032.UpgradeProposal;
                };
                Height: {
                    encode(message: _1032.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Height;
                    fromJSON(object: any): _1032.Height;
                    toJSON(message: _1032.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _1032.Height;
                };
                Params: {
                    encode(message: _1032.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Params;
                    fromJSON(object: any): _1032.Params;
                    toJSON(message: _1032.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _1032.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _1046.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerkleRoot;
                    fromJSON(object: any): _1046.MerkleRoot;
                    toJSON(message: _1046.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _1046.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _1046.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerklePrefix;
                    fromJSON(object: any): _1046.MerklePrefix;
                    toJSON(message: _1046.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1046.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _1046.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerklePath;
                    fromJSON(object: any): _1046.MerklePath;
                    toJSON(message: _1046.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1046.MerklePath;
                };
                MerkleProof: {
                    encode(message: _1046.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.MerkleProof;
                    fromJSON(object: any): _1046.MerkleProof;
                    toJSON(message: _1046.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1046.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _1054.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenInit;
                    fromJSON(object: any): _1054.MsgConnectionOpenInit;
                    toJSON(message: _1054.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _1054.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _1054.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenInitResponse;
                    toJSON(_: _1054.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _1054.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _1054.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenTry;
                    fromJSON(object: any): _1054.MsgConnectionOpenTry;
                    toJSON(message: _1054.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1054.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _1054.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenTryResponse;
                    toJSON(_: _1054.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _1054.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _1054.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenAck;
                    fromJSON(object: any): _1054.MsgConnectionOpenAck;
                    toJSON(message: _1054.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1054.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _1054.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenAckResponse;
                    toJSON(_: _1054.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _1054.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _1054.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _1054.MsgConnectionOpenConfirm;
                    toJSON(message: _1054.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1054.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _1054.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _1054.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _1054.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _1054.MsgConnectionOpenConfirmResponse;
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _1054.MsgConnectionOpenInit) => {
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
                        }) => _1054.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _1054.MsgConnectionOpenTry) => {
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
                        }) => _1054.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _1054.MsgConnectionOpenAck) => {
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
                        }) => _1054.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _1054.MsgConnectionOpenConfirm) => {
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
                        }) => _1054.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _1054.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _1054.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _1054.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _1054.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _1054.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _1052.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionRequest;
                    fromJSON(object: any): _1052.QueryConnectionRequest;
                    toJSON(message: _1052.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _1052.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _1052.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionResponse;
                    fromJSON(object: any): _1052.QueryConnectionResponse;
                    toJSON(message: _1052.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _1052.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _1052.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionsRequest;
                    fromJSON(object: any): _1052.QueryConnectionsRequest;
                    toJSON(message: _1052.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1052.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _1052.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionsResponse;
                    fromJSON(object: any): _1052.QueryConnectionsResponse;
                    toJSON(message: _1052.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _1052.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _1052.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryClientConnectionsRequest;
                    fromJSON(object: any): _1052.QueryClientConnectionsRequest;
                    toJSON(message: _1052.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _1052.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _1052.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryClientConnectionsResponse;
                    fromJSON(object: any): _1052.QueryClientConnectionsResponse;
                    toJSON(message: _1052.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _1052.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _1052.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _1052.QueryConnectionClientStateRequest;
                    toJSON(message: _1052.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _1052.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _1052.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _1052.QueryConnectionClientStateResponse;
                    toJSON(message: _1052.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _1052.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _1052.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _1052.QueryConnectionConsensusStateRequest;
                    toJSON(message: _1052.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _1052.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _1052.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _1052.QueryConnectionConsensusStateResponse;
                    toJSON(message: _1052.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _1052.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _1050.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.GenesisState;
                    fromJSON(object: any): _1050.GenesisState;
                    toJSON(message: _1050.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _1050.GenesisState;
                };
                stateFromJSON(object: any): _1048.State;
                stateToJSON(object: _1048.State): string;
                State: typeof _1048.State;
                ConnectionEnd: {
                    encode(message: _1048.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ConnectionEnd;
                    fromJSON(object: any): _1048.ConnectionEnd;
                    toJSON(message: _1048.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _1048.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _1048.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.IdentifiedConnection;
                    fromJSON(object: any): _1048.IdentifiedConnection;
                    toJSON(message: _1048.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _1048.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _1048.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Counterparty;
                    fromJSON(object: any): _1048.Counterparty;
                    toJSON(message: _1048.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _1048.Counterparty;
                };
                ClientPaths: {
                    encode(message: _1048.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ClientPaths;
                    fromJSON(object: any): _1048.ClientPaths;
                    toJSON(message: _1048.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _1048.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _1048.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.ConnectionPaths;
                    fromJSON(object: any): _1048.ConnectionPaths;
                    toJSON(message: _1048.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _1048.ConnectionPaths;
                };
                Version: {
                    encode(message: _1048.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Version;
                    fromJSON(object: any): _1048.Version;
                    toJSON(message: _1048.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _1048.Version;
                };
                Params: {
                    encode(message: _1048.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.Params;
                    fromJSON(object: any): _1048.Params;
                    toJSON(message: _1048.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _1048.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _1062.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1062.QueryAppVersionRequest;
                    fromJSON(object: any): _1062.QueryAppVersionRequest;
                    toJSON(message: _1062.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _1062.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _1062.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1062.QueryAppVersionResponse;
                    fromJSON(object: any): _1062.QueryAppVersionResponse;
                    toJSON(message: _1062.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1062.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _1064.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1064.GenesisState;
                    fromJSON(object: any): _1064.GenesisState;
                    toJSON(message: _1064.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _1064.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _1066.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.ClientState;
                    fromJSON(object: any): _1066.ClientState;
                    toJSON(message: _1066.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _1066.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _1068.DataType;
                dataTypeToJSON(object: _1068.DataType): string;
                DataType: typeof _1068.DataType;
                ClientState: {
                    encode(message: _1068.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ClientState;
                    fromJSON(object: any): _1068.ClientState;
                    toJSON(message: _1068.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _1068.ClientState;
                };
                ConsensusState: {
                    encode(message: _1068.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConsensusState;
                    fromJSON(object: any): _1068.ConsensusState;
                    toJSON(message: _1068.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1068.ConsensusState;
                };
                Header: {
                    encode(message: _1068.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.Header;
                    fromJSON(object: any): _1068.Header;
                    toJSON(message: _1068.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1068.Header;
                };
                Misbehaviour: {
                    encode(message: _1068.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.Misbehaviour;
                    fromJSON(object: any): _1068.Misbehaviour;
                    toJSON(message: _1068.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1068.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _1068.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.SignatureAndData;
                    fromJSON(object: any): _1068.SignatureAndData;
                    toJSON(message: _1068.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1068.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _1068.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.TimestampedSignatureData;
                    fromJSON(object: any): _1068.TimestampedSignatureData;
                    toJSON(message: _1068.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _1068.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _1068.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.SignBytes;
                    fromJSON(object: any): _1068.SignBytes;
                    toJSON(message: _1068.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1068.SignBytes;
                };
                HeaderData: {
                    encode(message: _1068.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.HeaderData;
                    fromJSON(object: any): _1068.HeaderData;
                    toJSON(message: _1068.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _1068.HeaderData;
                };
                ClientStateData: {
                    encode(message: _1068.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ClientStateData;
                    fromJSON(object: any): _1068.ClientStateData;
                    toJSON(message: _1068.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _1068.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _1068.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConsensusStateData;
                    fromJSON(object: any): _1068.ConsensusStateData;
                    toJSON(message: _1068.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _1068.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _1068.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ConnectionStateData;
                    fromJSON(object: any): _1068.ConnectionStateData;
                    toJSON(message: _1068.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1068.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _1068.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ChannelStateData;
                    fromJSON(object: any): _1068.ChannelStateData;
                    toJSON(message: _1068.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _1068.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _1068.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketCommitmentData;
                    fromJSON(object: any): _1068.PacketCommitmentData;
                    toJSON(message: _1068.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _1068.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _1068.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketAcknowledgementData;
                    fromJSON(object: any): _1068.PacketAcknowledgementData;
                    toJSON(message: _1068.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _1068.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _1068.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.PacketReceiptAbsenceData;
                    fromJSON(object: any): _1068.PacketReceiptAbsenceData;
                    toJSON(message: _1068.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _1068.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _1068.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.NextSequenceRecvData;
                    fromJSON(object: any): _1068.NextSequenceRecvData;
                    toJSON(message: _1068.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _1068.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _1070.DataType;
                dataTypeToJSON(object: _1070.DataType): string;
                DataType: typeof _1070.DataType;
                ClientState: {
                    encode(message: _1070.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ClientState;
                    fromJSON(object: any): _1070.ClientState;
                    toJSON(message: _1070.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _1070.ClientState;
                };
                ConsensusState: {
                    encode(message: _1070.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConsensusState;
                    fromJSON(object: any): _1070.ConsensusState;
                    toJSON(message: _1070.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1070.ConsensusState;
                };
                Header: {
                    encode(message: _1070.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.Header;
                    fromJSON(object: any): _1070.Header;
                    toJSON(message: _1070.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1070.Header;
                };
                Misbehaviour: {
                    encode(message: _1070.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.Misbehaviour;
                    fromJSON(object: any): _1070.Misbehaviour;
                    toJSON(message: _1070.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1070.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _1070.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.SignatureAndData;
                    fromJSON(object: any): _1070.SignatureAndData;
                    toJSON(message: _1070.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1070.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _1070.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.TimestampedSignatureData;
                    fromJSON(object: any): _1070.TimestampedSignatureData;
                    toJSON(message: _1070.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _1070.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _1070.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.SignBytes;
                    fromJSON(object: any): _1070.SignBytes;
                    toJSON(message: _1070.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _1070.SignBytes;
                };
                HeaderData: {
                    encode(message: _1070.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.HeaderData;
                    fromJSON(object: any): _1070.HeaderData;
                    toJSON(message: _1070.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _1070.HeaderData;
                };
                ClientStateData: {
                    encode(message: _1070.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ClientStateData;
                    fromJSON(object: any): _1070.ClientStateData;
                    toJSON(message: _1070.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _1070.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _1070.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConsensusStateData;
                    fromJSON(object: any): _1070.ConsensusStateData;
                    toJSON(message: _1070.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _1070.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _1070.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ConnectionStateData;
                    fromJSON(object: any): _1070.ConnectionStateData;
                    toJSON(message: _1070.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _1070.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _1070.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.ChannelStateData;
                    fromJSON(object: any): _1070.ChannelStateData;
                    toJSON(message: _1070.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _1070.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _1070.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketCommitmentData;
                    fromJSON(object: any): _1070.PacketCommitmentData;
                    toJSON(message: _1070.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _1070.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _1070.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketAcknowledgementData;
                    fromJSON(object: any): _1070.PacketAcknowledgementData;
                    toJSON(message: _1070.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _1070.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _1070.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.PacketReceiptAbsenceData;
                    fromJSON(object: any): _1070.PacketReceiptAbsenceData;
                    toJSON(message: _1070.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _1070.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _1070.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1070.NextSequenceRecvData;
                    fromJSON(object: any): _1070.NextSequenceRecvData;
                    toJSON(message: _1070.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _1070.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _1072.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.ClientState;
                    fromJSON(object: any): _1072.ClientState;
                    toJSON(message: _1072.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _1072.ClientState;
                };
                ConsensusState: {
                    encode(message: _1072.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.ConsensusState;
                    fromJSON(object: any): _1072.ConsensusState;
                    toJSON(message: _1072.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1072.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _1072.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Misbehaviour;
                    fromJSON(object: any): _1072.Misbehaviour;
                    toJSON(message: _1072.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1072.Misbehaviour;
                };
                Header: {
                    encode(message: _1072.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Header;
                    fromJSON(object: any): _1072.Header;
                    toJSON(message: _1072.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1072.Header;
                };
                Fraction: {
                    encode(message: _1072.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1072.Fraction;
                    fromJSON(object: any): _1072.Fraction;
                    toJSON(message: _1072.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1072.Fraction;
                };
            };
        }
    }
}
